export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parentSlug: string;
  productCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  productCount: number;
  subcategories: SubCategory[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  subcategorySlug?: string;
  description: string;
  features: string[];
  images: string[];
  inStock: boolean;
  sku: string;
}

export const categories: Category[] = [
  { 
    id: "1", 
    name: "Socks, Gloves & Caps", 
    slug: "winter-combo", 
    icon: "HandMetal", 
    color: "bg-blue-100 text-blue-600", 
    productCount: 28,
    subcategories: [
      { id: "1-1", name: "Socks Combo", slug: "socks-combo", parentSlug: "winter-combo", productCount: 10 },
      { id: "1-2", name: "Gloves Combo", slug: "gloves-combo", parentSlug: "winter-combo", productCount: 8 },
      { id: "1-3", name: "Winter Caps", slug: "winter-caps", parentSlug: "winter-combo", productCount: 6 },
      { id: "1-4", name: "Full Winter Set", slug: "full-winter-set", parentSlug: "winter-combo", productCount: 4 },
    ]
  },
  { 
    id: "2", 
    name: "Makeup Combo", 
    slug: "makeup-combo", 
    icon: "Sparkles", 
    color: "bg-pink-100 text-pink-600", 
    productCount: 24,
    subcategories: [
      { id: "2-1", name: "Lipstick Combo", slug: "lipstick-combo", parentSlug: "makeup-combo", productCount: 8 },
      { id: "2-2", name: "Foundation Set", slug: "foundation-set", parentSlug: "makeup-combo", productCount: 6 },
      { id: "2-3", name: "Eye Makeup Combo", slug: "eye-makeup-combo", parentSlug: "makeup-combo", productCount: 5 },
      { id: "2-4", name: "Complete Makeup Kit", slug: "complete-makeup-kit", parentSlug: "makeup-combo", productCount: 5 },
    ]
  },
  { 
    id: "3", 
    name: "Daily Essentials", 
    slug: "daily-essentials", 
    icon: "Package", 
    color: "bg-green-100 text-green-600", 
    productCount: 32,
    subcategories: [
      { id: "3-1", name: "Kitchen Combo", slug: "kitchen-combo", parentSlug: "daily-essentials", productCount: 10 },
      { id: "3-2", name: "Bathroom Essentials", slug: "bathroom-essentials", parentSlug: "daily-essentials", productCount: 8 },
      { id: "3-3", name: "Cleaning Combo", slug: "cleaning-combo", parentSlug: "daily-essentials", productCount: 7 },
      { id: "3-4", name: "Home Combo Pack", slug: "home-combo-pack", parentSlug: "daily-essentials", productCount: 7 },
    ]
  },
  { 
    id: "4", 
    name: "Fashion Accessories", 
    slug: "fashion-accessories", 
    icon: "Sun", 
    color: "bg-purple-100 text-purple-600", 
    productCount: 20,
    subcategories: [
      { id: "4-1", name: "Sunglasses Combo", slug: "sunglasses-combo", parentSlug: "fashion-accessories", productCount: 6 },
      { id: "4-2", name: "Belt & Wallet Combo", slug: "belt-wallet-combo", parentSlug: "fashion-accessories", productCount: 5 },
      { id: "4-3", name: "Watch & Accessories", slug: "watch-accessories", parentSlug: "fashion-accessories", productCount: 5 },
      { id: "4-4", name: "Jewelry Combo", slug: "jewelry-combo", parentSlug: "fashion-accessories", productCount: 4 },
    ]
  },
  { 
    id: "5", 
    name: "Family Combo", 
    slug: "family-combo", 
    icon: "Users", 
    color: "bg-orange-100 text-orange-600", 
    productCount: 18,
    subcategories: [
      { id: "5-1", name: "Family Pack", slug: "family-pack", parentSlug: "family-combo", productCount: 6 },
      { id: "5-2", name: "Kids Combo", slug: "kids-combo", parentSlug: "family-combo", productCount: 5 },
      { id: "5-3", name: "Couple Combo", slug: "couple-combo", parentSlug: "family-combo", productCount: 4 },
      { id: "5-4", name: "Elders Combo", slug: "elders-combo", parentSlug: "family-combo", productCount: 3 },
    ]
  },
  { 
    id: "6", 
    name: "Men's Combo", 
    slug: "mens-combo", 
    icon: "Shirt", 
    color: "bg-slate-100 text-slate-600", 
    productCount: 22,
    subcategories: [
      { id: "6-1", name: "Men's Innerwear", slug: "mens-innerwear", parentSlug: "mens-combo", productCount: 7 },
      { id: "6-2", name: "Men's Socks", slug: "mens-socks", parentSlug: "mens-combo", productCount: 6 },
      { id: "6-3", name: "Men's Accessories", slug: "mens-accessories", parentSlug: "mens-combo", productCount: 5 },
      { id: "6-4", name: "Grooming Combo", slug: "grooming-combo", parentSlug: "mens-combo", productCount: 4 },
    ]
  },
  { 
    id: "7", 
    name: "Women's Combo", 
    slug: "womens-combo", 
    icon: "Heart", 
    color: "bg-rose-100 text-rose-600", 
    productCount: 26,
    subcategories: [
      { id: "7-1", name: "Women's Innerwear", slug: "womens-innerwear", parentSlug: "womens-combo", productCount: 8 },
      { id: "7-2", name: "Women's Socks", slug: "womens-socks", parentSlug: "womens-combo", productCount: 6 },
      { id: "7-3", name: "Skincare Combo", slug: "skincare-combo", parentSlug: "womens-combo", productCount: 7 },
      { id: "7-4", name: "Hair Care Combo", slug: "haircare-combo", parentSlug: "womens-combo", productCount: 5 },
    ]
  },
  { 
    id: "8", 
    name: "Sports & Fitness", 
    slug: "sports-fitness", 
    icon: "Footprints", 
    color: "bg-teal-100 text-teal-600", 
    productCount: 16,
    subcategories: [
      { id: "8-1", name: "Sports Socks", slug: "sports-socks", parentSlug: "sports-fitness", productCount: 5 },
      { id: "8-2", name: "Gym Accessories", slug: "gym-accessories", parentSlug: "sports-fitness", productCount: 4 },
      { id: "8-3", name: "Sports Combo", slug: "sports-combo", parentSlug: "sports-fitness", productCount: 4 },
      { id: "8-4", name: "Fitness Kit", slug: "fitness-kit", parentSlug: "sports-fitness", productCount: 3 },
    ]
  },
];

