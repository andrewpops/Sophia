import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "breathwork-beginners-guide",
    title: "The Complete Beginner's Guide to Breathwork",
    excerpt:
      "Discover how conscious breathing can transform your physical and emotional well-being. Learn simple techniques you can start practicing today.",
    category: "Breathwork",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/breathwork-guide-blog.png",
    featured: true,
  },
  {
    id: "fascial-stretch-benefits",
    title: "5 Surprising Benefits of Fascial Stretch Therapy",
    excerpt:
      "Beyond improved flexibility, fascial stretch therapy offers unexpected benefits for your overall health and performance.",
    category: "Movement",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/fascial-stretch-benefits-blog.png",
    featured: false,
  },
  {
    id: "morning-wellness-routine",
    title: "Creating a Morning Wellness Routine That Actually Works",
    excerpt:
      "Simple, science-backed practices to start your day with energy, clarity, and intention. No complicated routines required.",
    category: "Wellness Tips",
    date: "2024-01-05",
    readTime: "5 min read",
    image: "/morning-wellness-routine-blog.png",
    featured: false,
  },
  {
    id: "nervous-system-regulation",
    title: "Understanding Your Nervous System: A Key to Better Health",
    excerpt:
      "Learn how your nervous system affects everything from digestion to sleep, and discover practical ways to support its optimal function.",
    category: "Mind-Body",
    date: "2023-12-28",
    readTime: "10 min read",
    image: "/nervous-system-health-blog.png",
    featured: false,
  },
  {
    id: "stress-relief-techniques",
    title: "5 Quick Stress Relief Techniques for Busy Professionals",
    excerpt:
      "Evidence-based stress management techniques that take 5 minutes or less. Perfect for busy schedules and high-pressure environments.",
    category: "Wellness Tips",
    date: "2023-12-20",
    readTime: "4 min read",
    image: "/stress-relief-breathwork-blog.png",
    featured: false,
  },
  {
    id: "holistic-nutrition-basics",
    title: "Holistic Nutrition: Nourishing Your Body and Mind",
    excerpt:
      "Explore how food affects not just your physical health, but your emotional and mental well-being. Simple principles for mindful eating.",
    category: "Nutrition",
    date: "2023-12-15",
    readTime: "7 min read",
    image: "/morning-wellness-routine-blog.png",
    featured: false,
  },
]

export function BlogGrid() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
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
                      <Link href={`/blog/${featuredPost.id}`}>
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
        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-bold text-foreground text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
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
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
