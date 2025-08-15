import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogNewsletter } from "@/components/blog-newsletter"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  )
}
