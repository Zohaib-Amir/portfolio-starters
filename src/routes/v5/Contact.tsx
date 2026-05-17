import { Mail, Calendar, MessageSquare, Copy, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react'
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
    <section className="px-4 md:px-8 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Available for Q2 2026 engagements. Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-surface-raised/50 border border-border text-center reveal">
            <Mail size={20} className="accent-text mx-auto mb-3" />
            <p className="text-sm font-semibold mb-1">Email</p>
            <p className="text-[13px] text-text-secondary mb-3">{email}</p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent transition-colors text-[11px] font-medium"
            >
              {copied ? <CheckCircle2 size={12} className="text-success" /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <a
            href="https://cal.com/zohaibamir"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-surface-raised/50 border border-border text-center hover:border-accent/30 transition-colors reveal block"
          >
            <Calendar size={20} className="accent-text mx-auto mb-3" />
            <p className="text-sm font-semibold mb-1">Calendar</p>
            <p className="text-[13px] text-text-secondary mb-3">Book a 30-min call</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-bg text-[11px] font-medium">
              Schedule
            </span>
          </a>

          <div className="p-6 rounded-2xl bg-surface-raised/50 border border-border text-center reveal">
            <MessageSquare size={20} className="accent-text mx-auto mb-3" />
            <p className="text-sm font-semibold mb-1">Social</p>
            <p className="text-[13px] text-text-secondary mb-3">Connect anywhere</p>
            <div className="flex items-center justify-center gap-3">
              <a href="https://github.com/Zohaib-Amir" target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/zohaibamir" target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com/zohaibamir" target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
