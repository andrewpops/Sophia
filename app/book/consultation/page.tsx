import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsultationBooking } from "@/components/consultation-booking"

export default function ConsultationBookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ConsultationBooking />
      </main>
      <Footer />
    </div>
  )
}
