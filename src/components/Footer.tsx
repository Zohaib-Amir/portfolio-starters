import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Zohaib-Amir', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/zohaibamir', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/zohaibamir', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@zohaibamir.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs accent-text">$</span>
          <span className="text-sm font-medium">zohaib.amir</span>
          <span className="text-[10px] text-text-muted font-mono">— full-stack dev & technical founder</span>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              aria-label={s.label}
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>

        <p className="text-[10px] text-text-muted font-mono">
          &copy; {new Date().getFullYear()} — built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
