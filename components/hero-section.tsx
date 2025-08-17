"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-secondary/10 overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl breathing"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl breathing" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl breathing" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'float-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent-foreground">
                <span className="w-2 h-2 bg-accent rounded-full breathing"></span>
                Where Ancient Wisdom Meets Modern Wellness
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
                <span className="block">Nurture Your</span>
                <span className="block gold-shimmer">Natural Healing</span>
                <span className="block text-primary">Journey</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl">
                Experience transformative wellness through fascial stretch therapy, breathwork, and spinal energetics. 
                Honor your body's wisdom while unlocking its infinite potential for healing and grace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-luxury text-lg px-8 py-4">
                <Link href="/services">Begin Your Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent backdrop-blur-sm"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>

            {/* Trust indicators with luxury styling */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full breathing"></div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-primary">Certified</span>
                  <br />
                  <span className="text-muted-foreground">Fascial Stretch Therapist</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full breathing" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-accent">Licensed</span>
                  <br />
                  <span className="text-muted-foreground">Breathwork Practitioner</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full breathing" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-secondary-foreground">5+ Years</span>
                  <br />
                  <span className="text-muted-foreground">Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image with luxury treatment */}
          <div className={`relative ${isVisible ? 'float-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-secondary/20 shadow-2xl">
              <img
                src="/wellness-therapy-natural-light.png"
                alt="Sophia Plank providing fascial stretch therapy in a calming wellness environment"
                className="w-full h-full object-cover"
              />
              
              {/* Luxury overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border/20">
                  <p className="text-sm font-medium text-foreground">
                    "A sacred space where healing unfolds naturally"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Luxury Wellness Experience</p>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full blur-2xl breathing"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/15 rounded-full blur-2xl breathing" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 -right-4 w-16 h-16 bg-secondary/25 rounded-full blur-xl breathing" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
