import { ArrowDownRight, MapPin, Clock, Shield, Zap, Code2, Smartphone, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-10 pt-28 pb-12 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,255,71,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* === TOP ROW: Identity + Availability === */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 animate-fade-in opacity-0">
          {/* Left: Who */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
              <span className="text-sm font-bold accent-text">ZA</span>
            </div>
            <div>
              <p className="text-sm font-medium text-text">Zohaib Amir</p>
              <p className="text-xs text-text-muted">Full-Stack Developer & Technical Founder</p>
            </div>
          </div>

          {/* Right: Availability badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-accent/20 bg-accent/[0.03]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs text-accent font-medium">Available for new projects</span>
          </div>
        </div>

        {/* === MAIN VALUE PROP === */}
        <div className="mb-12">
          <h1 className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight">
            <span className="block animate-fade-up opacity-0 delay-100">
              Senior dev who ships
            </span>
            <span className="block animate-fade-up opacity-0 delay-200">
              <span className="accent-text">AI features</span>,{' '}
              <span className="accent-text">web apps</span>,
            </span>
            <span className="block animate-fade-up opacity-0 delay-300">
              and <span className="accent-text">mobile products</span>.
            </span>
          </h1>
        </div>

        {/* === CREDIBILITY STRIP === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-up opacity-0 delay-400">
          <div className="p-4 rounded-xl border border-border bg-surface/30">
            <p className="text-2xl md:text-3xl font-bold accent-text">7+</p>
            <p className="text-xs text-text-muted mt-1">Years shipping production code</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface/30">
            <p className="text-2xl md:text-3xl font-bold accent-text">30+</p>
            <p className="text-xs text-text-muted mt-1">Products launched end-to-end</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface/30">
            <p className="text-2xl md:text-3xl font-bold accent-text">3</p>
            <p className="text-xs text-text-muted mt-1">Continents — US, EU, APAC clients</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface/30">
            <p className="text-2xl md:text-3xl font-bold accent-text">2</p>
            <p className="text-xs text-text-muted mt-1">Ways to work: embed or deliver</p>
          </div>
        </div>

        {/* === WHAT I DO (pills) === */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-up opacity-0 delay-500">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary">
            <Brain size={13} className="text-accent" /> AI/LLM Integration
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary">
            <Code2 size={13} className="text-accent" /> TypeScript / React / Next.js
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary">
            <Smartphone size={13} className="text-accent" /> React Native / Cross-platform
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary">
            <Shield size={13} className="text-accent" /> Security-first architecture
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-text-secondary">
            <Zap size={13} className="text-accent" /> Staff augmentation & freelance
          </span>
        </div>

        {/* === BOTTOM ROW: CTA + Meta === */}
        <div className="mt-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-fade-up opacity-0 delay-600">
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
            >
              Start a project
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-sm font-medium hover:border-text transition-colors"
            >
              See recent work
            </a>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-5 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> Lahore, PKT
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> GMT+5, overlap-friendly
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Async-first
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
