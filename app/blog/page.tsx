import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogContent } from "@/components/blog-content"
import { BlogNewsletter } from "@/components/blog-newsletter"
import { getAllBlogPosts, getAllCategories } from "@/lib/contentful"

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllBlogPosts(),
    getAllCategories()
  ])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogHero />
        <BlogContent initialPosts={posts} categories={categories} />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  )
}