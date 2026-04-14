import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "AI Research Platform — Tanishk Thorat",
  description: "A self-hosted RAG and research platform with dual-GPU inference, multi-stage retrieval pipeline, and strict no-fabrication discipline.",
};

const TABLE_CELL = "py-3 font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]";
const TABLE_HEADER = "font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]";
const TABLE_LABEL = "font-mono text-[13px] text-[var(--fg)]";

function ResearchPipelineDiagram() {
  return (
    <figure className="my-10 border border-[var(--rule)] bg-[var(--bg-raised)] p-6">
      <figcaption className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-4">RESEARCH PIPELINE · PER REQUEST</figcaption>

      <div className="text-[var(--accent-dim)]">
        {/* Stage 1: Request */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Request</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">HTTP / Telegram</p>
          </div>
        </div>

        {/* Vertical connector */}
        <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
          <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 2: Classify query */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Classify query</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">intent + routing</p>
          </div>
        </div>

        <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
          <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 3: Rewrite + decompose */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Rewrite + decompose</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">multi-part → sub-queries</p>
          </div>
        </div>

        {/* Connector: 1 → 2 fan-out */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5">
          <line x1="50" y1="0" x2="50" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="25" y1="10" x2="75" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="25" y1="10" x2="25" y2="20" stroke="currentColor" strokeWidth="0.4" />
          <line x1="75" y1="10" x2="75" y2="20" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 4: Parallel retrieval (Local vs Web, asymmetric depth) */}
        <div className="flex items-stretch">
          {/* Local branch */}
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-1">LOCAL BRANCH</p>
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">Local RAG</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">ChromaDB · ~20k passages</p>
            </div>
            <div className="flex-1 w-px bg-[var(--accent-dim)]"></div>
          </div>

          {/* Web branch - deeper sub-pipeline */}
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-1">WEB BRANCH</p>
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">Web search</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">SearXNG · 10–20 candidates</p>
            </div>
            <div className="w-px h-4 bg-[var(--accent-dim)]"></div>
            <div className="w-full px-3 py-2 bg-[var(--accent)] border border-[var(--accent)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--bg)]">LLM fetch selection</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bg)] opacity-80">picks URLs worth fetching</p>
            </div>
            <div className="w-px h-4 bg-[var(--accent-dim)]"></div>
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">Fetch + summarize</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">per-page compression</p>
            </div>
          </div>
        </div>

        {/* Connector: 2 → 1 fan-in */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5">
          <line x1="25" y1="0" x2="25" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="75" y1="0" x2="75" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="25" y1="10" x2="75" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 5: Context assembly */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Context assembly</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">local + web labeled separately</p>
          </div>
        </div>

        <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
          <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 6: Brain */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--accent)] border border-[var(--accent)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--bg)]">Brain</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bg)] opacity-80">Qwen3.5-27B · RTX 5070 Ti · :11434</p>
          </div>
        </div>

        <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
          <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 7: Response */}
        <div className="flex justify-center">
          <div className="px-4 py-2 border border-[var(--accent)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--accent)]">Response with sources</p>
          </div>
        </div>
      </div>

      {/* Sentinel idle sidecar */}
      <div className="mt-6 pt-4 border-t border-dashed border-[var(--rule)]">
        <div className="flex items-center gap-3">
          <div className="px-3 py-2 bg-[var(--bg)] border border-dashed border-[var(--rule)]">
            <p className="font-mono text-sm font-medium text-[var(--fg-dim)]">Sentinel</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">Qwen3.5-4B · RTX 2060</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">loaded and health-checked · idle in the research path</p>
        </div>
      </div>
    </figure>
  );
}

