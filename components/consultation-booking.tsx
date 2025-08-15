"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Phone, CheckCircle } from "lucide-react"

export function ConsultationBooking() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const availableTimes = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your booking system
    console.log("[v0] Consultation booking submitted:", { selectedDate, selectedTime, formData })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Consultation Scheduled!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for booking your free consultation. You'll receive a confirmation email shortly with the call
            details.
          </p>
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-2">Your Consultation Details:</h3>
            <p className="text-muted-foreground">
              {selectedDate} at {selectedTime} - 15 minute phone call
            </p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-serif font-bold text-foreground">Book Your Free Consultation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Schedule a complimentary 15-minute phone call to discuss your wellness goals and how I can help you achieve
            them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Info */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Free 15-Minute Consultation
                </CardTitle>
                <CardDescription>A no-pressure conversation to understand your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>15 minutes via phone call</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Available Monday - Friday</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-foreground">What We'll Discuss:</h3>
              <ul className="space-y-3">
                {[
                  "Your current wellness challenges",
                  "Your health and movement goals",
                  "Which services might be right for you",
                  "Next steps for your wellness journey",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Call</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="text-xs"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are your main wellness goals? (Optional)</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Tell me a bit about what you're hoping to achieve..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!selectedDate || !selectedTime}
                >
                  Schedule Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
