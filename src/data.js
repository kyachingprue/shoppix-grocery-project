export const categories = [
  [
    'Fruits & Vegetables',
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80',
    'bg-green-50'
  ],
  [
    'Dairy & Eggs',
    'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80',
    'bg-blue-50'
  ],
  [
    'Bakery & Bread',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
    'bg-orange-50'
  ],
  [
    'Meat & Seafood',
    'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=500&q=80',
    'bg-red-50'
  ],
  [
    'Pantry Staples',
    'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=500&q=80',
    'bg-yellow-50'
  ],
  [
    'Snacks & Beverages',
    'https://images.unsplash.com/photo-1613462847848-f65a8b231bb5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'bg-amber-50'
  ],
  [
    'Household',
    'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=500&q=80',
    'bg-sky-50'
  ],
  [
    'Personal Care',
    'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=500&q=80',
    'bg-pink-50'
  ]
]


export const products = [
  // =====================================================
  // FRUITS & VEGETABLES
  // =====================================================

  {
    id: 1,
    name: 'Fresh Red Apples',
    slug: 'fresh-red-apples',
    category: 'Fruits & Vegetables',
    subcategory: 'Fresh Fruits',
    brand: 'Antixor Fresh',
    description:
      'Fresh, crisp and naturally sweet red apples, carefully selected for everyday healthy snacking.',
    price: 280,
    discountPrice: 240,
    unit: '1 kg',
    stock: 45,
    rating: 4.8,
    reviews: 126,
    badge: 'Best Seller',
    tags: ['fresh', 'fruit', 'healthy', 'organic'],
    image:
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 2,
    name: 'Fresh Bananas',
    slug: 'fresh-bananas',
    category: 'Fruits & Vegetables',
    subcategory: 'Fresh Fruits',
    brand: 'Antixor Fresh',
    description:
      'Naturally sweet and energy-rich bananas, perfect for breakfast, smoothies and quick snacks.',
    price: 140,
    discountPrice: 120,
    unit: '1 dozen',
    stock: 68,
    rating: 4.7,
    reviews: 98,
    badge: 'Popular',
    tags: ['fresh', 'fruit', 'banana', 'healthy'],
    image:
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 3,
    name: 'Fresh Broccoli',
    slug: 'fresh-broccoli',
    category: 'Fruits & Vegetables',
    subcategory: 'Fresh Vegetables',
    brand: 'Green Valley',
    description:
      'Fresh green broccoli packed with nutrients and ideal for salads, soups and healthy meals.',
    price: 180,
    discountPrice: 155,
    unit: '500 g',
    stock: 32,
    rating: 4.6,
    reviews: 74,
    badge: 'Fresh',
    tags: ['vegetable', 'fresh', 'green', 'healthy'],
    image:
      'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 4,
    name: 'Fresh Oranges',
    slug: 'fresh-oranges',
    category: 'Fruits & Vegetables',
    subcategory: 'Fresh Fruits',
    brand: 'Citrus Farm',
    description:
      'Juicy and refreshing oranges with a naturally sweet and tangy flavor.',
    price: 220,
    discountPrice: 195,
    unit: '1 kg',
    stock: 51,
    rating: 4.8,
    reviews: 112,
    badge: 'Fresh',
    tags: ['orange', 'fruit', 'vitamin-c', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // DAIRY & EGGS
  // =====================================================

  {
    id: 5,
    name: 'Full Cream Fresh Milk',
    slug: 'full-cream-fresh-milk',
    category: 'Dairy & Eggs',
    subcategory: 'Milk',
    brand: 'Pure Dairy',
    description:
      'Creamy full-fat fresh milk, rich in calcium and suitable for tea, coffee and breakfast.',
    price: 110,
    discountPrice: 99,
    unit: '1 liter',
    stock: 85,
    rating: 4.7,
    reviews: 156,
    badge: 'Popular',
    tags: ['milk', 'dairy', 'calcium', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 6,
    name: 'Farm Fresh Eggs',
    slug: 'farm-fresh-eggs',
    category: 'Dairy & Eggs',
    subcategory: 'Eggs',
    brand: 'Happy Farm',
    description:
      'Fresh farm eggs with naturally rich yolks, perfect for breakfast and everyday cooking.',
    price: 150,
    discountPrice: 135,
    unit: '12 pcs',
    stock: 72,
    rating: 4.9,
    reviews: 203,
    badge: 'Best Seller',
    tags: ['eggs', 'protein', 'farm-fresh', 'breakfast'],
    image:
      'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 7,
    name: 'Natural Greek Yogurt',
    slug: 'natural-greek-yogurt',
    category: 'Dairy & Eggs',
    subcategory: 'Yogurt',
    brand: 'Pure Dairy',
    description:
      'Smooth and creamy natural Greek yogurt with a rich texture and refreshing taste.',
    price: 180,
    discountPrice: 160,
    unit: '500 g',
    stock: 38,
    rating: 4.6,
    reviews: 89,
    badge: 'Healthy',
    tags: ['yogurt', 'dairy', 'protein', 'healthy'],
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 8,
    name: 'Premium Cheddar Cheese',
    slug: 'premium-cheddar-cheese',
    category: 'Dairy & Eggs',
    subcategory: 'Cheese',
    brand: 'Dairy Gold',
    description:
      'Rich and creamy cheddar cheese that is perfect for sandwiches, burgers and cooking.',
    price: 420,
    discountPrice: 375,
    unit: '200 g',
    stock: 24,
    rating: 4.8,
    reviews: 67,
    badge: 'Premium',
    tags: ['cheese', 'dairy', 'cheddar', 'premium'],
    image:
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // BAKERY & BREAD
  // =====================================================

  {
    id: 9,
    name: 'Classic White Bread',
    slug: 'classic-white-bread',
    category: 'Bakery & Bread',
    subcategory: 'Bread',
    brand: 'Daily Bake',
    description:
      'Soft and fresh sliced white bread, perfect for breakfast, sandwiches and toast.',
    price: 90,
    discountPrice: 80,
    unit: '400 g',
    stock: 55,
    rating: 4.5,
    reviews: 81,
    badge: 'Fresh',
    tags: ['bread', 'bakery', 'breakfast', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 10,
    name: 'Butter Croissant',
    slug: 'butter-croissant',
    category: 'Bakery & Bread',
    subcategory: 'Pastries',
    brand: 'Daily Bake',
    description:
      'Flaky golden croissants made with buttery layers for a delicious breakfast treat.',
    price: 120,
    discountPrice: 105,
    unit: '2 pcs',
    stock: 29,
    rating: 4.8,
    reviews: 54,
    badge: 'Popular',
    tags: ['croissant', 'bakery', 'breakfast', 'pastry'],
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 11,
    name: 'Fresh Whole Wheat Bread',
    slug: 'fresh-whole-wheat-bread',
    category: 'Bakery & Bread',
    subcategory: 'Healthy Bread',
    brand: 'Healthy Bake',
    description:
      'Wholesome whole wheat bread made for a healthier and more nutritious daily breakfast.',
    price: 130,
    discountPrice: 115,
    unit: '400 g',
    stock: 42,
    rating: 4.7,
    reviews: 73,
    badge: 'Healthy',
    tags: ['bread', 'whole-wheat', 'healthy', 'bakery'],
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // MEAT & SEAFOOD
  // =====================================================

  {
    id: 12,
    name: 'Fresh Chicken Breast',
    slug: 'fresh-chicken-breast',
    category: 'Meat & Seafood',
    subcategory: 'Chicken',
    brand: 'Fresh Farm',
    description:
      'Fresh boneless chicken breast, cleaned and ready for grilling, frying or healthy cooking.',
    price: 480,
    discountPrice: 430,
    unit: '1 kg',
    stock: 26,
    rating: 4.8,
    reviews: 145,
    badge: 'Best Seller',
    tags: ['chicken', 'meat', 'protein', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 13,
    name: 'Premium Beef',
    slug: 'premium-beef',
    category: 'Meat & Seafood',
    subcategory: 'Beef',
    brand: 'Prime Farm',
    description:
      'Premium fresh beef cuts selected for rich flavor and tender cooking.',
    price: 780,
    discountPrice: 720,
    unit: '1 kg',
    stock: 18,
    rating: 4.7,
    reviews: 91,
    badge: 'Premium',
    tags: ['beef', 'meat', 'protein', 'premium'],
    image:
      'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 14,
    name: 'Fresh Salmon Fillet',
    slug: 'fresh-salmon-fillet',
    category: 'Meat & Seafood',
    subcategory: 'Seafood',
    brand: 'Ocean Fresh',
    description:
      'Premium salmon fillets with a rich flavor, perfect for grilling, baking and healthy meals.',
    price: 950,
    discountPrice: 875,
    unit: '500 g',
    stock: 14,
    rating: 4.9,
    reviews: 63,
    badge: 'Premium',
    tags: ['salmon', 'fish', 'seafood', 'omega-3'],
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 15,
    name: 'Fresh Prawns',
    slug: 'fresh-prawns',
    category: 'Meat & Seafood',
    subcategory: 'Seafood',
    brand: 'Ocean Fresh',
    description:
      'Fresh and juicy prawns, cleaned and ready for curries, frying or grilling.',
    price: 680,
    discountPrice: 620,
    unit: '500 g',
    stock: 21,
    rating: 4.8,
    reviews: 77,
    badge: 'Fresh',
    tags: ['prawns', 'shrimp', 'seafood', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // PANTRY STAPLES
  // =====================================================

  {
    id: 16,
    name: 'Premium Basmati Rice',
    slug: 'premium-basmati-rice',
    category: 'Pantry Staples',
    subcategory: 'Rice',
    brand: 'Golden Harvest',
    description:
      'Long-grain aromatic basmati rice, perfect for biryani, pulao and everyday meals.',
    price: 420,
    discountPrice: 380,
    unit: '5 kg',
    stock: 34,
    rating: 4.8,
    reviews: 188,
    badge: 'Best Seller',
    tags: ['rice', 'basmati', 'pantry', 'staples'],
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 17,
    name: 'Organic Red Lentils',
    slug: 'organic-red-lentils',
    category: 'Pantry Staples',
    subcategory: 'Lentils',
    brand: 'Nature Basket',
    description:
      'Clean and nutritious red lentils, perfect for soups, curries and traditional meals.',
    price: 180,
    discountPrice: 160,
    unit: '1 kg',
    stock: 47,
    rating: 4.6,
    reviews: 82,
    badge: 'Organic',
    tags: ['lentils', 'dal', 'organic', 'protein'],
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 18,
    name: 'Extra Virgin Olive Oil',
    slug: 'extra-virgin-olive-oil',
    category: 'Pantry Staples',
    subcategory: 'Cooking Oil',
    brand: 'Oliva Gold',
    description:
      'Premium extra virgin olive oil with a smooth flavor, ideal for salads and cooking.',
    price: 850,
    discountPrice: 760,
    unit: '1 liter',
    stock: 19,
    rating: 4.9,
    reviews: 104,
    badge: 'Premium',
    tags: ['olive-oil', 'oil', 'cooking', 'premium'],
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 19,
    name: 'Natural Honey',
    slug: 'natural-honey',
    category: 'Pantry Staples',
    subcategory: 'Sweeteners',
    brand: 'Nature Basket',
    description:
      'Pure natural honey with a rich golden flavor, perfect for tea, toast and desserts.',
    price: 520,
    discountPrice: 465,
    unit: '500 g',
    stock: 31,
    rating: 4.8,
    reviews: 119,
    badge: 'Organic',
    tags: ['honey', 'natural', 'organic', 'sweetener'],
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // SNACKS & BEVERAGES
  // =====================================================

  {
    id: 20,
    name: 'Premium Dark Chocolate',
    slug: 'premium-dark-chocolate',
    category: 'Snacks & Beverages',
    subcategory: 'Chocolate',
    brand: 'Choco Bliss',
    description:
      'Smooth premium dark chocolate with a rich cocoa flavor for a satisfying sweet treat.',
    price: 220,
    discountPrice: 195,
    unit: '100 g',
    stock: 63,
    rating: 4.8,
    reviews: 138,
    badge: 'Popular',
    tags: ['chocolate', 'snacks', 'dark-chocolate', 'sweet'],
    image:
      'https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 21,
    name: 'Classic Potato Chips',
    slug: 'classic-potato-chips',
    category: 'Snacks & Beverages',
    subcategory: 'Chips',
    brand: 'Crunchy',
    description:
      'Crispy golden potato chips with a classic lightly salted flavor.',
    price: 80,
    discountPrice: 70,
    unit: '150 g',
    stock: 94,
    rating: 4.5,
    reviews: 211,
    badge: 'Best Seller',
    tags: ['chips', 'snacks', 'potato', 'crispy'],
    image:
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 22,
    name: 'Fresh Orange Juice',
    slug: 'fresh-orange-juice',
    category: 'Snacks & Beverages',
    subcategory: 'Juices',
    brand: 'Fresh Sip',
    description:
      'Refreshing orange juice made with real oranges for a naturally fruity taste.',
    price: 180,
    discountPrice: 155,
    unit: '1 liter',
    stock: 44,
    rating: 4.7,
    reviews: 96,
    badge: 'Fresh',
    tags: ['juice', 'orange', 'beverage', 'vitamin-c'],
    image:
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 23,
    name: 'Premium Coffee Beans',
    slug: 'premium-coffee-beans',
    category: 'Snacks & Beverages',
    subcategory: 'Coffee',
    brand: 'Mountain Brew',
    description:
      'Aromatic roasted coffee beans with rich flavor and a smooth balanced finish.',
    price: 680,
    discountPrice: 599,
    unit: '500 g',
    stock: 27,
    rating: 4.9,
    reviews: 164,
    badge: 'Premium',
    tags: ['coffee', 'beans', 'beverage', 'breakfast'],
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // HOUSEHOLD
  // =====================================================

  {
    id: 24,
    name: 'Multi-Purpose Cleaning Spray',
    slug: 'multi-purpose-cleaning-spray',
    category: 'Household',
    subcategory: 'Cleaning',
    brand: 'Clean Home',
    description:
      'Powerful multi-purpose cleaning spray for kitchens, tables, counters and everyday surfaces.',
    price: 260,
    discountPrice: 225,
    unit: '500 ml',
    stock: 36,
    rating: 4.6,
    reviews: 71,
    badge: 'Popular',
    tags: ['cleaning', 'household', 'spray', 'home'],
    image:
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 25,
    name: 'Premium Dishwashing Liquid',
    slug: 'premium-dishwashing-liquid',
    category: 'Household',
    subcategory: 'Kitchen Cleaning',
    brand: 'Clean Home',
    description:
      'Effective dishwashing liquid that removes grease while leaving dishes fresh and clean.',
    price: 190,
    discountPrice: 165,
    unit: '750 ml',
    stock: 58,
    rating: 4.7,
    reviews: 113,
    badge: 'Best Seller',
    tags: ['dishwashing', 'cleaning', 'kitchen', 'household'],
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 26,
    name: 'Soft Kitchen Paper Towels',
    slug: 'soft-kitchen-paper-towels',
    category: 'Household',
    subcategory: 'Kitchen Essentials',
    brand: 'Home Comfort',
    description:
      'Highly absorbent and soft paper towels designed for everyday kitchen cleaning.',
    price: 240,
    discountPrice: 210,
    unit: '6 rolls',
    stock: 43,
    rating: 4.5,
    reviews: 62,
    badge: 'Value Pack',
    tags: ['paper-towel', 'kitchen', 'household', 'cleaning'],
    image:
      'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=800&q=80'
  },

  // =====================================================
  // PERSONAL CARE
  // =====================================================

  {
    id: 27,
    name: 'Moisturizing Hand Wash',
    slug: 'moisturizing-hand-wash',
    category: 'Personal Care',
    subcategory: 'Hand Care',
    brand: 'Pure Care',
    description:
      'Gentle moisturizing hand wash that cleans effectively while keeping hands soft.',
    price: 180,
    discountPrice: 155,
    unit: '500 ml',
    stock: 52,
    rating: 4.6,
    reviews: 88,
    badge: 'Popular',
    tags: ['hand-wash', 'personal-care', 'hygiene', 'fresh'],
    image:
      'https://images.unsplash.com/photo-1607006344380-b6775a0824e5?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 28,
    name: 'Nourishing Body Lotion',
    slug: 'nourishing-body-lotion',
    category: 'Personal Care',
    subcategory: 'Skin Care',
    brand: 'Glow Care',
    description:
      'Lightweight nourishing body lotion that helps keep skin soft, smooth and hydrated.',
    price: 390,
    discountPrice: 345,
    unit: '400 ml',
    stock: 33,
    rating: 4.8,
    reviews: 129,
    badge: 'Best Seller',
    tags: ['body-lotion', 'skin-care', 'moisturizer', 'beauty'],
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 29,
    name: 'Herbal Shampoo',
    slug: 'herbal-shampoo',
    category: 'Personal Care',
    subcategory: 'Hair Care',
    brand: 'Nature Glow',
    description:
      'Refreshing herbal shampoo designed for everyday hair cleansing and a fresh scalp.',
    price: 320,
    discountPrice: 285,
    unit: '400 ml',
    stock: 41,
    rating: 4.7,
    reviews: 105,
    badge: 'Natural',
    tags: ['shampoo', 'hair-care', 'herbal', 'personal-care'],
    image:
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
  },

  {
    id: 30,
    name: 'Natural Aloe Vera Gel',
    slug: 'natural-aloe-vera-gel',
    category: 'Personal Care',
    subcategory: 'Skin Care',
    brand: 'Nature Glow',
    description:
      'Cooling aloe vera gel suitable for everyday skincare and refreshing hydration.',
    price: 280,
    discountPrice: 245,
    unit: '200 ml',
    stock: 37,
    rating: 4.8,
    reviews: 117,
    badge: 'Natural',
    tags: ['aloe-vera', 'skin-care', 'natural', 'beauty'],
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
  }
]
