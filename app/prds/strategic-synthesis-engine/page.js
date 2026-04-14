import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "Strategic Synthesis Engine PRD — Tanishk Thorat",
  description: "Product requirements document for a 12-week enterprise RAG deployment at a fictional regulated biotech with 50,000 internal documents.",
};

const TABLE_CELL = "py-3 px-4 font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] align-top";
const TABLE_HEADER = "py-3 px-4 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]";
const TABLE_LABEL = "py-3 px-4 font-mono text-[13px] text-[var(--fg)] align-top whitespace-nowrap";

export default function StrategicSynthesisEnginePRD() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">

      {/* Header / breadcrumb */}
      <nav className="max-w-[640px] mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-6">
          <a href="/" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">TANISHK THORAT</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">CASE STUDIES</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies/strategic-synthesis-engine" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">STRATEGIC SYNTHESIS ENGINE</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">PRD</span>
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-[640px] mx-auto px-6 pb-8">
        <SectionEyebrow>PRD</SectionEyebrow>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Strategic Synthesis Engine</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px] mb-8">
          Product Requirements Document
        </p>

        <div className="overflow-x-auto border border-[var(--rule)]">
          <table className="w-full">
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={TABLE_LABEL}>Author</td>
                <td className={TABLE_CELL}>Tanishk Thorat</td>
              </tr>
              <tr>
                <td className={TABLE_LABEL}>Version</td>
                <td className={TABLE_CELL}>1.0 (MVP)</td>
              </tr>
              <tr>
                <td className={TABLE_LABEL}>Context</td>
                <td className={TABLE_CELL}>Strategy exercise for a fictional regulated biotech client</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Body */}
      <div className="relative max-w-[640px] mx-auto px-6 py-12">
        <aside className="my-10 py-6 border-t border-b border-[var(--rule)] xl:my-0 xl:py-0 xl:border-0 xl:absolute xl:top-12 xl:bottom-12 xl:right-full xl:mr-16 xl:w-48">
          <nav aria-label="Table of contents" className="xl:sticky xl:top-24">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">CONTENTS</p>
            <ol className="font-mono text-[13px] leading-[1.9] text-[var(--fg-muted)] space-y-1 list-none p-0">
              <li><a href="#goals" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">1. Goals</a></li>
              <li><a href="#scope" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">2. Scope</a></li>
              <li><a href="#users" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">3. Users and pain points</a></li>
              <li><a href="#features" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">4. Features and acceptance criteria</a></li>
              <li><a href="#ux" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">5. User experience and flows</a></li>
              <li><a href="#metrics" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">6. Success metrics</a></li>
              <li><a href="#evaluation" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">7. Evaluation methodology</a></li>
              <li><a href="#constraints" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">8. Constraints and considerations</a></li>
              <li><a href="#technical" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">9. Technical requirements</a></li>
              <li><a href="#dependencies" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">10. Dependencies</a></li>
              <li><a href="#blockers" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">11. Potential blockers</a></li>
              <li><a href="#questions" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">12. Open questions</a></li>
            </ol>
          </nav>
        </aside>

        <article>

        {/* 1. Goals */}
        <section id="goals">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">1. Goals</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Build an AI-powered system that allows the client's researchers and legal teams to query 50,000 internal documents and receive concise, accurate, and fully cited answers in seconds instead of hours. The system must be accurate enough that both groups trust it, transparent enough that every claim is traceable to a source document, and disciplined enough to refuse an answer rather than fabricate one.
          </p>
          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Business objectives</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>
              <span className="font-semibold text-[var(--fg)]">Reduce time on manual document review.</span> Staff currently spend an estimated 60% of their working hours (approximately 24 hours per week per person) on manual document search and synthesis. The system should reduce this to under 25%, recapturing significant capacity for high value analysis and decision making.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Accelerate decision making.</span> Enable faster research and legal decisions, directly reducing downstream delays in product development timelines and regulatory processes.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Unlock institutional knowledge.</span> Make the full 50,000 document corpus searchable and synthesizable, surfacing findings currently buried in fragmented repositories or lost when staff leave.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Establish a foundation for enterprise AI.</span> Validate an AI-powered knowledge system that can expand to additional departments and use cases in subsequent phases.
            </li>
          </ul>
        </section>

        {/* 2. Scope */}
        <section id="scope">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">2. Scope</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">In scope (MVP)</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>AI-powered answer engine: natural language queries return concise, synthesized, fully cited answers grounded in the client's internal document corpus.</li>
            <li>Integrated search and document viewing layer to support discovery, verification, and trust building alongside the answer engine.</li>
            <li>Document ingestion pipeline supporting PDF, Word, and text-based formats with metadata extraction. Pilot runs against a representative subset of 2,500 to 5,000 documents. Full 50,000 document corpus ingested with validated parameters in Weeks 9 and 10.</li>
            <li>Confidence-based refusal logic: the system explicitly states when it cannot answer or has only partial information.</li>
            <li>Query and response audit trail logging for 21 CFR Part 11 compliance.</li>
            <li>Pilot deployment with both researcher and legal user groups (15 to 25 power users selected for feedback quality, not scale).</li>
          </ul>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Out of scope (deferred to Phase 2+)</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Management reporting dashboard (success metrics tracked through audit logs and manual reporting during pilot; dashboard becomes relevant at scale beyond pilot).</li>
            <li>Workflow integrations (Slack, email, existing platforms).</li>
            <li>Collaborative features (shared queries, annotations, team comments).</li>
            <li>Automated report generation.</li>
            <li>Role-based access controls and admin dashboard.</li>
            <li>Model fine-tuning on client-specific terminology.</li>
          </ul>
        </section>

        {/* 3. Users and pain points */}
        <section id="users">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">3. Users and pain points</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Primary user group 1: research scientists</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Researchers currently spend approximately 60% of their working hours on manual document search and synthesis. In a standard 40-hour work week, that is roughly 24 hours per researcher per week spent finding, reading, cross-referencing, and compiling information from internal documents. Industry research supports this scale: McKinsey found that knowledge workers spend approximately 1.8 hours per day searching for information, and Gartner estimates an average of 18 minutes to locate a single document.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Core pain points:</p>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Time lost to manual search and review across fragmented document repositories.</li>
            <li>Difficulty locating relevant prior research, especially findings from years past or from colleagues who have since left.</li>
            <li>No reliable way to know if all relevant documents have been reviewed (completeness gap).</li>
            <li>Institutional knowledge effectively lost when it exists only in documents no one can find.</li>
          </ul>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            <span className="font-semibold text-[var(--fg)]">Typical queries:</span> "What do our internal studies show about Compound X efficacy in population Y?" or "Summarize all safety data for therapeutic program Z across Phase I and Phase II trials."
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Primary user group 2: legal and IP team</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Legal teams conduct prior art searches, freedom to operate analyses, patent prosecution, and compliance reviews across the same 50,000 document corpus. They face the same time burden as researchers but with additional requirements around completeness and verifiability.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Core pain points:</p>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Prior art and freedom to operate searches require exhaustive coverage across internal studies, patent filings, and regulatory correspondence.</li>
            <li>Missing a single relevant document in a patent or compliance review can result in regulatory liability or IP exposure.</li>
            <li>Manual review across fragmented repositories makes it difficult to confirm completeness.</li>
            <li>Competitive intelligence and patent landscape analysis requires synthesis across large document sets under time pressure.</li>
          </ul>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            <span className="font-semibold text-[var(--fg)]">Typical queries:</span> "Do we have prior art that covers this claim?" or "What does our internal documentation say about the safety profile of Compound X relevant to this regulatory filing?"
          </p>

          <div className="border border-[var(--rule)] bg-[var(--bg-raised)] p-6 my-8">
            <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)]">
              <span className="font-semibold text-[var(--fg)]">Adoption note:</span> Both user groups are included in the MVP pilot from day one. The system's integrated search and document viewing capabilities allow legal users who require higher verification standards to use the platform as a powerful search and retrieval tool (Layers 1 and 2) while building confidence in the AI-generated synthesis (Layer 3). They are not required to trust AI-generated answers to get value from the system. Researchers are expected to adopt all three layers more quickly.
            </p>
          </div>
        </section>

        {/* 4. Features and acceptance criteria */}
        <section id="features">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">4. Features and acceptance criteria</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Document ingestion pipeline</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Ingest, chunk, and embed documents across PDF, Word, and text formats. Handle multi-section documents, tables, and headers. Extract and tag metadata (document type, date, department, therapeutic area).
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: Representative subset (2,500 to 5,000 documents) indexed with metadata by Week 4. Full 50,000 document corpus ingested with validated chunking parameters by Week 10. Chunk boundaries preserve semantic coherence at section and paragraph breaks.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">AI-powered answer engine (core)</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The primary product. Users ask natural language questions. The system retrieves relevant content from the document corpus and generates a concise, synthesized answer with inline citations linking each claim to a specific source document and passage. Supports follow-up questions within the same retrieval context.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: 95%+ citation accuracy (human spot check). Every factual claim includes at least one citation. No unsupported claims. Response within 15 seconds for 95% of queries.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Integrated search interface</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            AI-powered semantic search supporting the answer engine. Users can also search the corpus directly, receiving ranked document results with passage snippets. Hybrid search (semantic plus keyword) for domain-specific terminology. Filterable by document type, date, department, and therapeutic area.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: Results returned within 5 seconds. Top 10 results include passage-level snippets. Filters functional across all metadata fields. Hybrid search outperforms keyword only on domain-specific test queries.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Document viewer with highlighting</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Clicking any search result or citation opens the full source document, scrolled to the relevant passage with matching text highlighted. Users can read surrounding context and navigate the full document without leaving the platform.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: Source passage renders within 3 seconds. Highlighted passage matches retrieved content. Full document navigable.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Confidence threshold and refusal logic</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            When retrieval confidence falls below a defined threshold, the system refuses to synthesize. It states what it found, what it could not find, and which portions of the corpus it searched. Confidence scoring is internal only. The user never sees a number, only the behavior.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: System never presents fabricated information. Partial answers explicitly labeled. Refusal rate between 5 and 15% on typical queries (calibrated during pilot).
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Audit trail logging</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Every query, search, document access, chat interaction, and system response is logged with timestamps and user identity. Designed for 21 CFR Part 11 compliance.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">
            Acceptance: Complete audit trail for every interaction. Logs immutable and tamper evident. Exportable for compliance review.
          </p>
        </section>

        {/* 5. User experience and flows */}
        <section id="ux">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">5. User experience and flows</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Core interaction: query and answer</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The primary interaction is what the system is built for: a user asks a question, the system returns a concise, cited answer. This is the AI-powered answer engine and it is the center of the product.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Supporting layer: search and document viewing</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Wrapped around the answer engine is an integrated search and document viewing layer. This serves three purposes: it provides a familiar entry point for users who aren't yet comfortable asking an AI a question (they can search and browse first), it enables verification by letting users click through citations to the original source material, and it provides standalone value for legal users who may prefer to search, retrieve, and review documents themselves before trusting AI-generated synthesis. This layer is what makes it possible to serve both researchers and legal teams from day one.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Three layers of interaction</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>
              <span className="font-semibold text-[var(--fg)]">Layer 1: search and discover.</span> Users enter a natural language query. The system returns ranked document results with relevant passage snippets. Unlike traditional keyword search, the system understands intent and meaning. A query like "efficacy results for Compound X in elderly patients" returns semantically relevant documents even if they don't contain those exact words. Results can be filtered by document type, date range, department, and therapeutic area.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Layer 2: view and verify.</span> Clicking any search result or citation opens the full document with the relevant passage highlighted and scrolled into view. Users can read surrounding context, navigate the full document, and verify relevance against their own judgment.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Layer 3: ask and synthesize (core product).</span> The answer engine. Users ask a natural language question in the synthesis panel. The system retrieves relevant content from the full document corpus and generates a concise, cited answer. Each claim links to its source. Users can ask follow-up questions to refine or deepen the synthesis.
            </li>
          </ul>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Interface layout</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The interface uses a two-panel design. The left panel displays source documents and evidence: search results with passage snippets, or cited source documents when viewing a synthesis answer. The right panel is the primary interaction surface: the search bar, synthesis answers with inline citations, or the full document viewer when a source is selected. This layout ensures users always see the evidence alongside the answer. Clicking any inline citation in the right panel highlights the corresponding source in the left panel. The user never sees a synthesis answer without its supporting sources visible.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Answer structure</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">When the system generates an answer, it is structured at three levels of depth:</p>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li><span className="font-semibold text-[var(--fg)]">Summary (2-3 sentences):</span> Direct answer with key citations. Designed for quick reference.</li>
            <li><span className="font-semibold text-[var(--fg)]">Detailed synthesis (2-3 paragraphs):</span> Full analysis with all supporting evidence, multiple citations, and any conflicting findings across documents.</li>
            <li><span className="font-semibold text-[var(--fg)]">Source list:</span> Complete list of all documents referenced, with relevance scores and direct links to each.</li>
          </ul>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Refusal behavior</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            When the system cannot answer confidently, it responds with: what it found (partial information with citations), what it could not find (explicit gaps), and what it searched (document count and scope). Users can view the search results alongside the refusal and investigate further using the search and document viewing layers.
          </p>
        </section>

        {/* 6. Success metrics */}
        <section id="metrics">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">6. Success metrics</h2>

          <div className="overflow-x-auto border border-[var(--rule)] my-5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--rule)]">
                  <th className={TABLE_HEADER}>Metric</th>
                  <th className={TABLE_HEADER}>How measured</th>
                  <th className={TABLE_HEADER}>Target</th>
                  <th className={TABLE_HEADER}>Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)]">
                <tr>
                  <td className={TABLE_LABEL}>Citation accuracy</td>
                  <td className={TABLE_CELL}>Human spot check of 50 random synthesis queries per week. Reviewers verify each citation links to a relevant source passage.</td>
                  <td className={TABLE_CELL}>95%+</td>
                  <td className={TABLE_CELL}>Weekly</td>
                </tr>
                <tr>
                  <td className={TABLE_LABEL}>Time on document review</td>
                  <td className={TABLE_CELL}>Pre launch survey establishes baseline (expected ~60% of working hours, ~24 hours/week). Post launch survey at 30 and 60 days measures reduction.</td>
                  <td className={TABLE_CELL}>60% to under 25% of working hours</td>
                  <td className={TABLE_CELL}>Monthly</td>
                </tr>
                <tr>
                  <td className={TABLE_LABEL}>Adoption rate</td>
                  <td className={TABLE_CELL}>Percentage of pilot group using the system at least 3x per week after 30 days. Tracked separately for researchers and legal users, and by layer usage.</td>
                  <td className={TABLE_CELL}>70%+ weekly active</td>
                  <td className={TABLE_CELL}>Weekly</td>
                </tr>
                <tr>
                  <td className={TABLE_LABEL}>Refusal rate</td>
                  <td className={TABLE_CELL}>Percentage of synthesis queries where the system returns a partial or refused answer. Calibrated during pilot.</td>
                  <td className={TABLE_CELL}>5-15%</td>
                  <td className={TABLE_CELL}>Weekly</td>
                </tr>
                <tr>
                  <td className={TABLE_LABEL}>Layer progression</td>
                  <td className={TABLE_CELL}>Percentage of sessions where users progress from search (Layer 1) to synthesis (Layer 3). Tracked separately for researchers and legal. Indicates growing trust in AI capabilities.</td>
                  <td className={TABLE_CELL}>Upward trend</td>
                  <td className={TABLE_CELL}>Weekly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. Evaluation methodology */}
        <section id="evaluation">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">7. Evaluation methodology</h2>

          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            System quality is evaluated at each layer of the pipeline independently, not just end to end. This follows the RAG Triad framework used in production enterprise RAG deployments:
          </p>

          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>
              <span className="font-semibold text-[var(--fg)]">Retrieval quality:</span> Measured by precision@k and recall@k against a golden dataset of labeled queries and expected documents. Evaluates whether the system finds the right documents before the LLM ever sees them. Tested separately for semantic search, keyword search, and the hybrid combination.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Generation quality (groundedness):</span> Measures whether every claim in a generated answer is grounded in the retrieved documents. Spot checked weekly by human reviewers. Target: 95%+ of claims traceable to a specific source passage.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Answer relevance:</span> Measures whether the generated answer actually addresses the user's question. Evaluated through user feedback during pilot and structured review of a random sample of queries.
            </li>
            <li>
              <span className="font-semibold text-[var(--fg)]">Citation coverage:</span> Percentage of factual claims in generated answers that include at least one inline citation. Target: 100%. Any unsupported claim is a system failure.
            </li>
          </ul>

          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Each layer is evaluated independently during Week 7 (internal testing) and continuously during the pilot. If retrieval quality is poor, we fix retrieval before tuning generation. If generation is unfaithful to retrieved content, we adjust the synthesis prompts and confidence thresholds. This layered approach prevents the common failure mode of trying to fix retrieval problems with prompt engineering.
          </p>
        </section>

        {/* 8. Constraints and considerations */}
        <section id="constraints">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">8. Constraints and considerations</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Regulatory compliance</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            As a biotech operating in a regulated environment, the client's systems must comply with 21 CFR Part 11 requirements for electronic records. This FDA regulation defines the criteria under which electronic records and signatures are considered trustworthy, reliable, and equivalent to paper records. The system must maintain comprehensive audit trails for all queries and outputs, ensure data integrity, and support validated system performance. This constraint is factored into the architecture from day one.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The system design also aligns with the FDA-EMA joint Guiding Principles of Good AI Practice in Drug Development released January 2026. These ten principles emphasize risk-based validation, transparent model outputs, lifecycle monitoring, and clear communication of AI limitations to users. Building to this standard positions the client ahead of formal guidance expected in both jurisdictions.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Data privacy and security</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>All documents remain within the client's infrastructure. No document content is transmitted to external APIs or third-party services.</li>
            <li>The system must integrate with the client's existing authentication (SSO) for user identity.</li>
            <li>All data at rest and in transit must be encrypted per the client's information security policy.</li>
          </ul>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Hallucination and accuracy</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The system is designed to refuse rather than guess. In a biotech environment where decisions affect regulatory filings, patent strategy, and product development timelines, a confident wrong answer is more dangerous than no answer. The confidence threshold and refusal logic are core architectural components. Industry implementations of comparable RAG systems in pharma have demonstrated that confidence scoring and citation transparency increase rather than decrease user adoption by building trust.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Known recall limitation</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Current RAG architectures face an inherent recall constraint. Even with hybrid retrieval and reranking, no system guarantees that every relevant document in a 50,000 document corpus is surfaced for every query. Industry benchmarks in pharma regulatory QA have reported recall rates below 50% in complex multi-document scenarios. This design mitigates this through three mechanisms: hybrid search combining semantic and keyword retrieval to maximize coverage, confidence scoring that flags low-certainty answers for human verification, and transparent refusal behavior that states what the system searched and what it could not find. The integrated search and document viewing layers (Layers 1 and 2) exist in part so users can verify completeness themselves. Full recall optimization is a Phase 2 target, not a solved problem.
          </p>
        </section>

        {/* 9. Technical requirements */}
        <section id="technical">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">9. Technical requirements</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Architecture overview</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            The system uses a Retrieval Augmented Generation (RAG) architecture. Rather than relying on the language model's internal knowledge, the system retrieves relevant passages from the client's actual documents and grounds every response in that retrieved evidence. The LLM synthesizes; it does not recall.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Recommended stack</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li><span className="font-semibold text-[var(--fg)]">Frontend:</span> Next.js with React (enterprise standard, native streaming AI support)</li>
            <li><span className="font-semibold text-[var(--fg)]">Backend:</span> Python with FastAPI (standard for AI/ML serving, async, lightweight)</li>
            <li><span className="font-semibold text-[var(--fg)]">RAG framework:</span> LlamaIndex (optimized for document heavy retrieval workloads)</li>
            <li><span className="font-semibold text-[var(--fg)]">LLM:</span> GPT-4o via Azure OpenAI Service (private endpoint within the client's Azure tenant)</li>
            <li><span className="font-semibold text-[var(--fg)]">Vector store:</span> Azure AI Search (cloud native, stays within the Azure ecosystem)</li>
            <li><span className="font-semibold text-[var(--fg)]">Embedding model:</span> General-purpose embedding model via Azure OpenAI Service. Option to evaluate domain-specific biomedical models based on pilot retrieval performance.</li>
            <li><span className="font-semibold text-[var(--fg)]">Audit logging:</span> Azure Cosmos DB or PostgreSQL (immutable append only log)</li>
            <li><span className="font-semibold text-[var(--fg)]">Deployment:</span> Within the client's Azure tenant. No data leaves the network.</li>
          </ul>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">
            Note: This assumes the client operates on Azure based on industry adoption patterns in large biotech. If the client uses AWS, the architecture maps to equivalent services (AWS Bedrock for LLM, OpenSearch for vector store). The design is cloud portable.
          </p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Core components</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li><span className="font-semibold text-[var(--fg)]">Document ingestion layer:</span> Processes PDF, DOCX, and text files. Handles multi-section documents with tables, headers, and complex formatting. Chunks documents into semantically coherent segments respecting section and paragraph boundaries. Generates vector embeddings for each chunk. Extracts and tags metadata.</li>
            <li><span className="font-semibold text-[var(--fg)]">Vector store:</span> Stores document embeddings for fast semantic search. Supports metadata filtering and segmentation by document type and therapeutic area to prevent cross-context contamination in retrieval.</li>
            <li><span className="font-semibold text-[var(--fg)]">Hybrid retrieval engine:</span> Combines semantic (vector) similarity with keyword matching. Semantic search alone underperforms on specialized biotech terminology. Hybrid approach ensures precision for domain-specific queries.</li>
            <li><span className="font-semibold text-[var(--fg)]">LLM synthesis engine:</span> Core answer generation. Produces concise, cited answers grounded exclusively in retrieved content. Implements confidence scoring and refusal logic. Supports follow-up questions.</li>
            <li><span className="font-semibold text-[var(--fg)]">Search interface:</span> Web-based semantic search with ranked results, passage snippets, and metadata filters. Supports the answer engine and provides standalone search value.</li>
            <li><span className="font-semibold text-[var(--fg)]">Document viewer:</span> In-browser document rendering with passage highlighting, navigation, and context preservation.</li>
            <li><span className="font-semibold text-[var(--fg)]">Audit trail service:</span> Logs every query, search, document access, synthesis response, and user interaction with timestamps and user identity. Immutable log storage designed for 21 CFR Part 11 compliance.</li>
          </ul>
        </section>

        {/* 10. Dependencies */}
        <section id="dependencies">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">10. Dependencies</h2>

          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Access to the client's complete 50,000 document corpus in a machine readable format.</li>
            <li>Client IT team support for infrastructure provisioning and SSO integration.</li>
            <li>Identification of pilot group participants from both research and legal teams (15 to 25 power users selected for feedback quality).</li>
            <li>Client stakeholder availability for weekly feedback sessions during the pilot.</li>
            <li>Client compliance team review and sign off on the audit trail implementation.</li>
          </ul>
        </section>

        {/* 11. Potential blockers */}
        <section id="blockers">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">11. Potential blockers</h2>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Document format inconsistency</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Scanned PDFs, image-only documents, or proprietary formats may not be parseable, reducing corpus coverage.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">Mitigation: Conduct a document format audit in Weeks 1 and 2. Prioritize machine readable documents for MVP. Build OCR pipeline for scanned documents in Phase 2.</p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Retrieval quality on specialized terminology</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Standard embeddings may underperform on biotech specific terms (compound names, molecular structures, assay types).</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">Mitigation: Use hybrid search (semantic plus keyword). Segment documents by therapeutic area to prevent cross-context contamination. Evaluate domain specific embedding models during pilot. Tune chunking strategy based on pilot feedback.</p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Low adoption</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">The system delivers accurate results but staff do not change their existing workflows.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">Mitigation: The search first design requires zero behavior change for initial use. Staff search for documents the same way they already do, just faster. The synthesis layer is additive value on top of familiar search behavior. Pilot includes onboarding sessions, weekly feedback loops, and 2 to 3 identified champions from each user group to drive organic adoption.</p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Metadata quality</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Poor or inconsistent metadata across the corpus limits filtering accuracy and document segmentation.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">Mitigation: Assess metadata quality during document audit. Implement automated metadata enrichment where possible. Prioritize manual tagging for highest-value document categories.</p>

          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Infrastructure delays</h3>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Client IT provisioning takes longer than expected, delaying deployment.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] italic mb-5">Mitigation: Begin infrastructure requirements gathering in Week 1. Establish fallback: initial development on managed staging environment with migration to client infrastructure.</p>
        </section>

        {/* 12. Open questions */}
        <section id="questions">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">12. Open questions</h2>

          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">The following would need to be validated with the client during discovery (Weeks 1 and 2):</p>

          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>What document formats are present in the corpus? What percentage are machine readable vs scanned images?</li>
            <li>What are the existing document management systems and repositories? How fragmented is access?</li>
            <li>Are there existing metadata standards (document type, department, date, author, therapeutic area) or is metadata inconsistent?</li>
            <li>What does the client define as an acceptable error rate? Is 95% citation accuracy sufficient, or does the organization require higher?</li>
            <li>What existing authentication system (SSO provider) is in place?</li>
            <li>Are there specific document sensitivity levels that require differential access controls?</li>
            <li>What is the actual time spent per researcher and legal team member on document search and synthesis? The 60% figure should be validated through staff interviews during discovery.</li>
            <li>What internal search tools do staff currently use, and what are the specific frustrations with those tools?</li>
            <li>How many researchers and legal team members should be included in the pilot? What is the right balance between the two groups?</li>
            <li>What cloud infrastructure does the client currently operate on?</li>
          </ul>
        </section>

      </article>
      </div>

      {/* Back link */}
      <section className="max-w-[640px] mx-auto px-6 py-8 border-t border-[var(--rule)]">
        <p>
          <a href="/case-studies/strategic-synthesis-engine" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">← Back to case study</a>
        </p>
      </section>
    </main>
  );
}
