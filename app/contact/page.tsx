import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactFAQ } from "@/components/contact-faq"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  )
}
