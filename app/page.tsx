import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { AboutPreview } from "@/components/about-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramFeed } from "@/components/instagram-feed"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

// Trigger redeployment for Contentful environment variables
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AboutPreview />
        <TestimonialsSection />
        <InstagramFeed />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}


