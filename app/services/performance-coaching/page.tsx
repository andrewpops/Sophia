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
    "Enhanced focus and mental clarity",
    "Improved stress management under pressure",
    "Breakthrough limiting beliefs and patterns",
    "Optimized mind-body coordination",
    "Increased confidence and resilience",
    "Sustainable high-performance habits",
  ],
  heroImage: "/performance-coaching-session.png",
}

const expectationData = {
  title: "What to Expect During Your Performance Coaching Session",
  steps: [
    {
      step: "Performance Assessment",
      description:
        "We identify your current performance patterns, strengths, and areas for optimization through comprehensive evaluation.",
    },
    {
      step: "Nervous System Mapping",
      description:
        "Using somatic awareness techniques, we map how your nervous system responds to performance demands.",
    },
    {
      step: "Neuro-Alignment Work",
      description:
        "Through targeted exercises, we align your nervous system with your performance goals and eliminate limiting patterns.",
    },
    {
      step: "Integration & Strategy",
      description:
        "We develop personalized strategies and practices to maintain your optimized performance state in daily life.",
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
        "Comprehensive performance assessment",
        "Nervous system optimization work",
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
        "15% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Elite Program",
      price: "$900",
      duration: "6 sessions",
      features: [
        "Everything in Performance Package",
        "Advanced neuro-alignment techniques",
        "Competition/presentation preparation",
        "Ongoing performance optimization",
        "25% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "Who can benefit from performance coaching?",
    answer:
      "Anyone looking to optimize their performance - athletes, executives, entrepreneurs, artists, students, or professionals facing high-pressure situations. It's particularly effective for those experiencing performance anxiety or plateaus.",
  },
  {
    question: "How is this different from traditional coaching?",
    answer:
      "Neuro-Aligned Performance Coaching works directly with your nervous system and body awareness, not just mindset. We address the physiological patterns that impact performance, creating lasting change at a deeper level.",
  },
  {
    question: "What techniques are used in the sessions?",
    answer:
      "We use a combination of somatic awareness exercises, nervous system regulation techniques, visualization, breathwork, and neurofeedback principles to optimize your performance state.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Many clients notice improvements in focus and stress management after the first session. Significant performance breakthroughs typically occur within 3-6 sessions as new neural pathways become established.",
  },
]

const testimonialData = [
  {
    name: "David Thompson",
    role: "Professional Athlete",
    content:
      "The neuro-aligned performance coaching helped me break through mental barriers I didn't even know existed. My performance has reached new heights.",
    image: "/male-athlete-headshot.png",
  },
  {
    name: "Jennifer Walsh",
    role: "CEO",
    content:
      "This coaching transformed how I handle high-pressure situations. I'm more focused, confident, and effective in my leadership role.",
    image: "/woman-athlete-headshot.png",
  },
]

export default function PerformanceCoachingPage() {
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
