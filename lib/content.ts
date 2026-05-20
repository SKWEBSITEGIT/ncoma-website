import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ArticleMeta {
  slug: string
  title: string
  subtitle?: string
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: string
  readTime: string
}

const contentDir = path.join(process.cwd(), 'content')

function getArticles(type: 'field-notes' | 'reports'): { meta: ArticleMeta; content: string }[] {
  const dir = path.join(contentDir, type)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        meta: {
          slug: filename.replace(/\.mdx$/, ''),
          title: data.title || '',
          subtitle: data.subtitle,
          date: data.date || '',
          author: data.author || 'NCOMA Editorial',
          category: data.category || '',
          tags: data.tags || [],
          excerpt: data.excerpt || '',
          readTime: data.readTime || '5 min',
        },
        content,
      }
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

export function getFieldNotes() {
  return getArticles('field-notes')
}

export function getReports() {
  return getArticles('reports')
}

export function getFieldNote(slug: string) {
  return getFieldNotes().find((a) => a.meta.slug === slug)
}

export function getReport(slug: string) {
  return getReports().find((a) => a.meta.slug === slug)
}
