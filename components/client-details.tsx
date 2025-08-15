"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, MessageSquare } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface ClientDetailsProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

export function ClientDetails({ bookingData, updateBookingData, onNext, onPrev }: ClientDetailsProps) {
  const [formData, setFormData] = useState({
    firstName: bookingData.client.firstName,
    lastName: bookingData.client.lastName,
    email: bookingData.client.email,
    phone: bookingData.client.phone,
    notes: bookingData.client.notes,
    newsletter: false,
    terms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleContinue = () => {
    updateBookingData({
      client: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
      },
    })
    onNext()
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.terms

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">Your Details</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Please provide your contact information to complete the booking.
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-xl font-serif flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea
                id="notes"
                placeholder="Any specific concerns, goals, or information you'd like to share..."
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="pl-10 min-h-[100px]"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              />
              <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                I'd like to receive weekly wellness tips and updates from Sophia Plank Wellness
              </Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . I understand the cancellation policy requires 24 hours notice. *
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          Back to Calendar
        </Button>
        <Button onClick={handleContinue} disabled={!isFormValid} className="bg-primary hover:bg-primary/90">
          Continue to Payment
        </Button>
      </div>
    </div>
  )
}
