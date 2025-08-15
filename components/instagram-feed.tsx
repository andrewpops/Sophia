import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Link from "next/link"

const instagramPosts = [
  {
    id: 1,
    image: "/peaceful-breathwork-environment.png",
    alt: "Breathwork session in peaceful environment",
  },
  {
    id: 2,
    image: "/placeholder-nqoer.png",
    alt: "Fascial stretch therapy treatment",
  },
  {
    id: 3,
    image: "/mindfulness-meditation-wellness.png",
    alt: "Mindfulness and meditation setup",
  },
  {
    id: 4,
    image: "/healthy-morning-wellness.png",
    alt: "Healthy morning wellness routine",
  },
  {
    id: 5,
    image: "/spinal-alignment-therapy.png",
    alt: "Spinal alignment therapy session",
  },
  {
    id: 6,
    image: "/community-wellness-workshop.png",
    alt: "Community wellness workshop",
  },
]

export function InstagramFeed() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Follow Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with daily wellness tips, behind-the-scenes content, and inspiration for your holistic health
            journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square rounded-lg overflow-hidden bg-muted group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
            <Link href="https://instagram.com/sophiaplankwellness" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Follow @sophiaplankwellness
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
