import { ArrowDownRight, Terminal, Cpu, Globe, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Status bar */}
        <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in opacity-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent/5 border border-accent/10">
            <span className="status-dot" />
            <span className="text-xs font-mono accent-text">AVAILABLE_Q2_2026</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
            <Clock size={12} />
            <span>GMT+5</span>
            <span className="text-text-muted/50">|</span>
            <Globe size={12} />
            <span>REMOTE_OK</span>
          </div>
        </div>

        {/* Main headline — direct, no poetry */}
        <div className="mb-10">
          <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight">
            <span className="block animate-fade-up opacity-0 delay-100">
              I build <span className="accent-text">AI-powered</span> software
            </span>
            <span className="block animate-fade-up opacity-0 delay-200">
              for teams that need to <span className="accent-text">ship fast</span>.
            </span>
          </h1>
        </div>

        {/* Sub — what exactly */}
        <p className="text-text-secondary text-sm md:text-base max-w-xl leading-relaxed mb-10 animate-fade-up opacity-0 delay-300">
          Full-stack developer with 7+ years shipping production code. I embed into teams
          as senior staff or deliver end-to-end products. TypeScript, React, React Native,
          Node.js, Python — plus LLM integrations that actually work.
        </p>

        {/* Capability cards — dense info, scannable */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 animate-fade-up opacity-0 delay-400">
          <div className="p-4 rounded-lg border border-border bg-surface/40 hover:border-accent/20 transition-colors">
            <Cpu size={16} className="accent-text mb-2" />
            <p className="text-xs font-semibold mb-0.5">AI Integration</p>
            <p className="text-[10px] text-text-muted font-mono">LLMs · RAG · Agents</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-surface/40 hover:border-accent/20 transition-colors">
            <Terminal size={16} className="accent-text mb-2" />
            <p className="text-xs font-semibold mb-0.5">Web & Mobile</p>
            <p className="text-[10px] text-text-muted font-mono">React · RN · Next.js</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-surface/40 hover:border-accent/20 transition-colors">
            <Shield size={16} className="accent-text mb-2" />
            <p className="text-xs font-semibold mb-0.5">Security</p>
            <p className="text-[10px] text-text-muted font-mono">Zero-trust · OAuth</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-surface/40 hover:border-accent/20 transition-colors">
            <Globe size={16} className="accent-text mb-2" />
            <p className="text-xs font-semibold mb-0.5">Remote</p>
            <p className="text-[10px] text-text-muted font-mono">Embed · Freelance</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-up opacity-0 delay-500">
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-accent text-bg text-sm font-semibold hover:bg-accent-dim transition-colors">
            Start a project
            <ArrowDownRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a href="#work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-border text-sm hover:border-text transition-colors">
            View case studies
          </a>
          <a href="#proof" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm text-text-secondary hover:text-text transition-colors">
            See proof →
          </a>
        </div>
      </div>
    </section>
  )
}
