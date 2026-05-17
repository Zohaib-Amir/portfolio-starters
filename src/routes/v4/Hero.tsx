import {
  Brain, Shield, Zap, Clock, MapPin, Calendar,
  GitBranch, Terminal, Layers, Wifi, Fingerprint, Lock, Eye, Sparkles,
  Boxes, Rocket, HandshakeIcon, ChevronRight, Copy, CheckCircle2, MessageSquare,
  Server, Database, Workflow
} from 'lucide-react'
import { useState } from 'react'

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${accent ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-surface-raised text-text-secondary border border-border'}`}>
      {children}
    </span>
  )
}

function DepthBar({ label, level, desc }: { label: string; level: number; desc: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium">{label}</span>
        <span className="text-[10px] text-text-muted font-mono">{desc}</span>
      </div>
      <div className="h-1.5 bg-surface-raised rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-accent/70 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function SpecBadge({ icon: Icon, label, detail }: { icon: any; label: string; detail: string }) {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors">
      <Icon size={14} className="accent-text mt-0.5 shrink-0" />
      <div>
        <p className="text-[11px] font-semibold">{label}</p>
        <p className="text-[10px] text-text-muted leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

function ProcessStep({ num, title, desc, tags }: { num: string; title: string; desc: string; tags: string[] }) {
  return (
    <div className="relative pl-6 pb-4 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
        <span className="text-[9px] font-mono accent-text">{num}</span>
      </div>
      {num !== '4' && <div className="absolute left-[7px] top-5 w-px h-full bg-border" />}
      <p className="text-[11px] font-semibold mb-0.5">{title}</p>
      <p className="text-[10px] text-text-muted leading-relaxed mb-1.5">{desc}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  )
}

function ProjectType({ name, stack, desc }: { name: string; stack: string[]; desc: string }) {
  return (
    <div className="p-3 rounded-lg bg-surface-raised/50 border border-border hover:border-accent/30 transition-colors group">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[11px] font-semibold group-hover:accent-text transition-colors">{name}</p>
        <ChevronRight size={12} className="text-text-muted group-hover:accent-text transition-colors" />
      </div>
      <p className="text-[10px] text-text-muted leading-relaxed mb-2">{desc}</p>
      <div className="flex flex-wrap gap-1">
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
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 animate-fade-in opacity-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center">
              <span className="text-xs font-bold accent-text font-mono">ZA</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Zohaib Amir</p>
              <p className="text-[10px] text-text-muted font-mono">Senior Full-Stack Engineer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg border border-border bg-surface">
              <span className="status-dot" />
              <span className="text-[10px] font-mono text-success">AVAILABLE_Q2</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-surface text-[10px] text-text-muted font-mono">
              <Clock size={10} />
              <span>GMT+5</span>
            </div>
          </div>
        </div>

        {/* === MAIN BENTO === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* PROFILE + VALUE PROP — 8 cols */}
          <div className="md:col-span-8 card p-5 md:p-6 animate-fade-up opacity-0 delay-100">
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar placeholder */}
              <div className="shrink-0 w-16 h-16 rounded-xl bg-surface-raised border border-border flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                  <span className="text-2xl font-bold accent-text font-mono">ZA</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">About</p>
                <h1 className="text-[clamp(1.3rem,3vw,2.2rem)] font-extrabold leading-[1.15] tracking-tight mb-2">
                  I build <span className="accent-text">AI-powered</span> products<br />
                  and embed into teams as <span className="accent-text">senior staff</span>.
                </h1>
                <p className="text-xs text-text-secondary leading-relaxed max-w-xl">
                  TypeScript, React, React Native, Node.js, Python. I design architectures,
                  ship features, and integrate LLMs — from prototype to production.
                  Remote-first. Async-native. Security-conscious.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
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

          {/* HOW I WORK — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-200">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">How I Work</p>
            <ProcessStep
              num="1"
              title="Embed"
              desc="Join your Slack, standups, and backlog. I operate as senior staff from day one."
              tags={['Slack', 'Linear', 'Notion']}
            />
            <ProcessStep
              num="2"
              title="Ship"
              desc="Feature branches, PR reviews, CI/CD. Clean commits, clear communication."
              tags={['Git', 'GitHub Actions', 'Vercel']}
            />
            <ProcessStep
              num="3"
              title="Integrate"
              desc="Connect AI, auth, payments, real-time sync. Production-grade integrations."
              tags={['OpenAI', 'Stripe', 'WebSockets']}
            />
            <ProcessStep
              num="4"
              title="Handoff"
              desc="Documented code, runbooks, and knowledge transfer. Your team owns it."
              tags={['README', 'API docs', 'Loom']}
            />
          </div>

          {/* CURRENT STACK — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-300">
            <div className="flex items-center gap-2 mb-4">
              <Layers size={13} className="accent-text" />
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Current Stack</p>
            </div>
            <div className="space-y-3">
              <DepthBar label="TypeScript / React" level={95} desc="7+ yrs" />
              <DepthBar label="React Native / Expo" level={88} desc="4+ yrs" />
              <DepthBar label="Node.js / APIs" level={90} desc="6+ yrs" />
              <DepthBar label="Python / AI" level={82} desc="3+ yrs" />
              <DepthBar label="Cloud / Edge" level={78} desc="3+ yrs" />
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-[10px] text-text-muted mb-2 font-mono">ALSO COMFORTABLE</p>
              <div className="flex flex-wrap gap-1">
                <Tag>Go</Tag>
                <Tag>Rust</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Docker</Tag>
                <Tag>Kubernetes</Tag>
              </div>
            </div>
          </div>

          {/* SPECIALIZATIONS — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-400">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={13} className="accent-text" />
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Specialized In</p>
            </div>
            <div className="space-y-2">
              <SpecBadge
                icon={Brain}
                label="AI Agent Workflows"
                detail="Multi-step LLM chains, tool use, RAG pipelines with vector stores"
              />
              <SpecBadge
                icon={Wifi}
                label="Real-Time Systems"
                detail="WebSockets, Server-Sent Events, CRDT sync, live collaboration"
              />
              <SpecBadge
                icon={Fingerprint}
                label="Auth & Identity"
                detail="OAuth2, SSO, RBAC, JWT patterns, zero-trust architecture"
              />
              <SpecBadge
                icon={Lock}
                label="Privacy-First Design"
                detail="Client-side encryption, anonymization, GDPR-compliant AI pipelines"
              />
              <SpecBadge
                icon={Server}
                label="Edge & Serverless"
                detail="Cloudflare Workers, Vercel Edge, WASM, cold-start optimization"
              />
              <SpecBadge
                icon={Database}
                label="Data Architecture"
                detail="Event sourcing, CQRS, caching strategies, database design"
              />
            </div>
          </div>

          {/* PROJECT TYPES — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center gap-2 mb-4">
              <Rocket size={13} className="accent-text" />
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">What I Build</p>
            </div>
            <div className="space-y-2">
              <ProjectType
                name="AI-Native SaaS"
                desc="Products where AI is core, not bolted-on. Agents, copilots, automation."
                stack={['Next.js', 'OpenAI', 'LangChain', 'PgVector']}
              />
              <ProjectType
                name="Cross-Platform Apps"
                desc="React Native + Expo with shared business logic. One team, all platforms."
                stack={['Expo', 'Tamagui', 'Zustand', 'Supabase']}
              />
              <ProjectType
                name="API Platforms"
                desc="REST and GraphQL backends with real-time, webhooks, and rate limiting."
                stack={['Node.js', 'Fastify', 'tRPC', 'Redis']}
              />
              <ProjectType
                name="Internal Tools"
                desc="Dashboards, admin panels, and ops tools that teams actually use."
                stack={['React', 'TanStack', 'shadcn', 'Prisma']}
              />
            </div>
          </div>

          {/* AVAILABILITY + CONTACT — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-600">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Availability</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="status-dot" />
              <span className="text-sm font-semibold">Open for Q2 2026</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-border">
                <span className="text-text-secondary flex items-center gap-2">
                  <HandshakeIcon size={12} /> Staff augmentation
                </span>
                <span className="font-mono text-success text-[10px]">● AVAILABLE</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-border">
                <span className="text-text-secondary flex items-center gap-2">
                  <Boxes size={12} /> Freelance projects
                </span>
                <span className="font-mono text-success text-[10px]">● AVAILABLE</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="text-text-secondary flex items-center gap-2">
                  <Brain size={12} /> AI consulting
                </span>
                <span className="font-mono text-success text-[10px]">● AVAILABLE</span>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 text-xs font-medium px-3 py-2.5 rounded-lg bg-accent text-bg hover:bg-accent-dim transition-colors"
              >
                {copied ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a
                href="https://cal.com/zohaibamir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-medium px-3 py-2.5 rounded-lg border border-border hover:border-accent transition-colors text-center"
              >
                <Calendar size={13} />
                Book 30-min Call
              </a>
            </div>
          </div>

          {/* WORKFLOW PREVIEW — 8 cols */}
          <div className="md:col-span-8 card p-5 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow size={13} className="accent-text" />
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Development Workflow</p>
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
                <div key={label} className="p-3 rounded-lg bg-surface-raised/50 border border-border">
                  <Icon size={14} className="accent-text mb-2" />
                  <p className="text-[11px] font-semibold mb-1">{label}</p>
                  <p className="text-[10px] text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-surface-raised/30 border border-border font-mono text-[10px] text-text-muted overflow-x-auto">
              <span className="text-accent">$</span> git commit -m "feat: add RAG pipeline with pgvector" <span className="text-text-muted">&&</span> gh pr create <span className="text-text-muted">--fill</span> <span className="text-text-muted">&&</span> vercel --prod
            </div>
          </div>
        </div>

        {/* === BOTTOM META === */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-[11px] text-text-muted animate-fade-in opacity-0 delay-700">
          <span className="flex items-center gap-1.5"><MapPin size={11} /> Lahore, Pakistan</span>
          <span className="flex items-center gap-1.5"><Clock size={11} /> GMT+5, overlap-friendly</span>
          <span className="flex items-center gap-1.5"><MessageSquare size={11} /> Async-first</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-success" /> Same-day response</span>
          <span className="flex items-center gap-1.5"><Shield size={11} /> Security-reviewed code</span>
        </div>
      </div>
    </section>
  )
}
