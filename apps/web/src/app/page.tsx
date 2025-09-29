import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-primary">Local-Roots</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/farms" className="text-foreground hover:text-primary">
              Browse Farms
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary">
              How It Works
            </Link>
            <Button size="sm">Sign In</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                🌱 From Farm to Table
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, local produce delivered from trusted community farms
              </p>
            </div>

            {/* Search Bar Placeholder */}
            <div className="max-w-md mx-auto">
              <div className="flex rounded-lg border border-input bg-background p-1">
                <input
                  type="text"
                  placeholder="📍 Enter ZIP code"
                  className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <Button size="lg" className="px-6">
                  Search
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/farms">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Browse Farms
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                🥬
              </div>
              <span className="text-sm font-medium">Vegetables</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                🍎
              </div>
              <span className="text-sm font-medium">Fruits</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                🥩
              </div>
              <span className="text-sm font-medium">Meat</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                🧀
              </div>
              <span className="text-sm font-medium">Dairy</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                📦
              </div>
              <span className="text-sm font-medium">CSA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}