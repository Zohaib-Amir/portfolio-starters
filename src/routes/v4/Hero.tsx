import {
  Brain, Shield, Zap, Clock, MapPin, Calendar, Star,
  GitBranch, Terminal, Wifi, Fingerprint, Lock, Eye, Sparkles,
  Rocket, ChevronRight, Copy, CheckCircle2, MessageSquare,
  Workflow, Code2, Globe
} from 'lucide-react'
import { useState } from 'react'

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium ${accent ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-surface-raised text-text-secondary border border-border'}`}>
      {children}
    </span>
  )
}

function Highlight({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors group">
      <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
        <Icon size={16} className="accent-text" />
      </div>
      <div>
        <p className="text-sm font-semibold mb-1 group-hover:accent-text transition-colors">{title}</p>
        <p className="text-[13px] text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function Deliverable({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="p-4 rounded-xl bg-surface-raised/50 border border-border">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="accent-text" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2 text-[13px] text-text-secondary">
            <CheckCircle2 size={13} className="accent-text shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectType({ name, stack, desc }: { name: string; stack: string[]; desc: string }) {
  return (
    <div className="p-4 rounded-xl bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors group cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold group-hover:accent-text transition-colors">{name}</p>
        <ChevronRight size={14} className="text-text-muted group-hover:accent-text transition-colors" />
      </div>
      <p className="text-[13px] text-text-secondary leading-relaxed mb-3">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {stack.map(s => <Tag key={s} accent>{s}</Tag>)}
      </div>
    </div>
  )
}

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@zohaibamir.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen px-4 md:px-8 pt-24 pb-12 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* === HEADER WITH CTAS === */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8 animate-fade-in opacity-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center">
              <span className="text-sm font-bold accent-text font-mono">ZA</span>
            </div>
            <div>
              <p className="text-base font-semibold">Zohaib Amir</p>
              <p className="text-xs text-text-muted font-mono">Senior Full-Stack Engineer</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface">
              <span className="status-dot" />
              <span className="text-[11px] font-mono text-success">AVAILABLE Q2</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-[11px] text-text-muted font-mono">
              <Clock size={11} />
              <span>GMT+5</span>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent transition-colors text-[11px] font-medium"
            >
              {copied ? <CheckCircle2 size={12} className="text-success" /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Email'}
            </button>
            <a
              href="https://cal.com/zohaibamir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-bg hover:bg-accent-dim transition-colors text-[11px] font-medium"
            >
              <Calendar size={12} />
              Book Call
            </a>
          </div>
        </div>

        {/* === MAIN BENTO === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* VALUE PROP — 8 cols */}
          <div className="md:col-span-8 card p-6 md:p-8 animate-fade-up opacity-0 delay-100">
            <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">About</p>
            <h1 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight mb-4">
              I build <span className="accent-text">AI-powered</span> products<br />
              and embed into teams as <span className="accent-text">senior staff</span>.
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xl mb-5">
              TypeScript, React, React Native, Node.js, Python. I design architectures,
              ship features, and integrate LLMs — from prototype to production.
              Remote-first. Async-native. Security-conscious.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag accent>Staff Augmentation</Tag>
              <Tag accent>Freelance</Tag>
              <Tag accent>AI Consulting</Tag>
              <Tag>React / Next.js</Tag>
              <Tag>React Native / Expo</Tag>
              <Tag>Node.js / Python</Tag>
              <Tag>LLM Integration</Tag>
              <Tag>Cloudflare Workers</Tag>
            </div>
          </div>

          {/* BRAND CARD — 4 cols */}
          <div className="md:col-span-4 card p-6 animate-fade-up opacity-0 delay-200 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-2xl bg-surface-raised border-2 border-accent/20 flex items-center justify-center overflow-hidden mb-4">
              <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                <span className="text-4xl font-bold accent-text font-mono">ZA</span>
              </div>
            </div>
            <p className="text-lg font-bold mb-1">Zohaib Amir</p>
            <p className="text-sm text-text-secondary mb-4">Full-Stack Engineer & Technical Founder</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Tag>7+ Years</Tag>
              <Tag>30+ Products</Tag>
              <Tag>3 Continents</Tag>
            </div>
          </div>

          {/* WHAT CLIENTS GET — 8 cols */}
          <div className="md:col-span-8 card p-6 animate-fade-up opacity-0 delay-300">
            <div className="flex items-center gap-2 mb-5">
              <Star size={16} className="accent-text" />
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest">What You Get</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Deliverable
                icon={Code2}
                title="Production Code"
                items={['TypeScript-first, strictly typed', 'Clean architecture, testable', 'Performance-optimized builds']}
              />
              <Deliverable
                icon={Brain}
                title="AI Integration"
                items={['LLM chains with error handling', 'RAG pipelines that scale', 'Privacy-safe AI architecture']}
              />
              <Deliverable
                icon={Shield}
                title="Security Built-In"
                items={['Auth & RBAC from day one', 'Input validation & sanitization', 'Dependency vulnerability scanning']}
              />
              <Deliverable
                icon={Globe}
                title="Remote-Ready Delivery"
                items={['Async communication (Slack/Loom)', 'Daily standups, weekly demos', 'Timezone overlap with US/EU']}
              />
            </div>
          </div>

          {/* SPECIALIZATIONS — 4 cols */}
          <div className="md:col-span-4 card p-6 animate-fade-up opacity-0 delay-400">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={16} className="accent-text" />
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest">Specialized In</p>
            </div>
            <div className="space-y-3">
              <Highlight
                icon={Brain}
                title="AI Agent Workflows"
                desc="Multi-step LLM chains, tool use, RAG with vector stores"
              />
              <Highlight
                icon={Wifi}
                title="Real-Time Systems"
                desc="WebSockets, SSE, CRDT sync, live collaboration"
              />
              <Highlight
                icon={Fingerprint}
                title="Auth & Identity"
                desc="OAuth2, SSO, RBAC, JWT, zero-trust architecture"
              />
              <Highlight
                icon={Lock}
                title="Privacy-First Design"
                desc="Client-side encryption, anonymization, GDPR-compliant AI"
              />
            </div>
          </div>

          {/* PROJECT TYPES — 4 cols */}
          <div className="md:col-span-4 card p-6 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center gap-2 mb-5">
              <Rocket size={16} className="accent-text" />
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest">What I Build</p>
            </div>
            <div className="space-y-3">
              <ProjectType
                name="AI-Native SaaS"
                desc="Products where AI is core, not bolted-on. Agents, copilots, automation."
                stack={['Next.js', 'OpenAI', 'LangChain']}
              />
              <ProjectType
                name="Cross-Platform Apps"
                desc="React Native + Expo. One team, all platforms."
                stack={['Expo', 'Tamagui', 'Supabase']}
              />
              <ProjectType
                name="API Platforms"
                desc="REST and GraphQL with real-time, webhooks, rate limiting."
                stack={['Node.js', 'tRPC', 'Redis']}
              />
              <ProjectType
                name="Internal Tools"
                desc="Dashboards and ops tools that teams actually use."
                stack={['React', 'TanStack', 'Prisma']}
              />
            </div>
          </div>

          {/* DEVELOPMENT WORKFLOW — 8 cols */}
          <div className="md:col-span-8 card p-6 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Workflow size={16} className="accent-text" />
                <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest">Development Workflow</p>
              </div>
              <Tag accent>TypeScript-First</Tag>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: GitBranch, label: 'Git Flow', detail: 'Feature branches, semantic commits, PR templates' },
                { icon: Terminal, label: 'CI/CD', detail: 'GitHub Actions, automated tests, preview deploys' },
                { icon: Eye, label: 'Code Review', detail: 'Architecture reviews, security audits, perf checks' },
                { icon: Zap, label: 'Ship Fast', detail: 'Daily deploys, feature flags, rollback ready' },
              ].map(({ icon: Icon, label, detail }) => (
                <div key={label} className="p-4 rounded-xl bg-surface-raised/50 border border-border">
                  <Icon size={18} className="accent-text mb-3" />
                  <p className="text-sm font-semibold mb-1">{label}</p>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl bg-surface-raised/30 border border-border font-mono text-xs text-text-muted overflow-x-auto">
              <span className="text-accent">$</span> git commit -m "feat: add RAG pipeline with pgvector" <span className="text-text-muted">&&</span> gh pr create <span className="text-text-muted">--fill</span> <span className="text-text-muted">&&</span> vercel --prod
            </div>
          </div>
        </div>

        {/* === BOTTOM META === */}
        <div className="flex flex-wrap items-center gap-5 mt-8 text-xs text-text-muted animate-fade-in opacity-0 delay-700">
          <span className="flex items-center gap-1.5"><MapPin size={13} /> Lahore, Pakistan</span>
          <span className="flex items-center gap-1.5"><Clock size={13} /> GMT+5, overlap-friendly</span>
          <span className="flex items-center gap-1.5"><MessageSquare size={13} /> Async-first</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-success" /> Same-day response</span>
          <span className="flex items-center gap-1.5"><Shield size={13} /> Security-reviewed code</span>
        </div>
      </div>
    </section>
  )
}
