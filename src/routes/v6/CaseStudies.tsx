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
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">02</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Case Studies</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Projects that<br />
              <span className="accent-text">prove the work.</span>
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              Selected builds across AI, real-time systems, mobile, and developer tooling.
              Each one shipped to production with measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '94%', label: 'Accuracy', sub: 'AI document extraction' },
              { num: '50K+', label: 'Properties', sub: 'Real estate analytics' },
              { num: '70%', label: 'Auto-resolved', sub: 'AI support tickets' },
              { num: '25K', label: 'Users/mo', sub: 'Cross-platform commerce' },
            ].map((s, i) => (
              <div key={i} className="reveal-scale card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="text-3xl md:text-4xl font-extrabold accent-text mb-1">{s.num}</p>
                <p className="text-xs font-semibold mb-0.5">{s.label}</p>
                <p className="text-[10px] text-text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studies.map((s, i) => (
            <div key={s.title} className="card p-6 reveal group cursor-pointer" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <s.icon size={18} className="accent-text" />
                  <h3 className="text-base font-semibold group-hover:accent-text transition-colors">{s.title}</h3>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:accent-text transition-colors" />
              </div>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-success">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
