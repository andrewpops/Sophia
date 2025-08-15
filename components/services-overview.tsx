"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Zap, Brain, Target } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "Fascial Stretch Therapy",
    description:
      "Gentle, assisted stretching that targets the fascia to improve mobility, reduce pain, and enhance performance.",
    href: "/services/fascial-stretch-therapy",
  },
  {
    icon: Zap,
    title: "SomatIQ Breathwork",
    description:
      "Transformative breathing techniques that activate your body's natural healing response and reduce stress.",
    href: "/services/breathwork",
  },
  {
    icon: Brain,
    title: "Spinal Energetics",
    description: "Holistic approach to spinal health that combines energy work with physical alignment techniques.",
    href: "/services/spinal-energetics",
  },
  {
    icon: Target,
    title: "Neuro-Aligned Performance Coaching",
    description:
      "Personalized coaching that aligns your nervous system with your performance goals for optimal results.",
    href: "/services/performance-coaching",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Holistic Wellness Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover personalized treatments designed to restore balance, enhance mobility, and unlock your body's
            natural healing potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={service.href} onClick={() => window.scrollTo(0, 0)}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
