import { remark } from 'remark'
import html from 'remark-html'

export async function ArticleBody({ content }: { content: string }) {
  const result = await remark().use(html).process(content)

  return (
    <div
      className="prose-ncoma"
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    />
  )
}
