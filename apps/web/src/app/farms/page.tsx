'use client'

import { useState, useMemo, useEffect } from 'react'
import { FarmCard } from '@/components/farm-card'
import { FarmGridSkeleton } from '@/components/farm-card-skeleton'
import { Button } from '@/components/ui/button'
import { mockFarms, type Farm } from '@/lib/mock-data'

export default function FarmDiscoveryPage() {
  const [farms, setFarms] = useState<Farm[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate loading data
  useEffect(() => {
    const loadFarms = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Simulate potential error (uncomment to test error state)
        // if (Math.random() > 0.8) {
        //   throw new Error('Failed to load farms')
        // }

        setFarms(mockFarms)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load farms')
      } finally {
        setIsLoading(false)
      }
    }

    loadFarms()
  }, [])

  // Memoize farms to prevent unnecessary re-renders
  const displayFarms = useMemo(() => farms, [farms])

  const handleFarmClick = (farmId: string) => {
    // TODO: Open farm detail modal/drawer
    console.log('Open farm details for:', farmId)
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    // Trigger reload
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Local Farms Near You</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Found {displayFarms.length} farms near Brooklyn, NY
              </p>
            </div>

            {/* Filter and Sort buttons - simplified for MVP */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                🔽 Filters
              </Button>
              <Button variant="outline" size="sm">
                📍 Map
              </Button>
              <Button variant="outline" size="sm">
                ⚡ Sort
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Loading State */}
        {isLoading && <FarmGridSkeleton />}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl mb-4">🚫</div>
              <h2 className="text-2xl font-semibold text-foreground">Something went wrong</h2>
              <p className="text-muted-foreground">{error}</p>
              <div className="flex gap-4 justify-center">
                <Button onClick={handleRetry}>Try Again</Button>
                <Button variant="outline" onClick={() => setError(null)}>
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Success State - Farm Grid */}
        {!isLoading && !error && displayFarms.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayFarms.map((farm) => (
                <FarmCard
                  key={farm.id}
                  id={farm.id}
                  name={farm.name}
                  image={farm.image}
                  rating={farm.rating}
                  reviewCount={farm.reviewCount}
                  location={farm.location}
                  priceRange={farm.priceRange}
                  category={farm.category}
                  isCustomerFavorite={farm.isCustomerFavorite}
                  onClick={() => handleFarmClick(farm.id)}
                  className="w-full"
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <Button size="lg" className="px-8">
                Load More Farms
              </Button>
            </div>
          </>
        )}

        {/* No Results State */}
        {!isLoading && !error && displayFarms.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-semibold text-foreground">No farms found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search filters or expanding your search area.
              </p>
              <Button>Clear Filters</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}