import {
  Brain, Code2, Shield, Globe, Zap, Clock, MapPin, Mail, Calendar,
  CheckCircle2, MessageSquare, Copy
} from 'lucide-react'
import { useState } from 'react'

function MiniBars({ values }: { values: number[] }) {
  return (
    <div className="flex items-end gap-[3px] h-8">
      {values.map((v, i) => (
        <div key={i} className="bar w-[5px] rounded-sm" style={{ height: `${v}%`, opacity: 0.3 + (v / 200) }} />
      ))}
    </div>
  )
}

function Sparkline({ data, color = '#f59e0b' }: { data: number[]; color?: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((v - min) / range) * 100
    return `${x},${y}`
  }).join(' ')
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-10">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <polygon points={`0,100 ${points} 100,100`} fill={color} opacity="0.05" />
    </svg>
  )
}

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium ${accent ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-surface-raised text-text-secondary border border-border'}`}>
      {children}
    </span>
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
    <section className="relative min-h-screen px-6 md:px-10 pt-28 pb-12 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* === HEADER ROW === */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in opacity-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center">
              <span className="text-sm font-bold accent-text">ZA</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Zohaib Amir</p>
              <p className="text-[11px] text-text-muted font-mono">Full-Stack Dev & Technical Founder</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface">
              <span className="status-dot" />
              <span className="text-[11px] font-mono text-success">AVAILABLE_Q2</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-[11px] text-text-muted font-mono">
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

        {/* === BENTO GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
          {/* Main headline — spans 8 cols */}
          <div className="md:col-span-8 card p-6 md:p-8 animate-fade-up opacity-0 delay-100">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Value Proposition</p>
            <h1 className="text-[clamp(1.6rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight mb-4">
              I build <span className="accent-text">AI-powered</span> software<br />
              for teams that need to <span className="accent-text">ship fast</span>.
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
              10 years shipping production code. I embed as senior staff or deliver end-to-end.
              TypeScript, React, React Native, Node.js, Python — plus LLM integrations that work.
            </p>
          </div>

          {/* BRAND CARD — 4 cols (from v4) */}
          <div className="md:col-span-4 card p-6 animate-fade-up opacity-0 delay-200 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-2xl bg-surface-raised border-2 border-accent/20 flex items-center justify-center overflow-hidden mb-4">
              <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                <span className="text-4xl font-bold accent-text font-mono">ZA</span>
              </div>
            </div>
            <p className="text-lg font-bold mb-1">Zohaib Amir</p>
            <p className="text-sm text-text-secondary mb-4">Full-Stack Engineer & Technical Founder</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Tag>10 Years</Tag>
              <Tag>28 Jobs</Tag>
              <Tag>Top Rated Plus</Tag>
            </div>
          </div>

          {/* Stats row — 4 cards with Upwork stats */}
          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-300">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Job Success</p>
            <p className="text-4xl font-extrabold accent-text mb-1">100%</p>
            <p className="text-xs text-text-secondary">Upwork Job Success Score</p>
            <MiniBars values={[85, 88, 90, 92, 94, 95, 96, 97, 98, 99, 100, 100]} />
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-400">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Rating</p>
            <p className="text-4xl font-extrabold accent-text mb-1">Top Rated Plus</p>
            <p className="text-xs text-text-secondary">Upwork top-tier badge</p>
            <Sparkline data={[60, 65, 70, 75, 80, 82, 85, 88, 90, 92, 95, 98]} />
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-500">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Completed</p>
            <p className="text-4xl font-extrabold accent-text mb-1">28</p>
            <p className="text-xs text-text-secondary">Total jobs on Upwork</p>
            <MiniBars values={[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 28, 28]} />
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-600">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Experience</p>
            <p className="text-4xl font-extrabold accent-text mb-1">10</p>
            <p className="text-xs text-text-secondary">Years shipping production</p>
            <Sparkline data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} color="#f59e0b" />
          </div>

          {/* Capability cards — 4 cols each */}
          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-200">
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} className="accent-text" />
              <p className="text-xs font-semibold">AI Integration</p>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">LLMs, RAG pipelines, agent workflows. Secure AI that respects privacy.</p>
            <div className="flex flex-wrap gap-1">
              <span className="tag">OpenAI</span>
              <span className="tag">LangChain</span>
              <span className="tag">RAG</span>
            </div>
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-300">
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={16} className="accent-text" />
              <p className="text-xs font-semibold">Web & Mobile</p>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">React, Next.js, React Native, Expo. Cross-platform with native feel.</p>
            <div className="flex flex-wrap gap-1">
              <span className="tag">React</span>
              <span className="tag">RN</span>
              <span className="tag">TS</span>
            </div>
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-400">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={16} className="accent-text" />
              <p className="text-xs font-semibold">Security</p>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">Zero-trust patterns, encryption, compliance. Hardened from day one.</p>
            <div className="flex flex-wrap gap-1">
              <span className="tag">OAuth</span>
              <span className="tag">RBAC</span>
              <span className="tag">JWT</span>
            </div>
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="accent-text" />
              <p className="text-xs font-semibold">Remote</p>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">Embed into your team or deliver standalone. Async-first, timezone-flexible.</p>
            <div className="flex flex-wrap gap-1">
              <span className="tag">Embed</span>
              <span className="tag">Freelance</span>
            </div>
          </div>

          {/* Working style — 8 cols (replaces activity/commit graph) */}
          <div className="md:col-span-8 card p-6 animate-fade-up opacity-0 delay-600">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-5">How I Work</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-surface-raised/50 border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <MessageSquare size={16} className="accent-text" />
                </div>
                <p className="text-sm font-semibold mb-1">Async-First</p>
                <p className="text-[12px] text-text-secondary leading-relaxed">Slack, Loom, Notion. Deep work without constant meetings.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-raised/50 border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <Zap size={16} className="accent-text" />
                </div>
                <p className="text-sm font-semibold mb-1">Same-Day Response</p>
                <p className="text-[12px] text-text-secondary leading-relaxed">All messages answered within 24 hours, usually much faster.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-raised/50 border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <Clock size={16} className="accent-text" />
                </div>
                <p className="text-sm font-semibold mb-1">Timezone Overlap</p>
                <p className="text-[12px] text-text-secondary leading-relaxed">GMT+5 with flexible hours for US/EU collaboration.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-raised/50 border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <CheckCircle2 size={16} className="accent-text" />
                </div>
                <p className="text-sm font-semibold mb-1">Weekly Demos</p>
                <p className="text-[12px] text-text-secondary leading-relaxed">Ship every week. See progress, not promises.</p>
              </div>
            </div>
          </div>

          {/* Quick contact — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-700">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Quick Contact</p>
            <a href="mailto:contact@zohaibamir.com" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent transition-colors mb-2">
              <Mail size={14} className="text-text-muted" />
              <div>
                <p className="text-[11px] text-text-muted font-mono">EMAIL</p>
                <p className="text-xs">contact@zohaibamir.com</p>
              </div>
            </a>
            <a href="https://cal.com/zohaibamir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent transition-colors">
              <Calendar size={14} className="text-text-muted" />
              <div>
                <p className="text-[11px] text-text-muted font-mono">CALENDAR</p>
                <p className="text-xs">Book a 30-min call</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-text-muted animate-fade-in opacity-0 delay-700">
          <span className="flex items-center gap-1.5"><MapPin size={11} /> Lahore, Pakistan</span>
          <span className="flex items-center gap-1.5"><Clock size={11} /> GMT+5, overlap-friendly</span>
          <span className="flex items-center gap-1.5"><Zap size={11} /> Async-first</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-success" /> Same-day response</span>
        </div>
      </div>
    </section>
  )
}
