import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock } from "lucide-react"
import { getRelatedPosts } from "@/lib/contentful"

interface RelatedPostsProps {
  currentSlug: string
  category: string
}

export async function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const relatedPosts = await getRelatedPosts(currentSlug, category, 3)

  if (relatedPosts.length === 0) {
    return null
  }

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
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <Badge 
                    variant="outline" 
                    style={{ 
                      backgroundColor: post.category.color + '20', 
                      color: post.category.color 
                    }}
                  >
                    {post.category.name}
                  </Badge>
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
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>Read Article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}