"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ServiceSelection } from "@/components/service-selection"
import { CalendarSelection } from "@/components/calendar-selection"
import { ClientDetails } from "@/components/client-details"
import { PaymentDetails } from "@/components/payment-details"
import { BookingConfirmation } from "@/components/booking-confirmation"
import { BookingProgress } from "@/components/booking-progress"

export type BookingStep = "service" | "calendar" | "details" | "payment" | "confirmation"

export interface BookingData {
  service: {
    name: string
    package: string
    price: string
    duration: string
  } | null
  date: string
  time: string
  client: {
    firstName: string
    lastName: string
    email: string
    phone: string
    notes: string
  }
  payment: {
    method: string
    cardLast4?: string
  } | null
}

export function BookingFlow() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<BookingStep>("service")
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    date: "",
    time: "",
    client: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    },
    payment: null,
  })

  const serviceName = searchParams.get("service")
  const packageName = searchParams.get("package")

  useEffect(() => {
    window.scrollTo(0, 0)

    if (serviceName && packageName) {
      // Pre-populate service data and skip to calendar step
      const serviceData = getServiceData(serviceName, packageName)
      if (serviceData) {
        setBookingData((prev) => ({
          ...prev,
          service: serviceData,
        }))
        setCurrentStep("calendar")
      }
    }
  }, [serviceName, packageName]) // Use extracted values as dependencies

  const getServiceData = (serviceName: string, packageName: string) => {
    const serviceMap: Record<string, any> = {
      "Fascial Stretch Therapy": {
        "Single Session": { price: "$150", duration: "90 minutes" },
        "Wellness Package": { price: "$420", duration: "3 sessions" },
        "Transformation Program": { price: "$750", duration: "6 sessions" },
      },
      "SomatIQ Breathwork": {
        "Single Session": { price: "$120", duration: "60 minutes" },
        "Healing Series": { price: "$320", duration: "3 sessions" },
        "Transformation Journey": { price: "$600", duration: "6 sessions" },
      },
      "Spinal Energetics": {
        "Single Session": { price: "$140", duration: "75 minutes" },
        "Alignment Series": { price: "$380", duration: "3 sessions" },
        "Transformation Program": { price: "$720", duration: "6 sessions" },
      },
      "Neuro-Aligned Performance Coaching": {
        "Single Session": { price: "$180", duration: "90 minutes" },
        "Performance Package": { price: "$480", duration: "3 sessions" },
        "Elite Program": { price: "$900", duration: "6 sessions" },
      },
    }

    const service = serviceMap[serviceName]
    const packageData = service?.[packageName]

    if (packageData) {
      return {
        name: serviceName,
        package: packageName,
        price: packageData.price,
        duration: packageData.duration,
      }
    }
    return null
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    const steps: BookingStep[] = ["service", "calendar", "details", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: BookingStep[] = ["service", "calendar", "details", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingProgress currentStep={currentStep} />

        <div className="mt-12">
          {currentStep === "service" && (
            <ServiceSelection
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
              preSelectedService={serviceName} // Use extracted value
              preSelectedPackage={packageName} // Use extracted value
            />
          )}
          {currentStep === "calendar" && (
            <CalendarSelection
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === "details" && (
            <ClientDetails
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === "payment" && (
            <PaymentDetails
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === "confirmation" && <BookingConfirmation bookingData={bookingData} />}
        </div>
      </div>
    </section>
  )
}
