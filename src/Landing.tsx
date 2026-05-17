import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, Terminal, LayoutDashboard, User, Palette } from 'lucide-react'

const versions = [
  {
    id: 'v1',
    name: 'Editorial',
    desc: 'Lime accent, asymmetric layouts, stroke text effects. Bold and artistic.',
    icon: Sparkles,
    color: 'from-lime-500/10 to-green-500/10',
    accent: '#e8ff47',
  },
  {
    id: 'v2',
    name: 'Terminal',
    desc: 'Mint accent, monospace fonts, typewriter animations. Developer-native.',
    icon: Terminal,
    color: 'from-emerald-500/10 to-teal-500/10',
    accent: '#00e5a0',
  },
  {
    id: 'v3',
    name: 'Dashboard',
    desc: 'Amber accent, bento grid, sparklines, data-dense. Information-first.',
    icon: LayoutDashboard,
    color: 'from-amber-500/10 to-orange-500/10',
    accent: '#f59e0b',
  },
  {
    id: 'v4',
    name: 'Developer',
    desc: 'Cyan accent, workflow-focused, stack depth, specializations. Expertise-first.',
    icon: User,
    color: 'from-cyan-500/10 to-blue-500/10',
    accent: '#06b6d4',
  },
  {
    id: 'v5',
    name: 'Illustrated',
    desc: 'Violet accent, graphic illustrations, orbital layout, visual-first. Design-forward.',
    icon: Palette,
    color: 'from-violet-500/10 to-purple-500/10',
    accent: '#8b5cf6',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Portfolio <span className="accent-text">Versions</span>
        </h1>
        <p className="text-text-secondary text-sm">
          Three approaches to the same goal. Pick the one that resonates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full">
        {versions.map((v) => (
          <button
            key={v.id}
            onClick={() => navigate(`/${v.id}`)}
            className="group card p-6 text-left hover:scale-[1.02] transition-all duration-300"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${v.color}`}
              style={{ border: `1px solid ${v.accent}20` }}
            >
              <v.icon size={18} style={{ color: v.accent }} />
            </div>
            <h2 className="text-lg font-semibold mb-1 group-hover:accent-text transition-colors">
              {v.name}
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              {v.desc}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium" style={{ color: v.accent }}>
              <span>View {v.id}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      <p className="text-[10px] text-text-muted font-mono mt-12">
        Built by Zohaib Amir — Full-Stack Developer & Technical Founder
      </p>
    </div>
  )
}
