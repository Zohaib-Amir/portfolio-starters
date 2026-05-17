import { useState } from 'react'
import { Copy, CheckCircle2, Calendar, ArrowDown, Zap, Shield, Globe } from 'lucide-react'

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium ${accent ? 'bg-accent/15 text-accent border border-accent/25' : 'bg-surface-raised text-text-secondary border border-border'}`}>
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
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20 pb-16 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
        <svg className="absolute top-32 left-[15%] w-8 h-8 text-accent/20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,22 2,22" />
        </svg>
        <svg className="absolute top-48 right-[20%] w-6 h-6 text-accent/15" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" />
        </svg>
        <svg className="absolute bottom-40 right-[15%] w-10 h-10 text-accent/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <svg className="absolute bottom-60 left-[20%] w-5 h-5 text-accent/20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 animate-fade-in opacity-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-lg font-bold accent-text font-mono">ZA</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Zohaib Amir</p>
              <p className="text-[11px] text-text-muted font-mono">Senior Full-Stack Engineer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface">
              <span className="status-dot" />
              <span className="text-[11px] font-mono text-success">AVAILABLE Q2</span>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-accent transition-colors text-[11px] font-medium"
            >
              {copied ? <CheckCircle2 size={12} className="text-success" /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Email'}
            </button>
            <a
              href="https://cal.com/zohaibamir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-bg hover:bg-accent-dim transition-colors text-[11px] font-medium"
            >
              <Calendar size={12} />
              Book Call
            </a>
          </div>
        </div>

        {/* Main hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up opacity-0 delay-100">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap size={12} className="accent-text" />
              <span className="text-[11px] font-mono accent-text">AI-NATIVE DEVELOPMENT</span>
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6">
              I build products<br />
              with <span className="accent-text">intelligence</span><br />
              baked in.
            </h1>

            <p className="text-base text-text-secondary leading-relaxed max-w-md mb-8">
              Senior full-stack engineer specializing in AI-powered SaaS,
              cross-platform apps, and real-time systems. I embed into teams
              and ship production code that scales.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <Tag accent>Staff Augmentation</Tag>
              <Tag accent>Freelance</Tag>
              <Tag accent>AI Consulting</Tag>
              <Tag>TypeScript</Tag>
              <Tag>React / Next.js</Tag>
              <Tag>React Native</Tag>
              <Tag>Node.js</Tag>
              <Tag>LLM Integration</Tag>
            </div>

            <div className="flex items-center gap-6 text-xs text-text-muted">
              <span className="flex items-center gap-1.5"><Shield size={13} /> Security-first</span>
              <span className="flex items-center gap-1.5"><Globe size={13} /> Remote-native</span>
              <span className="flex items-center gap-1.5"><Zap size={13} /> 4-6 week delivery</span>
            </div>
          </div>

          {/* Right: Graphic illustration */}
          <div className="relative animate-fade-up opacity-0 delay-200 hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main circle */}
              <div className="absolute inset-[10%] rounded-full border-2 border-accent/10" />
              <div className="absolute inset-[20%] rounded-full border border-accent/5" />

              {/* Center avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-surface-raised border-2 border-accent/20 flex items-center justify-center shadow-2xl shadow-accent/5">
                  <span className="text-5xl font-bold accent-text font-mono">ZA</span>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-surface-raised border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] font-mono">AI Agents</span>
                </div>
              </div>

              <div className="absolute top-[30%] right-[5%] px-4 py-2 rounded-xl bg-surface-raised border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-[11px] font-mono">Real-Time</span>
                </div>
              </div>

              <div className="absolute bottom-[30%] right-[8%] px-4 py-2 rounded-xl bg-surface-raised border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-dim" />
                  <span className="text-[11px] font-mono">Auth</span>
                </div>
              </div>

              <div className="absolute bottom-[15%] left-[15%] px-4 py-2 rounded-xl bg-surface-raised border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="text-[11px] font-mono">Privacy</span>
                </div>
              </div>

              <div className="absolute top-[35%] left-[5%] px-4 py-2 rounded-xl bg-surface-raised border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] font-mono">TypeScript</span>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="32%" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="82%" y2="68%" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="25%" y2="78%" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="18%" y2="38%" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown size={20} className="text-text-muted" />
        </div>
      </div>
    </section>
  )
}
