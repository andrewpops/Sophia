"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Zap, Brain, Target, Clock, Users } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "Fascial Stretch Therapy",
    description:
      "Gentle, assisted stretching that targets the fascia to improve mobility, reduce pain, and enhance athletic performance.",
    benefits: ["Improved flexibility", "Pain reduction", "Enhanced performance", "Better posture"],
    duration: "60-90 minutes",
    suitableFor: "Athletes, office workers, chronic pain sufferers",
    href: "/services/fascial-stretch-therapy",
  },
  {
    icon: Zap,
    title: "SomatIQ Breathwork",
    description:
      "Transformative breathing techniques that activate your body's natural healing response and reduce stress.",
    benefits: ["Stress reduction", "Improved focus", "Emotional release", "Better sleep"],
    duration: "45-60 minutes",
    suitableFor: "Anyone seeking stress relief and emotional balance",
    href: "/services/breathwork",
  },
  {
    icon: Brain,
    title: "Spinal Energetics",
    description: "Holistic approach to spinal health that combines energy work with physical alignment techniques.",
    benefits: ["Spinal alignment", "Energy flow", "Nervous system balance", "Pain relief"],
    duration: "60 minutes",
    suitableFor: "Those with spinal issues or seeking energy balance",
    href: "/services/spinal-energetics",
  },
  {
    icon: Target,
    title: "Neuro-Aligned Performance Coaching",
    description:
      "Personalized coaching that aligns your nervous system with your performance goals for optimal results.",
    benefits: ["Peak performance", "Mental clarity", "Goal achievement", "Stress management"],
    duration: "90 minutes",
    suitableFor: "Professionals, athletes, high achievers",
    href: "/services/performance-coaching",
  },
]

export function AllServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Session Info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      Individual sessions
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Best for:</span> {service.suitableFor}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={service.href} onClick={() => window.scrollTo(0, 0)}>
                      Learn More & Book
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
