export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">01</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">About</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: big statement */}
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight reveal">
              I help teams ship
              <br />
              <span className="accent-text">AI-powered products</span>
              <br />
              without the bloat.
            </h2>
          </div>

          {/* Right: details */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="reveal delay-200">
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                I'm Zohaib — a technical founder based in Lahore, Pakistan. I build
                software at the intersection of AI, security, and great UX. Whether
                embedding into your team or delivering end-to-end, I treat every
                project like it's my own.
              </p>
            </div>

            <div className="reveal delay-300">
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                Currently leading <span className="text-text">Z2A Tech</span>, a
                product studio focused on privacy-first SaaS and AI tooling. Previously
                shipped products across fintech, proptech, and developer tools.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border reveal delay-400">
              <div>
                <p className="text-2xl md:text-3xl font-bold accent-text">7+</p>
                <p className="text-xs text-text-muted mt-1">Years building</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold accent-text">30+</p>
                <p className="text-xs text-text-muted mt-1">Products shipped</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold accent-text">3</p>
                <p className="text-xs text-text-muted mt-1">Continents worked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
