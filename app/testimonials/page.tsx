import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialsHero } from "@/components/testimonials-hero"
import { TestimonialsGrid } from "@/components/testimonials-grid"
import { TestimonialsCTA } from "@/components/testimonials-cta"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TestimonialsHero />
        <TestimonialsGrid />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  )
}
