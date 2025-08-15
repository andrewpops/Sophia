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
    "Release stored trauma and emotional blockages",
    "Activate your body's natural healing response",
    "Improve nervous system regulation",
    "Enhance mental clarity and focus",
    "Reduce anxiety and stress levels",
    "Deepen your mind-body connection",
  ],
  heroImage: "/wellness-therapy-natural-light.png",
}

const expectationData = {
  title: "What to Expect During Your SomatIQ Breathwork Session",
  steps: [
    {
      step: "Preparation",
      description:
        "We begin with a brief consultation to understand your intentions and any areas of focus for the session.",
    },
    {
      step: "Breathing Technique",
      description:
        "I'll guide you through specific conscious breathing patterns designed to activate your body's healing response.",
    },
    {
      step: "Somatic Awareness",
      description:
        "As emotions and sensations arise, we'll work with them somatically, allowing your body to process and release.",
    },
    {
      step: "Integration",
      description:
        "We'll close with gentle integration time and discuss your experience and any insights that emerged.",
    },
  ],
}

const pricingData = {
  tiers: [
    {
      name: "Single Session",
      price: "$130",
      duration: "90 minutes",
      features: [
        "Personalized breathwork session",
        "Somatic processing and integration",
        "Take-home breathing techniques",
        "Post-session support guidance",
      ],
      popular: false,
    },
    {
      name: "Healing Series",
      price: "$360",
      duration: "3 sessions",
      features: [
        "Everything in Single Session",
        "Progressive breathwork techniques",
        "Trauma-informed somatic support",
        "Personalized practice plan",
        "17% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Transformation Journey",
      price: "$650",
      duration: "6 sessions",
      features: [
        "Everything in Healing Series",
        "Advanced breathwork practices",
        "Ongoing emotional support",
        "Integration coaching",
        "25% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "What is SomatIQ Breathwork?",
    answer:
      "SomatIQ Breathwork combines conscious breathing techniques with somatic awareness to help release stored trauma, regulate the nervous system, and activate your body's natural healing intelligence.",
  },
  {
    question: "Is breathwork safe for everyone?",
    answer:
      "While breathwork is generally safe, it can bring up intense emotions and sensations. We'll discuss any health conditions or concerns before beginning, and I'll guide you through the process safely.",
  },
  {
    question: "What should I expect during a session?",
    answer:
      "You may experience a range of sensations, emotions, or insights. Some people feel energized, others deeply relaxed. Each session is unique, and I'll support you through whatever arises.",
  },
  {
    question: "How often should I do breathwork?",
    answer:
      "For therapeutic benefits, I recommend starting with weekly sessions for 3-4 weeks, then spacing them out based on your needs and goals. Some clients benefit from monthly maintenance sessions.",
  },
]

const testimonialData = [
  {
    name: "Lisa Chen",
    role: "Therapist",
    content:
      "SomatIQ breathwork with Sophia helped me process years of stored emotions. I feel lighter, clearer, and more connected to myself than ever before.",
    image: "/athletic-woman-smiling.png",
  },
  {
    name: "David Martinez",
    role: "Executive",
    content:
      "The breathwork sessions have been transformational for managing my stress and anxiety. I now have tools I can use anywhere to regulate my nervous system.",
    image: "/mature-man-calm.png",
  },
]

export default function SomatIQBreathworkPage() {
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
