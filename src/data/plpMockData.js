export const mockCategories = [
  { id: 'cat-1', name: 'Clay Art', icon: '🏺' },
  { id: 'cat-2', name: 'Resin Art', icon: '💧' },
  { id: 'cat-3', name: 'Stickers', icon: '✨' },
  { id: 'cat-4', name: 'Crochet', icon: '🧶' },
  { id: 'cat-5', name: 'Paintings', icon: '🎨' },
  { id: 'cat-6', name: 'Customized Gifts', icon: '🎁' }
];

export const mockAesthetics = ['Cottagecore', 'Anime', 'Cyberpunk', 'Minimal', 'Handmade'];

export const mockProducts = [
  {
    id: 'p-1',
    title: 'Hand-Tufted Cyberpunk Neon Matrix Room Rug',
    price: 85,
    category: 'Customized Gifts',
    aesthetic: 'Cyberpunk',
    distance: '0.2 mi away',
    campus: 'Stanford Quad',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80',
    creator: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80',
      isVerified: true
    },
    status: 'live', // Options: 'live', 'countdown', 'limited'
    stockLeft: 2,
    timer: null,
    reviewCount: 124
  },
  {
    id: 'p-2',
    title: 'Glow-in-the-Dark Custom Resin Keycaps Set',
    price: 32,
    category: 'Resin Art',
    aesthetic: 'Anime',
    distance: '0.8 mi away',
    campus: 'Undergrad Dorms',
    rating: 4.8,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80',
    creator: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      isVerified: true
    },
    status: 'limited',
    stockLeft: 3,
    timer: null
  },
  {
    id: 'p-3',
    title: 'Cozy Cottagecore Chunky Knit Frog Beanie',
    price: 24,
    category: 'Crochet',
    aesthetic: 'Cottagecore',
    distance: '1.4 mi away',
    campus: 'North Campus Apartments',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1575844712296-cba26735e6a5?w=600&q=80',
    creator: {
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      isVerified: false
    },
    status: 'countdown',
    stockLeft: 0,
    timer: '01h : 42m',
    reviewCount: 76
  },
  {
    id: 'p-4',
    title: 'Minimalist Marbled Terrazzo Clay Trinket Dish',
    price: 18,
    category: 'Clay Art',
    aesthetic: 'Minimal',
    distance: '0.5 mi away',
    campus: 'Delta Chi House',
    rating: 4.6,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80',
    creator: {
      name: 'Liam Carter',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      isVerified: true
    },
    status: 'live',
    stockLeft: 12,
    timer: null
  },
  {
    id: 'p-5',
    title: 'Custom Hand-Painted Canvas Tote Bag',
    price: 45,
    category: 'Paintings',
    aesthetic: 'Handmade',
    distance: '2.1 mi away',
    campus: 'Off-Campus Lofts',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80',
    creator: {
      name: 'Sophia Martinez',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80',
      isVerified: true
    },
    status: 'limited',
    stockLeft: 1,
    timer: null,
    reviewCount: 220
  },
  {
    id: 'p-6',
    title: 'Holographic Die-Cut Anime Sticker Pack',
    price: 8,
    category: 'Stickers',
    aesthetic: 'Anime',
    distance: '0.1 mi away',
    campus: 'Library Café Lounge',
    rating: 4.7,
    reviewCount: 184,
    image: 'https://images.unsplash.com/photo-1572375995301-45a64c24b519?w=600&q=80',
    creator: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      isVerified: true
    },
    status: 'live',
    stockLeft: 45,
    timer: null
  }
];