export const products: Product[] = [
  // Winter Combo Products
  {
    id: 1,
    name: "Premium Winter Socks Combo - 6 Pairs",
    price: 450,
    originalPrice: 600,
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
    category: "Socks, Gloves & Caps",
    categorySlug: "winter-combo",
    subcategory: "Socks Combo",
    subcategorySlug: "socks-combo",
    description: "Stay warm this winter with our premium quality socks combo pack. Made from soft cotton blend fabric, these socks provide excellent warmth and comfort for daily wear.",
    features: ["6 Pairs Included", "Soft Cotton Blend", "Anti-Slip Design", "Machine Washable", "One Size Fits All"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-SOCK-001"
  },
  {
    id: 2,
    name: "Warm Winter Gloves - 3 Pairs Combo",
    price: 380,
    originalPrice: 500,
    rating: 4.6,
    reviews: 189,
    badge: "Hot Deal",
    category: "Socks, Gloves & Caps",
    categorySlug: "winter-combo",
    subcategory: "Gloves Combo",
    subcategorySlug: "gloves-combo",
    description: "Keep your hands warm with these premium winter gloves. Touch screen compatible and made from high-quality thermal material for maximum warmth.",
    features: ["3 Pairs Pack", "Touch Screen Compatible", "Thermal Material", "Windproof", "Unisex Design"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-GLOV-001"
  },
  {
    id: 3,
    name: "Stylish Winter Cap Collection - 4 Pcs",
    price: 520,
    originalPrice: 700,
    rating: 4.7,
    reviews: 156,
    category: "Socks, Gloves & Caps",
    categorySlug: "winter-combo",
    subcategory: "Winter Caps",
    subcategorySlug: "winter-caps",
    description: "Fashionable and warm winter caps combo. Perfect for outdoor activities and daily use during cold weather.",
    features: ["4 Caps Included", "Warm Fleece Lining", "Stretchable Fit", "Multiple Colors", "Unisex"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-CAP-001"
  },
  {
    id: 4,
    name: "Complete Winter Set - Socks, Gloves & Cap",
    price: 850,
    originalPrice: 1200,
    rating: 4.9,
    reviews: 312,
    badge: "Value Pack",
    category: "Socks, Gloves & Caps",
    categorySlug: "winter-combo",
    subcategory: "Full Winter Set",
    subcategorySlug: "full-winter-set",
    description: "Everything you need for winter in one combo! Includes premium socks, warm gloves, and stylish cap - all at an unbeatable price.",
    features: ["Complete Winter Kit", "Premium Quality", "Gift Box Packaging", "Matching Colors", "Save 30%"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-FULL-001"
  },
  
  // Makeup Combo Products
  {
    id: 5,
    name: "Lipstick Combo Pack - 6 Shades",
    price: 680,
    originalPrice: 900,
    rating: 4.7,
    reviews: 287,
    badge: "Popular",
    category: "Makeup Combo",
    categorySlug: "makeup-combo",
    subcategory: "Lipstick Combo",
    subcategorySlug: "lipstick-combo",
    description: "Stunning collection of 6 long-lasting lipsticks in trendy shades. Perfect for every occasion from daily wear to parties.",
    features: ["6 Beautiful Shades", "Long Lasting Formula", "Matte Finish", "Moisturizing", "Cruelty Free"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MK-LIP-001"
  },
  {
    id: 6,
    name: "Professional Foundation Set - 5 Shades",
    price: 750,
    originalPrice: 1000,
    rating: 4.5,
    reviews: 198,
    category: "Makeup Combo",
    categorySlug: "makeup-combo",
    subcategory: "Foundation Set",
    subcategorySlug: "foundation-set",
    description: "Professional grade foundation set with multiple shades for flawless coverage. Suitable for all skin types.",
    features: ["5 Shade Options", "Full Coverage", "12-Hour Wear", "SPF 15 Protection", "Oil-Free Formula"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MK-FND-001"
  },
  {
    id: 7,
    name: "Eye Makeup Essential Kit",
    price: 890,
    originalPrice: 1200,
    rating: 4.8,
    reviews: 245,
    badge: "Best Seller",
    category: "Makeup Combo",
    categorySlug: "makeup-combo",
    subcategory: "Eye Makeup Combo",
    subcategorySlug: "eye-makeup-combo",
    description: "Complete eye makeup kit including eyeshadow palette, mascara, eyeliner, and eye primer. Everything for stunning eyes!",
    features: ["12 Eyeshadow Colors", "Volumizing Mascara", "Waterproof Eyeliner", "Eye Primer Included", "Brush Set"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MK-EYE-001"
  },
  {
    id: 8,
    name: "Complete Makeup Kit - 15 Pcs",
    price: 1450,
    originalPrice: 2000,
    rating: 4.9,
    reviews: 356,
    badge: "Value Pack",
    category: "Makeup Combo",
    categorySlug: "makeup-combo",
    subcategory: "Complete Makeup Kit",
    subcategorySlug: "complete-makeup-kit",
    description: "Ultimate makeup collection with everything you need. From foundation to lipstick, this complete kit has it all!",
    features: ["15 Products", "Full Face Makeup", "Brushes Included", "Makeup Bag", "Gift Ready"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MK-FULL-001"
  },
  
  // Daily Essentials Products
  {
    id: 9,
    name: "Kitchen Essentials Combo - 12 Pcs",
    price: 950,
    originalPrice: 1300,
    rating: 4.6,
    reviews: 178,
    badge: "Top Rated",
    category: "Daily Essentials",
    categorySlug: "daily-essentials",
    subcategory: "Kitchen Combo",
    subcategorySlug: "kitchen-combo",
    description: "Complete kitchen essentials pack with all the tools you need for daily cooking. High-quality and durable items.",
    features: ["12 Kitchen Items", "BPA Free", "Heat Resistant", "Easy to Clean", "Modern Design"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "DE-KITCH-001"
  },
  {
    id: 10,
    name: "Bathroom Essentials Set - 8 Items",
    price: 680,
    originalPrice: 900,
    rating: 4.5,
    reviews: 145,
    category: "Daily Essentials",
    categorySlug: "daily-essentials",
    subcategory: "Bathroom Essentials",
    subcategorySlug: "bathroom-essentials",
    description: "Essential bathroom items combo including soap dispensers, toothbrush holders, and more. Stylish and functional.",
    features: ["8 Essential Items", "Anti-Slip Base", "Easy Installation", "Waterproof", "Matching Set"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "DE-BATH-001"
  },
  {
    id: 11,
    name: "Home Cleaning Combo Pack",
    price: 520,
    originalPrice: 700,
    rating: 4.4,
    reviews: 123,
    category: "Daily Essentials",
    categorySlug: "daily-essentials",
    subcategory: "Cleaning Combo",
    subcategorySlug: "cleaning-combo",
    description: "Everything you need for a spotless home. Quality cleaning supplies at combo discount prices.",
    features: ["10 Cleaning Items", "Eco-Friendly", "Multi-Surface", "Value Pack", "Long Lasting"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "DE-CLEAN-001"
  },
  {
    id: 12,
    name: "Complete Home Combo - 20 Essentials",
    price: 1650,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 234,
    badge: "Best Value",
    category: "Daily Essentials",
    categorySlug: "daily-essentials",
    subcategory: "Home Combo Pack",
    subcategorySlug: "home-combo-pack",
    description: "Ultimate home essentials combo covering kitchen, bathroom, and cleaning needs. Perfect for new homes!",
    features: ["20+ Items", "Home Starter Kit", "Quality Products", "Huge Savings", "Gift Box"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "DE-HOME-001"
  },
  
  // Fashion Accessories Products
  {
    id: 13,
    name: "Trendy Sunglasses Combo - 3 Pairs",
    price: 580,
    originalPrice: 800,
    rating: 4.6,
    reviews: 189,
    badge: "Trending",
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    subcategory: "Sunglasses Combo",
    subcategorySlug: "sunglasses-combo",
    description: "Stay stylish with this trendy sunglasses combo. UV protected lenses with fashionable frames.",
    features: ["3 Stylish Pairs", "UV400 Protection", "Lightweight", "Durable Frame", "Pouch Included"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FA-SUN-001"
  },
  {
    id: 14,
    name: "Premium Belt & Wallet Combo",
    price: 720,
    originalPrice: 950,
    rating: 4.7,
    reviews: 167,
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    subcategory: "Belt & Wallet Combo",
    subcategorySlug: "belt-wallet-combo",
    description: "Elegant leather belt and wallet combo set. Perfect gift for men with premium packaging.",
    features: ["Genuine Leather", "2 Belt Sizes", "RFID Wallet", "Gift Box", "1 Year Warranty"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FA-BW-001"
  },
  {
    id: 15,
    name: "Watch & Accessories Gift Set",
    price: 1250,
    originalPrice: 1700,
    rating: 4.8,
    reviews: 212,
    badge: "Gift Ready",
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    subcategory: "Watch & Accessories",
    subcategorySlug: "watch-accessories",
    description: "Premium watch with matching accessories. Perfect gift set for special occasions.",
    features: ["Analog Watch", "Matching Bracelet", "Cufflinks Set", "Premium Box", "2 Year Warranty"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FA-WATCH-001"
  },
  {
    id: 16,
    name: "Women's Jewelry Combo Set",
    price: 890,
    originalPrice: 1200,
    rating: 4.5,
    reviews: 145,
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    subcategory: "Jewelry Combo",
    subcategorySlug: "jewelry-combo",
    description: "Beautiful jewelry combo set including necklace, earrings, and bracelet. Elegant designs for all occasions.",
    features: ["3 Piece Set", "Hypoallergenic", "Elegant Design", "Gift Pouch", "Adjustable Sizes"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FA-JEW-001"
  },
  
  // Family Combo Products
  {
    id: 17,
    name: "Family Essential Pack - 4 Members",
    price: 1850,
    originalPrice: 2500,
    rating: 4.8,
    reviews: 278,
    badge: "Family Pack",
    category: "Family Combo",
    categorySlug: "family-combo",
    subcategory: "Family Pack",
    subcategorySlug: "family-pack",
    description: "Complete family essentials combo for 4 members. Includes socks, innerwear, and accessories for the whole family.",
    features: ["For 4 Members", "Quality Items", "Mixed Sizes", "Value Bundle", "Gift Ready"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FM-FAM-001"
  },
  {
    id: 18,
    name: "Kids Combo Pack - Fun Collection",
    price: 680,
    originalPrice: 900,
    rating: 4.7,
    reviews: 198,
    badge: "Kids Special",
    category: "Family Combo",
    categorySlug: "family-combo",
    subcategory: "Kids Combo",
    subcategorySlug: "kids-combo",
    description: "Colorful and fun combo pack for kids. Includes cartoon socks, caps, and accessories kids will love!",
    features: ["Cartoon Designs", "Safe Materials", "Vibrant Colors", "Age 4-12", "6 Items"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FM-KIDS-001"
  },
  {
    id: 19,
    name: "Couple Matching Combo Set",
    price: 1150,
    originalPrice: 1500,
    rating: 4.9,
    reviews: 234,
    badge: "Couple Special",
    category: "Family Combo",
    categorySlug: "family-combo",
    subcategory: "Couple Combo",
    subcategorySlug: "couple-combo",
    description: "Adorable matching combo set for couples. Perfect gift for anniversaries, Valentine's Day, or just because!",
    features: ["His & Hers Set", "Matching Design", "Premium Quality", "Gift Wrapped", "8 Items"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FM-COUP-001"
  },
  {
    id: 20,
    name: "Senior Comfort Combo Pack",
    price: 780,
    originalPrice: 1000,
    rating: 4.6,
    reviews: 145,
    category: "Family Combo",
    categorySlug: "family-combo",
    subcategory: "Elders Combo",
    subcategorySlug: "elders-combo",
    description: "Thoughtful combo pack designed for seniors. Comfortable socks, warm wear, and daily essentials.",
    features: ["Senior Friendly", "Soft Materials", "Easy Wear", "Non-Slip Socks", "5 Items"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "FM-ELDER-001"
  },
  
  // Men's Combo Products
  {
    id: 21,
    name: "Men's Innerwear Combo - 6 Pcs",
    price: 650,
    originalPrice: 850,
    rating: 4.5,
    reviews: 289,
    badge: "Best Seller",
    category: "Men's Combo",
    categorySlug: "mens-combo",
    subcategory: "Men's Innerwear",
    subcategorySlug: "mens-innerwear",
    description: "Premium quality men's innerwear combo. Comfortable cotton fabric with excellent durability.",
    features: ["6 Pieces", "100% Cotton", "Multiple Sizes", "Breathable", "Long Lasting"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MC-INN-001"
  },
  {
    id: 22,
    name: "Men's Premium Socks - 8 Pairs",
    price: 480,
    originalPrice: 650,
    rating: 4.7,
    reviews: 312,
    badge: "Top Rated",
    category: "Men's Combo",
    categorySlug: "mens-combo",
    subcategory: "Men's Socks",
    subcategorySlug: "mens-socks",
    description: "Premium cotton socks combo for men. Perfect for formal and casual wear with anti-odor technology.",
    features: ["8 Pairs", "Anti-Odor", "Cushioned Sole", "Business & Casual", "Durable"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MC-SOCK-001"
  },
  {
    id: 23,
    name: "Men's Accessories Essential Kit",
    price: 920,
    originalPrice: 1250,
    rating: 4.6,
    reviews: 178,
    category: "Men's Combo",
    categorySlug: "mens-combo",
    subcategory: "Men's Accessories",
    subcategorySlug: "mens-accessories",
    description: "Complete men's accessories kit including belt, wallet, tie, and cufflinks. Perfect for the modern man.",
    features: ["5 Accessories", "Premium Materials", "Formal Ready", "Gift Box", "Versatile"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MC-ACC-001"
  },
  {
    id: 24,
    name: "Men's Grooming Combo Pack",
    price: 780,
    originalPrice: 1050,
    rating: 4.8,
    reviews: 198,
    badge: "New Arrival",
    category: "Men's Combo",
    categorySlug: "mens-combo",
    subcategory: "Grooming Combo",
    subcategorySlug: "grooming-combo",
    description: "Complete grooming kit for men. Includes face wash, moisturizer, beard oil, and more essentials.",
    features: ["7 Products", "Natural Ingredients", "All Skin Types", "Travel Size", "Gift Ready"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "MC-GROOM-001"
  },
  
  // Women's Combo Products
  {
    id: 25,
    name: "Women's Innerwear Combo - 6 Pcs",
    price: 720,
    originalPrice: 950,
    rating: 4.8,
    reviews: 345,
    badge: "Best Seller",
    category: "Women's Combo",
    categorySlug: "womens-combo",
    subcategory: "Women's Innerwear",
    subcategorySlug: "womens-innerwear",
    description: "Comfortable and stylish women's innerwear combo. Premium cotton with beautiful designs.",
    features: ["6 Pieces", "Soft Cotton", "Various Sizes", "Trendy Designs", "Skin Friendly"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-INN-001"
  },
  {
    id: 26,
    name: "Women's Fashion Socks - 8 Pairs",
    price: 450,
    originalPrice: 600,
    rating: 4.6,
    reviews: 267,
    badge: "Popular",
    category: "Women's Combo",
    categorySlug: "womens-combo",
    subcategory: "Women's Socks",
    subcategorySlug: "womens-socks",
    description: "Cute and fashionable socks combo for women. Various patterns and colors for every outfit.",
    features: ["8 Pairs", "Fun Patterns", "Breathable", "All Seasons", "Gift Box"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-SOCK-001"
  },
  {
    id: 27,
    name: "Complete Skincare Combo - 8 Products",
    price: 1350,
    originalPrice: 1800,
    rating: 4.9,
    reviews: 289,
    badge: "Premium",
    category: "Women's Combo",
    categorySlug: "womens-combo",
    subcategory: "Skincare Combo",
    subcategorySlug: "skincare-combo",
    description: "Complete skincare routine in one combo. Cleanser, toner, serum, moisturizer and more for glowing skin.",
    features: ["8 Products", "Full Routine", "All Skin Types", "Natural Extracts", "Results in 2 Weeks"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-SKIN-001"
  },
  {
    id: 28,
    name: "Hair Care Essential Kit",
    price: 980,
    originalPrice: 1300,
    rating: 4.7,
    reviews: 198,
    category: "Women's Combo",
    categorySlug: "womens-combo",
    subcategory: "Hair Care Combo",
    subcategorySlug: "haircare-combo",
    description: "Everything for beautiful, healthy hair. Shampoo, conditioner, hair oil, serum, and styling products.",
    features: ["6 Products", "Damage Repair", "All Hair Types", "Salon Quality", "Sulfate Free"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "WC-HAIR-001"
  },
  
  // Sports & Fitness Products
  {
    id: 29,
    name: "Sports Socks Combo - 6 Pairs",
    price: 520,
    originalPrice: 700,
    rating: 4.7,
    reviews: 234,
    badge: "Athletes Choice",
    category: "Sports & Fitness",
    categorySlug: "sports-fitness",
    subcategory: "Sports Socks",
    subcategorySlug: "sports-socks",
    description: "High-performance sports socks with moisture-wicking technology. Perfect for running, gym, and all sports.",
    features: ["6 Pairs", "Moisture Wicking", "Arch Support", "Cushioned", "Anti-Blister"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "SF-SOCK-001"
  },
  {
    id: 30,
    name: "Gym Accessories Starter Kit",
    price: 880,
    originalPrice: 1200,
    rating: 4.6,
    reviews: 178,
    category: "Sports & Fitness",
    categorySlug: "sports-fitness",
    subcategory: "Gym Accessories",
    subcategorySlug: "gym-accessories",
    description: "Essential gym accessories combo including gloves, wrist bands, headband, and more for your workout.",
    features: ["8 Items", "Gym Ready", "Quality Gear", "Carry Bag", "Unisex"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "SF-GYM-001"
  },
  {
    id: 31,
    name: "Complete Sports Combo Pack",
    price: 1150,
    originalPrice: 1500,
    rating: 4.8,
    reviews: 145,
    badge: "Value Pack",
    category: "Sports & Fitness",
    categorySlug: "sports-fitness",
    subcategory: "Sports Combo",
    subcategorySlug: "sports-combo",
    description: "All-in-one sports combo with socks, headband, wristbands, and sports accessories for active lifestyle.",
    features: ["10 Items", "Multi-Sport", "Durable", "Stylish", "Gift Box"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "SF-SPORT-001"
  },
  {
    id: 32,
    name: "Home Fitness Starter Kit",
    price: 1580,
    originalPrice: 2100,
    rating: 4.9,
    reviews: 189,
    badge: "New Arrival",
    category: "Sports & Fitness",
    categorySlug: "sports-fitness",
    subcategory: "Fitness Kit",
    subcategorySlug: "fitness-kit",
    description: "Complete home fitness kit with resistance bands, yoga mat, skipping rope, and fitness accessories.",
    features: ["12 Items", "Home Workout", "All Levels", "Guide Included", "Storage Bag"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    inStock: true,
    sku: "SF-FIT-001"
  },
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.sku.toLowerCase() === slug.toLowerCase());
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((product) => product.categorySlug === categorySlug);
};

export const getProductsBySubcategory = (subcategorySlug: string): Product[] => {
  return products.filter((product) => product.subcategorySlug === subcategorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.badge).slice(0, 8);
};

export const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== productId)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm))
  );
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getSubcategoryBySlug = (slug: string): SubCategory | undefined => {
  for (const category of categories) {
    const subcategory = category.subcategories.find((sub) => sub.slug === slug);
    if (subcategory) return subcategory;
  }
  return undefined;
};

export const getAllSubcategories = (): SubCategory[] => {
  return categories.flatMap((category) => category.subcategories);
};
