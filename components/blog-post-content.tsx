import { RichTextRenderer } from "@/components/rich-text-renderer"
import { BlogPost } from "@/lib/contentful"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <RichTextRenderer content={post.content} />
        </article>
      </div>
    </section>
  )
}