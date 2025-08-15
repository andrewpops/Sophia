interface ServiceHeroData {
  title: string
  subtitle: string
  description: string
  heroImage: string
}

interface ServiceHeroProps {
  data: ServiceHeroData
}

export function ServiceHero({ data }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                {data.title}
              </h1>
              <p className="text-2xl text-primary font-medium">{data.subtitle}</p>
              <p className="text-xl text-muted-foreground leading-relaxed">{data.description}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/wellness-therapy-natural-light.png"
                alt={`${data.title} treatment session`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
