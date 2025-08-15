import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const contactFAQs = [
  {
    question: "How do I book my first appointment?",
    answer:
      "You can book your first appointment by filling out the contact form above, calling me directly, or emailing me. I'll respond within 24 hours to schedule your session and answer any questions you may have.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! I offer complimentary 15-minute phone consultations to discuss your wellness goals and help determine which service would be most beneficial for you. This is a great way to get to know each other before booking a full session.",
  },
  {
    question: "What should I expect for my first visit?",
    answer:
      "Your first visit will include a comprehensive intake discussion about your health history, current concerns, and wellness goals. We'll then proceed with your chosen treatment. Please wear comfortable, stretchy clothing and arrive 10 minutes early.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24 hours notice for cancellations or rescheduling. This allows me to offer the time slot to other clients. Cancellations with less than 24 hours notice may be subject to a cancellation fee.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I don't directly bill insurance, but I can provide you with a detailed receipt that you can submit to your insurance company for potential reimbursement. Many HSA and FSA accounts also cover these services.",
  },
  {
    question: "Are virtual sessions available?",
    answer:
      "Yes! I offer virtual breathwork sessions and performance coaching consultations via secure video call. While hands-on treatments require in-person visits, many of my services can be effectively delivered remotely.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Common questions about booking and what to expect.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {contactFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-muted/20 rounded-lg px-6 border-border">
              <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
