export default function Proof() {
  return (
    <section id="proof" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">01</span>
          <div className="flex-1 hr" />
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Proof</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Numbers that<br />
              <span className="accent-text">back the claim.</span>
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              I don't just write code — I ship products that businesses depend on.
              From MVPs to enterprise systems, the results speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '7+', label: 'Years', sub: 'Production experience' },
              { num: '30+', label: 'Products', sub: 'Shipped end-to-end' },
              { num: '94%', label: 'Retention', sub: 'Clients return' },
              { num: '3', label: 'Continents', sub: 'US, EU, APAC' },
            ].map((s, i) => (
              <div key={i} className="reveal-scale card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="text-3xl md:text-4xl font-extrabold accent-text mb-1">{s.num}</p>
                <p className="text-xs font-semibold mb-0.5">{s.label}</p>
                <p className="text-[10px] text-text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
