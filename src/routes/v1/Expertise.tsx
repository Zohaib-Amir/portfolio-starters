const skills = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'] },
  { cat: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
  { cat: 'AI / ML', items: ['OpenAI', 'LangChain', 'RAG', 'Agents'] },
  { cat: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'tRPC'] },
  { cat: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { cat: 'Cloud', items: ['Cloudflare', 'AWS', 'Vercel', 'Docker'] },
  { cat: 'Security', items: ['Zero-trust', 'OAuth 2.0', 'JWT', 'RBAC'] },
  { cat: 'DevOps', items: ['CI/CD', 'GitHub Actions', 'Terraform'] },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">03</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Stack</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: philosophy */}
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
              Tools I use to
              <br />
              <span className="accent-text">move fast</span>
              <br />
              and break nothing.
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm max-w-md">
              TypeScript-first, AI-native, security-conscious. I pick technologies
              that let teams ship with confidence — not chase the latest hype cycle.
            </p>
          </div>

          {/* Right: skill grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((group, i) => (
              <div
                key={group.cat}
                className="reveal-right group p-5 rounded-xl border border-border hover:border-accent/30 bg-surface/30 hover:bg-surface-raised transition-all duration-400"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="text-xs uppercase tracking-wider text-text-muted mb-3 group-hover:text-accent transition-colors">
                  {group.cat}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded-md bg-bg text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
