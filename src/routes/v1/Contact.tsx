import { ArrowUpRight, Mail, Calendar, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">05</span>
            <div className="flex-1 hr" />
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Contact</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight mb-6">
                Let's build<br />
                <span className="accent-text">something</span><br />
                great.
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                Whether you need a senior developer embedded in your team or a partner to ship an entire product, I'm ready to talk.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@zohaibamir.com"
                className="group flex items-center gap-4 p-5 rounded-lg border border-border hover:border-accent transition-all duration-300"
              >
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all">
                  <Mail size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-text-muted font-mono mb-0.5">EMAIL</p>
                  <p className="text-sm font-medium">contact@zohaibamir.com</p>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>

              <a
                href="https://cal.com/zohaibamir"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-lg border border-border hover:border-accent transition-all duration-300"
              >
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all">
                  <Calendar size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] text-text-muted font-mono mb-0.5">CALENDAR</p>
                  <p className="text-sm font-medium">Book a 30-min call</p>
                </div>
                <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>

              <div className="flex items-center gap-5 text-xs text-text-muted pt-2">
                <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, PKT</span>
                <span>GMT+5</span>
                <span>Async-first</span>
                <span>Same-day response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
