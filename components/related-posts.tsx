import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock } from "lucide-react"

interface RelatedPostsProps {
  currentSlug: string
  category: string
}

const allPosts = [
  {
    id: "morning-wellness-routine",
    title: "Creating a Morning Wellness Routine That Actually Works",
    excerpt: "Simple, science-backed practices to start your day with energy, clarity, and intention.",
    category: "Wellness Tips",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "stress-relief-techniques",
    title: "5 Quick Stress Relief Techniques for Busy Professionals",
    excerpt: "Evidence-based stress management techniques that take 5 minutes or less.",
    category: "Wellness Tips",
    readTime: "4 min read",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "nervous-system-regulation",
    title: "Understanding Your Nervous System: A Key to Better Health",
    excerpt: "Learn how your nervous system affects everything from digestion to sleep.",
    category: "Mind-Body",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  // Filter out current post and get related posts
  const relatedPosts = allPosts.filter((post) => post.id !== currentSlug).slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground">Related Articles</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Continue your wellness journey with these related insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg?height=300&width=400"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/blog/${post.id}`}>Read Article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
