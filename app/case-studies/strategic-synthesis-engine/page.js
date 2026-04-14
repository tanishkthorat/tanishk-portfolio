import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "Strategic Synthesis Engine — Tanishk Thorat",
  description: "A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that doesn't trust AI.",
};

const TABLE_CELL = "py-3 font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]";
const TABLE_LABEL = "font-mono text-[13px] text-[var(--fg)]";

export default function StrategicSynthesisEngine() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <a href="/" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">TANISHK THORAT</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">CASE STUDIES</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">STRATEGIC SYNTHESIS ENGINE</span>
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--fg-dim)] text-[var(--fg-dim)]">FICTIONAL CLIENT · STRATEGY EXERCISE</span>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Strategic Synthesis Engine</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px] mb-8">
          A 12-week deployment plan for a fictional regulated biotech with 50,000 internal documents and a legal team that does not trust AI. The decisions inside it are worth defending on their own terms: how to design for users who don't trust AI, how to evaluate a RAG system without hiding its limitations, and how to sequence a 12-week deployment so compliance doesn't kill it at the finish line.
        </p>
        <div className="mt-6">
          <a href="/prds/strategic-synthesis-engine" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">Read the full PRD →</a>
        </div>
      </section>

      {/* Project at a Glance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>PROJECT AT A GLANCE</SectionEyebrow>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top w-40`}>Context</td>
                <td className={TABLE_CELL}>Strategy exercise for a fictional regulated biotech with 50,000 internal documents</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Users</td>
                <td className={TABLE_CELL}>Two groups with different trust thresholds: research scientists (AI-ready) and legal teams (verification-first)</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Deliverable</td>
                <td className={TABLE_CELL}>12-week deployment plan with full PRD, 108 story points across 6 parallel workstreams</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Compliance</td>
                <td className={TABLE_CELL}>Designed for 21 CFR Part 11 (FDA electronic records requirements)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>PROBLEM</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">The brief</h2>
        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The fictional client was a regulated biotech with 50,000 internal documents — protocols, regulatory filings, internal research, legal opinions — that nobody could effectively search. Two user groups had to be served with very different tolerances for AI: research scientists who would happily use a chatbot if it saved them an hour, and legal teams who would refuse to trust any system that summarized a regulatory document for them.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The constraint was a 12-week path to production. The natural temptation was to ship for the easy users first (researchers in Phase 1) and defer the hard ones (legal in Phase 2). The case study is built around why that would have been the wrong call, and what a better approach looks like.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>KEY DECISIONS</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">Three decisions that shaped the plan</h2>

        <div className="space-y-12 max-w-[640px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 01</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Search engine, not chatbot</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              A chatbot creates a trust barrier for risk-averse users. Legal teams in regulated industries are not going to type a question into a chat box and accept a synthesized answer; they need to see the source document and reach their own conclusion. So I wrapped the answer engine in a search and document viewing layer. Search is familiar. Trust builds organically. The cost was about 10% more engineering effort for the search interface and document viewer; the benefit was a fundamentally different adoption curve. Researchers got the chatbot they wanted as a power-user feature inside the search interface. Legal got the source-first interface they would actually use. The same backend served both.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 02</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Both user groups from day one</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Most plans would defer legal to Phase 2 on the grounds that they are harder to onboard. The search-first design (Decision 1) eliminates the objection: legal does not have to trust AI to get value, they just have to use the search. Deferring them would have meant ignoring half the stated problem. Including them at MVP also made the change-management plan honest: the harder audience defines the success criteria for the easier one. If legal would not adopt it, neither would the regulators auditing the company's processes a year later.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 03</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Confidence scores stay internal</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Users never see a number. The system gives a full cited answer when retrieval is high-confidence, a partial answer with gaps explicitly flagged when retrieval is mixed, or refuses and explains what is missing when retrieval is weak. Transparency through behavior, not through metrics users cannot interpret. Showing a "73% confidence" score forces every user to make a personal judgment call about what threshold matters; it also gives the system an excuse to be wrong ("but we told you it was only 73%"). Behavior-based transparency removes both problems and makes the trust model reviewable by compliance, not just by individual users.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Plan */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>DELIVERY PLAN</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Twelve weeks, six workstreams</h2>

        <div className="my-10 border border-[var(--rule)] bg-[var(--bg-raised)] p-6 overflow-x-auto">
          <div className="grid grid-cols-7 gap-2 min-w-[600px] font-mono text-xs">
            <div></div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W1-2</div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W3-4</div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W5-6</div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W7-8</div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W9-10</div>
            <div className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">W11-12</div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Infrastructure</div>
            <div className="col-span-2 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Azure private cloud, ingest pipeline</div>
            <div className="col-span-4"></div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Core RAG</div>
            <div></div>
            <div className="col-span-5 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Subset ingestion → eval → tune → full corpus W9</div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Interface</div>
            <div></div>
            <div className="col-span-3 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Search-first UI, document viewer, refusal UX</div>
            <div className="col-span-2"></div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Compliance</div>
            <div className="col-span-6 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Legal review at every gate, audit logging from day 1</div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Testing</div>
            <div className="col-span-2"></div>
            <div className="col-span-4 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Per-layer eval, not end-to-end. Recall traps surfaced.</div>

            <div className="font-mono text-[13px] text-[var(--fg)]">Change mgmt</div>
            <div className="col-span-6 bg-[var(--bg)] border border-[var(--accent-dim)] text-[var(--fg-muted)] px-2 py-1 text-center">Threaded across all 12 weeks. Both user groups in scope from W1.</div>
          </div>
          <div className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-dim)]">
            Pilot launch (W9) → Production (W12)
          </div>
        </div>

        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            108 MVP story points across six parallel workstreams. The two design choices that show up most clearly in the swimlane: change management threaded across all 12 weeks rather than stacked at the end, and the corpus split — pilot on a subset at week 9, full ingestion only after parameter validation. The latter is the parameter-validation trap that has taken down production deployments in this category, where teams ingest the full corpus before knowing whether their chunking and embedding choices hold up at scale.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            Compliance reviewing every gate is the other non-obvious call. Most plans treat compliance as a gate at the end. In a regulated biotech that gate is where deployments die. Putting compliance review at every milestone makes the legal team part of the build rather than an obstacle to it, which is also how you earn their adoption (Decision 2).
          </p>
        </div>
      </section>

      {/* What Else the Case Study Covers */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>WHAT ELSE THE CASE STUDY COVERS</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">From the full PRD</h2>

        <div className="space-y-8 max-w-[640px]">
          <div>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Why private cloud beats on-prem for regulated industries</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The instinct in regulated environments is to keep everything on-premises. But private cloud (Azure private endpoint within the client's tenant) gives you the compliance posture of on-prem with the deployment speed of cloud. No document content leaves the network. The architecture is portable to AWS if needed. The tradeoff is vendor dependency, but for a 12-week MVP that's acceptable.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">The parameter validation trap</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              A common failure mode in enterprise RAG: teams ingest the full corpus before knowing whether their chunking and embedding choices work at scale. Then they discover retrieval quality is poor and have to re-ingest everything. The plan splits ingestion into two phases: a 2,500 to 5,000 document subset for pilot (Week 4), with full 50,000 document ingestion only after parameters are validated (Week 9). This adds two weeks to the timeline but avoids the re-work that has killed production deployments in this category.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Per-layer evaluation, not end-to-end</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Most teams evaluate RAG systems by testing the final answer. If the answer is wrong, they don't know whether retrieval failed or generation failed. The plan evaluates each layer independently: retrieval quality (precision and recall against a labeled dataset), groundedness (is every claim supported by retrieved content), and answer relevance (does it address the question). If retrieval is poor, you fix retrieval. If generation is unfaithful, you adjust prompts and confidence thresholds. This prevents the common mistake of trying to fix retrieval problems with prompt engineering.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">The recall problem, stated honestly</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Current RAG architectures do not guarantee that every relevant document in a 50,000 document corpus is surfaced for every query. Industry benchmarks in pharma regulatory QA have reported recall rates below 50% in complex multi-document scenarios. The plan mitigates this through hybrid search (semantic plus keyword), confidence scoring that flags low-certainty answers, and transparent refusal behavior that states what the system searched and what it could not find. The integrated search layer exists partly so users can verify completeness themselves. Full recall optimization is a Phase 2 target, not a solved problem. The PRD says this explicitly rather than hiding it.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>DELIVERABLES</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Receipts</h2>

        <div className="space-y-4">
          <a href="/Roadmap.html" target="_blank" rel="noopener noreferrer" className="block p-6 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">12-Week Delivery Roadmap</h3>
            <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-3">Swimlane view across 6 parallel workstreams. 108 MVP story points. Infrastructure, core product, interface, compliance, testing, change management.</p>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">→</span>
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-t border-[var(--rule)] font-mono text-[11px] text-[var(--fg-dim)]">
        <p>
          <a href="/case-studies" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">← Back to case studies</a>
        </p>
      </section>
    </main>
  );
}
