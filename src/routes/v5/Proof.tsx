import { Trophy, Timer, MessageCircle, Users } from 'lucide-react'

const points = [
  {
    icon: Timer,
    title: 'Ships in Weeks, Not Months',
    desc: 'MVP to production in 4-6 weeks. I cut scope intelligently and ship iteratively. No boilerplate sprints. Every commit moves the needle.'
  },
  {
    icon: MessageCircle,
    title: 'Over-Communicates by Default',
    desc: 'Daily standups, weekly Loom demos, async RFCs for architecture. You always know what is being built and why.'
  },
  {
    icon: Users,
    title: 'Embedded Team Member',
    desc: 'Joins your Slack, attends standups, reviews PRs. Not a black-box contractor — a senior engineer who happens to be remote.'
  },
  {
    icon: Trophy,
    title: 'Owns the Hard Stuff',
    desc: 'Auth, real-time sync, AI pipelines, security audits — I take on the pieces most developers avoid and deliver them production-ready.'
  }
]

export default function Proof() {
  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Differentiators</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Teams Hire Me</h2>
          <p className="text-text-secondary max-w-md mx-auto">Not just a developer — a technical partner who ships and communicates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="p-6 rounded-2xl bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="accent-text" />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:accent-text transition-colors">{p.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
