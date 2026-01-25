import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchProducts, Product } from "@/data/products";

interface SearchAutocompleteProps {
  className?: string;
  placeholder?: string;
  onClose?: () => void;
}

const SearchAutocomplete = ({ className = "", placeholder = "Search for gifts...", onClose }: SearchAutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim().length >= 2) {
      const searchResults = searchProducts(searchQuery).slice(0, 6);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          navigate(`/product/${results[selectedIndex].id}`);
          closeSearch();
        } else if (query.trim()) {
          navigate(`/products?search=${encodeURIComponent(query)}`);
          closeSearch();
        }
        break;
      case "Escape":
        closeSearch();
        break;
    }
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    setSelectedIndex(-1);
    onClose?.();
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current && 
      !dropdownRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          className="pr-10 rounded-full border-2 border-border focus:border-primary bg-muted/30"
        />
        {query ? (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
            onClick={closeSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
          >
            <Search className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-xl shadow-lg z-50 overflow-hidden"
        >
          <div className="p-2 border-b bg-muted/30">
            <p className="text-xs text-muted-foreground">
              {results.length} results for "{query}"
            </p>
          </div>
          <div className="max-h-[360px] overflow-y-auto">
            {results.map((product, index) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={closeSearch}
                className={`flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors ${
                  selectedIndex === index ? "bg-muted" : ""
                }`}
              >
                <div className="w-14 h-14 bg-muted rounded-lg shrink-0 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary font-medium">{product.category}</p>
                  <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-primary">
                      ৳{product.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {query.trim() && (
            <Link
              to={`/products?search=${encodeURIComponent(query)}`}
              onClick={closeSearch}
              className="block p-3 text-center text-sm font-medium text-primary hover:bg-muted/50 border-t"
            >
              View all results for "{query}"
            </Link>
          )}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-xl shadow-lg z-50 p-6 text-center"
        >
          <p className="text-muted-foreground">No products found for "{query}"</p>
          <Link
            to="/products"
            onClick={closeSearch}
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            Browse all products
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;
