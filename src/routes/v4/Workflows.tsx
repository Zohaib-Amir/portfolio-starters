import { GitBranch, TestTube, ShieldCheck, Rocket, MessageSquare, FileText, RotateCcw } from 'lucide-react'

const workflows = [
  {
    icon: GitBranch,
    title: 'Branch Strategy',
    desc: 'Git Flow with semantic commits. Every PR has a template, every merge is squash-merged with a clean history.',
    tags: ['Conventional Commits', 'PR Templates', 'Squash Merge']
  },
  {
    icon: TestTube,
    title: 'Test Coverage',
    desc: 'Unit, integration, and e2e tests. I write tests that catch regressions, not just hit coverage targets.',
    tags: ['Vitest', 'Playwright', 'MSW']
  },
  {
    icon: ShieldCheck,
    title: 'Security Review',
    desc: 'Dependency auditing, secret scanning, and architecture review for auth/data flow before any merge.',
    tags: ['Snyk', 'GitGuardian', 'OWASP']
  },
  {
    icon: Rocket,
    title: 'Deploy Pipeline',
    desc: 'Preview deploys for every PR, staging for integration testing, production with feature flags.',
    tags: ['Vercel', 'GitHub Actions', 'LaunchDarkly']
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'Daily standups via Slack, weekly Loom updates, and async RFCs for architectural decisions.',
    tags: ['Slack', 'Loom', 'Notion']
  },
  {
    icon: FileText,
    title: 'Documentation',
    desc: 'READMEs, API docs, runbooks, and ADRs. Code is read 10x more than it is written.',
    tags: ['OpenAPI', 'Storybook', 'MkDocs']
  },
  {
    icon: RotateCcw,
    title: 'Incident Response',
    desc: 'Monitoring, alerting, and runbooks. I build systems that fail gracefully and recover fast.',
    tags: ['Sentry', 'PagerDuty', 'Datadog']
  }
]

export default function Workflows() {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 reveal">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <GitBranch size={14} className="accent-text" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Process</p>
            <h2 className="text-lg font-bold">How I Deliver</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {workflows.map((w, i) => (
            <div key={w.title} className="card p-5 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <w.icon size={16} className="accent-text mb-3" />
              <h3 className="text-sm font-semibold mb-1">{w.title}</h3>
              <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{w.desc}</p>
              <div className="flex flex-wrap gap-1">
                {w.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
