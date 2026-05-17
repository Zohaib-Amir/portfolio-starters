import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Staff Augmentation',
    desc: 'Embed as a senior team member. Daily standups, code reviews, architecture decisions — fully integrated into your workflow.',
    tags: ['Full-time', 'Part-time', 'Sprint-based'],
  },
  {
    num: '02',
    title: 'Freelance Delivery',
    desc: 'End-to-end feature or product builds. From architecture to deployment, with clear milestones and async communication.',
    tags: ['MVP', 'Feature', 'Integration'],
  },
  {
    num: '03',
    title: 'AI Integration',
    desc: 'LLM-powered features, RAG pipelines, agent workflows. Secure AI architecture that respects user privacy.',
    tags: ['LLMs', 'RAG', 'Agents'],
  },
  {
    num: '04',
    title: 'Security & Architecture',
    desc: 'Zero-trust patterns, encryption, compliance. Harden applications from day one, not as an afterthought.',
    tags: ['Zero-trust', 'OAuth', 'RBAC'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">02</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Services</span>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal group relative bg-bg p-8 md:p-12 hover:bg-surface-raised transition-colors duration-500 ${
                i === 0 ? 'md:rounded-tl-2xl' : ''
              } ${i === 1 ? 'md:rounded-tr-2xl' : ''} ${
                i === 2 ? 'md:rounded-bl-2xl' : ''
              } ${i === 3 ? 'md:rounded-br-2xl' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-6xl font-extrabold text-text/[0.04] select-none">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:accent-text transition-colors duration-300">
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
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
