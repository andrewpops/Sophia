import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import { BlogPost } from "@/lib/contentful"

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
            <Badge 
              className="text-white border-0" 
              style={{ 
                backgroundColor: post.category.color,
                color: 'white'
              }}
            >
              {post.category.name}
            </Badge>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-center leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}