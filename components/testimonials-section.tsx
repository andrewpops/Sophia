import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    image: "/placeholder-af9re.png",
    content:
      "Sophia's fascial stretch therapy completely transformed my running performance. I went from chronic hip pain to pain-free marathons in just 3 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Corporate Executive",
    image: "/placeholder-l6k13.png",
    content:
      "The breathwork sessions with Sophia have been life-changing. I've learned to manage stress better and feel more centered in my daily life.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    image: "/yoga-instructor-headshot.png",
    content:
      "As a yoga instructor, I thought I knew about body alignment. Sophia's spinal energetics work opened up a whole new level of awareness and healing.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Professional Athlete",
    image: "/placeholder-opcxr.png",
    content:
      "The neuro-aligned performance coaching helped me break through mental barriers I didn't even know existed. My performance has reached new heights.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from people who have transformed their well-being through our holistic approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-sm">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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
