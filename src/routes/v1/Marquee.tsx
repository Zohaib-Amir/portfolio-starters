const items = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python',
  'AI/LLMs', 'React Native', 'Cloudflare', 'PostgreSQL',
  'Security', 'GraphQL', 'Docker', 'Tailwind',
]

export default function Marquee() {
  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="text-sm text-text-muted uppercase tracking-widest">{item}</span>
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </section>
  )
}
