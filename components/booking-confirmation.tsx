import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, User, Mail, Phone, CreditCard } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface BookingConfirmationProps {
  bookingData: BookingData
}

export function BookingConfirmation({ bookingData }: BookingConfirmationProps) {
  const bookingId = `WB-${Date.now().toString().slice(-6)}`

  return (
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <CheckCircle className="w-16 h-16 text-primary mx-auto" />
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Booking Confirmed!</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your wellness session has been successfully booked. You'll receive a confirmation email shortly.
          </p>
        </div>
        <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">Booking ID: {bookingId}</Badge>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl font-serif text-center">Appointment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Service Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Service & Package</h3>
                  <p className="text-muted-foreground">{bookingData.service?.name}</p>
                  <p className="text-sm text-muted-foreground">{bookingData.service?.package}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Date & Time</h3>
                  <p className="text-muted-foreground">
                    {bookingData.date &&
                      new Date(bookingData.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {bookingData.time} ({bookingData.service?.duration})
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Client Information</h3>
                  <p className="text-muted-foreground">
                    {bookingData.client.firstName} {bookingData.client.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">{bookingData.client.email}</p>
                  {bookingData.client.phone && (
                    <p className="text-sm text-muted-foreground">{bookingData.client.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Payment</h3>
                  <p className="text-muted-foreground">{bookingData.service?.price}</p>
                  <p className="text-sm text-muted-foreground">
                    {bookingData.payment?.method} ending in {bookingData.payment?.cardLast4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-xl font-serif">What Happens Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Confirmation Email</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive a detailed confirmation email with appointment details and preparation instructions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Preparation</h3>
                <p className="text-muted-foreground text-sm">
                  Wear comfortable, stretchy clothing and arrive 10 minutes early for your first session.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Reminder</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive a reminder 24 hours before your appointment with location details.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/">Return to Homepage</Link>
        </Button>
        <Button asChild variant="outline" className="bg-transparent">
          <Link href="/services">Explore Other Services</Link>
        </Button>
      </div>

      {/* Contact Information */}
      <Card className="border-border bg-muted/20">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold text-foreground mb-2">Questions about your appointment?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Feel free to reach out if you have any questions or need to make changes to your booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4 text-primary" />
              <span>hello@sophiaplank.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-4 h-4 text-primary" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
