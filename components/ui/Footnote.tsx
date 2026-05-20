export function FootnoteRef({ id }: { id: number }) {
  return (
    <a href={`#fn-${id}`} className="footnote-ref">
      [{id}]
    </a>
  )
}

export function Footnotes({ notes }: { notes: string[] }) {
  return (
    <aside className="mt-16 border-t border-charcoal/10 pt-8">
      <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/50">
        References
      </h3>
      <ol className="mt-4 list-decimal space-y-2 pl-6 font-sans text-sm text-charcoal/60">
        {notes.map((note, i) => (
          <li key={i} id={`fn-${i + 1}`}>
            {note}
          </li>
        ))}
      </ol>
    </aside>
  )
}
