import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostHero } from "@/components/blog-post-hero"
import { BlogPostContent } from "@/components/blog-post-content"
import { BlogPostNavigation } from "@/components/blog-post-navigation"
import { RelatedPosts } from "@/components/related-posts"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful"
import { Metadata } from "next"

export const revalidate = 3600 // Revalidate every hour

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage.url,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.featuredImage.url],
    },
  }
}

// Generate static paths for better performance
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogPostHero post={post} />
        <BlogPostContent post={post} />
        <BlogPostNavigation currentSlug={slug} />
        <RelatedPosts currentSlug={slug} category={post.category.slug} />
      </main>
      <Footer />
    </div>
  )
}