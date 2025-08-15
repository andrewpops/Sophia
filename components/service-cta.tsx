import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCTAProps {
  serviceName: string
}

export function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take the first step towards better health and book your {serviceName} session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href={`/contact?service=${encodeURIComponent(serviceName)}`}>Book Your Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
