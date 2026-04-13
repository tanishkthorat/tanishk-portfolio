export const metadata = {
  title: "Strategic Synthesis Engine — Tanishk Thorat",
  description: "A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that doesn't trust AI.",
};

export default function StrategicSynthesisEngine() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-sm font-mono text-gray-500">
          <a href="/" className="hover:text-gray-900">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900">CASE STUDIES</a>
          {" / "}
          STRATEGIC SYNTHESIS ENGINE
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded">FICTIONAL CLIENT · STRATEGY EXERCISE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Strategic Synthesis Engine</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          A 12-week deployment plan for a fictional regulated biotech with 50,000 internal documents and a legal team that does not trust AI. The decisions inside it are worth defending on their own terms: how to design for users who don't trust AI, how to evaluate a RAG system without hiding its limitations, and how to sequence a 12-week deployment so compliance doesn't kill it at the finish line.
        </p>
        <div className="mt-6">
          <a href="/prds/strategic-synthesis-engine" className="inline-block px-6 py-3 bg-gray-900 text-white font-mono text-sm rounded-lg hover:bg-gray-700 transition">Read the full PRD →</a>
        </div>
      </section>

      {/* Project at a Glance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROJECT AT A GLANCE</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top w-40">Context</td>
                <td className="py-3 text-gray-600">Strategy exercise for a fictional regulated biotech with 50,000 internal documents</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">Users</td>
                <td className="py-3 text-gray-600">Two groups with different trust thresholds: research scientists (AI-ready) and legal teams (verification-first)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">Deliverable</td>
                <td className="py-3 text-gray-600">12-week deployment plan with full PRD, 108 story points across 6 parallel workstreams</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">Compliance</td>
                <td className="py-3 text-gray-600">Designed for 21 CFR Part 11 (FDA electronic records requirements)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROBLEM</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The brief</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            The fictional client was a regulated biotech with 50,000 internal documents — protocols, regulatory filings, internal research, legal opinions — that nobody could effectively search. Two user groups had to be served with very different tolerances for AI: research scientists who would happily use a chatbot if it saved them an hour, and legal teams who would refuse to trust any system that summarized a regulatory document for them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The constraint was a 12-week path to production. The natural temptation was to ship for the easy users first (researchers in Phase 1) and defer the hard ones (legal in Phase 2). The case study is built around why that would have been the wrong call, and what a better approach looks like.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">KEY DECISIONS</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Three decisions that shaped the plan</h2>

        <div className="space-y-12">
          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">Search engine, not chatbot</h3>
            <p className="text-gray-600 leading-relaxed">
              A chatbot creates a trust barrier for risk-averse users. Legal teams in regulated industries are not going to type a question into a chat box and accept a synthesized answer; they need to see the source document and reach their own conclusion. So I wrapped the answer engine in a search and document viewing layer. Search is familiar. Trust builds organically. The cost was about 10% more engineering effort for the search interface and document viewer; the benefit was a fundamentally different adoption curve. Researchers got the chatbot they wanted as a power-user feature inside the search interface. Legal got the source-first interface they would actually use. The same backend served both.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">Both user groups from day one</h3>
            <p className="text-gray-600 leading-relaxed">
              Most plans would defer legal to Phase 2 on the grounds that they are harder to onboard. The search-first design (Decision 1) eliminates the objection: legal does not have to trust AI to get value, they just have to use the search. Deferring them would have meant ignoring half the stated problem. Including them at MVP also made the change-management plan honest: the harder audience defines the success criteria for the easier one. If legal would not adopt it, neither would the regulators auditing the company's processes a year later.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Confidence scores stay internal</h3>
            <p className="text-gray-600 leading-relaxed">
              Users never see a number. The system gives a full cited answer when retrieval is high-confidence, a partial answer with gaps explicitly flagged when retrieval is mixed, or refuses and explains what is missing when retrieval is weak. Transparency through behavior, not through metrics users cannot interpret. Showing a "73% confidence" score forces every user to make a personal judgment call about what threshold matters; it also gives the system an excuse to be wrong ("but we told you it was only 73%"). Behavior-based transparency removes both problems and makes the trust model reviewable by compliance, not just by individual users.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Plan */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERY PLAN</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Twelve weeks, six workstreams</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 font-mono text-xs overflow-x-auto">
          <div className="grid grid-cols-7 gap-2 min-w-[600px]">
            <div></div>
            <div className="text-center text-gray-500">W1-2</div>
            <div className="text-center text-gray-500">W3-4</div>
            <div className="text-center text-gray-500">W5-6</div>
            <div className="text-center text-gray-500">W7-8</div>
            <div className="text-center text-gray-500">W9-10</div>
            <div className="text-center text-gray-500">W11-12</div>

            <div className="text-gray-700">Infrastructure</div>
            <div className="col-span-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-center">Azure private cloud, ingest pipeline</div>
            <div className="col-span-4"></div>

            <div className="text-gray-700">Core RAG</div>
            <div></div>
            <div className="col-span-5 bg-green-100 text-green-800 px-2 py-1 rounded text-center">Subset ingestion → eval → tune → full corpus W9</div>

            <div className="text-gray-700">Interface</div>
            <div></div>
            <div className="col-span-3 bg-purple-100 text-purple-800 px-2 py-1 rounded text-center">Search-first UI, document viewer, refusal UX</div>
            <div className="col-span-2"></div>

            <div className="text-gray-700">Compliance</div>
            <div className="col-span-6 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-center">Legal review at every gate, audit logging from day 1</div>

            <div className="text-gray-700">Testing</div>
            <div className="col-span-2"></div>
            <div className="col-span-4 bg-red-100 text-red-800 px-2 py-1 rounded text-center">Per-layer eval, not end-to-end. Recall traps surfaced.</div>

            <div className="text-gray-700">Change mgmt</div>
            <div className="col-span-6 bg-gray-200 text-gray-700 px-2 py-1 rounded text-center">Threaded across all 12 weeks. Both user groups in scope from W1.</div>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Pilot launch (W9) → Production (W12)
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            108 MVP story points across six parallel workstreams. The two design choices that show up most clearly in the swimlane: change management threaded across all 12 weeks rather than stacked at the end, and the corpus split — pilot on a subset at week 9, full ingestion only after parameter validation. The latter is the parameter-validation trap that has taken down production deployments in this category, where teams ingest the full corpus before knowing whether their chunking and embedding choices hold up at scale.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Compliance reviewing every gate is the other non-obvious call. Most plans treat compliance as a gate at the end. In a regulated biotech that gate is where deployments die. Putting compliance review at every milestone makes the legal team part of the build rather than an obstacle to it, which is also how you earn their adoption (Decision 2).
          </p>
        </div>
      </section>

      {/* What Else the Case Study Covers */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">WHAT ELSE THE CASE STUDY COVERS</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">From the full PRD</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Why private cloud beats on-prem for regulated industries</h3>
            <p className="text-gray-600 leading-relaxed">
              The instinct in regulated environments is to keep everything on-premises. But private cloud (Azure private endpoint within the client's tenant) gives you the compliance posture of on-prem with the deployment speed of cloud. No document content leaves the network. The architecture is portable to AWS if needed. The tradeoff is vendor dependency, but for a 12-week MVP that's acceptable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">The parameter validation trap</h3>
            <p className="text-gray-600 leading-relaxed">
              A common failure mode in enterprise RAG: teams ingest the full corpus before knowing whether their chunking and embedding choices work at scale. Then they discover retrieval quality is poor and have to re-ingest everything. The plan splits ingestion into two phases: a 2,500 to 5,000 document subset for pilot (Week 4), with full 50,000 document ingestion only after parameters are validated (Week 9). This adds two weeks to the timeline but avoids the re-work that has killed production deployments in this category.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Per-layer evaluation, not end-to-end</h3>
            <p className="text-gray-600 leading-relaxed">
              Most teams evaluate RAG systems by testing the final answer. If the answer is wrong, they don't know whether retrieval failed or generation failed. The plan evaluates each layer independently: retrieval quality (precision and recall against a labeled dataset), groundedness (is every claim supported by retrieved content), and answer relevance (does it address the question). If retrieval is poor, you fix retrieval. If generation is unfaithful, you adjust prompts and confidence thresholds. This prevents the common mistake of trying to fix retrieval problems with prompt engineering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">The recall problem, stated honestly</h3>
            <p className="text-gray-600 leading-relaxed">
              Current RAG architectures do not guarantee that every relevant document in a 50,000 document corpus is surfaced for every query. Industry benchmarks in pharma regulatory QA have reported recall rates below 50% in complex multi-document scenarios. The plan mitigates this through hybrid search (semantic plus keyword), confidence scoring that flags low-certainty answers, and transparent refusal behavior that states what the system searched and what it could not find. The integrated search layer exists partly so users can verify completeness themselves. Full recall optimization is a Phase 2 target, not a solved problem. The PRD says this explicitly rather than hiding it.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERABLES</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Receipts</h2>

        <div className="space-y-4">
          <a href="/Roadmap.html" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <h3 className="font-bold text-gray-900 mb-2">12-Week Delivery Roadmap</h3>
            <p className="text-gray-600 mb-2">Swimlane view across 6 parallel workstreams. 108 MVP story points. Infrastructure, core product, interface, compliance, testing, change management.</p>
            <span className="text-sm font-mono text-gray-900">→</span>
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <a href="/case-studies" className="text-sm font-mono text-gray-500 hover:text-gray-900">← Back to case studies</a>
      </section>
    </main>
  );
}
