import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { AllServicesGrid } from "@/components/all-services-grid"
import { ServicesCTA } from "@/components/services-cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHero />
        <AllServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
