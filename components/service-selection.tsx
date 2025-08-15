"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Waves, Zap, Brain, Target, Edit } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface ServiceSelectionProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  onNext: () => void
  preSelectedService?: string | null
  preSelectedPackage?: string | null
}

const services = [
  {
    icon: Waves,
    name: "Fascial Stretch Therapy",
    packages: [
      {
        name: "Single Session",
        price: "$150",
        duration: "90 minutes",
        features: ["Comprehensive assessment", "Full-body treatment", "Home exercise program"],
      },
      {
        name: "Wellness Package",
        price: "$420",
        duration: "3 sessions",
        features: ["Everything in Single Session", "Progress tracking", "Priority booking", "15% savings"],
        popular: true,
      },
      {
        name: "Transformation Program",
        price: "$750",
        duration: "6 sessions",
        features: ["Everything in Wellness Package", "Bi-weekly assessments", "Email support", "25% savings"],
      },
    ],
  },
  {
    icon: Zap,
    name: "SomatIQ Breathwork",
    packages: [
      {
        name: "Single Session",
        price: "$120",
        duration: "60 minutes",
        features: ["Personalized intention setting", "Guided practice", "Take-home exercises"],
      },
      {
        name: "Healing Series",
        price: "$320",
        duration: "3 sessions",
        features: ["Everything in Single Session", "Progressive techniques", "Custom recordings", "20% savings"],
        popular: true,
      },
      {
        name: "Transformation Journey",
        price: "$600",
        duration: "6 sessions",
        features: ["Everything in Healing Series", "Advanced practices", "Weekly support", "30% savings"],
      },
    ],
  },
  {
    icon: Brain,
    name: "Spinal Energetics",
    packages: [
      {
        name: "Single Session",
        price: "$140",
        duration: "75 minutes",
        features: ["Spinal assessment", "Gentle treatment", "Integration time"],
      },
      {
        name: "Alignment Series",
        price: "$380",
        duration: "3 sessions",
        features: ["Everything in Single Session", "Progressive realignment", "Home care tips", "18% savings"],
        popular: true,
      },
      {
        name: "Transformation Program",
        price: "$720",
        duration: "6 sessions",
        features: ["Everything in Alignment Series", "Advanced techniques", "Lifestyle coaching", "28% savings"],
      },
    ],
  },
  {
    icon: Target,
    name: "Neuro-Aligned Performance Coaching",
    packages: [
      {
        name: "Single Session",
        price: "$180",
        duration: "90 minutes",
        features: ["Performance assessment", "Optimization work", "Practice protocols"],
      },
      {
        name: "Performance Package",
        price: "$480",
        duration: "3 sessions",
        features: ["Everything in Single Session", "Skill development", "Email support", "15% savings"],
        popular: true,
      },
      {
        name: "Elite Program",
        price: "$900",
        duration: "6 sessions",
        features: ["Everything in Performance Package", "Advanced techniques", "Competition prep", "25% savings"],
      },
    ],
  },
]

export function ServiceSelection({
  bookingData,
  updateBookingData,
  onNext,
  preSelectedService,
  preSelectedPackage,
}: ServiceSelectionProps) {
  const handleServiceSelect = (serviceName: string, packageData: any) => {
    updateBookingData({
      service: {
        name: serviceName,
        package: packageData.name,
        price: packageData.price,
        duration: packageData.duration,
      },
    })
    onNext()
  }

  if (preSelectedService && bookingData.service) {
    const selectedService = services.find((s) => s.name === preSelectedService)
    if (selectedService) {
      return (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold text-foreground">Confirm Your Selection</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You've selected {preSelectedService}. You can change your package below or continue to scheduling.
            </p>
          </div>

          {/* Current Selection */}
          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{bookingData.service.name}</CardTitle>
                    <CardDescription>
                      {bookingData.service.package} - {bookingData.service.price}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateBookingData({ service: null })}
                  className="flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Change
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Package Options for Selected Service */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-foreground">Available Packages:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {selectedService.packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    pkg.name === bookingData.service?.package
                      ? "border-primary shadow-md ring-2 ring-primary/20"
                      : pkg.popular
                        ? "border-primary shadow-md scale-105"
                        : "border-border"
                  }`}
                  onClick={() => handleServiceSelect(selectedService.name, pkg)}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  {pkg.name === bookingData.service?.package && (
                    <Badge className="absolute -top-3 right-4 bg-green-500 text-white">Selected</Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-serif">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <CardDescription className="text-muted-foreground">{pkg.duration}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.name === bookingData.service?.package
                          ? "bg-green-500 hover:bg-green-600"
                          : pkg.popular
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      }`}
                    >
                      {pkg.name === bookingData.service?.package ? "Selected" : "Select Package"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={onNext} className="bg-primary hover:bg-primary/90 px-8" disabled={!bookingData.service}>
              Continue to Scheduling
            </Button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">Choose Your Service</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Select the service and package that best fits your wellness goals.
        </p>
      </div>

      <div className="space-y-12">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <div key={service.name} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">{service.name}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {service.packages.map((pkg) => (
                  <Card
                    key={pkg.name}
                    className={`relative cursor-pointer hover:shadow-lg transition-all duration-300 ${
                      pkg.popular ? "border-primary shadow-md scale-105" : "border-border"
                    }`}
                    onClick={() => handleServiceSelect(service.name, pkg)}
                  >
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl font-serif">{pkg.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                        <CardDescription className="text-muted-foreground">{pkg.duration}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        }`}
                      >
                        Select Package
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
