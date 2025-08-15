import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'd love to support you in discovering your body's natural healing potential. Let's explore how we can work
            together to help you feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
