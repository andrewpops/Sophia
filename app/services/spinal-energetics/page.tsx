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
  title: "Spinal Energetics",
  subtitle: "Restore Your Spine's Natural Energy Flow",
  description:
    "Spinal Energetics is a holistic healing modality that works with the spine as the central channel for life force energy. Through gentle touch and energy work, we restore natural alignment and activate your body's innate healing wisdom.",
  benefits: [
    "Improved spinal alignment and posture",
    "Enhanced nervous system function",
    "Increased energy flow throughout the body",
    "Reduced chronic pain and tension",
    "Better emotional balance and clarity",
    "Deeper connection to your body's wisdom",
  ],
  heroImage: "/spinal-energetics-session.png",
}

const expectationData = {
  title: "What to Expect During Your Spinal Energetics Session",
  steps: [
    {
      step: "Energy Assessment",
      description: "We begin by assessing your spinal energy patterns and identifying areas of blockage or imbalance.",
    },
    {
      step: "Gentle Contact",
      description: "Using light touch along your spine, I'll connect with your body's natural healing intelligence.",
    },
    {
      step: "Energy Activation",
      description:
        "Through specific techniques, we'll activate your spine's natural movement and energy flow patterns.",
    },
    {
      step: "Integration",
      description: "We'll allow time for your nervous system to integrate the changes and discuss your experience.",
    },
  ],
}

const pricingData = {
  tiers: [
    {
      name: "Single Session",
      price: "$140",
      duration: "75 minutes",
      features: [
        "Comprehensive spinal assessment",
        "Gentle spinal energetics treatment",
        "Nervous system integration time",
        "Personalized aftercare guidance",
      ],
      popular: false,
    },
    {
      name: "Alignment Series",
      price: "$380",
      duration: "3 sessions",
      features: [
        "Everything in Single Session",
        "Progressive spinal realignment",
        "Energy pattern tracking",
        "Home care recommendations",
        "18% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Transformation Program",
      price: "$720",
      duration: "6 sessions",
      features: [
        "Everything in Alignment Series",
        "Advanced energy work techniques",
        "Lifestyle and posture coaching",
        "Ongoing support between sessions",
        "28% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "What is Spinal Energetics exactly?",
    answer:
      "Spinal Energetics is a healing modality that works with the spine as the central nervous system's pathway. It combines gentle touch, energy work, and the body's natural healing intelligence to restore balance and alignment.",
  },
  {
    question: "Is any pressure applied to the spine?",
    answer:
      "No, Spinal Energetics uses very gentle, light touch. There's no manipulation, cracking, or forceful pressure applied. The work is done through subtle energy contact and allowing the body's natural movement patterns.",
  },
  {
    question: "How is this different from chiropractic care?",
    answer:
      "While chiropractic focuses on structural adjustments, Spinal Energetics works with the energetic and nervous system aspects of spinal health. It's complementary to chiropractic care and focuses on the body's innate healing wisdom.",
  },
  {
    question: "What conditions can Spinal Energetics help with?",
    answer:
      "It can help with chronic pain, postural issues, nervous system imbalances, stress-related tension, and overall energy flow. It's particularly effective for those seeking a gentle, holistic approach to spinal health.",
  },
]

const testimonialData = [
  {
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    content:
      "As a yoga instructor, I thought I knew about body alignment. Sophia's spinal energetics work opened up a whole new level of awareness and healing.",
    image: "/peaceful-woman.png",
  },
  {
    name: "Robert Kim",
    role: "Software Developer",
    content:
      "Years of sitting at a computer had left my spine feeling locked up. Spinal Energetics helped restore natural movement and eliminated my chronic back pain.",
    image: "/confident-businessman.png",
  },
]

export default function SpinalEnergeticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceDescription data={serviceData} />
        <WhatToExpect data={expectationData} />
        <PricingTiers data={pricingData} serviceName="Spinal Energetics" />
        <ServiceFAQ data={faqData} />
        <ServiceTestimonials data={testimonialData} />
        <ServiceCTA serviceName="Spinal Energetics" />
      </main>
      <Footer />
    </div>
  )
}
