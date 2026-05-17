import { Mail, Calendar, MessageSquare, MapPin, Clock, Copy, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'contact@zohaibamir.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="px-4 md:px-8 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 reveal">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <MessageSquare size={14} className="accent-text" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Contact</p>
            <h2 className="text-lg font-bold">Let's Work Together</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-6 reveal">
            <Mail size={18} className="accent-text mb-4" />
            <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Email</p>
            <p className="text-base font-medium mb-4">{email}</p>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border border-border hover:border-accent transition-colors"
            >
              {copied ? <CheckCircle2 size={14} className="text-success" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="card p-6 reveal">
            <Calendar size={18} className="accent-text mb-4" />
            <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Calendar</p>
            <p className="text-base font-medium mb-4">Book a 30-min call</p>
            <a
              href="https://cal.com/zohaibamir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl bg-accent text-bg hover:bg-accent-dim transition-colors"
            >
              <Calendar size={14} />
              Schedule
            </a>
          </div>

          <div className="card p-6 reveal">
            <MapPin size={18} className="accent-text mb-4" />
            <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Location</p>
            <p className="text-base font-medium mb-1">Lahore, Pakistan</p>
            <p className="text-sm text-text-secondary flex items-center gap-1.5">
              <Clock size={13} />
              GMT+5, overlap with US morning / EU afternoon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
