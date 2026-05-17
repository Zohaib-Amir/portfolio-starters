import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg border border-border bg-surface flex items-center justify-center">
            <span className="text-[10px] font-bold accent-text font-mono">ZA</span>
          </div>
          <span className="text-[11px] text-text-muted">Zohaib Amir — 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Zohaib-Amir" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:accent-text transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/zohaibamir" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:accent-text transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com/zohaibamir" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:accent-text transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}