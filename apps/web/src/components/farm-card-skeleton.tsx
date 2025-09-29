import { Card, CardContent } from '@/components/ui/card'

export function FarmCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
      <CardContent className="p-4 space-y-3">
        {/* Farm name and rating */}
        <div className="flex items-start justify-between">
          <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
        </div>

        {/* Location */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>

        {/* Price */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
      </CardContent>
    </Card>
  )
}

export function FarmGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <FarmCardSkeleton key={i} />
      ))}
    </div>
  )
}