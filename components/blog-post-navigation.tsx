import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getNavigationPosts } from "@/lib/contentful"

interface BlogPostNavigationProps {
  currentSlug: string
}

export async function BlogPostNavigation({ currentSlug }: BlogPostNavigationProps) {
  const navigation = await getNavigationPosts(currentSlug)

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {navigation.previous ? (
            <Button asChild variant="outline" className="bg-transparent">
              <Link href={`/blog/${navigation.previous.slug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="font-medium">{navigation.previous.title}</div>
                </div>
              </Link>
            </Button>
          ) : (
            <div></div>
          )}

          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/blog">Back to Blog</Link>
          </Button>

          {navigation.next ? (
            <Button asChild variant="outline" className="bg-transparent">
              <Link href={`/blog/${navigation.next.slug}`} className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="font-medium">{navigation.next.title}</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  )
}