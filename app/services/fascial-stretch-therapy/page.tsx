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
  title: "Fascial Stretch Therapy",
  subtitle: "Unlock Your Body's Natural Mobility",
  description:
    "Fascial Stretch Therapy (FST) is a unique, complete and complementary system of table-based assisted stretching, focusing on the fascia and joint capsule as the key elements in achieving optimal flexibility, strength, performance and pain relief.",
  benefits: [
    "Improved flexibility and range of motion",
    "Reduced muscle tension and pain",
    "Enhanced athletic performance",
    "Better posture and alignment",
    "Increased circulation and lymphatic drainage",
    "Faster recovery from workouts",
  ],
  heroImage: "/fascial-stretch-session.png",
}

const expectationData = {
  title: "What to Expect During Your FST Session",
  steps: [
    {
      step: "Assessment",
      description: "We begin with a comprehensive movement assessment to identify areas of restriction and imbalance.",
    },
    {
      step: "Preparation",
      description: "You'll remain fully clothed in comfortable attire while lying on a specialized treatment table.",
    },
    {
      step: "Treatment",
      description:
        "Using gentle traction and oscillation, I'll guide your body through pain-free stretches targeting the fascia.",
    },
    {
      step: "Integration",
      description:
        "We'll conclude with movement integration exercises to help your body maintain the new range of motion.",
    },
  ],
}

const pricingData = {
  tiers: [
    {
      name: "Single Session",
      price: "$150",
      duration: "90 minutes",
      features: [
        "Comprehensive movement assessment",
        "Full-body fascial stretch therapy",
        "Personalized home exercise program",
        "Post-session movement integration",
      ],
      popular: false,
    },
    {
      name: "Wellness Package",
      price: "$420",
      duration: "3 sessions",
      features: [
        "Everything in Single Session",
        "Progress tracking and adjustments",
        "Nutritional guidance for recovery",
        "Priority booking",
        "15% savings vs single sessions",
      ],
      popular: true,
    },
    {
      name: "Transformation Program",
      price: "$750",
      duration: "6 sessions",
      features: [
        "Everything in Wellness Package",
        "Bi-weekly progress assessments",
        "Customized maintenance program",
        "Email support between sessions",
        "25% savings vs single sessions",
      ],
      popular: false,
    },
  ],
}

const faqData = [
  {
    question: "What should I wear to my FST session?",
    answer:
      "Wear comfortable, stretchy clothing that allows for movement. Athletic wear or yoga clothes work perfectly. You'll remain fully clothed throughout the session.",
  },
  {
    question: "Is FST painful?",
    answer:
      "FST should never be painful. The stretches are performed within your comfort zone and pain-free range of motion. You should feel a gentle stretch sensation, but never pain.",
  },
  {
    question: "How often should I receive FST?",
    answer:
      "For optimal results, I recommend starting with weekly sessions for 4-6 weeks, then transitioning to bi-weekly or monthly maintenance sessions based on your goals and response to treatment.",
  },
  {
    question: "Can FST help with chronic pain?",
    answer:
      "Yes, FST can be very effective for chronic pain conditions, especially those related to muscle tension, poor posture, or movement restrictions. However, it's important to have any underlying conditions evaluated by a healthcare provider.",
  },
]

const testimonialData = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    content:
      "Sophia's fascial stretch therapy completely transformed my running performance. I went from chronic hip pain to pain-free marathons in just 3 months.",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Mark Stevens",
    role: "Office Manager",
    content:
      "After years of desk work, my shoulders and neck were constantly tight. FST with Sophia has given me my mobility back and eliminated my daily pain.",
    image: "/professional-man-smiling.png",
  },
]

export default function FascialStretchTherapyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceDescription data={serviceData} />
        <WhatToExpect data={expectationData} />
        <PricingTiers data={pricingData} serviceName="Fascial Stretch Therapy" />
        <ServiceFAQ data={faqData} />
        <ServiceTestimonials data={testimonialData} />
        <ServiceCTA serviceName="Fascial Stretch Therapy" />
      </main>
      <Footer />
    </div>
  )
}
