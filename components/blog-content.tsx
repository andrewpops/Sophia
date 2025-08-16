"use client"

import { useState } from "react"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogPost, Category } from "@/lib/contentful"

interface BlogContentProps {
  initialPosts: BlogPost[]
  categories: Category[]
}

export function BlogContent({ initialPosts, categories }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  // Find the featured post (always show regardless of category)
  const featuredPost = initialPosts.find(post => post.featured)
  
  // Filter posts based on selected category (excluding featured post for regular grid)
  const filteredPosts = selectedCategory === "all" 
    ? initialPosts 
    : initialPosts.filter(post => post.category.slug === selectedCategory)

  return (
    <>
      <BlogCategories 
        categories={categories} 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <BlogGrid 
        posts={filteredPosts} 
        persistentFeaturedPost={featuredPost}
      />
    </>
  )
}