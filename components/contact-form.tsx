"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredTime: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border-primary/20">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Message Sent Successfully!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. I'll get back to you within 24 hours to discuss your wellness goals and
                answer any questions you may have.
              </p>
              <p className="text-sm text-muted-foreground">
                In the meantime, feel free to explore my services or follow me on social media for wellness tips and
                insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the form below and I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service">Service of Interest</Label>
                <Select onValueChange={(value) => handleInputChange("service", value)} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Free Consultation</SelectItem>
                    <SelectItem value="fascial-stretch">Fascial Stretch Therapy</SelectItem>
                    <SelectItem value="breathwork">SomatIQ Breathwork</SelectItem>
                    <SelectItem value="spinal-energetics">Spinal Energetics</SelectItem>
                    <SelectItem value="performance-coaching">Neuro-Aligned Performance Coaching</SelectItem>
                    <SelectItem value="not-sure">Not Sure - Help Me Choose</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                <Select onValueChange={(value) => handleInputChange("preferredTime", value)} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                    <SelectItem value="flexible">I'm flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your wellness goals, any specific concerns, or questions you have..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  disabled={isLoading}
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  disabled={isLoading}
                />
                <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  I'd like to receive weekly wellness tips and updates
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. Your information will never be shared with
                third parties.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
