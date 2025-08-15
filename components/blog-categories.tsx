"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "All Posts", slug: "all" },
  { name: "Breathwork", slug: "breathwork" },
  { name: "Movement", slug: "movement" },
  { name: "Wellness Tips", slug: "wellness-tips" },
  { name: "Mind-Body", slug: "mind-body" },
  { name: "Nutrition", slug: "nutrition" },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={activeCategory === category.slug ? "default" : "outline"}
              onClick={() => setActiveCategory(category.slug)}
              className={
                activeCategory === category.slug ? "bg-primary hover:bg-primary/90" : "bg-transparent hover:bg-muted"
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
