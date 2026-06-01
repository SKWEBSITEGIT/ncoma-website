import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Press',
  description:
    'Get in touch with NCOMA. General inquiries, certification questions, media requests, and partnership opportunities.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
