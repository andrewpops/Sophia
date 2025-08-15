import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TestimonialsCTA() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Start Your Wellness Journey?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of clients who have transformed their health and well-being through personalized wellness
          treatments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/book">Book Your Session</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
