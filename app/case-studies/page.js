export const metadata = {
  title: "Case Studies — Tanishk Thorat",
  description: "Three case studies on building and shipping AI systems: a self-hosted research platform, a swing trading platform, and a deployment plan for a regulated biotech.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <span>CASE STUDIES</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Three case studies.</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Two systems I built and operate on my own hardware. One deployment plan for a regulated client. Each one is here because the decisions inside it are worth defending in an interview.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="space-y-6">

          <a href="/case-studies/ai-research-platform" className="block p-8 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 01</p>
                  <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">AI Research Platform</h2>
                <p className="text-gray-600 leading-relaxed">
                  A self-hosted research tool I built to learn where private RAG systems actually break. Dual-GPU inference, a multi-stage pipeline, and a strict no-fabrication discipline. One user: me, daily.
                </p>
              </div>
              <span className="text-gray-400 text-2xl mt-1">→</span>
            </div>
          </a>

          <a href="/case-studies/trading-platform" className="block p-8 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 02</p>
                  <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Trading Platform</h2>
                <p className="text-gray-600 leading-relaxed">
                  A swing trading research system built on top of the AI Research Platform. Natural-language strategy compilation, deterministic execution, regime-aware risk controls. One user: me. No live trading.
                </p>
              </div>
              <span className="text-gray-400 text-2xl mt-1">→</span>
            </div>
          </a>

          <a href="/case-studies/strategic-synthesis-engine" className="block p-8 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <p className="text-xs font-mono text-gray-500">CASE STUDY 03</p>
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded">NOT-DEPLOYED</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Strategic Synthesis Engine</h2>
                <p className="text-gray-600 leading-relaxed">
                  A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that doesn't trust AI. Take-home turned case study.
                </p>
              </div>
              <span className="text-gray-400 text-2xl mt-1">→</span>
            </div>
          </a>

        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500 mt-12">
        <p>
          <a href="/" className="hover:text-gray-900 transition">← Back to home</a>
        </p>
      </footer>
    </main>
  );
}