export default function AIResearchPlatform() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <a href="/" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">TANISHK THORAT</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">CASE STUDIES</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">AI RESEARCH PLATFORM</span>
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-dim)]">ONE USER (ME) · DAILY</span>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">AI Research Platform</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px] mb-8">
          A self-hosted research tool that combines a private book library with live web retrieval, runs entirely on local hardware, and treats every step between question and answer as inspectable.
        </p>
        <div className="mt-6">
          <a href="/prds/ai-research-platform" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">Read the full PRD →</a>
        </div>
      </section>

      {/* System at a Glance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>SYSTEM AT A GLANCE</SectionEyebrow>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top w-40`}>Infrastructure</td>
                <td className={TABLE_CELL}>3 LLM servers across 2 GPUs: Brain (27B) on RTX 5070 Ti, Sentinel (4B) on RTX 2060, Embed on CPU</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Knowledge base</td>
                <td className={TABLE_CELL}>200+ books on philosophy, political theory, and history (~20,000 searchable passages), plus ~150 cached web pages</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>API surface</td>
                <td className={TABLE_CELL}>20 endpoints via FastAPI, plus a Telegram bot</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Resilience</td>
                <td className={TABLE_CELL}>If any component goes down (web search, embeddings, either LLM), the system continues with reduced capability instead of failing entirely</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>In use since</td>
                <td className={TABLE_CELL}>December 2025, 10–20 queries per day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>PROBLEM</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Why I built this instead of using something off the shelf</h2>
        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            I wanted a research tool that did three things at once: hold my full book library as a queryable knowledge base, pull live information from the web when the books were not enough, and feed both into my research workflow. The hosted options each failed on at least one axis. ChatGPT could not ingest my library without losing it on reset. NotebookLM held documents but could not reach the web. None of them let me see or change what was happening between question and answer.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The trigger that made me actually start building was a hallucination. I asked a hosted model to pull a quote from a specific chapter of a book I was reading, and it returned a confident, well-formatted passage complete with a page reference. The quote did not exist. Not "I don't know," not a refusal, just made-up prose presented as fact. I decided I needed a system where I could see and shape every step between the question and the answer, instead of trusting a black box.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            A secondary motivation: I work in enterprise tech transformation consulting. I wanted firsthand answers to the questions clients actually ask — where these systems break, how you make them better, which levers move outcomes. The kind of answers you only get by building one.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>KEY DECISIONS</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">Five decisions that shaped the system</h2>

        <div className="space-y-12 max-w-[640px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 01</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">A research pipeline, not a chat wrapper</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The simplest version of this project would have been a single endpoint that takes a question, retrieves top-k chunks from RAG, drops them into a system prompt, and calls one LLM. That works for documents you already have. It does not work for research. What I built instead is a pipeline with discrete steps: classify the query, rewrite it for retrieval, decompose multi-part questions, run web search, use an LLM call to decide which URLs are worth fetching, summarize each fetched page, assemble local and web context separately, then call the answer model. The cost is more code and more LLM calls per question. The benefit is that each step is independently inspectable and replaceable. A single-call architecture would have left me prompt-engineering a black box.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 02</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">LLM-driven fetch selection over fetch-everything</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Web search returns 10 to 20 candidate URLs per query. The naive move is to fetch them all and let retrieval sort it out. The cost is bandwidth, latency, and noisy context full of cookie banners and footers. I added a small intelligence step: an LLM call that reads the search result snippets and decides which URLs are worth fetching for this specific question. The alternative was relevance scoring with embeddings, no LLM in the loop. Cheaper, but it scores against the question text rather than against what the page is likely to actually contain. The LLM call understands the gap between a search snippet and the full page.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 03</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Two GPUs as designed capacity, single-model routing shipped first</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The hardware setup is two GPUs: a 5070 Ti running Brain (Qwen3.5-27B) on port 11434, and a 2060 running Sentinel (Qwen3.5-4B) on port 11435. Both processes are alive. Sentinel is running and ready but not yet receiving requests.
            </p>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              This was a deliberate sequencing call. The pipeline itself was the unknown. Wiring tier-routing at the same time would have meant debugging two unknowns at once. Ship the pipeline against a single model first, validate the architecture, leave the routing optimization for the next iteration.
            </p>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              Why two GPUs at all instead of running both on the 5070 Ti? VRAM math. Qwen3.5-27B at Q4_K_M nearly fills the 5070 Ti's 16GB with KV cache and a usable context window. Adding Sentinel to the same card means dropping Brain to a smaller model, going to a more aggressive quant, or shrinking context. The 2060 has 6GB sitting in the same machine. Using it is free capacity. The 6GB ceiling also picked Sentinel's size: a 4B model has headroom for fast structured tasks and not much else, which is exactly the role it needs to play.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 04</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Anti-fabrication at the prompt layer first, structural grounding later</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The original problem was hallucinated facts. The cleanest fix is structural: enforce a boundary where the model can never recall facts from training, only repeat data injected into context. That depends on Decision 3 being finished first, because the verification pass that catches recall is the natural job for Sentinel. What I shipped instead is a strong system prompt: never invent URLs or citations, only reference sources that appear in the reference material, prefer "I don't have enough information" over guessing. This catches fabrication of links and sources reliably. It does not structurally prevent recall. I knew this was the weaker form when I shipped it. The decision was to ship discipline now and add structure later, in the same iteration as the Sentinel routing work.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 05</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">No multi-agent council pattern (yet)</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              I considered the council/swarm pattern: run several model instances with different personas, vote on answers. Interesting, but not what I needed for the initial build. My problem was hallucination on factual research, not disagreement on subjective judgment. Voting between confabulators produces confident consensus on fabricated data.
            </p>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              That said, this is a pattern I&apos;m genuinely interested in exploring. Once the core pipeline is solid and Sentinel routing is complete, multi-agent verification is on the roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>ARCHITECTURE</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">How the pipeline runs</h2>

        <ResearchPipelineDiagram />

        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The orchestrator runs each request through the pipeline above. Local document retrieval and web retrieval run in parallel. The web branch has its own intelligence step (LLM fetch selection) before fetching, which keeps the assembled context clean. Both branches feed into a single context assembly stage that labels local and web sources separately so the model can distinguish them.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The platform exposes 20 API endpoints through FastAPI, uses ChromaDB for both local document and web cache vector stores, and persists session memory in SQLite. A Telegram bot provides a second interface alongside the HTTP API.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            Sentinel is loaded and health-checked but not yet in the research pipeline's request path. Sentinel routing is the next build for the research side. Sentinel is already actively used by the Trading Platform for news sentiment classification, which is where the dual-GPU architecture was validated first.
          </p>
        </div>
      </section>

      {/* Failure Handling */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>FAILURE HANDLING</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">When things break</h2>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5 max-w-[640px]">
          The system is designed to keep working when individual components fail:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th className={`py-3 pr-4 ${TABLE_HEADER}`}>Component down</th>
                <th className={`py-3 ${TABLE_HEADER}`}>What happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Brain (27B)</td>
                <td className={TABLE_CELL}>Chat fails, but the web cache and document index remain available for the next session</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Sentinel (4B)</td>
                <td className={TABLE_CELL}>Memory summarization is skipped. The system logs a warning and continues.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Embed server</td>
                <td className={TABLE_CELL}>RAG retrieval fails. Workaround: turn off the RAG toggle and rely on web-only or conversation context.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>SearXNG (web search)</td>
                <td className={TABLE_CELL}>Web pipeline returns zero candidates. The model still answers using the local library and its own training knowledge.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>SQLite (memory)</td>
                <td className={TABLE_CELL}>Memory operations log a warning and retry. Chat continues without persistent history if the lock persists.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mt-6 max-w-[640px]">
          No single failure takes down the whole system.
        </p>
      </section>

      {/* Observed Performance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>OBSERVED PERFORMANCE</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Four months of daily use</h2>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5 max-w-[640px]">
          The system has been my primary research tool since December 2025, averaging 10–20 queries per day.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th className={`py-3 pr-4 ${TABLE_HEADER}`}>Metric</th>
                <th className={`py-3 ${TABLE_HEADER}`}>Observed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Latency</td>
                <td className={TABLE_CELL}>5–10 seconds per query, driven by model size and available compute. Cold starts after a reboot can take 30+ seconds while the model loads into VRAM.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Fabricated sources</td>
                <td className={TABLE_CELL}>Zero since the anti-fabrication prompt was added. Early versions did hallucinate citations, which is what triggered the fix.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Knowledge base</td>
                <td className={TABLE_CELL}>~20,000 passages from 200+ books, ~150 cached web pages. Both collections continue to grow.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Web cache hit rate</td>
                <td className={TABLE_CELL}>~30% of web queries serve from cache, reducing redundant fetches and improving response time for repeated topics.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mt-6 max-w-[640px]">
          Quality is currently judged through daily use: if an answer cites a source, I can check it. A formal evaluation harness is on the roadmap.
        </p>
      </section>

      {/* What's Next */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>WHAT'S NEXT</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">In order</h2>

        <div className="space-y-6 max-w-[640px]">
          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">1.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">Route utility tasks to Sentinel.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">Classification, query rewriting, fetch decisions, and page summarization all move to the 4B model on the 2060. This is the build that finally uses both GPUs in the research pipeline.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">2.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">Add Sentinel as a verification pass.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">After Brain generates an answer, Sentinel reads it alongside the source material and flags any claims not supported by context. This is the structural grounding layer that the current prompt-based approach defers.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">3.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">Build an evaluation harness.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">Quality is currently judged through daily use. A lightweight harness that catches regressions would make the system easier to improve without breaking what already works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>DELIVERABLES</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Receipts</h2>

        <a href="https://github.com/tanishkthorat/notes-on-private-rag-systems" target="_blank" rel="noopener noreferrer" className="block p-6 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
          <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Architecture notes (public repo)</h3>
          <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-3">Design decisions and lessons from building a production-style private AI platform. Dual-model inference, grounded generation, refusal as a feature.</p>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">→</span>
        </a>
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
