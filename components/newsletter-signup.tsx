"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center border-primary/20">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Welcome to Our Wellness Community!</h3>
              <p className="text-muted-foreground">
                Thank you for subscribing. You'll receive your first wellness tip within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-primary/20">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-serif font-bold text-foreground">Weekly Wellness Insights</CardTitle>
            <CardDescription className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join our community and receive exclusive wellness tips, breathwork techniques, and holistic health
              insights delivered to your inbox every week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 px-8" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Your privacy is important to us.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
