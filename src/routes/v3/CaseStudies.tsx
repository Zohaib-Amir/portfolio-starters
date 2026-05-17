import { ArrowUpRight } from 'lucide-react'

const studies = [
  {
    num: '01',
    title: 'AI Document Intelligence',
    category: 'AI / SaaS',
    desc: 'End-to-end document processing with LLMs and RAG. Extracts, classifies, and summarizes legal contracts with 94% accuracy.',
    tags: ['OpenAI', 'LangChain', 'React', 'Node.js'],
    stat: '94%',
    statLabel: 'Accuracy',
    color: 'from-indigo-500/10 to-purple-500/10',
  },
  {
    num: '02',
    title: 'Real Estate Analytics',
    category: 'PropTech',
    desc: 'Interactive property analytics with market forecasting and automated valuation models for a mid-size real estate firm.',
    tags: ['Next.js', 'TypeScript', 'Mapbox', 'tRPC'],
    stat: '50K+',
    statLabel: 'Properties',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    num: '03',
    title: 'Zero-Trust Access Gateway',
    category: 'Security',
    desc: 'Zero-trust access control for a fintech startup. Device fingerprinting, behavioral analytics, real-time threat detection.',
    tags: ['Node.js', 'Redis', 'Cloudflare', 'WebAuthn'],
    stat: '12K+',
    statLabel: 'Threats blocked',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    num: '04',
    title: 'Cross-Platform Commerce',
    category: 'Mobile / E-com',
    desc: 'React Native e-commerce app with real-time inventory, AI recommendations, and seamless checkout. App Store + Play Store.',
    tags: ['React Native', 'Expo', 'Stripe', 'Firebase'],
    stat: '25K',
    statLabel: 'Monthly users',
    color: 'from-orange-500/10 to-amber-500/10',
  },
  {
    num: '05',
    title: 'Financial Data Pipeline',
    category: 'Data Engineering',
    desc: 'Real-time financial data ingestion and transformation. Millions of market events daily with sub-second latency.',
    tags: ['Python', 'Kafka', 'TimescaleDB', 'Docker'],
    stat: '2M+',
    statLabel: 'Events/day',
    color: 'from-rose-500/10 to-pink-500/10',
  },
  {
    num: '06',
    title: 'AI Support Agent',
    category: 'AI / Automation',
    desc: 'Autonomous support agent handling 70% of tier-1 tickets. Integrates with Slack, email, and CRM via APIs.',
    tags: ['LangChain', 'OpenAI', 'FastAPI', 'WebSockets'],
    stat: '70%',
    statLabel: 'Auto-resolved',
    color: 'from-violet-500/10 to-fuchsia-500/10',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">04</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Selected Work</span>
        </div>

        <div className="mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            Projects that
            <br />
            <span className="accent-text">speak for themselves</span>
          </h2>
        </div>

        {/* Case study list — editorial layout */}
        <div className="space-y-px bg-border rounded-2xl overflow-hidden">
          {studies.map((study, i) => (
            <div
              key={study.num}
              className="reveal group relative bg-bg hover:bg-surface-raised transition-colors duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-10 items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-xs text-text-muted font-mono">{study.num}</span>
                </div>

                {/* Title + category */}
                <div className="md:col-span-4">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{study.category}</p>
                  <h3 className="text-lg md:text-xl font-semibold group-hover:accent-text transition-colors">
                    {study.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-sm text-text-secondary leading-relaxed">{study.desc}</p>
                </div>

                {/* Stat */}
                <div className="md:col-span-2 text-right">
                  <p className="text-2xl font-bold accent-text">{study.stat}</p>
                  <p className="text-xs text-text-muted">{study.statLabel}</p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Tags row */}
              <div className="px-6 md:px-10 pb-6 md:pb-10 -mt-2 md:ml-[8.33%] md:pl-0">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
