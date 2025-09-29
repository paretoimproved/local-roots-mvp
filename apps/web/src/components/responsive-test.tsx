'use client'

export function ResponsiveTest() {
  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-mono opacity-75 z-50">
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:inline md:hidden">SM</span>
      <span className="hidden md:inline lg:hidden">MD</span>
      <span className="hidden lg:inline xl:hidden">LG</span>
      <span className="hidden xl:inline">XL</span>
    </div>
  )
}