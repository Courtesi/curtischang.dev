import { readingList } from './reading-list-data'

function formatDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function ReadingList() {
  const sorted = [...readingList].sort((a, b) => b.dateRead.localeCompare(a.dateRead))

  return (
    <div className="max-w-4xl px-[10%] pt-30 pb-24">
      <a
        href="#/"
        className="text-sm text-blue-800/70 hover:text-blue-950 transition-colors font-[Urbanist]"
      >
        ← Curtis Chang
      </a>

      <h1 className="text-5xl font-[Brawler] text-blue-950 tracking-tight mt-6">Reading List</h1>
      <p className="mt-4 font-[Urbanist] text-lg text-blue-950/70">
        Articles, guides, and walkthroughs I've read, in mostly chronological order (started 09/04/2026).
      </p>

      <ul className="mt-12 space-y-6 font-[Urbanist]">
        {sorted.map((entry) => (
          <li key={entry.url} className="border-b border-blue-950/10 pb-6">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-highlight text-xl text-stone-900 font-medium"
            >
              {entry.title}
            </a>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-blue-800/70">
              <span>{formatDate(entry.dateRead)}</span>
              {entry.type && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{entry.type}</span>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
