export interface Farm {
  id: string
  name: string
  image: string
  rating: number
  reviewCount: number
  location: string
  priceRange: {
    min: number
    max: number
  }
  category: string
  description: string
  practices: string[]
  deliveryDays: string[]
  isCustomerFavorite?: boolean
}

export const mockFarms: Farm[] = [
  {
    id: '1',
    name: 'Green Valley Farm',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    rating: 4.9,
    reviewCount: 127,
    location: 'Brooklyn, NY • 2.3 miles',
    priceRange: { min: 22, max: 35 },
    category: 'Organic vegetables',
    description: 'Family-owned organic farm growing seasonal vegetables since 1995. We use sustainable practices and heritage seeds.',
    practices: ['Certified Organic', 'No-till farming', 'Cover cropping'],
    deliveryDays: ['Wednesday'],
    isCustomerFavorite: true,
  },
  {
    id: '2',
    name: 'Sunshine Orchard',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    rating: 4.7,
    reviewCount: 89,
    location: 'Queens, NY • 3.8 miles',
    priceRange: { min: 28, max: 42 },
    category: 'Seasonal fruit boxes',
    description: 'Third-generation orchard specializing in stone fruits, apples, and seasonal berries.',
    practices: ['IPM Certified', 'Pollinator friendly', 'Water conservation'],
    deliveryDays: ['Friday'],
  },
  {
    id: '3',
    name: 'Heritage Ranch',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80',
    rating: 4.8,
    reviewCount: 156,
    location: 'Long Island, NY • 12.4 miles',
    priceRange: { min: 45, max: 65 },
    category: 'Grass-fed meat & dairy',
    description: 'Pasture-raised livestock with rotational grazing. Producing high-quality meat and dairy products.',
    practices: ['Grass-fed', 'Pasture-raised', 'Rotational grazing'],
    deliveryDays: ['Saturday'],
  },
  {
    id: '4',
    name: 'Meadow Dairy',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80',
    rating: 4.6,
    reviewCount: 73,
    location: 'Westchester, NY • 8.9 miles',
    priceRange: { min: 28, max: 38 },
    category: 'Artisan dairy products',
    description: 'Small-batch artisan dairy producing farmstead cheeses, yogurt, and fresh milk.',
    practices: ['Grass-fed cows', 'Small-batch', 'Traditional methods'],
    deliveryDays: ['Thursday'],
  },
  {
    id: '5',
    name: 'Wildflower Farm',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    rating: 4.5,
    reviewCount: 92,
    location: 'Staten Island, NY • 15.2 miles',
    priceRange: { min: 32, max: 48 },
    category: 'Mixed CSA boxes',
    description: 'Diversified farm offering mixed boxes with vegetables, herbs, flowers, and seasonal fruits.',
    practices: ['Biodynamic', 'Seed saving', 'Companion planting'],
    deliveryDays: ['Tuesday', 'Saturday'],
    isCustomerFavorite: true,
  },
  {
    id: '6',
    name: 'Riverside Gardens',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    rating: 4.4,
    reviewCount: 64,
    location: 'New Jersey • 18.7 miles',
    priceRange: { min: 24, max: 36 },
    category: 'Hydroponic greens',
    description: 'Year-round hydroponic operation specializing in leafy greens and microgreens.',
    practices: ['Hydroponic', 'Year-round growing', 'Water efficient'],
    deliveryDays: ['Monday', 'Thursday'],
  },
]