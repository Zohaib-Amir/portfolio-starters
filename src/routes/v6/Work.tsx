import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'AI Document Intelligence',
    category: 'AI / SaaS',
    desc: 'End-to-end document processing with LLMs and RAG. Extracts, classifies, and summarizes legal contracts.',
    tags: ['OpenAI', 'LangChain', 'React', 'Node.js'],
    stat: '94%',
    statLabel: 'Accuracy',
  },
  {
    id: '02',
    title: 'Real Estate Analytics',
    category: 'PropTech',
    desc: 'Interactive property analytics with market forecasting and automated valuation models.',
    tags: ['Next.js', 'TypeScript', 'Mapbox', 'tRPC'],
    stat: '50K+',
    statLabel: 'Properties',
  },
  {
    id: '03',
    title: 'Zero-Trust Access Gateway',
    category: 'Security',
    desc: 'Zero-trust access control for fintech. Device fingerprinting, behavioral analytics, threat detection.',
    tags: ['Node.js', 'Redis', 'Cloudflare', 'WebAuthn'],
    stat: '12K+',
    statLabel: 'Threats blocked',
  },
  {
    id: '04',
    title: 'Cross-Platform Commerce',
    category: 'Mobile / E-com',
    desc: 'React Native e-commerce with real-time inventory, AI recommendations, seamless checkout.',
    tags: ['React Native', 'Expo', 'Stripe', 'Firebase'],
    stat: '25K',
    statLabel: 'Monthly users',
  },
  {
    id: '05',
    title: 'Financial Data Pipeline',
    category: 'Data Engineering',
    desc: 'Real-time financial data ingestion. Millions of market events daily with sub-second latency.',
    tags: ['Python', 'Kafka', 'TimescaleDB', 'Docker'],
    stat: '2M+',
    statLabel: 'Events/day',
  },
  {
    id: '06',
    title: 'AI Support Agent',
    category: 'AI / Automation',
    desc: 'Autonomous support agent handling 70% of tier-1 tickets. Integrates with Slack, email, CRM.',
    tags: ['LangChain', 'OpenAI', 'FastAPI', 'WebSockets'],
    stat: '70%',
    statLabel: 'Auto-resolved',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">05</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Selected Work</span>
        </div>

        <div className="space-y-px bg-border rounded-lg overflow-hidden">
          {projects.map((p) => (
            <div key={p.id} className="reveal group bg-bg hover:bg-surface-raised transition-colors duration-300">
              <div className="grid md:grid-cols-12 gap-4 p-6 md:p-8 items-center">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-text-muted">{p.id}</span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">{p.category}</p>
                  <h3 className="text-sm font-semibold group-hover:accent-text transition-colors">{p.title}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 text-right">
                  <p className="text-lg font-bold accent-text">{p.stat}</p>
                  <p className="text-[10px] text-text-muted">{p.statLabel}</p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
