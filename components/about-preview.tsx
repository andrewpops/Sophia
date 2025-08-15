"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/wellness-practitioner.png"
                alt="Sophia Plank, certified fascial stretch therapist and breathwork practitioner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Meet Sophia Plank</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Certified Fascial Stretch Therapist & Holistic Wellness Practitioner
              </p>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                With over 5 years of experience in holistic wellness, I'm passionate about helping individuals discover
                their body's natural healing potential through innovative therapeutic approaches.
              </p>
              <p>
                My journey began with fascial stretch therapy, where I witnessed firsthand the transformative power of
                targeted movement and breathwork. This led me to expand my practice to include SomatIQ breathwork and
                neuro-linguistic programming.
              </p>
              <p>
                I believe that true wellness comes from addressing the whole person – body, mind, and spirit – through
                personalized, evidence-based treatments.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-foreground">Certifications & Training</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Certified Fascial Stretch Therapist (FST Level 2)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Licensed SomatIQ Breathwork Practitioner
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Certified Neuro-Linguistic Programming Coach
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Spinal Energetics Practitioner
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about" onClick={() => window.scrollTo(0, 0)}>
                Read My Full Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
