import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
                </div>
                <span className="font-serif font-bold text-xl text-foreground">Sophia Plank</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                Transforming lives through holistic wellness, breathwork, and movement therapy.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@sophiaplank.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/fascial-stretch-therapy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fascial Stretch Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/breathwork"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SomatIQ Breathwork
                </Link>
              </li>
              <li>
                <Link
                  href="/services/spinal-energetics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Spinal Energetics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/performance-coaching"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Performance Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Sophia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-foreground">Stay Connected</h3>

            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">Get weekly wellness tips and updates</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">Follow us</p>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/sophiaplankwellness"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://facebook.com/sophiaplankwellness"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://youtube.com/sophiaplankwellness"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Sophia Plank Wellness. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
