import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Transform Your Well-being Through <span className="text-primary">Breathwork</span> &{" "}
                <span className="text-primary">Movement</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Discover the power of fascial stretch therapy, breathwork, and neuro-linguistic programming to unlock
                your body's natural healing potential and achieve lasting wellness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Certified</span> Fascial Stretch Therapist
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Licensed</span> Breathwork Practitioner
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5+ Years</span> Experience
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/wellness-therapy-natural-light.png"
                alt="Sophia Plank providing fascial stretch therapy in a calming wellness environment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
