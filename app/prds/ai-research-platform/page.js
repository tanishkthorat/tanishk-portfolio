import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "AI Research Platform PRD — Tanishk Thorat",
  description: "Product requirements document for a self-hosted RAG and research platform with dual-GPU inference, multi-stage retrieval pipeline, and anti-fabrication discipline.",
};

const TABLE_CELL = "py-3 px-4 font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] align-top";
const TABLE_HEADER = "py-3 px-4 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]";
const TABLE_LABEL = "py-3 px-4 font-mono text-[13px] text-[var(--fg)] align-top whitespace-nowrap";

export default function AIResearchPlatformPRD() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">

      {/* Header / breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-6">
          <a href="/" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">TANISHK THORAT</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">CASE STUDIES</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies/ai-research-platform" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">AI RESEARCH PLATFORM</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">PRD</span>
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-[640px] mx-auto px-6 pb-8">
        <SectionEyebrow>PRD</SectionEyebrow>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mt-4 mb-6">AI Research Platform</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px] mb-8">Product Requirements Document</p>

        <div className="overflow-x-auto border border-[var(--rule)]">
          <table className="w-full">
            <tbody className="divide-y divide-[var(--rule)]">
              <tr><td className={TABLE_LABEL}>Author</td><td className={TABLE_CELL}>Tanishk Thorat</td></tr>
              <tr><td className={TABLE_LABEL}>Status</td><td className={TABLE_CELL}>In active development. Single-user deployment.</td></tr>
              <tr><td className={TABLE_LABEL}>Last updated</td><td className={TABLE_CELL}>April 2026</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[980px] mx-auto px-6 py-12 lg:flex lg:gap-16">
        <aside className="lg:w-48 lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
          <nav aria-label="Table of contents" className="my-10 lg:my-0 border-t border-b border-[var(--rule)] lg:border-0 py-6 lg:py-0">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">CONTENTS</p>
            <ol className="font-mono text-[13px] leading-[1.9] text-[var(--fg-muted)] space-y-1 list-none p-0">
              <li><a href="#overview" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">1. Overview</a></li>
              <li><a href="#goals" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">2. Goals &amp; non-goals</a></li>
              <li><a href="#personas" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">3. User personas</a></li>
              <li><a href="#metrics" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">4. Success metrics</a></li>
              <li><a href="#functional" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">5. Functional requirements</a></li>
              <li><a href="#nonfunctional" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">6. Non-functional requirements</a></li>
              <li><a href="#acceptance" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">7. Acceptance criteria</a></li>
              <li><a href="#architecture" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">8. Architecture</a></li>
              <li><a href="#oos" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">9. Out of scope</a></li>
              <li><a href="#open" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">10. Open questions</a></li>
              <li><a href="#appendix" className="hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">11. Design decisions</a></li>
            </ol>
          </nav>
        </aside>

        <article className="lg:flex-1 lg:min-w-0 lg:max-w-[640px]">

        <section id="overview">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">1. Overview</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">The AI Research Platform is a self-hosted research tool that combines a private document library with live web retrieval and runs entirely on local hardware. It is designed to answer research questions by assembling context from multiple sources in a multi-stage pipeline, then synthesizing an answer through a local large language model. The platform exists because hosted alternatives fail on at least one of three axes that matter for serious research work: persistent personal libraries, live web access, or inspectability of the pipeline between question and answer.</p>
        </section>

        <section id="goals">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">2. Goals and non-goals</h2>
          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Goals</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Provide a single workspace for querying a personal book library and live web sources</li>
            <li>Run all inference on hardware owned and operated by the user, with no third-party API dependency</li>
            <li>Make every step of the research pipeline independently inspectable and replaceable</li>
            <li>Enforce anti-fabrication discipline at the prompt layer today, with architectural grounding planned next</li>
            <li>Maintain daily-use performance; faster response than switching to a hosted alternative</li>
          </ul>
          <h3 className="font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4">Non-goals</h3>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Multi-user authentication, sharing, or collaboration</li>
            <li>A consumer-grade user interface</li>
            <li>Replacing hosted models for general conversational use</li>
            <li>Training or fine-tuning the underlying language models</li>
          </ul>
        </section>

        <section id="personas">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">3. User personas</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-semibold text-[var(--fg)]">Primary persona: the researcher-operator.</span> A single user with technical proficiency, daily research needs across long-form text (book library) and current information (web), and an explicit preference for inspectable systems over hosted black boxes. Comfortable with command-line tools and willing to operate the system as an engineer in addition to using it as a researcher.</p>
        </section>

        <section id="metrics">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">4. Success metrics</h2>
          <div className="overflow-x-auto border border-[var(--rule)] my-5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--rule)]">
                  <th className={TABLE_HEADER}>Metric</th>
                  <th className={TABLE_HEADER}>Target</th>
                  <th className={TABLE_HEADER}>Measurement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)]">
                <tr><td className={TABLE_CELL}>Daily active use</td><td className={TABLE_CELL}>≥ 1 research session per day</td><td className={TABLE_CELL}>Session log count</td></tr>
                <tr><td className={TABLE_CELL}>Fabricated source incidents</td><td className={TABLE_CELL}>Zero</td><td className={TABLE_CELL}>Manual review of citations</td></tr>
                <tr><td className={TABLE_CELL}>Web cache hit rate</td><td className={TABLE_CELL}>Above 30% within 90 days</td><td className={TABLE_CELL}>Cache hit/miss logs</td></tr>
                <tr><td className={TABLE_CELL}>Mean answer latency</td><td className={TABLE_CELL}>Under 60s for typical queries</td><td className={TABLE_CELL}>API response timing</td></tr>
                <tr><td className={TABLE_CELL}>Fallback to hosted models</td><td className={TABLE_CELL}>Decreasing month over month</td><td className={TABLE_CELL}>Self-reported, weekly</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="functional">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">5. Functional requirements</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-1: Document ingestion.</span> The system shall ingest documents from a local library into a vector store using semantic boundary chunking, preserving filename and source metadata for citation.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-2: Query classification.</span> Each user query shall be classified before retrieval to determine whether it requires fresh web data, library-only retrieval, or both.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-3: Query rewriting.</span> User queries shall be rewritten before web search if the original phrasing is suboptimal for retrieval, and decomposed into sub-queries when the question is multi-part.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-4: Web search and fetch selection.</span> The system shall execute web search against multiple engines, then use a model-driven selection step to determine which result URLs are worth fetching. Naive top-N fetching is rejected.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-5: Page summarization.</span> Each fetched web page shall be summarized before injection into the synthesis prompt.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-6: Context assembly.</span> Local document context and web context shall be assembled as separately labeled sections in the synthesis prompt.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-7: Synthesis.</span> A primary language model (Qwen3.5-27B, Brain) shall generate the final answer from the assembled context.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-8: Anti-fabrication enforcement.</span> The system prompt shall instruct the model to refuse to invent URLs, citations, or sources, and to prefer explicit refusal over guessing.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-9: Source attribution.</span> Every response shall return a structured source list referencing the documents and URLs used during retrieval.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-10: Persistent session memory.</span> The system shall maintain per-session conversation history in a local database, with periodic summarization for long sessions.</p>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5"><span className="font-mono text-[14px] text-[var(--accent-dim)] px-1">FR-11: Telegram interface.</span> A secondary interface shall allow query submission and response delivery through a Telegram bot.</p>
        </section>

        <section id="nonfunctional">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">6. Non-functional requirements</h2>
          <div className="overflow-x-auto border border-[var(--rule)] my-5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--rule)]">
                  <th className={TABLE_HEADER}>Category</th>
                  <th className={TABLE_HEADER}>Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)]">
                <tr><td className={TABLE_LABEL}>Performance</td><td className={TABLE_CELL}>Synthesis responses under 60s for typical queries; streaming output for long generations</td></tr>
                <tr><td className={TABLE_LABEL}>Reliability</td><td className={TABLE_CELL}>Graceful degradation when individual components fail; system continues to serve from remaining sources</td></tr>
                <tr><td className={TABLE_LABEL}>Security & privacy</td><td className={TABLE_CELL}>All inference local; no third-party API calls during query handling; library never leaves user hardware</td></tr>
                <tr><td className={TABLE_LABEL}>Maintainability</td><td className={TABLE_CELL}>Each pipeline stage independently inspectable, replaceable, and testable in isolation</td></tr>
                <tr><td className={TABLE_LABEL}>Hardware footprint</td><td className={TABLE_CELL}>Operates within 16 GB VRAM (RTX 5070 Ti) for primary inference and 6 GB VRAM (RTX 2060) for secondary capacity</td></tr>
                <tr><td className={TABLE_LABEL}>Observability</td><td className={TABLE_CELL}>Structured logging at each pipeline stage; per-stage timing for performance analysis</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="acceptance">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">7. Acceptance criteria</h2>
          <ul className="pl-6 my-5 space-y-3 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li><span className="font-semibold text-[var(--fg)]">Given</span> a query that can be answered from the local library, <span className="font-semibold text-[var(--fg)]">when</span> the user submits it, <span className="font-semibold text-[var(--fg)]">then</span> the system retrieves relevant chunks, synthesizes an answer, and returns source citations.</li>
            <li><span className="font-semibold text-[var(--fg)]">Given</span> a query requiring fresh information, <span className="font-semibold text-[var(--fg)]">when</span> classified as a freshness query, <span className="font-semibold text-[var(--fg)]">then</span> the system executes web search, selects URLs through the model-driven selection step, fetches and summarizes pages, and synthesizes an answer with web sources cited.</li>
            <li><span className="font-semibold text-[var(--fg)]">Given</span> a query for which retrieval returns no high-confidence material, <span className="font-semibold text-[var(--fg)]">when</span> the system synthesizes a response, <span className="font-semibold text-[var(--fg)]">then</span> the response does not invent URLs, citations, or specific factual claims unsupported by retrieved context.</li>
            <li><span className="font-semibold text-[var(--fg)]">Given</span> a multi-part query, <span className="font-semibold text-[var(--fg)]">when</span> the system processes it, <span className="font-semibold text-[var(--fg)]">then</span> it decomposes the query into sub-queries before retrieval.</li>
            <li><span className="font-semibold text-[var(--fg)]">Given</span> a previously fetched web URL within the cache TTL, <span className="font-semibold text-[var(--fg)]">when</span> a query requires that URL, <span className="font-semibold text-[var(--fg)]">then</span> the system serves from cache rather than re-fetching.</li>
          </ul>
        </section>

        <section id="architecture">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">8. Architecture</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">Request flows through discrete pipeline stages: classification determines retrieval strategy, queries are rewritten and decomposed, local RAG and web retrieval run in parallel, web results pass through an LLM-driven fetch selection step before pages are fetched and summarized, then local and web contexts are assembled separately and fed to Brain for synthesis. Sentinel is loaded on the secondary GPU but is not yet routed in the research pipeline; it is actively used by the Trading Platform, which validated the dual-GPU architecture first.</p>
          <figure className="my-10 border border-[var(--rule)]">
            <img src="/screenshots/research-chat.png" alt="Research platform live query: book library retrieval, GPU status panel showing Brain on 5070 Ti and Sentinel on 2060, pipeline activity log" className="w-full block" />
            <figcaption className="font-sans text-[14px] leading-[1.6] text-[var(--fg-dim)] px-4 py-3 border-t border-[var(--rule)]">Live query against the research platform. Right panel shows both GPUs active, RAG and web cache collections populated, and the classify → history → LLM activity trace.</figcaption>
          </figure>
        </section>

        <section id="oos">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">9. Out of scope</h2>
          <ul className="pl-6 my-5 space-y-2 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li>Multi-user authentication, role-based access, or shared workspaces</li>
            <li>Mobile or desktop client applications beyond the existing API and Telegram interfaces</li>
            <li>Document editing, annotation, or library curation tools</li>
            <li>Fine-tuning or training of the underlying models</li>
            <li>Integration with hosted LLM APIs as a fallback</li>
            <li>Real-time data streams</li>
          </ul>
        </section>

        <section id="open">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">10. Open questions</h2>
          <ul className="pl-6 my-5 space-y-3 font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] list-disc">
            <li><span className="font-semibold text-[var(--fg)]">Routing layer rollout.</span> When should utility-task routing to Sentinel be introduced, and which tasks migrate first? Current proposed order: classification, rewriting, fetch selection, page summarization, memory summarization.</li>
            <li><span className="font-semibold text-[var(--fg)]">Verification pass.</span> Once routing is in place, should Sentinel run an unconditional verification pass on Brain&apos;s outputs, or only when retrieval confidence falls below a threshold?</li>
            <li><span className="font-semibold text-[var(--fg)]">Source attribution granularity.</span> Is per-claim attribution worth the engineering cost for a single-user system?</li>
            <li><span className="font-semibold text-[var(--fg)]">Authority weighting in retrieval.</span> The library mixes reference works and opinion. Should authority be a tag that influences ranking?</li>
            <li><span className="font-semibold text-[var(--fg)]">Evaluation harness.</span> What&apos;s the minimum viable harness that would catch regressions without becoming a maintenance burden?</li>
          </ul>
        </section>

        <section id="appendix">
          <h2 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-5">11. Appendix: design decisions</h2>
          <p className="font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5">The reasoning behind specific architectural choices — pipeline versus chat wrapper, LLM-driven fetch selection, two-GPU sequencing, prompt-layer-first anti-fabrication — lives on the case study page at <a href="/case-studies/ai-research-platform" className="text-[var(--accent)] underline decoration-[var(--accent-dim)] underline-offset-4 hover:decoration-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">/case-studies/ai-research-platform</a>.</p>
        </section>

        </article>
      </div>

      {/* Back link */}
      <section className="max-w-[640px] mx-auto px-6 py-8 border-t border-[var(--rule)]">
        <p>
          <a href="/case-studies/ai-research-platform" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">← Back to case study</a>
        </p>
      </section>
    </main>
  );
}
