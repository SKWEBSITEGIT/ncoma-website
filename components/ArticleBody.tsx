import { remark } from 'remark'
import html from 'remark-html'

export async function ArticleBody({ content }: { content: string }) {
  // sanitize: false lets raw HTML blocks in our own MDX content through
  // (content/ is repo-controlled, never user-submitted)
  const result = await remark().use(html, { sanitize: false }).process(content)

  return (
    <div
      className="prose-ncoma"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    />
  )
}
