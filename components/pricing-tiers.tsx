import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  duration: string
  features: string[]
  popular: boolean
}

interface PricingData {
  tiers: PricingTier[]
}

interface PricingTiersProps {
  data: PricingData
  serviceName: string
}

export function PricingTiers({ data, serviceName }: PricingTiersProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Choose Your Package</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Flexible options designed to meet your wellness goals and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative ${
                tier.popular ? "border-primary shadow-lg scale-105" : "border-border"
              } hover:shadow-lg transition-all duration-300`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif">{tier.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{tier.price}</div>
                  <CardDescription className="text-muted-foreground">{tier.duration}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  <Link
                    href={`/book?service=${encodeURIComponent(serviceName)}&package=${encodeURIComponent(tier.name)}`}
                  >
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
