export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-mono text-gray-500 mb-4">TANISHK THORAT</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Hi, I&apos;m Tanishk.</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Senior consultant at EY working on Fortune 500 tech transformation programs, which mostly means I get paid to figure out where big companies&apos; tech rollouts are going to break. I also love building things, especially AI projects, so in the evenings I build my own to learn what works and what breaks. Mostly the second one. Some of these are running daily. Others are a work in progress.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap">
          <a href="#case-studies" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">See the projects</a>
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">LinkedIn</a>
        </div>
      </section>

      {/* Three case study cards */}
      <section id="case-studies" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">CASE STUDIES</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I&apos;ve built</h2>

        <div className="space-y-6">

          <a href="/case-studies/ai-research-platform" className="block border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 01</p>
                  <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Research Platform</h3>
                <p className="text-gray-600 leading-relaxed mb-4">A self-hosted research tool I built to learn where private RAG systems actually break. Dual-GPU inference, a multi-stage pipeline, and a strict no-fabrication discipline. One user: me, daily.</p>
                <span className="text-sm font-mono text-gray-900">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-200 bg-gray-50">
                <img src="/screenshots/research-chat.png" alt="Research platform live query interface" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/trading-platform" className="block border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 02</p>
                  <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Trading Platform</h3>
                <p className="text-gray-600 leading-relaxed mb-4">A swing trading research system built on top of the AI Research Platform. Natural-language strategy compilation, deterministic execution, regime-aware risk controls. One user: me. No live trading.</p>
                <span className="text-sm font-mono text-gray-900">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-200 bg-gray-50">
                <img src="/screenshots/trading-strategies.png" alt="Trading platform strategies tab with backtest results" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/strategic-synthesis-engine" className="block p-8 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 03</p>
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded">TAKE-HOME, NOT DEPLOYED</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Strategic Synthesis Engine</h3>
                <p className="text-gray-600 leading-relaxed">A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that does not trust AI. Take-home turned case study.</p>
              </div>
              <span className="text-gray-400 text-2xl mt-1">→</span>
            </div>
          </a>

        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">ABOUT</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I am</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <p>Three-plus years on Fortune 500 transformation programs: SAP S/4HANA implementations, PMO leadership, change management, stakeholder orchestration across hundred-person programs.</p>
          <p>Master&apos;s in Business Analytics from Fordham. Bachelor&apos;s from Mumbai. Based in NYC.</p>
          <p>Looking for product roles at the intersection of enterprise and AI. If any of this resonates, I&apos;d love to talk.</p>
        </div>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">LinkedIn</a>
          <a href="https://github.com/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500">
        <p>Built with Next.js. Deployed on Vercel. © Tanishk Thorat 2026.</p>
      </footer>
    </main>
  );
}