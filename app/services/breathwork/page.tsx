import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceDescription } from "@/components/service-description"
import { WhatToExpect } from "@/components/what-to-expect"
import { PricingTiers } from "@/components/pricing-tiers"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"

const serviceData = {
  title: "SomatIQ Breathwork",
  subtitle: "Activate Your Body's Natural Healing Response",
  description:
    "SomatIQ Breathwork is a transformative practice that uses conscious breathing techniques to activate your body's innate healing intelligence, release stored trauma, and create profound shifts in your physical and emotional well-being.",
  benefits: [
    "Reduced stress and anxiety levels",
    "Improved emotional regulation",
    "Enhanced mental clarity and focus",
    "Better sleep quality",
    "Increased energy and vitality",
    "Release of stored trauma and tension",
  ],
  heroImage: "/breathwork-session-peaceful.png",
}

const expectationData = {
  title: "What to Expect During Your Breathwork Session",
  steps: [
    {
      step: "Intention Setting",
      description: "We begin by discussing your goals and setting a clear intention for your breathwork journey.",
    },
    {
      step: "Preparation",
      description:
        "You'll lie comfortably on a mat while I guide you through relaxation techniques to prepare your nervous system.",
    },
    {
      step: "Breathwork Practice",
      description:
        "Using specific breathing patterns, we'll activate your body's healing response and facilitate emotional release.",
    },
    {
      step: "Integration",
      description: "We'll close with gentle integration time and discuss your experience to maximize the benefits.",
    },
  ],
}

const pricingData = {
  tiers: [
    {
      name: "Single Session",
      price: "$120",
      duration: "60 minutes",
      features: [
        "Personalized intention setting",
        "Guided breathwork practice",
        "Integration and processing time",
        "Take-home breathing exercises",
      ],
      popular: false,
    },
    {
      name: "Healing Series",
      price: "$320",
      duration: "3 sessions",
      features: [
        "Everything in Single Session",
        "Progressive breathwork techniques",
        "Emotional processing support",
        "Custom practice recordings",
        "20% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Transformation Journey",
      price: "$600",
      duration: "6 sessions",
      features: [
        "Everything in Healing Series",
        "Advanced breathwork practices",
        "Trauma-informed approach",
        "Weekly check-in support",
        "30% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "Is breathwork safe for everyone?",
    answer:
      "Breathwork is generally safe for most people. However, it's not recommended for those with certain heart conditions, severe mental health conditions, or during pregnancy. We'll discuss your health history before beginning.",
  },
  {
    question: "What should I expect to feel during breathwork?",
    answer:
      "You may experience a range of sensations including tingling, emotional releases, vivid imagery, or deep relaxation. All experiences are normal and part of the healing process.",
  },
  {
    question: "How often should I practice breathwork?",
    answer:
      "For therapeutic benefits, I recommend weekly sessions initially, then transitioning to bi-weekly or monthly sessions. Daily personal practice using techniques learned in sessions enhances results.",
  },
  {
    question: "Can breathwork help with trauma?",
    answer:
      "Yes, breathwork can be very effective for trauma healing as it works with the nervous system to release stored trauma from the body. I use trauma-informed approaches to ensure safety throughout the process.",
  },
]

const testimonialData = [
  {
    name: "Michael Chen",
    role: "Corporate Executive",
    content:
      "The breathwork sessions with Sophia have been life-changing. I've learned to manage stress better and feel more centered in my daily life.",
    image: "/business-executive-headshot.png",
  },
  {
    name: "Lisa Martinez",
    role: "Teacher",
    content:
      "After struggling with anxiety for years, breathwork has given me tools to find calm and clarity. I sleep better and feel more emotionally balanced.",
    image: "/yoga-instructor-headshot.png",
  },
]

export default function BreathworkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceDescription data={serviceData} />
        <WhatToExpect data={expectationData} />
        <PricingTiers data={pricingData} serviceName="SomatIQ Breathwork" />
        <ServiceFAQ data={faqData} />
        <ServiceTestimonials data={testimonialData} />
        <ServiceCTA serviceName="SomatIQ Breathwork" />
      </main>
      <Footer />
    </div>
  )
}
