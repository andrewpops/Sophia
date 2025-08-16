"use client"

import { Button } from "@/components/ui/button"
import { Category } from "@/lib/contentful"

interface BlogCategoriesProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogCategories({ categories, selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  const allCategories = [
    { name: "All Posts", slug: "all", description: "", color: "#3B82F6" },
    ...categories
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {allCategories.map((category) => (
            <Button
              key={category.slug}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              onClick={() => onCategoryChange(category.slug)}
              className={
                selectedCategory === category.slug 
                  ? "bg-primary hover:bg-primary/90" 
                  : "bg-transparent hover:bg-muted hover:text-foreground"
              }
              style={
                selectedCategory === category.slug && category.color !== "#3B82F6" 
                  ? { 
                      backgroundColor: category.color, 
                      borderColor: category.color,
                      color: 'white'
                    }
                  : {}
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}