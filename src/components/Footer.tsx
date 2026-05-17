import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Zohaib-Amir', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/zohaibamir', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/zohaibamir', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@zohaibamir.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left */}
          <div>
            <a href="#" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                <span className="text-sm font-bold accent-text">ZA</span>
              </div>
              <span className="text-sm font-medium text-text-secondary">Zohaib Amir</span>
            </a>
            <p className="text-xs text-text-muted max-w-xs leading-relaxed">
              Technical founder building AI-powered products with modern tools.
              Available for staff augmentation and freelance projects.
            </p>
          </div>

          {/* Right: socials + copyright */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Zohaib Amir. Built with React + Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
