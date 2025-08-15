"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marathon Runner",
    image: "/placeholder-af9re.png",
    service: "Fascial Stretch Therapy",
    content:
      "Sophia's fascial stretch therapy completely transformed my running performance. I went from chronic hip pain to pain-free marathons in just 3 months. Her approach is gentle yet incredibly effective.",
    rating: 5,
    category: "movement",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Executive",
    image: "/placeholder-l6k13.png",
    service: "SomatIQ Breathwork",
    content:
      "The breathwork sessions with Sophia have been life-changing. I've learned to manage stress better and feel more centered in my daily life. My team has noticed the difference in my leadership style.",
    rating: 5,
    category: "breathwork",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    image: "/yoga-instructor-headshot.png",
    service: "Spinal Energetics",
    content:
      "As a yoga instructor, I thought I knew about body alignment. Sophia's spinal energetics work opened up a whole new level of awareness and healing. My own practice has deepened significantly.",
    rating: 5,
    category: "movement",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Professional Athlete",
    image: "/placeholder-opcxr.png",
    service: "Neuro-Aligned Performance Coaching",
    content:
      "The neuro-aligned performance coaching helped me break through mental barriers I didn't even know existed. My performance has reached new heights, and I feel more confident than ever.",
    rating: 5,
    category: "performance",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Teacher",
    image: "/placeholder.svg?height=80&width=80",
    service: "SomatIQ Breathwork",
    content:
      "After struggling with anxiety for years, breathwork has given me tools to find calm and clarity. I sleep better, feel more emotionally balanced, and my students have noticed the positive change.",
    rating: 5,
    category: "breathwork",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    service: "Fascial Stretch Therapy",
    content:
      "Years of sitting at a computer had left my spine feeling locked up. Fascial stretch therapy helped restore natural movement and eliminated my chronic back pain. I feel 10 years younger.",
    rating: 5,
    category: "movement",
  },
  {
    id: 7,
    name: "Jennifer Walsh",
    role: "CEO",
    image: "/placeholder.svg?height=80&width=80",
    service: "Neuro-Aligned Performance Coaching",
    content:
      "This coaching transformed how I handle high-pressure situations. I'm more focused, confident, and effective in my leadership role. The techniques I learned have become essential tools.",
    rating: 5,
    category: "performance",
  },
  {
    id: 8,
    name: "Mark Stevens",
    role: "Office Manager",
    image: "/placeholder.svg?height=80&width=80",
    service: "Spinal Energetics",
    content:
      "After years of desk work, my shoulders and neck were constantly tight. Spinal energetics with Sophia has given me my mobility back and eliminated my daily pain. I can't recommend it enough.",
    rating: 5,
    category: "movement",
  },
]

const categories = [
  { name: "All Stories", slug: "all" },
  { name: "Movement & Pain Relief", slug: "movement" },
  { name: "Breathwork & Stress", slug: "breathwork" },
  { name: "Performance & Coaching", slug: "performance" },
]

export function TestimonialsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTestimonials =
    activeCategory === "all" ? testimonials : testimonials.filter((t) => t.category === activeCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={activeCategory === category.slug ? "default" : "outline"}
              onClick={() => setActiveCategory(category.slug)}
              className={
                activeCategory === category.slug ? "bg-primary hover:bg-primary/90" : "bg-transparent hover:bg-muted"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Service Badge */}
                <Badge variant="outline" className="text-xs">
                  {testimonial.service}
                </Badge>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
