import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Heart } from "lucide-react"

const credentials = [
  {
    category: "Professional Certifications",
    icon: Award,
    items: [
      "Certified Fascial Stretch Therapist (FST Level 2)",
      "Licensed SomatIQ Breathwork Practitioner",
      "Certified Neuro-Linguistic Programming Coach",
      "Spinal Energetics Practitioner",
      "Trauma-Informed Bodywork Certification",
    ],
  },
  {
    category: "Continuing Education",
    icon: BookOpen,
    items: [
      "Advanced Fascial Release Techniques",
      "Somatic Experiencing Training",
      "Nervous System Regulation Methods",
      "Holistic Pain Management Approaches",
      "Mind-Body Integration Practices",
    ],
  },
  {
    category: "Professional Memberships",
    icon: Users,
    items: [
      "International Association of Fascial Stretch Therapists",
      "Breathwork Professional Association",
      "Holistic Health Practitioners Network",
      "Trauma-Informed Care Collective",
    ],
  },
  {
    category: "Core Values",
    icon: Heart,
    items: [
      "Compassionate, client-centered care",
      "Evidence-based holistic approaches",
      "Trauma-informed and culturally sensitive practice",
      "Commitment to ongoing professional development",
      "Collaborative approach to healing",
    ],
  },
]

export function AboutCredentials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Credentials & Professional Background
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A commitment to excellence through continuous learning and evidence-based practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
