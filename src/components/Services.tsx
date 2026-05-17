import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Staff Augmentation',
    desc: 'Embed as a senior team member. Daily standups, code reviews, architecture decisions — fully integrated.',
    modes: ['Full-time', 'Part-time', 'Sprint-based'],
    rate: 'From $80/hr',
  },
  {
    id: '02',
    title: 'Freelance Delivery',
    desc: 'End-to-end feature or product builds. From architecture to deployment, with clear milestones.',
    modes: ['MVP', 'Feature', 'Integration'],
    rate: 'Fixed or hourly',
  },
  {
    id: '03',
    title: 'AI Integration',
    desc: 'LLM-powered features, RAG pipelines, agent workflows. Secure AI that respects user privacy.',
    modes: ['LLMs', 'RAG', 'Agents'],
    rate: 'Project-based',
  },
  {
    id: '04',
    title: 'Security Audit',
    desc: 'Zero-trust patterns, encryption, compliance. Harden applications from day one.',
    modes: ['Audit', 'Hardening', 'Architecture'],
    rate: 'From $3k',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">02</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Services</span>
        </div>

        <div className="space-y-px bg-border rounded-lg overflow-hidden">
          {services.map((s) => (
            <div key={s.id} className="reveal group bg-bg hover:bg-surface-raised transition-colors duration-300">
              <div className="grid md:grid-cols-12 gap-4 p-6 md:p-8 items-center">
                <div className="md:col-span-1">
                  <span className="text-[10px] font-mono text-text-muted">{s.id}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-base font-semibold group-hover:accent-text transition-colors">{s.title}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-xs text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-1.5">
                    {s.modes.map((m) => (
                      <span key={m} className="tag">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 text-right">
                  <span className="text-[10px] font-mono text-text-muted">{s.rate}</span>
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
