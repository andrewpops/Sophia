import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
}

interface BlogPostHeroProps {
  post: BlogPost
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground justify-center">
            <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </div>

          {/* Title and Excerpt */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">{post.excerpt}</p>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
