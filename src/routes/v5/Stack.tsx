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
    <section className="px-4 md:px-8 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Toolkit</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-text-secondary max-w-md mx-auto">Modern tools chosen for performance, developer experience, and scalability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={cat.title} className="p-6 rounded-2xl bg-surface-raised/50 border border-border reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <cat.icon size={18} className="accent-text" />
                <h3 className="text-base font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface border border-border text-[13px] text-text-secondary">
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
