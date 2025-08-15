import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  data: FAQItem[]
}

export function ServiceFAQ({ data }: ServiceFAQProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get answers to common questions about this treatment.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {data.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border-border">
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
