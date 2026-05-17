export default function Proof() {
  const stats = [
    { num: '7+', label: 'Years shipping production code', detail: 'From MVPs to enterprise systems' },
    { num: '30+', label: 'Products launched end-to-end', detail: 'Web, mobile, and AI-powered tools' },
    { num: '3', label: 'Continents with active clients', detail: 'US, EU, and APAC timezone overlap' },
    { num: '94%', label: 'Client retention rate', detail: 'They come back for the next project' },
  ]

  return (
    <section id="proof" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">01</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Proof</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="reveal bg-bg p-6 md:p-8 hover:bg-surface-raised transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-extrabold accent-text mb-2">{s.num}</p>
              <p className="text-xs font-semibold mb-1">{s.label}</p>
              <p className="text-[11px] text-text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
