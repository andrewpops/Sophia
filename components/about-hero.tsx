export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Meet <span className="text-primary">Sophia Plank</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                Certified Fascial Stretch Therapist & Holistic Wellness Practitioner
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dedicated to helping individuals discover their body's natural healing potential through innovative
                therapeutic approaches and compassionate care.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Specializations</div>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/wellness-practitioner.png"
                alt="Sophia Plank, certified fascial stretch therapist and holistic wellness practitioner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
