import { createClient } from 'contentful'
import { Document } from '@contentful/rich-text-types'

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined')
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined')
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export interface ContentfulCategory {
  fields: {
    name: string
    slug: string
    description?: string
    color?: string
  }
}

export interface ContentfulBlogPost {
  fields: {
    title: string
    slug: string
    excerpt: string
    content: Document
    category: ContentfulCategory
    featuredImage: {
      fields: {
        file: {
          url: string
          details: {
            image: {
              width: number
              height: number
            }
          }
        }
        title: string
      }
    }
    author?: string
    publishedDate: string
    readTime: string
    featured?: boolean
    metaDescription?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: Document
  category: {
    name: string
    slug: string
    color: string
  }
  featuredImage: {
    url: string
    alt: string
    width: number
    height: number
  }
  author: string
  publishedDate: string
  readTime: string
  featured: boolean
  metaDescription: string
}

export interface Category {
  name: string
  slug: string
  description: string
  color: string
}

// Transform Contentful blog post to our format
function transformBlogPost(entry: any): BlogPost {
  const fields = entry.fields
  
  return {
    id: entry.sys.id,
    title: fields.title,
    slug: fields.slug,
    excerpt: fields.excerpt,
    content: fields.content,
    category: {
      name: fields.category.fields.name,
      slug: fields.category.fields.slug,
      color: fields.category.fields.color || '#3B82F6'
    },
    featuredImage: {
      url: `https:${fields.featuredImage.fields.file.url}`,
      alt: fields.featuredImage.fields.title || fields.title,
      width: fields.featuredImage.fields.file.details.image.width,
      height: fields.featuredImage.fields.file.details.image.height
    },
    author: fields.author || 'Sophia Plank',
    publishedDate: fields.publishedDate,
    readTime: fields.readTime,
    featured: fields.featured || false,
    metaDescription: fields.metaDescription || fields.excerpt
  }
}

// Transform Contentful category to our format
function transformCategory(entry: any): Category {
  const fields = entry.fields
  
  return {
    name: fields.name,
    slug: fields.slug,
    description: fields.description || '',
    color: fields.color || '#3B82F6'
  }
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      include: 2, // Include referenced entries (category, images)
      order: ['-fields.publishedDate'], // Sort by newest first
    })
    
    return response.items.map(transformBlogPost)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    })
    
    if (response.items.length === 0) {
      return null
    }
    
    return transformBlogPost(response.items[0])
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get all categories
export async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'category',
      order: ['fields.name'],
    })
    
    return response.items.map(transformCategory)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.category.fields.slug': categorySlug,
      'fields.category.sys.contentType.sys.id': 'category',
      include: 2,
      order: ['-fields.publishedDate'],
    })
    
    return response.items.map(transformBlogPost)
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      include: 2,
      order: ['-fields.publishedDate'],
    })
    
    return response.items.map(transformBlogPost)
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}

// Get navigation posts (previous and next) for a given post
export async function getNavigationPosts(currentSlug: string): Promise<{
  previous: BlogPost | null
  next: BlogPost | null
}> {
  try {
    const allPosts = await getAllBlogPosts()
    const currentIndex = allPosts.findIndex(post => post.slug === currentSlug)
    
    if (currentIndex === -1) {
      return { previous: null, next: null }
    }
    
    return {
      previous: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
    }
  } catch (error) {
    console.error('Error fetching navigation posts:', error)
    return { previous: null, next: null }
  }
}

// Get related posts for a given post (same category, excluding current post)
export async function getRelatedPosts(currentSlug: string, categorySlug: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.category.fields.slug': categorySlug,
      'fields.category.sys.contentType.sys.id': 'category',
      include: 2,
      order: ['-fields.publishedDate'],
      limit: limit + 5, // Get extra in case we need to filter out current post
    })
    
    const posts = response.items.map(transformBlogPost)
    
    // Filter out the current post and limit results
    return posts.filter(post => post.slug !== currentSlug).slice(0, limit)
  } catch (error) {
    console.error('Error fetching related posts:', error)
    
    // Fallback: get any recent posts excluding current
    try {
      const allPosts = await getAllBlogPosts()
      return allPosts.filter(post => post.slug !== currentSlug).slice(0, limit)
    } catch (fallbackError) {
      console.error('Error fetching fallback posts:', fallbackError)
      return []
    }
  }
}