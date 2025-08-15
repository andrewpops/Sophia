"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Lock, Shield } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface PaymentDetailsProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

export function PaymentDetails({ bookingData, updateBookingData, onNext, onPrev }: PaymentDetailsProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingZip: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock successful payment
    updateBookingData({
      payment: {
        method: "Credit Card",
        cardLast4: paymentData.cardNumber.slice(-4),
      },
    })

    setIsProcessing(false)
    onNext()
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">Secure Payment</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Complete your booking with our secure payment system.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl font-serif flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Card Number */}
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentData.cardNumber}
                onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
                maxLength={19}
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={paymentData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", formatExpiryDate(e.target.value))}
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value.replace(/[^0-9]/g, ""))}
                  maxLength={4}
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name *</Label>
              <Input
                id="cardholderName"
                placeholder="John Doe"
                value={paymentData.cardholderName}
                onChange={(e) => handleInputChange("cardholderName", e.target.value)}
              />
            </div>

            {/* Billing ZIP */}
            <div className="space-y-2">
              <Label htmlFor="billingZip">Billing ZIP Code *</Label>
              <Input
                id="billingZip"
                placeholder="12345"
                value={paymentData.billingZip}
                onChange={(e) => handleInputChange("billingZip", e.target.value)}
              />
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Secure Payment</p>
                <p>Your payment information is encrypted and secure. We use industry-standard SSL encryption.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl font-serif">Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Service Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground">{bookingData.service?.name}</h3>
                  <p className="text-sm text-muted-foreground">{bookingData.service?.package}</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">{bookingData.service?.price}</Badge>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{bookingData.service?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>
                    {bookingData.date &&
                      new Date(bookingData.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span>{bookingData.time}</span>
                </div>
              </div>
            </div>

            {/* Client Details */}
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-foreground mb-2">Client Information</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  {bookingData.client.firstName} {bookingData.client.lastName}
                </p>
                <p>{bookingData.client.email}</p>
                {bookingData.client.phone && <p>{bookingData.client.phone}</p>}
              </div>
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">{bookingData.service?.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Payment will be processed securely through Stripe</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} disabled={isProcessing} className="bg-transparent">
          Back to Details
        </Button>
        <Button
          onClick={handlePayment}
          disabled={
            isProcessing ||
            !paymentData.cardNumber ||
            !paymentData.expiryDate ||
            !paymentData.cvv ||
            !paymentData.cardholderName ||
            !paymentData.billingZip
          }
          className="bg-primary hover:bg-primary/90 min-w-[140px]"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Complete Booking
            </div>
          )}
        </Button>
      </div>
    </div>
  )
}
