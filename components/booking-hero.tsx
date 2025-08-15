export function BookingHero() {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            Book Your <span className="text-primary">Wellness Session</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Take the first step towards better health and well-being. Choose your service, select your preferred time,
            and secure your appointment in just a few clicks.
          </p>
        </div>
      </div>
    </section>
  )
}
