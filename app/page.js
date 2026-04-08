export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-mono text-gray-500 mb-4">TANISHK THORAT</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Enterprise AI product design, from the inside.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          I'm a consultant who builds AI systems. I designed a 12-week deployment plan for a fictional biotech client wrestling with 50,000 documents and a legal team that doesn't trust AI. Here's how I designed around both constraints.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap">
          <a href="#case-study" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
            Read the case study
          </a>
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Three key decisions */}
      <section id="case-study" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">THE CASE STUDY</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Synthesis Engine</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          A document intelligence system for a regulated biotech. 50,000 internal documents. Two user groups with very different tolerances for AI. A 12-week path to production. Here are the three decisions that shaped everything else.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">Search engine, not chatbot</h3>
            <p className="text-gray-600 leading-relaxed">
              A chatbot creates a trust barrier for risk-averse users. I wrapped the answer engine in a search and document viewing layer. Search is familiar. Trust builds organically. 10% more engineering effort for a fundamentally different adoption curve.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">Both user groups from day one</h3>
            <p className="text-gray-600 leading-relaxed">
              Most plans would defer legal to Phase 2. But the search-first design eliminates their objection: they don't have to trust AI to get value. Deferring them would have meant ignoring half the stated problem.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Confidence scores stay internal</h3>
            <p className="text-gray-600 leading-relaxed">
              Users never see a number. The system gives a full cited answer, a partial answer with gaps explicitly flagged, or refuses and explains what's missing. Transparency through behavior, not through metrics users can't interpret.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">What else the case study covers</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400">→</span>
              <span>Why private cloud beats on-prem for regulated industries, even when instinct says otherwise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">→</span>
              <span>Subset ingestion for pilot, full corpus at Week 9: the parameter validation trap that's taken down production deployments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">→</span>
              <span>Change management as a thread across all 12 weeks, not a phase at the end</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">→</span>
              <span>Evaluation at each layer of the pipeline independently, not end-to-end</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">→</span>
              <span>The recall problem in enterprise RAG, and why I flagged it instead of hiding it</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERABLES</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">The full package</h2>

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

          <a href="https://github.com/tanishkthorat/notes-on-private-rag-systems" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Architecture notes: private RAG systems</h3>
                <p className="text-gray-600">Design decisions and lessons from building a production-style private AI platform. Dual-model inference, grounded generation, refusal as a feature.</p>
              </div>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">ABOUT</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I am</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <p>
            I'm a Senior Consultant at EY, focused on enterprise transformation. Three-plus years delivering Fortune 500 programs: SAP S/4HANA implementation, PMO leadership, change management, and stakeholder orchestration across hundred-person programs.
          </p>
          <p>
            On my own time I build AI systems. A private RAG platform with dual-GPU inference, grounded generation, and a verification layer to fight hallucinations. I built it because I wanted firsthand experience with where these systems break in practice, not just the consulting talking points.
          </p>
          <p>
            I'm looking for roles at the intersection of enterprise and AI: product management, AI strategy, or deployment. If you're hiring and any of this resonates, I'd love to talk.
          </p>
        </div>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
            LinkedIn
          </a>
          <a href="https://github.com/tanishkthorat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500">
        <p>Built with Next.js. Deployed on Vercel. © Tanishk Thorat 2026.</p>
      </footer>
    </main>
  );
}