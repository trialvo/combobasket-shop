import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star, Grid3X3, List, SlidersHorizontal, X, ShoppingCart, ChevronDown } from "lucide-react";
import { products, categories, getCategoryBySlug, getSubcategoryBySlug, Category, SubCategory } from "@/data/products";
import { useCart } from "@/context/CartContext";


const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const { addToCart } = useCart();

  const categoryFromUrl = searchParams.get("category");
  const subcategoryFromUrl = searchParams.get("subcategory");
  const searchQuery = searchParams.get("search");

  // Initialize from URL params
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
      setExpandedCategories([categoryFromUrl]);
    }
    if (subcategoryFromUrl) {
      const subcat = getSubcategoryBySlug(subcategoryFromUrl);
      if (subcat) {
        setSelectedSubcategories([subcategoryFromUrl]);
        setExpandedCategories([subcat.parentSlug]);
      }
    }
  }, [categoryFromUrl, subcategoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory?.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Filter by subcategory first (more specific)
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(p => p.subcategorySlug && selectedSubcategories.includes(p.subcategorySlug));
    } else if (selectedCategories.length > 0) {
      // Filter by category if no subcategory selected
      filtered = filtered.filter(p => selectedCategories.includes(p.categorySlug));
    } else if (subcategoryFromUrl) {
      filtered = filtered.filter(p => p.subcategorySlug === subcategoryFromUrl);
    } else if (categoryFromUrl) {
      filtered = filtered.filter(p => p.categorySlug === categoryFromUrl);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by rating
    if (selectedRatings.length > 0) {
      const minRating = Math.min(...selectedRatings);
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Filter by stock
    if (inStockOnly) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, selectedSubcategories, categoryFromUrl, subcategoryFromUrl, searchQuery, priceRange, selectedRatings, inStockOnly, sortBy]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(slug) 
        ? prev.filter(c => c !== slug)
        : [...prev, slug];
      
      // Clear URL params when manually selecting
      if (categoryFromUrl || subcategoryFromUrl) {
        setSearchParams({});
      }
      
      return newCategories;
    });
    // Also clear subcategories for this category
    const category = getCategoryBySlug(slug);
    if (category) {
      setSelectedSubcategories(prev => 
        prev.filter(s => !category.subcategories.some(sub => sub.slug === s))
      );
    }
  };

  const toggleSubcategory = (slug: string, parentSlug: string) => {
    setSelectedSubcategories(prev => {
      if (prev.includes(slug)) {
        return prev.filter(s => s !== slug);
      }
      return [...prev, slug];
    });
    
    // Clear URL params when manually selecting
    if (categoryFromUrl || subcategoryFromUrl) {
      setSearchParams({});
    }
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const toggleExpandCategory = (slug: string) => {
    setExpandedCategories(prev => 
      prev.includes(slug) ? prev.filter(c => c !== slug) : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedRatings([]);
    setPriceRange([0, 10000]);
    setInStockOnly(false);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedSubcategories.length > 0 || 
    selectedRatings.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000 || inStockOnly;

  // Page title
  const getPageTitle = () => {
    if (searchQuery) return `Search: ${searchQuery}`;
    if (subcategoryFromUrl) {
      const subcat = getSubcategoryBySlug(subcategoryFromUrl);
      return subcat?.name || "Products";
    }
    if (categoryFromUrl) {
      const category = getCategoryBySlug(categoryFromUrl);
      return category ? `${category.name} Gifts` : "Products";
    }
    return "All Gifts";
  };

  const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`space-y-6 ${isMobile ? '' : 'sticky top-24'}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        )}
      </div>
      
      {/* Categories with Subcategories - Hover to expand */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group"
              onMouseEnter={() => setExpandedCategories(prev => [...prev.filter(c => c !== category.slug), category.slug])}
              onMouseLeave={() => setExpandedCategories(prev => prev.filter(c => c !== category.slug))}
            >
              <div className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-muted/50 transition-colors">
                <Checkbox 
                  id={`cat-${category.slug}`}
                  checked={selectedCategories.includes(category.slug)}
                  onCheckedChange={() => toggleCategory(category.slug)}
                />
                <label 
                  htmlFor={`cat-${category.slug}`}
                  className="text-sm cursor-pointer hover:text-primary flex-1 flex items-center justify-between"
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-muted-foreground">({category.productCount})</span>
                </label>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedCategories.includes(category.slug) ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Subcategories - shown on hover */}
              <div className={`overflow-hidden transition-all duration-200 ${expandedCategories.includes(category.slug) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 py-2 space-y-1 bg-muted/30 rounded-md ml-2 mr-1">
                  {category.subcategories.map((sub) => (
                    <label key={sub.id} className="flex items-center gap-2 cursor-pointer py-1.5 px-2 rounded hover:bg-muted/50 transition-colors">
                      <Checkbox 
                        checked={selectedSubcategories.includes(sub.slug)}
                        onCheckedChange={() => toggleSubcategory(sub.slug, category.slug)}
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground flex-1">
                        {sub.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({sub.productCount})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          max={10000}
          min={0}
          step={100}
          className="mb-4"
        />
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">৳{priceRange[0].toLocaleString()}</span>
          <span className="text-muted-foreground">-</span>
          <span className="text-muted-foreground">৳{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-foreground mb-4">Rating</h3>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <Checkbox 
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => toggleRating(rating)}
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-foreground mb-4">Availability</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox 
            checked={inStockOnly}
            onCheckedChange={(checked) => setInStockOnly(checked === true)}
          />
          <span className="text-sm text-muted-foreground">In Stock Only</span>
        </label>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{getPageTitle()} - UpoharShop | Premium Gifts in Bangladesh</title>
        <meta name="description" content={`Browse ${getPageTitle().toLowerCase()} at UpoharShop. Find perfect gifts for every occasion with same-day delivery in Dhaka.`} />
        <meta name="keywords" content="gifts, flowers, cakes, birthday gifts, anniversary gifts, corporate gifts, Bangladesh" />
        <link rel="canonical" href={`https://upoharshop.com/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Page Header */}
          <section className="bg-muted/50 py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-foreground">{getPageTitle()}</h1>
              <p className="text-muted-foreground mt-2">Find the perfect gift for every occasion</p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="w-64 shrink-0 hidden lg:block" aria-label="Product filters">
                <FilterSidebar />
              </aside>

              {/* Mobile Filter Button */}
              <div className="lg:hidden fixed bottom-20 left-4 z-40">
                <Button 
                  onClick={() => setShowFilters(true)}
                  className="bg-primary shadow-lg"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-1 bg-primary-foreground text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      !
                    </span>
                  )}
                </Button>
              </div>

              {/* Mobile Filter Overlay */}
              {showFilters && (
                <div className="lg:hidden fixed inset-0 z-50 bg-background">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-semibold">Filters</h2>
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="p-4 overflow-auto h-[calc(100vh-140px)]">
                    <FilterSidebar isMobile />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                    <Button className="w-full" onClick={() => setShowFilters(false)}>
                      Show {filteredProducts.length} Products
                    </Button>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                  </p>
                  <div className="flex items-center gap-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-44">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Best Rating</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="hidden sm:flex items-center gap-1 border rounded-lg p-1">
                      <Button 
                        variant={viewMode === "grid" ? "secondary" : "ghost"} 
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("grid")}
                        aria-label="Grid view"
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant={viewMode === "list" ? "secondary" : "ghost"} 
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("list")}
                        aria-label="List view"
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products */}
                <div 
                  className={viewMode === "grid" 
                    ? "grid grid-cols-2 md:grid-cols-3 gap-6" 
                    : "space-y-4"
                  }
                  role="list"
                  aria-label="Products"
                >
                  {filteredProducts.map((product) => (
                    <article
                      key={product.id}
                      role="listitem"
                      className={viewMode === "grid" ? "" : ""}
                    >
                      <Link 
                        to={`/product/${product.id}`}
                        className={viewMode === "grid" 
                          ? "group block" 
                          : "group flex gap-4 bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        }
                      >
                        {viewMode === "grid" ? (
                          <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square bg-muted relative overflow-hidden">
                              <img 
                                src={product.images[0]} 
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {product.originalPrice && product.originalPrice > product.price && (
                                <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
                                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                </span>
                              )}
                              {product.badge && (
                                <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            <div className="p-4">
                              <p className="text-xs text-primary font-medium mb-1">{product.subcategory || product.category}</p>
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[48px]">
                                {product.name}
                              </h3>
                              <div className="flex items-center gap-1 mt-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-sm text-muted-foreground">({product.reviews})</span>
                              </div>
                              <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-lg font-bold text-primary">৳{product.price.toLocaleString()}</span>
                                {product.originalPrice && product.originalPrice > product.price && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ৳{product.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-32 h-32 bg-muted rounded-lg shrink-0 overflow-hidden">
                              <img 
                                src={product.images[0]} 
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-primary font-medium mb-1">{product.subcategory || product.category}</p>
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                              <div className="flex items-center gap-1 mt-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                              </div>
                              <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-xl font-bold text-primary">৳{product.price.toLocaleString()}</span>
                                {product.originalPrice && product.originalPrice > product.price && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ৳{product.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="hidden sm:flex flex-col justify-center gap-2">
                              <Button 
                                className="bg-primary hover:bg-primary/90"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToCart(product);
                                }}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </>
                        )}
                      </Link>
                    </article>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}

                {/* Pagination placeholder */}
                {filteredProducts.length > 0 && (
                  <nav className="flex justify-center gap-2 mt-8" aria-label="Pagination">
                    <Button variant="outline" disabled>Previous</Button>
                    <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Products;
