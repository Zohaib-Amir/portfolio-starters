import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Proof', href: '#proof' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-mono text-xs accent-text">$</span>
          <span className="text-sm font-semibold">zohaib.amir</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs text-text-secondary hover:text-text underline-hover transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-xs font-medium px-4 py-2 rounded border border-border hover:border-accent hover:text-accent transition-all">
            Hire me
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="w-5 h-px bg-text mb-1.5 transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : '' }} />
          <div className="w-5 h-px bg-text transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : '' }} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mx-6 mt-2 rounded-lg p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm text-text-secondary hover:text-text">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium px-4 py-2 rounded border border-accent text-accent text-center">Hire me</a>
          </div>
        </div>
      )}
    </nav>
  )
}
