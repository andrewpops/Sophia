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
  title: "Neuro-Aligned Performance Coaching",
  subtitle: "Optimize Your Mind-Body Connection for Peak Performance",
  description:
    "Neuro-Aligned Performance Coaching integrates neuroscience, somatic awareness, and performance psychology to help you achieve your highest potential. We work with your nervous system to eliminate limiting patterns and create sustainable peak performance states.",
  benefits: [
    "Eliminate limiting beliefs and patterns",
    "Optimize nervous system function",
    "Enhance focus and mental clarity",
    "Improve stress resilience",
    "Develop sustainable peak performance habits",
    "Align your goals with your nervous system",
  ],
  heroImage: "/performance-coaching-session.png",
}

const expectationData = {
  title: "What to Expect During Your Performance Coaching Session",
  steps: [
    {
      step: "Assessment",
      description:
        "We'll identify your performance goals, current challenges, and nervous system patterns that may be limiting your potential.",
    },
    {
      step: "Neuro-Mapping",
      description:
        "Using somatic awareness techniques, we'll map your nervous system responses to different performance scenarios.",
    },
    {
      step: "Pattern Interruption",
      description:
        "We'll work to interrupt limiting patterns and install new, more resourceful nervous system states for peak performance.",
    },
    {
      step: "Integration",
      description:
        "You'll learn practical tools and techniques to maintain these optimal states in your daily performance contexts.",
    },
  ],
}

const pricingData = {
  tiers: [
    {
      name: "Single Session",
      price: "$180",
      duration: "90 minutes",
      features: [
        "Performance assessment and goal setting",
        "Nervous system optimization techniques",
        "Personalized performance strategies",
        "Take-home practice protocols",
      ],
      popular: false,
    },
    {
      name: "Performance Package",
      price: "$480",
      duration: "3 sessions",
      features: [
        "Everything in Single Session",
        "Progressive skill development",
        "Performance tracking and adjustments",
        "Email support between sessions",
        "11% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Elite Program",
      price: "$900",
      duration: "6 sessions",
      features: [
        "Everything in Performance Package",
        "Advanced neuro-optimization techniques",
        "Ongoing performance monitoring",
        "Lifestyle and recovery optimization",
        "17% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "What makes this different from traditional performance coaching?",
    answer:
      "Neuro-Aligned Performance Coaching works directly with your nervous system patterns rather than just mindset. We address the physiological basis of performance, creating lasting changes at the neurological level.",
  },
  {
    question: "Who can benefit from this type of coaching?",
    answer:
      "Anyone looking to optimize their performance - athletes, executives, entrepreneurs, artists, students. If you want to perform at your highest level while maintaining nervous system health, this approach can help.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Many clients notice improvements in focus and stress resilience after the first session. Deeper pattern changes typically develop over 3-6 sessions, with lasting transformation occurring through consistent practice.",
  },
  {
    question: "Do I need any special preparation?",
    answer:
      "No special preparation is needed. Come as you are, and we'll work with whatever state your nervous system is in. Wear comfortable clothing that allows for gentle movement.",
  },
]

const testimonialData = [
  {
    name: "Michael Torres",
    role: "Professional Athlete",
    content:
      "Sophia's neuro-aligned coaching helped me break through performance plateaus. I'm now competing at levels I never thought possible.",
    image: "/confident-businessman.png",
  },
  {
    name: "Jennifer Walsh",
    role: "Entrepreneur",
    content:
      "The mind-body integration techniques have revolutionized how I approach business challenges. I'm more focused, resilient, and effective than ever.",
    image: "/professional-woman-smiling.png",
  },
]

export default function NeuroAlignedPerformanceCoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceDescription data={serviceData} />
        <WhatToExpect data={expectationData} />
        <PricingTiers data={pricingData} serviceName="Neuro-Aligned Performance Coaching" />
        <ServiceFAQ data={faqData} />
        <ServiceTestimonials data={testimonialData} />
        <ServiceCTA serviceName="Neuro-Aligned Performance Coaching" />
      </main>
      <Footer />
    </div>
  )
}
