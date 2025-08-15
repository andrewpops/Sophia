interface BlogPost {
  content: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // In a real app, you'd use a markdown parser here
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-4xl font-serif font-bold text-foreground mb-6 mt-8">
            {line.slice(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-3xl font-serif font-bold text-foreground mb-4 mt-8">
            {line.slice(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-serif font-semibold text-primary mb-4 mt-6">
            {line.slice(4)}
          </h3>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-muted-foreground leading-relaxed mb-2 ml-4">
            {line.slice(2)}
          </li>
        )
      }
      if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
        return (
          <p
            key={index}
            className="text-muted-foreground italic leading-relaxed mb-4 bg-muted/30 p-4 rounded-lg border-l-4 border-primary"
          >
            {line.slice(1, -1)}
          </p>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      return (
        <p key={index} className="text-foreground leading-relaxed mb-4">
          {line}
        </p>
      )
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-4">{formatContent(post.content)}</div>
        </article>
      </div>
    </section>
  )
}
