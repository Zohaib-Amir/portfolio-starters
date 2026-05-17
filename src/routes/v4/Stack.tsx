import { Code2, Server, Database, Cloud, Wrench, Brain } from 'lucide-react'

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'React Native / Expo', 'TanStack Query', 'Zustand / Jotai']
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js / Express', 'Fastify / tRPC', 'Python / FastAPI', 'GraphQL', 'WebSockets', 'BullMQ / Redis']
  },
  {
    icon: Database,
    title: 'Data',
    items: ['PostgreSQL', 'Prisma / Drizzle', 'MongoDB', 'Redis', 'ClickHouse', 'pgvector']
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    items: ['Cloudflare Workers', 'Vercel / Netlify', 'Docker', 'GitHub Actions', 'AWS (S3, Lambda)', 'Terraform']
  },
  {
    icon: Brain,
    title: 'AI / ML',
    items: ['OpenAI API', 'LangChain / LCEL', 'RAG Pipelines', 'Vector Stores', 'HuggingFace', 'Ollama / Local LLMs']
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git / GitHub', 'Figma', 'Linear / Jira', 'Notion / Obsidian', 'Postman / Hoppscotch', 'Sentry / Datadog']
  }
]

export default function Stack() {
  return (
    <section className="px-4 md:px-8 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 reveal">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Code2 size={14} className="accent-text" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Toolkit</p>
            <h2 className="text-lg font-bold">Tech Stack</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={cat.title} className="card p-6 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <cat.icon size={16} className="accent-text" />
                <h3 className="text-base font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-raised border border-border text-[13px] text-text-secondary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
