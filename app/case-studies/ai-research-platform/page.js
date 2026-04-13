export const metadata = {
  title: "AI Research Platform — Tanishk Thorat",
  description: "A self-hosted RAG and research platform with dual-GPU inference, multi-stage retrieval pipeline, and strict no-fabrication discipline.",
};

export default function AIResearchPlatform() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-sm font-mono text-gray-500">
          <a href="/" className="hover:text-gray-900">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900">CASE STUDIES</a>
          {" / "}
          AI RESEARCH PLATFORM
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
          <span className="text-xs font-mono text-gray-500">ONE USER (ME) · DAILY</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI Research Platform</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          A self-hosted research tool that combines a private book library with live web retrieval, runs entirely on local hardware, and treats every step between question and answer as inspectable.
        </p>
        <div className="mt-6">
          <a href="/prds/ai-research-platform" className="inline-block px-6 py-3 bg-gray-900 text-white font-mono text-sm rounded-lg hover:bg-gray-700 transition">Read the full PRD →</a>
        </div>
      </section>

      {/* System at a Glance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">SYSTEM AT A GLANCE</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top w-40">Infrastructure</td>
                <td className="py-3 text-gray-600">3 LLM servers across 2 GPUs: Brain (27B) on RTX 5070 Ti, Sentinel (4B) on RTX 2060, Embed on CPU</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">Knowledge base</td>
                <td className="py-3 text-gray-600">200+ books on philosophy, political theory, and history (~20,000 searchable passages), plus ~150 cached web pages</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">API surface</td>
                <td className="py-3 text-gray-600">20 endpoints via FastAPI, plus a Telegram bot</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">Resilience</td>
                <td className="py-3 text-gray-600">If any component goes down (web search, embeddings, either LLM), the system continues with reduced capability instead of failing entirely</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">In use since</td>
                <td className="py-3 text-gray-600">December 2025, 10–20 queries per day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROBLEM</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why I built this instead of using something off the shelf</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            I wanted a research tool that did three things at once: hold my full book library as a queryable knowledge base, pull live information from the web when the books were not enough, and feed both into my research workflow. The hosted options each failed on at least one axis. ChatGPT could not ingest my library without losing it on reset. NotebookLM held documents but could not reach the web. None of them let me see or change what was happening between question and answer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The trigger that made me actually start building was a hallucination. I asked a hosted model to research a ticker and it returned confident, specific numbers that were fabricated. Not "I don't know," not a refusal, just made-up financials presented as fact. I decided I needed a system where I could see and shape every step between the question and the answer, instead of trusting a black box.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A secondary motivation: I work in enterprise AI consulting. I wanted to know firsthand where these systems break, not secondhand from vendor decks.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">KEY DECISIONS</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Five decisions that shaped the system</h2>

        <div className="space-y-12">
          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">A research pipeline, not a chat wrapper</h3>
            <p className="text-gray-600 leading-relaxed">
              The simplest version of this project would have been a single endpoint that takes a question, retrieves top-k chunks from RAG, drops them into a system prompt, and calls one LLM. That works for documents you already have. It does not work for research. What I built instead is a pipeline with discrete steps: classify the query, rewrite it for retrieval, decompose multi-part questions, run web search, use an LLM call to decide which URLs are worth fetching, summarize each fetched page, assemble local and web context separately, then call the answer model. The cost is more code and more LLM calls per question. The benefit is that each step is independently inspectable and replaceable. A single-call architecture would have left me prompt-engineering a black box.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">LLM-driven fetch selection over fetch-everything</h3>
            <p className="text-gray-600 leading-relaxed">
              Web search returns 10 to 20 candidate URLs per query. The naive move is to fetch them all and let retrieval sort it out. The cost is bandwidth, latency, and noisy context full of cookie banners and footers. I added a small intelligence step: an LLM call that reads the search result snippets and decides which URLs are worth fetching for this specific question. The alternative was relevance scoring with embeddings, no LLM in the loop. Cheaper, but it scores against the question text rather than against what the page is likely to actually contain. The LLM call understands the gap between a search snippet and the full page.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Two GPUs as designed capacity, single-model routing shipped first</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The hardware setup is two GPUs: a 5070 Ti running Brain (Qwen3.5-27B) on port 11434, and a 2060 running Sentinel (Qwen3.5-4B) on port 11435. Both processes are alive. Sentinel is running and ready but not yet receiving requests.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This was a deliberate sequencing call. The pipeline itself was the unknown. Wiring tier-routing at the same time would have meant debugging two unknowns at once. Ship the pipeline against a single model first, validate the architecture, leave the routing optimization for the next iteration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Why two GPUs at all instead of running both on the 5070 Ti? VRAM math. Qwen3.5-27B at Q4_K_M nearly fills the 5070 Ti's 16GB with KV cache and a usable context window. Adding Sentinel to the same card means dropping Brain to a smaller model, going to a more aggressive quant, or shrinking context. The 2060 has 6GB sitting in the same machine. Using it is free capacity. The 6GB ceiling also picked Sentinel's size: a 4B model has headroom for fast structured tasks and not much else, which is exactly the role it needs to play.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 04</p>
            <h3 className="text-xl font-bold mb-3">Anti-fabrication at the prompt layer first, structural grounding later</h3>
            <p className="text-gray-600 leading-relaxed">
              The original problem was hallucinated facts. The cleanest fix is structural: enforce a boundary where the model can never recall facts from training, only repeat data injected into context. That depends on Decision 3 being finished first, because the verification pass that catches recall is the natural job for Sentinel. What I shipped instead is a strong system prompt: never invent URLs or citations, only reference sources that appear in the reference material, prefer "I don't have enough information" over guessing. This catches fabrication of links and sources reliably. It does not structurally prevent recall. I knew this was the weaker form when I shipped it. The decision was to ship discipline now and add structure later, in the same iteration as the Sentinel routing work.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-gray-500 mb-2">DECISION 05</p>
            <h3 className="text-xl font-bold mb-3">No multi-agent council pattern</h3>
            <p className="text-gray-600 leading-relaxed">
              I considered the council/swarm pattern: run several model instances with different personas, vote on answers. Interesting, and not what I needed. My problem was hallucination on factual research, not disagreement on subjective judgment. Voting between confabulators produces confident consensus on fabricated data. I noted the pattern and moved on.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">ARCHITECTURE</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How the pipeline runs</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <p className="text-xs font-mono text-gray-500 mb-4">RESEARCH PIPELINE · PER REQUEST</p>

          <div className="text-gray-400">
            {/* Stage 1: Request */}
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-white border border-gray-300 rounded-md text-center">
                <p className="text-sm font-medium text-gray-900">Request</p>
                <p className="text-xs font-mono text-gray-500">HTTP / Telegram</p>
              </div>
            </div>

            {/* Vertical connector */}
            <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
              <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
            </svg>

            {/* Stage 2: Classify query */}
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-white border border-gray-300 rounded-md text-center">
                <p className="text-sm font-medium text-gray-900">Classify query</p>
                <p className="text-xs font-mono text-gray-500">intent + routing</p>
              </div>
            </div>

            <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
              <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
            </svg>

            {/* Stage 3: Rewrite + decompose */}
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-white border border-gray-300 rounded-md text-center">
                <p className="text-sm font-medium text-gray-900">Rewrite + decompose</p>
                <p className="text-xs font-mono text-gray-500">multi-part → sub-queries</p>
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
                <p className="text-xs font-mono text-gray-500 mb-1">LOCAL BRANCH</p>
                <div className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-center">
                  <p className="text-sm font-medium text-gray-900">Local RAG</p>
                  <p className="text-xs font-mono text-gray-500">ChromaDB · ~20k passages</p>
                </div>
                <div className="flex-1 w-px bg-gray-400"></div>
              </div>

              {/* Web branch - deeper sub-pipeline */}
              <div className="flex-1 px-1.5 flex flex-col items-center">
                <p className="text-xs font-mono text-gray-500 mb-1">WEB BRANCH</p>
                <div className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-center">
                  <p className="text-sm font-medium text-gray-900">Web search</p>
                  <p className="text-xs font-mono text-gray-500">SearXNG · 10–20 candidates</p>
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full px-3 py-2 bg-gray-900 border border-gray-900 rounded-md text-center">
                  <p className="text-sm font-medium text-white">LLM fetch selection</p>
                  <p className="text-xs font-mono text-gray-400">picks URLs worth fetching</p>
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-center">
                  <p className="text-sm font-medium text-gray-900">Fetch + summarize</p>
                  <p className="text-xs font-mono text-gray-500">per-page compression</p>
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
              <div className="px-4 py-2 bg-white border border-gray-300 rounded-md text-center">
                <p className="text-sm font-medium text-gray-900">Context assembly</p>
                <p className="text-xs font-mono text-gray-500">local + web labeled separately</p>
              </div>
            </div>

            <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
              <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
            </svg>

            {/* Stage 6: Brain */}
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-gray-900 border border-gray-900 rounded-md text-center">
                <p className="text-sm font-medium text-white">Brain</p>
                <p className="text-xs font-mono text-gray-400">Qwen3.5-27B · RTX 5070 Ti · :11434</p>
              </div>
            </div>

            <svg viewBox="0 0 100 16" preserveAspectRatio="none" className="w-full h-4">
              <line x1="50" y1="0" x2="50" y2="16" stroke="currentColor" strokeWidth="0.4" />
            </svg>

            {/* Stage 7: Response */}
            <div className="flex justify-center">
              <div className="px-4 py-2 bg-green-50 border border-green-300 rounded-md text-center">
                <p className="text-sm font-medium text-green-900">Response with sources</p>
              </div>
            </div>
          </div>

          {/* Sentinel idle sidecar */}
          <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 bg-white border border-dashed border-gray-300 rounded-md">
                <p className="text-sm font-medium text-gray-400">Sentinel</p>
                <p className="text-xs font-mono text-gray-400">Qwen3.5-4B · RTX 2060</p>
              </div>
              <p className="text-xs font-mono text-gray-400">loaded and health-checked · idle in the research path</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            The orchestrator runs each request through the pipeline above. Local document retrieval and web retrieval run in parallel. The web branch has its own intelligence step (LLM fetch selection) before fetching, which keeps the assembled context clean. Both branches feed into a single context assembly stage that labels local and web sources separately so the model can distinguish them.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The platform exposes 20 API endpoints through FastAPI, uses ChromaDB for both local document and web cache vector stores, and persists session memory in SQLite. A Telegram bot provides a second interface alongside the HTTP API.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sentinel is loaded and health-checked but not yet in the research pipeline's request path. Sentinel routing is the next build for the research side. Sentinel is already actively used by the Trading Platform for news sentiment classification, which is where the dual-GPU architecture was validated first.
          </p>
        </div>
      </section>

      {/* Failure Handling */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">FAILURE HANDLING</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">When things break</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The system is designed to keep working when individual components fail:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900">Component down</th>
                <th className="py-3 font-medium text-gray-900">What happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Brain (27B)</td>
                <td className="py-3 text-gray-600">Chat fails, but the web cache and document index remain available for the next session</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Sentinel (4B)</td>
                <td className="py-3 text-gray-600">Memory summarization is skipped. The system logs a warning and continues.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Embed server</td>
                <td className="py-3 text-gray-600">RAG retrieval fails. Workaround: turn off the RAG toggle and rely on web-only or conversation context.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">SearXNG (web search)</td>
                <td className="py-3 text-gray-600">Web pipeline returns zero candidates. The model still answers using the local library and its own training knowledge.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">SQLite (memory)</td>
                <td className="py-3 text-gray-600">Memory operations log a warning and retry. Chat continues without persistent history if the lock persists.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mt-6">
          No single failure takes down the whole system.
        </p>
      </section>

      {/* Observed Performance */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">OBSERVED PERFORMANCE</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Four months of daily use</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The system has been my primary research tool since December 2025, averaging 10–20 queries per day.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900">Metric</th>
                <th className="py-3 font-medium text-gray-900">Observed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Latency</td>
                <td className="py-3 text-gray-600">5–10 seconds per query, driven by model size and available compute. Cold starts after a reboot can take 30+ seconds while the model loads into VRAM.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Fabricated sources</td>
                <td className="py-3 text-gray-600">Zero since the anti-fabrication prompt was added. Early versions did hallucinate citations, which is what triggered the fix.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Knowledge base</td>
                <td className="py-3 text-gray-600">~20,000 passages from 200+ books, ~150 cached web pages. Both collections continue to grow.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-gray-900 font-medium whitespace-nowrap align-top">Web cache hit rate</td>
                <td className="py-3 text-gray-600">~30% of web queries serve from cache, reducing redundant fetches and improving response time for repeated topics.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mt-6">
          Quality is currently judged through daily use: if an answer cites a source, I can check it. A formal evaluation harness is on the roadmap.
        </p>
      </section>

      {/* What's Next */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">WHAT'S NEXT</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">In order</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="text-gray-400 font-mono">1.</span>
            <div>
              <p className="font-medium text-gray-900 mb-1">Route utility tasks to Sentinel.</p>
              <p className="text-gray-600">Classification, query rewriting, fetch decisions, and page summarization all move to the 4B model on the 2060. This is the build that finally uses both GPUs in the research pipeline.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-gray-400 font-mono">2.</span>
            <div>
              <p className="font-medium text-gray-900 mb-1">Add Sentinel as a verification pass.</p>
              <p className="text-gray-600">After Brain generates an answer, Sentinel reads it alongside the source material and flags any claims not supported by context. This is the structural grounding layer that the current prompt-based approach defers.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-gray-400 font-mono">3.</span>
            <div>
              <p className="font-medium text-gray-900 mb-1">Build an evaluation harness.</p>
              <p className="text-gray-600">Quality is currently judged through daily use. A lightweight harness that catches regressions would make the system easier to improve without breaking what already works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERABLES</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Receipts</h2>

        <a href="https://github.com/tanishkthorat/notes-on-private-rag-systems" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
          <h3 className="font-bold text-gray-900 mb-2">Architecture notes (public repo)</h3>
          <p className="text-gray-600 mb-2">Design decisions and lessons from building a production-style private AI platform. Dual-model inference, grounded generation, refusal as a feature.</p>
          <span className="text-sm font-mono text-gray-900">→</span>
        </a>
      </section>

      {/* Back link */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <a href="/case-studies" className="text-sm font-mono text-gray-500 hover:text-gray-900">← Back to case studies</a>
      </section>
    </main>
  );
}
