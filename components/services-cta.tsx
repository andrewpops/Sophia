import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Book a complimentary 15-minute consultation to discuss your wellness goals and find the perfect treatment
            plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/about">Learn About Sophia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
