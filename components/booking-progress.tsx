import { CheckCircle } from "lucide-react"
import type { BookingStep } from "@/components/booking-flow"

interface BookingProgressProps {
  currentStep: BookingStep
}

const steps = [
  { key: "service", label: "Service", description: "Choose your treatment" },
  { key: "calendar", label: "Date & Time", description: "Select appointment" },
  { key: "details", label: "Your Details", description: "Contact information" },
  { key: "payment", label: "Payment", description: "Secure checkout" },
  { key: "confirmation", label: "Confirmation", description: "Booking complete" },
]

export function BookingProgress({ currentStep }: BookingProgressProps) {
  const currentIndex = steps.findIndex((step) => step.key === currentStep)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex
          const isCurrent = index === currentIndex
          const isUpcoming = index > currentIndex

          return (
            <div key={step.key} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {/* Step Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    isCompleted
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCurrent
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-border text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? "bg-primary" : "bg-border"}`} />
                )}
              </div>

              {/* Step Label */}
              <div className="mt-3 text-center">
                <div
                  className={`text-sm font-medium ${
                    isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1 hidden sm:block">{step.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
