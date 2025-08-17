"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Zap, Brain, Target } from "lucide-react"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Waves,
    title: "Fascial Stretch Therapy",
    description:
      "Like morning dew on sage leaves, gentle assisted stretching awakens your fascia's natural flow. Release deep tension patterns and restore graceful movement.",
    href: "/services/fascial-stretch-therapy",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "SomatIQ Breathwork",
    description:
      "Ancient breathing wisdom meets modern neuroscience. Activate your body's innate healing intelligence through transformative breath practices.",
    href: "/services/breathwork",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Brain,
    title: "Spinal Energetics",
    description: "Your spine as the river of life force. Gentle energy work that honors your nervous system's deep wisdom and natural alignment.",
    href: "/services/spinal-energetics",
    gradient: "from-secondary/15 to-secondary/8",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Target,
    title: "Neuro-Aligned Performance Coaching",
    description:
      "Where intention meets embodiment. Personalized coaching that creates harmony between your nervous system and your highest potential.",
    href: "/services/performance-coaching",
    gradient: "from-primary/8 to-accent/8",
    iconBg: "bg-gradient-to-br from-primary/15 to-accent/15",
    iconColor: "text-foreground",
  },
]

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, cardIndex) => {
              setTimeout(() => {
                card.classList.add('float-up')
              }, cardIndex * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl breathing" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/4 rounded-full blur-3xl breathing" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full text-sm font-medium text-accent-foreground">
            <span className="w-2 h-2 bg-accent rounded-full breathing"></span>
            Holistic Wellness Modalities
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="block">Crafted Healing</span>
            <span className="block gold-shimmer">Experiences</span>
          </h2>
          
          <p className="text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            Each modality is a sacred offering, thoughtfully designed to honor your unique journey toward wholeness. 
            Where ancient wisdom meets modern understanding, healing unfolds naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.title} 
                className={`service-card opacity-0 luxury-card group bg-gradient-to-br ${service.gradient} border-border/10 backdrop-blur-sm`}
              >
                <CardHeader className="space-y-6 pb-6">
                  <div className={`w-20 h-20 mx-auto ${service.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 breathing`} style={{ animationDelay: `${index * 0.5}s` }}>
                    <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-center leading-relaxed text-lg text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex justify-center">
                    <Button
                      asChild
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent backdrop-blur-sm border-border/30 px-8 py-3"
                    >
                      <Link href={service.href} onClick={() => window.scrollTo(0, 0)}>
                        Explore This Journey
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-luxury text-lg px-8 py-4">
              <Link href="/services">View All Services</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-accent/30 hover:border-accent hover:bg-accent/5 bg-transparent backdrop-blur-sm"
            >
              <Link href="/contact">Begin Your Healing Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
