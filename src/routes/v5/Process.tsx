const steps = [
  { week: 'Week 1', title: 'Embed', desc: 'Slack access, repo setup, architecture review, first PR merged' },
  { week: 'Week 2-3', title: 'Ship', desc: 'Core features built, AI integration wired, CI/CD running' },
  { week: 'Week 4', title: 'Harden', desc: 'Security audit, perf optimization, error handling, docs' },
  { week: 'Week 5-6', title: 'Launch', desc: 'Production deploy, monitoring, handoff docs, team training' },
  { week: 'Ongoing', title: 'Support', desc: 'Retainer for fixes, new features, architecture guidance' },
]

export default function Process() {
  return (
    <section className="px-4 md:px-8 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Timeline</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Work Together</h2>
          <p className="text-text-secondary max-w-md mx-auto">From first commit to production launch — a predictable, transparent process.</p>
        </div>

        <div className="relative">
          {/* Desktop: horizontal line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.week} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Dot on line */}
                <div className="hidden md:flex justify-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg relative z-10" />
                </div>

                <div className="p-5 rounded-2xl bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors">
                  <span className="text-[10px] font-mono accent-text mb-2 block">{step.week}</span>
                  <p className="text-sm font-semibold mb-2">{step.title}</p>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
