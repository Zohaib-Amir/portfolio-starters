import { Brain, Code2, Shield, Globe, Zap, Clock, MapPin, Mail, Calendar } from 'lucide-react'

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

export default function Hero() {
  const activityData = [12, 18, 15, 22, 28, 35, 30, 42, 38, 45, 52, 48, 55, 60, 58, 65, 72, 68, 75, 80, 78, 85, 90, 88]
  const commitData = [2, 5, 3, 8, 6, 12, 10, 15, 18, 14, 20, 22, 19, 25, 28, 24, 30, 32, 29, 35, 38, 34, 40, 42]

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
              7+ years shipping production code. I embed as senior staff or deliver end-to-end.
              TypeScript, React, React Native, Node.js, Python — plus LLM integrations that work.
            </p>
          </div>

          {/* Availability card — 4 cols */}
          <div className="md:col-span-4 card p-5 animate-fade-up opacity-0 delay-200">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Availability</p>
            <div className="flex items-center gap-3 mb-4">
              <span className="status-dot" />
              <span className="text-sm font-semibold">Open for Q2 2026</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">Staff augmentation</span>
                <span className="font-mono text-success">●</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">Freelance projects</span>
                <span className="font-mono text-success">●</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">AI consulting</span>
                <span className="font-mono text-success">●</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="#contact" className="flex-1 text-center text-xs font-medium px-3 py-2 rounded bg-accent text-bg hover:bg-accent-dim transition-colors">
                Start project
              </a>
              <a href="#work" className="flex-1 text-center text-xs font-medium px-3 py-2 rounded border border-border hover:border-text transition-colors">
                View work
              </a>
            </div>
          </div>

          {/* Stats row — 3 cards */}
          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-300">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Experience</p>
            <p className="text-4xl font-extrabold accent-text mb-1">7+</p>
            <p className="text-xs text-text-secondary">Years shipping production</p>
            <MiniBars values={[30, 45, 35, 55, 50, 65, 60, 75, 70, 85, 80, 95]} />
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-400">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Shipped</p>
            <p className="text-4xl font-extrabold accent-text mb-1">30+</p>
            <p className="text-xs text-text-secondary">Products end-to-end</p>
            <MiniBars values={[20, 35, 30, 40, 45, 55, 50, 60, 65, 70, 75, 85]} />
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-500">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Clients</p>
            <p className="text-4xl font-extrabold accent-text mb-1">3</p>
            <p className="text-xs text-text-secondary">Continents served</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="tag">US</span>
              <span className="tag">EU</span>
              <span className="tag">APAC</span>
            </div>
          </div>

          <div className="md:col-span-3 card p-5 animate-fade-up opacity-0 delay-600">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Retention</p>
            <p className="text-4xl font-extrabold accent-text mb-1">94%</p>
            <p className="text-xs text-text-secondary">Clients come back</p>
            <Sparkline data={[60, 65, 70, 68, 75, 80, 78, 85, 88, 90, 92, 94]} />
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

          {/* Activity chart — full width */}
          <div className="md:col-span-8 card p-5 animate-fade-up opacity-0 delay-600">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Activity (24h)</p>
              <div className="flex items-center gap-4 text-[10px] text-text-muted font-mono">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent/60" /> Code</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-info/60" /> Commits</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Sparkline data={activityData} />
                <p className="text-[10px] text-text-muted font-mono mt-1">Activity score: 87/100</p>
              </div>
              <div>
                <Sparkline data={commitData} color="#3b82f6" />
                <p className="text-[10px] text-text-muted font-mono mt-1">Commits today: 42</p>
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
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Same-day response</span>
        </div>
      </div>
    </section>
  )
}
