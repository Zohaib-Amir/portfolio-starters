import { useEffect, useState } from 'react'

const lines = [
  { prompt: '$', text: 'whoami', delay: 0 },
  { prompt: '>', text: 'zohaib.amir — full-stack developer & technical founder', delay: 400 },
  { prompt: '$', text: 'cat skills.json', delay: 900 },
  { prompt: '>', text: '{ "frontend": ["React", "Next.js", "TypeScript"],', delay: 1400 },
  { prompt: ' ', text: '  "mobile": ["React Native", "Expo", "iOS", "Android"],', delay: 1700 },
  { prompt: ' ', text: '  "ai": ["OpenAI", "LangChain", "RAG", "Agents"],', delay: 2000 },
  { prompt: ' ', text: '  "backend": ["Node.js", "Python", "GraphQL", "tRPC"] }', delay: 2300 },
  { prompt: '$', text: 'uptime --clients', delay: 2800 },
  { prompt: '>', text: 'US: 4 projects  |  EU: 3 projects  |  APAC: 2 projects', delay: 3200 },
  { prompt: '$', text: 'status --availability', delay: 3700 },
  { prompt: '>', text: 'AVAILABLE — Q2 2026 bookings open', delay: 4100, highlight: true },
]

export default function Terminal() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => setVisible((v) => Math.max(v, i + 1)), line.delay)
    })
  }, [])

  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-border bg-surface overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-raised">
            <div className="w-3 h-3 rounded-full bg-error/60" />
            <div className="w-3 h-3 rounded-full bg-warn/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <span className="ml-2 text-[10px] text-text-muted font-mono">zohaib@dev:~</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-xs md:text-sm leading-relaxed min-h-[280px]">
            {lines.slice(0, visible).map((line, i) => (
              <div key={i} className={`mb-1 ${line.highlight ? 'accent-text font-semibold' : line.prompt === '$' ? 'text-text-secondary' : 'text-text-muted'}`}>
                {line.prompt === '$' && <span className="accent-text mr-2">$</span>}
                {line.text}
              </div>
            ))}
            {visible >= lines.length && (
              <div className="flex items-center mt-2">
                <span className="accent-text mr-2">$</span>
                <span className="w-2 h-4 bg-accent animate-blink" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
