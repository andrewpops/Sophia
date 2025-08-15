import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutCredentials } from "@/components/about-credentials"
import { AboutPhilosophy } from "@/components/about-philosophy"
import { AboutCTA } from "@/components/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutCredentials />
        <AboutPhilosophy />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
