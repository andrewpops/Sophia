import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { BlogPost } from "@/lib/contentful"

interface BlogGridProps {
  posts: BlogPost[]
  persistentFeaturedPost?: BlogPost | null
}

export function BlogGrid({ posts, persistentFeaturedPost }: BlogGridProps) {
  // Use persistent featured post if provided, otherwise find from posts
  const featuredPost = persistentFeaturedPost || posts.find((post) => post.featured)
  
  // Show all posts except the featured one (if it exists) in Recent Articles
  const regularPosts = featuredPost 
    ? posts.filter((post) => post.id !== featuredPost.id)
    : posts

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="bg-primary text-primary-foreground mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-serif font-bold text-foreground">Latest Insights</h2>
            </div>
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredPost.featuredImage.url}
                    alt={featuredPost.featuredImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline" style={{ backgroundColor: featuredPost.category.color + '20', color: featuredPost.category.color }}>
                        {featuredPost.category.name}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">{featuredPost.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                    <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
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
                      <Badge variant="outline" style={{ backgroundColor: post.category.color + '20', color: post.category.color }}>
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
                    <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No posts fallback */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">No Blog Posts Yet</h2>
            <p className="text-muted-foreground">Check back soon for new wellness insights and tips!</p>
          </div>
        )}
      </div>
    </section>
  )
}