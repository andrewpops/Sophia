import { Card, CardContent } from "@/components/ui/card"

const philosophyPrinciples = [
  {
    title: "The Body's Innate Wisdom",
    description:
      "I believe every person possesses an innate healing intelligence. My role is to create the conditions for this wisdom to emerge and guide the healing process.",
  },
  {
    title: "Holistic Integration",
    description:
      "True wellness addresses the whole person – physical, emotional, mental, and spiritual. Lasting change happens when we work with all aspects of our being.",
  },
  {
    title: "Trauma-Informed Care",
    description:
      "I approach every client with sensitivity to their unique experiences, creating a safe space where healing can unfold at their own pace and comfort level.",
  },
  {
    title: "Collaborative Partnership",
    description:
      "Healing is a collaborative journey. I work with clients as partners, honoring their expertise about their own bodies while sharing my professional knowledge and skills.",
  },
]

export function AboutPhilosophy() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">My Healing Philosophy</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The core principles that guide my approach to wellness and healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {philosophyPrinciples.map((principle, index) => (
            <Card key={index} className="border-border bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-serif italic text-foreground max-w-4xl mx-auto leading-relaxed">
            "Healing is not about fixing what's broken – it's about remembering what's whole. Every person I work with
            already contains everything they need to heal and thrive."
          </blockquote>
          <cite className="block mt-6 text-lg text-primary font-medium">— Sophia Plank</cite>
        </div>
      </div>
    </section>
  )
}
