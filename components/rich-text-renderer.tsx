import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

interface RichTextRendererProps {
  content: Document
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 text-foreground leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-serif font-bold text-foreground mb-8 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-serif font-bold text-foreground mb-6 mt-10 first:mt-0">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 mt-8 first:mt-0">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl font-serif font-bold text-foreground mb-4 mt-6 first:mt-0">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg font-serif font-bold text-foreground mb-3 mt-6 first:mt-0">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base font-serif font-bold text-foreground mb-3 mt-4 first:mt-0">
        {children}
      </h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="mb-6 space-y-2 pl-6">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="mb-6 space-y-2 pl-6 list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-foreground leading-relaxed relative">
        <span className="absolute -left-6 text-primary">•</span>
        {children}
      </li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-primary bg-muted/30 py-4 px-6 my-8 italic text-foreground">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="border-border my-12" />
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title, description } = node.data.target.fields
      
      if (file.contentType.startsWith('image/')) {
        return (
          <div className="my-8">
            <img
              src={`https:${file.url}`}
              alt={description || title || 'Blog image'}
              className="w-full rounded-lg shadow-md"
              width={file.details.image.width}
              height={file.details.image.height}
            />
            {description && (
              <p className="text-sm text-muted-foreground text-center mt-2 italic">
                {description}
              </p>
            )}
          </div>
        )
      }
      
      return null
    },
  },
}

export function RichTextRenderer({ content }: RichTextRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {documentToReactComponents(content, options)}
    </div>
  )
}