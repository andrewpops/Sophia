import { CheckCircle } from "lucide-react"

interface ServiceDescriptionData {
  benefits: string[]
}

interface ServiceDescriptionProps {
  data: ServiceDescriptionData
}

export function ServiceDescription({ data }: ServiceDescriptionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Benefits You'll Experience</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how this treatment can transform your well-being and enhance your quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
