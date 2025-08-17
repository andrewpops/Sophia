"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 breathing">
                <span className="text-primary-foreground font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>S</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Sophia Plank</span>
              <span className="text-xs text-muted-foreground -mt-1" style={{ fontFamily: 'var(--font-sans)' }}>Wellness Practitioner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 bg-transparent backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Link href="/book">Book Service</Link>
            </Button>
            <Button 
              asChild 
              className="btn-luxury"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Link href="/book/consultation">Begin Your Journey</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-foreground" /> : 
              <Menu className="h-6 w-6 text-foreground" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/20 bg-background/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 px-4 pt-4 border-t border-border/20">
                <Button 
                  asChild 
                  className="btn-luxury w-full"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Link href="/book/consultation">Begin Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 bg-transparent w-full"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Link href="/book">Book Service</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
