import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { cn, formatPrice, formatRating } from '@/lib/utils'

interface FarmCardProps {
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
  isFavorite?: boolean
  isCustomerFavorite?: boolean
  className?: string
  onClick?: () => void
}

export function FarmCard({
  id,
  name,
  image,
  rating,
  reviewCount,
  location,
  priceRange,
  category,
  isFavorite = false,
  isCustomerFavorite = false,
  className,
  onClick,
}: FarmCardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${name} farm`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isCustomerFavorite && (
            <div className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium shadow-sm">
              ⭐ Customer Favorite
            </div>
          )}
        </div>

        {/* Favorite Heart */}
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation()
            // Handle favorite toggle
          }}
        >
          <svg
            className={cn(
              "w-4 h-4 transition-colors duration-200",
              isFavorite ? "fill-red-500 text-red-500" : "fill-none text-gray-600 hover:text-red-500"
            )}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <CardContent className="p-4 space-y-2">
        {/* Farm Name & Rating */}
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <svg className="w-4 h-4 fill-accent text-accent" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{formatRating(rating)}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-sm text-muted-foreground line-clamp-1">
          {location}
        </p>

        {/* Category */}
        <p className="text-sm text-secondary line-clamp-1">
          {category}
        </p>

        {/* Price Range */}
        <p className="text-sm font-semibold text-foreground">
          {formatPrice(priceRange.min)}–{formatPrice(priceRange.max)}/week
        </p>
      </CardContent>
    </Card>
  )
}