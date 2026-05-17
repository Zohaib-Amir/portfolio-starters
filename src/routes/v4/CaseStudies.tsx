import { ArrowUpRight, Lock, Globe, Smartphone, Cpu } from 'lucide-react'

const studies = [
  {
    icon: Lock,
    title: 'Privacy-First AI Assistant',
    desc: 'Built a HIPAA-aligned AI assistant with client-side anonymization, zero data retention, and real-time sync across devices.',
    tags: ['Next.js', 'OpenAI', 'pgvector', 'WebSockets'],
    status: 'In Production'
  },
  {
    icon: Globe,
    title: 'Real-Time Collaboration Platform',
    desc: 'Multi-tenant workspace with CRDT-based document sync, presence indicators, and granular permissions.',
    tags: ['React', 'Yjs', 'Cloudflare Workers', 'Durable Objects'],
    status: 'In Production'
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Fitness App',
    desc: 'React Native + Expo app with health data sync, offline-first architecture, and AI-generated workout plans.',
    tags: ['Expo', 'Supabase', 'OpenAI', 'HealthKit'],
    status: 'In Production'
  },
  {
    icon: Cpu,
    title: 'Internal Developer Platform',
    desc: 'Self-service platform for deploying microservices, managing secrets, and monitoring with custom dashboards.',
    tags: ['React', 'Node.js', 'Docker', 'Prometheus'],
    status: 'In Development'
  }
]

export default function CaseStudies() {
  return (
    <section className="px-4 md:px-8 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 reveal">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Cpu size={14} className="accent-text" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Portfolio</p>
              <h2 className="text-lg font-bold">Recent Work</h2>
            </div>
          </div>
          <span className="text-[10px] font-mono text-text-muted">Case studies coming soon</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {studies.map((s, i) => (
            <div key={s.title} className="card p-5 reveal group cursor-pointer" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <s.icon size={16} className="accent-text" />
                  <h3 className="text-sm font-semibold group-hover:accent-text transition-colors">{s.title}</h3>
                </div>
                <ArrowUpRight size={14} className="text-text-muted group-hover:accent-text transition-colors" />
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{s.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {s.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-success">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
