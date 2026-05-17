import { Code2, Server, Database, Cloud, Wrench, Brain } from 'lucide-react'

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    items: [
      { name: 'React / Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'React Native / Expo', level: 'Expert' },
      { name: 'TanStack Query', level: 'Advanced' },
      { name: 'Zustand / Jotai', level: 'Advanced' },
    ]
  },
  {
    icon: Server,
    title: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 'Expert' },
      { name: 'Fastify / tRPC', level: 'Advanced' },
      { name: 'Python / FastAPI', level: 'Advanced' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'WebSockets', level: 'Advanced' },
      { name: 'BullMQ / Redis', level: 'Advanced' },
    ]
  },
  {
    icon: Database,
    title: 'Data',
    items: [
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'Prisma / Drizzle', level: 'Expert' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'ClickHouse', level: 'Intermediate' },
      { name: 'pgvector', level: 'Advanced' },
    ]
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    items: [
      { name: 'Cloudflare Workers', level: 'Expert' },
      { name: 'Vercel / Netlify', level: 'Expert' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'AWS (S3, Lambda)', level: 'Intermediate' },
      { name: 'Terraform', level: 'Intermediate' },
    ]
  },
  {
    icon: Brain,
    title: 'AI / ML',
    items: [
      { name: 'OpenAI API', level: 'Expert' },
      { name: 'LangChain / LCEL', level: 'Advanced' },
      { name: 'RAG Pipelines', level: 'Advanced' },
      { name: 'Vector Stores', level: 'Advanced' },
      { name: 'HuggingFace', level: 'Intermediate' },
      { name: 'Ollama / Local LLMs', level: 'Intermediate' },
    ]
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'Figma (read)', level: 'Advanced' },
      { name: 'Linear / Jira', level: 'Advanced' },
      { name: 'Notion / Obsidian', level: 'Advanced' },
      { name: 'Postman / Hoppscotch', level: 'Advanced' },
      { name: 'Sentry / Datadog', level: 'Intermediate' },
    ]
  }
]

const levelColor: Record<string, string> = {
  Expert: 'text-accent',
  Advanced: 'text-text',
  Intermediate: 'text-text-secondary'
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat, i) => (
            <div key={cat.title} className="card p-5 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-2 mb-4">
                <cat.icon size={14} className="accent-text" />
                <h3 className="text-sm font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-2">
                {cat.items.map(item => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-[11px] text-text-secondary">{item.name}</span>
                    <span className={`text-[10px] font-mono ${levelColor[item.level]}`}>{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
