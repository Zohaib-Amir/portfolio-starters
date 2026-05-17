import { ArrowUpRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal relative">
          {/* Big background text */}
          <div className="absolute -top-20 left-0 text-[clamp(6rem,15vw,14rem)] font-extrabold text-text/[0.03] select-none pointer-events-none leading-none">
            LET'S
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-end">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">05</span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Contact</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                Let's build
                <br />
                <span className="accent-text">something</span>
                <br />
                great.
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8">
              <p className="text-text-secondary leading-relaxed text-sm max-w-sm">
                Whether you need a senior developer embedded in your team or a partner
                to ship an entire product, I'm ready to talk. Based in Lahore, working
                with teams across US, EU, and APAC.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@zohaibamir.com"
                  className="group inline-flex items-center gap-3 px-6 py-4 rounded-full border border-border hover:border-accent hover:bg-accent hover:text-bg transition-all duration-300"
                >
                  <Mail size={16} />
                  <span className="text-sm font-medium">contact@zohaibamir.com</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://cal.com/zohaibamir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-border hover:border-text transition-all duration-300 text-sm font-medium"
                >
                  Book a call
                </a>
              </div>

              <div className="flex items-center gap-6 text-xs text-text-muted pt-4 border-t border-border">
                <span>GMT+5 (PKT)</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>Async-first</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>Same-day response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
