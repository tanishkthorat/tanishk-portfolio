export const metadata = {
  title: "Strategic Synthesis Engine — Tanishk Thorat",
  description: "Take-home case study: a 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that doesn't trust AI.",
};

export default function StrategicSynthesisEngine() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900 transition">CASE STUDIES</a>
          {" / "}
          <span>STRATEGIC SYNTHESIS ENGINE</span>
        </p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded">TAKE-HOME, NOT DEPLOYED</span>
          <span className="text-xs font-mono text-gray-500">FICTIONAL CLIENT · STRATEGY EXERCISE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Strategic Synthesis Engine</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          A 12-week deployment plan for a fictional regulated biotech with 50,000 internal documents and a legal team that does not trust AI. Take-home from a strategy interview, structured here as a case study because the decisions inside it are worth defending in their own right.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROBLEM</p>
        <h2 className="text-3xl font-bold mb-6">The brief</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <p>The fictional client was a regulated biotech with 50,000 internal documents — protocols, regulatory filings, internal research, legal opinions — that nobody could effectively search. Two user groups had to be served with very different tolerances for AI: research scientists who would happily use a chatbot if it saved them an hour, and legal teams who would refuse to trust any system that summarized a regulatory document for them.</p>
          <p>The constraint was a 12-week path to production. The natural temptation was to ship for the easy users first (researchers in Phase 1) and defer the hard ones (legal in Phase 2). The case study is built around why that would have been the wrong call, and what falls out of refusing to make it.</p>
          <p>Because this is a take-home, every decision is a strategic choice on paper rather than a build decision in code. That changes what the case study proves: not "I can ship this," but "I can structure a problem this complex and defend the calls."</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">KEY DECISIONS</p>
        <h2 className="text-3xl font-bold mb-8">Three decisions that shaped the plan</h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">Search engine, not chatbot</h3>
            <p className="text-gray-700 leading-relaxed">
              A chatbot creates a trust barrier for risk-averse users. Legal teams in regulated industries are not going to type a question into a chat box and accept a synthesized answer; they need to see the source document and reach their own conclusion. So I wrapped the answer engine in a search and document viewing layer. Search is familiar. Trust builds organically. The cost was about 10% more engineering effort for the search interface and document viewer; the benefit was a fundamentally different adoption curve. Researchers got the chatbot they wanted as a power-user feature inside the search interface. Legal got the source-first interface they would actually use. The same backend served both.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">Both user groups from day one</h3>
            <p className="text-gray-700 leading-relaxed">
              Most plans would defer legal to Phase 2 on the grounds that they are harder to onboard. The search-first design (Decision 1) eliminates the objection: legal does not have to trust AI to get value, they just have to use the search. Deferring them would have meant ignoring half the stated problem. Including them at MVP also made the change-management plan honest: the harder audience defines the success criteria for the easier one. If legal would not adopt it, neither would the regulators auditing the company's processes a year later.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Confidence scores stay internal</h3>
            <p className="text-gray-700 leading-relaxed">
              Users never see a number. The system gives a full cited answer when retrieval is high-confidence, a partial answer with gaps explicitly flagged when retrieval is mixed, or refuses and explains what is missing when retrieval is weak. Transparency through behavior, not through metrics users cannot interpret. Showing a "73% confidence" score forces every user to make a personal judgment call about what threshold matters; it also gives the system an excuse to be wrong ("but we told you it was only 73%"). Behavior-based transparency removes both problems and makes the trust model reviewable by compliance, not just by individual users.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERY PLAN</p>
        <h2 className="text-3xl font-bold mb-8">Twelve weeks, six workstreams</h2>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 overflow-x-auto">
          <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl mx-auto" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
            <defs>
              <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
              </pattern>
            </defs>

            <text x="155" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W1-2</text>
            <text x="255" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W3-4</text>
            <text x="355" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W5-6</text>
            <text x="455" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W7-8</text>
            <text x="555" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W9-10</text>
            <text x="655" y="22" fontSize="10" fill="#6b7280" textAnchor="middle">W11-12</text>

            <line x1="105" y1="30" x2="705" y2="30" stroke="#d1d5db" strokeWidth="1" />

            <text x="100" y="58" fontSize="11" fill="#111827" textAnchor="end">Infrastructure</text>
            <rect x="105" y="45" width="200" height="22" rx="3" fill="#111827" />
            <text x="205" y="60" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Azure private cloud, ingest pipeline</text>

            <text x="100" y="98" fontSize="11" fill="#111827" textAnchor="end">Core RAG</text>
            <rect x="205" y="85" width="350" height="22" rx="3" fill="#111827" />
            <text x="380" y="100" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Subset ingestion → eval → tune → full corpus W9</text>

            <text x="100" y="138" fontSize="11" fill="#111827" textAnchor="end">Interface</text>
            <rect x="205" y="125" width="450" height="22" rx="3" fill="#111827" />
            <text x="430" y="140" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Search-first UI, document viewer, refusal UX</text>

            <text x="100" y="178" fontSize="11" fill="#111827" textAnchor="end">Compliance</text>
            <rect x="105" y="165" width="500" height="22" rx="3" fill="#374151" />
            <text x="355" y="180" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Legal review at every gate, audit logging from day 1</text>

            <text x="100" y="218" fontSize="11" fill="#111827" textAnchor="end">Testing</text>
            <rect x="305" y="205" width="350" height="22" rx="3" fill="#374151" />
            <text x="480" y="220" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Per-layer eval, not end-to-end. Recall traps surfaced.</text>

            <text x="100" y="258" fontSize="11" fill="#111827" textAnchor="end">Change mgmt</text>
            <rect x="105" y="245" width="600" height="22" rx="3" fill="#6b7280" />
            <text x="405" y="260" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Threaded across all 12 weeks. Both user groups in scope from W1.</text>

            <line x1="555" y1="38" x2="555" y2="285" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" />
            <text x="555" y="300" fontSize="9" fontWeight="600" fill="#6b7280" textAnchor="middle">Pilot launch (W9)</text>

            <line x1="705" y1="38" x2="705" y2="320" stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />
            <text x="705" y="335" fontSize="9" fontWeight="600" fill="#111827" textAnchor="middle">Production (W12)</text>
          </svg>
        </div>

        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
          <p>108 MVP story points across six parallel workstreams. The two design choices that show up most clearly in the swimlane: change management threaded across all 12 weeks rather than stacked at the end, and the corpus split — pilot on a subset at week 9, full ingestion only after parameter validation. The latter is the parameter-validation trap that has taken down production deployments in this category, where teams ingest the full corpus before knowing whether their chunking and embedding choices hold up at scale.</p>
          <p>Compliance reviewing every gate is the other non-obvious call. Most plans treat compliance as a gate at the end. In a regulated biotech that gate is where deployments die. Putting compliance review at every milestone makes the legal team part of the build rather than an obstacle to it, which is also how you earn their adoption (Decision 2).</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">WHAT ELSE THE CASE STUDY COVERS</p>
        <h2 className="text-3xl font-bold mb-6">In the full PRD</h2>
        <ul className="space-y-3 text-gray-700 leading-relaxed max-w-3xl">
          <li className="flex gap-3"><span className="text-gray-400">→</span><span>Why private cloud beats on-prem for regulated industries, even when instinct says otherwise</span></li>
          <li className="flex gap-3"><span className="text-gray-400">→</span><span>Subset ingestion for pilot, full corpus at Week 9: the parameter validation trap that has taken down production deployments</span></li>
          <li className="flex gap-3"><span className="text-gray-400">→</span><span>Evaluation at each layer of the pipeline independently, not end-to-end</span></li>
          <li className="flex gap-3"><span className="text-gray-400">→</span><span>The recall problem in enterprise RAG, and why I flagged it instead of hiding it</span></li>
          <li className="flex gap-3"><span className="text-gray-400">→</span><span>The full delivery roadmap with all 108 MVP story points across 6 workstreams</span></li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERABLES</p>
        <h2 className="text-3xl font-bold mb-8">Receipts</h2>
        <div className="space-y-4">

          <a href="/PRD.pdf" target="_blank" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Product Requirements Document</h3>
                <p className="text-gray-600">Full PRD: goals, scope, features, evaluation methodology, technical requirements, constraints, blockers, open questions.</p>
              </div>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </a>

          <a href="/Roadmap.html" target="_blank" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">12-Week Delivery Roadmap</h3>
                <p className="text-gray-600">Swimlane view across 6 parallel workstreams. 108 MVP story points. Infrastructure, core product, interface, compliance, testing, change management.</p>
              </div>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </a>

        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500 mt-12">
        <p>
          <a href="/case-studies" className="hover:text-gray-900 transition">← Back to case studies</a>
        </p>
      </footer>

    </main>
  );
}