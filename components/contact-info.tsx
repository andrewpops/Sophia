import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@sophiaplank.com",
    description: "Best for detailed questions or booking requests",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    description: "Call or text for immediate assistance",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Los Angeles, CA",
    description: "In-person sessions available by appointment",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9am-7pm",
    description: "Weekend appointments available upon request",
  },
]

const responseInfo = [
  {
    icon: MessageCircle,
    title: "Response Time",
    details: "Within 24 hours",
    description: "I personally respond to all inquiries",
  },
]

export function ContactInfo() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold text-foreground">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">Multiple ways to reach me for your convenience.</p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="border-border bg-background/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                        <p className="text-base text-primary font-medium">{method.details}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {responseInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-base text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Emergency Note */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-foreground py-3">Important Note</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4 px-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you're experiencing a medical emergency, please call 911 or visit your nearest emergency room. The
                services I provide are complementary to, not a replacement for, medical care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
