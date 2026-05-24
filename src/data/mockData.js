/**
 * Mock Data Engine for Campus Crafts Marketplace
 * Simulates active database models for real-time live drops,
 * local geolocation indexing, and dynamic user engagement metrics.
 */

// 2. Live Drops Data (Flash Sale Product Streams)
export const mockDrops = [
  {
    id: 'd1',
    title: 'Aesthetic Ceramic Rings',
    price: 18,
    time: '01:24:05',
    stock: 3,
    totalStock: 12,
    img: 'https://images.unsplash.com/photo-1590736969955-71cb91d3176d?w=600&q=80'
  },
  {
    id: 'd2',
    title: 'Hand-Poured Soy Coasters',
    price: 24.5,
    time: '03:05:12',
    stock: 7,
    totalStock: 20,
    img: 'https://images.unsplash.com/photo-1565192647048-f997ded87950?w=400&q=80'
  },
  {
    id: 'd3',
    title: 'Crochet Checkered Tote Bag',
    price: 39.99,
    time: '00:42:18',
    stock: 1,
    totalStock: 8,
    img: 'https://images.unsplash.com/photo-1502945015378-59308f8cc345?w=600&q=80'
  }
];

// 3. Nearby Creators Data (Hyper-local Geolocation Indexing)
export const mockCreators = [
  { 
    id: 'c1', 
    name: 'Mia Crafts', 
    handle: '@mia.makes', 
    distance: '0.4 mi away', 
    uni: 'Stanford', 
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' 
  },
  { 
    id: 'c2', 
    name: 'Devon Designs', 
    handle: '@devon.clay', 
    distance: '1.2 mi away', 
    uni: 'Stanford', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80' 
  },
  { 
    id: 'c3', 
    name: 'Chloe Resin', 
    handle: '@chloe.epoxy', 
    distance: '0.2 mi away', 
    uni: 'Stanford', 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' 
  },
  { 
    id: 'c4', 
    name: 'Alex Knits', 
    handle: '@alex.loops', 
    distance: '1.7 mi away', 
    uni: 'Stanford', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' 
  }
];

// 3. Behind-The-Scenes Media Feed Data (Social Video Streams)
export const mockBts = [
  { 
    id: 'b1', 
    handle: '@mia.makes', 
    activity: 'Glazing clay flowers', 
    views: '4.2K', 
    img: 'https://images.unsplash.com/photo-1565192647048-f997ded87950?w=400&q=80' 
  },
  { 
    id: 'b2', 
    handle: '@chloe.epoxy', 
    activity: 'Curing real fern coasters', 
    views: '18.9K', 
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80' 
  },
  { 
    id: 'b3', 
    handle: '@devon.clay', 
    activity: 'Baking neon check trays', 
    views: '940', 
    img: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80' 
  }
];

// 4. Discovery Node Categories (Visual Genre Navigation)
export const mockCategories = [
  { id: 'cat1', name: 'Tufted Rugs', icon: '🧶' },
  { id: 'cat2', name: 'Clay Goods', icon: '🏺' },
  { id: 'cat3', name: 'Resin Art', icon: '🔮' },
  { id: 'cat4', name: 'Sticker Packs', icon: '✨' },
  { id: 'cat5', name: 'Upcycled Fit', icon: '👕' },
  { id: 'cat6', name: 'Zines & Print', icon: '📚' }
];

// 5. Core Marketplace Catalog (Trending Products and Interactions)
export const mockTrending = [
  { 
    id: 't1', 
    title: 'Y2K Star Beaded Necklace', 
    price: 14.00, 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80' 
  },
  { 
    id: 't2', 
    title: 'Custom Wire Wrapped Quartz', 
    price: 22.00, 
    rating: 4, 
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' 
  },
  { 
    id: 't3', 
    title: 'Dorm Desk Disco Ball Planter', 
    price: 32.50, 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80' 
  },
  { 
    id: 't4', 
    title: 'Vibe Check Sticker Assortment', 
    price: 6.00, 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=500&q=80' 
  }
];