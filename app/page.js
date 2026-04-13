export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">TANISHK THORAT</span>
        </p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Hi, I&apos;m Tanishk.</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]">
          Senior consultant at EY working on Fortune 500 tech transformation programs, which mostly means I get paid to figure out where big companies&apos; tech rollouts are going to break. I also love building things, especially AI projects, so in the evenings I build my own to learn what works and what breaks (mostly the second one..). Some of these are running daily. Others are a work in progress.
        </p>
        <div className="mt-10 flex gap-3 flex-wrap">
          <a href="#case-studies" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors">See the projects</a>
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[9px] border border-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Three case study cards */}
      <section id="case-studies" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--rule)]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">CASE STUDIES</span>
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mb-12">What I&apos;ve built</h2>

        <div className="space-y-6">

          <a href="/case-studies/ai-research-platform" className="block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 01</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">AI Research Platform</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">A self-hosted research tool I built to learn where private RAG systems actually break. Dual-GPU inference, a multi-stage pipeline, and a strict no-fabrication discipline. One user: me, daily.</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--rule)] bg-[var(--bg)]">
                <img src="/screenshots/research-chat.png" alt="Research platform live query interface" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/trading-platform" className="block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 02</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">AI Powered Trading Platform</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">A swing trading research system built on top of the AI Research Platform. Natural-language strategy compilation, deterministic execution, regime-aware risk controls. One user: me. No live trading.</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--rule)] bg-[var(--bg)]">
                <img src="/screenshots/trading-strategies.png" alt="Trading platform strategies tab with backtest results" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/strategic-synthesis-engine" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 03</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--fg-dim)] text-[var(--fg-dim)]">FICTIONAL CLIENT · STRATEGY EXERCISE</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Strategic Synthesis Engine</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)]">A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that does not trust AI.</p>
              </div>
              <span className="text-[var(--accent-dim)] text-2xl mt-1">→</span>
            </div>
          </a>

        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--rule)]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">ABOUT</span>
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mb-8">Who I am</h2>
        <div className="space-y-4 font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]">
          <p>Three-plus years on Fortune 500 transformation programs: SAP S/4HANA implementations, PMO leadership, change management, stakeholder orchestration across hundred-person programs.</p>
          <p>Master&apos;s in Business Analytics from Fordham. Bachelor&apos;s from Mumbai. Based in NYC.</p>
          <p>Looking for product roles at the intersection of enterprise and AI. If any of this resonates, I&apos;d love to talk.</p>
        </div>
        <div className="mt-10 flex gap-3 flex-wrap">
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors">LinkedIn</a>
          <a href="https://github.com/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[9px] border border-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[var(--rule)] font-mono text-[11px] text-[var(--fg-dim)]">
        <p>Built with Next.js. Deployed on Vercel. © Tanishk Thorat 2026.</p>
      </footer>
    </main>
  );
}
