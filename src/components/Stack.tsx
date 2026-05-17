const categories = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'] },
  { name: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
  { name: 'AI / ML', items: ['OpenAI', 'LangChain', 'RAG', 'Agents'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'tRPC'] },
  { name: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { name: 'Cloud', items: ['Cloudflare', 'AWS', 'Vercel', 'Docker'] },
  { name: 'Security', items: ['Zero-trust', 'OAuth 2.0', 'JWT', 'RBAC'] },
  { name: 'DevOps', items: ['CI/CD', 'GitHub Actions', 'Terraform'] },
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">03</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Stack</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Tools I use to<br />
              <span className="accent-text">move fast</span><br />
              and break nothing.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              TypeScript-first, AI-native, security-conscious. I pick technologies that let teams ship with confidence — not chase the latest hype cycle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, i) => (
              <div key={cat.name} className="reveal group card p-5"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2 group-hover:accent-text transition-colors">{cat.name}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
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
