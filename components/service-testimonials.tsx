import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  image: string
}

interface ServiceTestimonialsProps {
  data: Testimonial[]
}

export function ServiceTestimonials({ data }: ServiceTestimonialsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from clients who have experienced transformative results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-lg">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
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
