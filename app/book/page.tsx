export const dynamic = "force-dynamic"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingHero } from "@/components/booking-hero"
import { BookingFlow } from "@/components/booking-flow"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BookingHero />
        <BookingFlow />
      </main>
      <Footer />
    </div>
  )
}
