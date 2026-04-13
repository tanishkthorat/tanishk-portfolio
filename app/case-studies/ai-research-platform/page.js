export const metadata = {
  title: "AI Research Platform — Tanishk Thorat",
  description: "A self-hosted RAG and research platform with dual-GPU inference, multi-stage retrieval pipeline, and strict no-fabrication discipline.",
};

export default function AIResearchPlatform() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900 transition">CASE STUDIES</a>
          {" / "}
          <span>AI RESEARCH PLATFORM</span>
        </p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
          <span className="text-xs font-mono text-gray-500">ONE USER (ME) · DAILY</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">AI Research Platform</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
          A self-hosted research tool that combines a private book library with live web retrieval, runs entirely on local hardware, and treats every step between question and answer as inspectable.
        </p>
        <a href="/prds/ai-research-platform" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-mono text-sm">
          Read the full PRD <span className="text-base">→</span>
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROBLEM</p>
        <h2 className="text-3xl font-bold mb-6">Why I built this instead of using something off the shelf</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <p>I wanted a research tool that did three things at once: hold my full book library as a queryable knowledge base, pull live information from the web when the books were not enough, and feed both into a workflow for making YouTube videos. The hosted options each failed on at least one axis. ChatGPT could not ingest my library without losing it on reset. NotebookLM held documents but could not reach the web. None of them let me see or change what was happening between question and answer.</p>
          <p>The trigger that made me actually start building was a hallucination. I asked a hosted model to research a ticker and it returned confident, specific numbers that were fabricated. Not "I don't know," not a refusal, just made-up financials presented as fact. I decided I needed a system where I could see and shape every step between the question and the answer, instead of trusting a black box.</p>
          <p>A secondary motivation: I work in enterprise AI consulting. I wanted to know firsthand where these systems break, not secondhand from vendor decks.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">KEY DECISIONS</p>
        <h2 className="text-3xl font-bold mb-8">Five decisions that shaped the system</h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">A research pipeline, not a chat wrapper</h3>
            <p className="text-gray-700 leading-relaxed">
              The simplest version of this project would have been a single endpoint that takes a question, retrieves top-k chunks from RAG, drops them into a system prompt, and calls one LLM. That works for documents you already have. It does not work for research. What I built instead is a pipeline with discrete steps: classify the query, rewrite it for retrieval, decompose multi-part questions, run web search, use an LLM call to decide which URLs are worth fetching, summarize each fetched page, assemble local and web context separately, then call the answer model. The cost is more code and more LLM calls per question. The benefit is that each step is independently inspectable and replaceable. A single-call architecture would have left me prompt-engineering a black box.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">LLM-driven fetch selection over fetch-everything</h3>
            <p className="text-gray-700 leading-relaxed">
              Web search returns 10 to 20 candidate URLs per query. The naive move is to fetch them all and let retrieval sort it out. The cost is bandwidth, latency, and noisy context full of cookie banners and footers. I added a small intelligence step: an LLM call that reads the search result snippets and decides which URLs are worth fetching for this specific question. The alternative was relevance scoring with embeddings, no LLM in the loop. Cheaper, but it scores against the question text rather than against what the page is likely to actually contain. The LLM call understands the gap between a search snippet and the full page.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Two GPUs as designed capacity, single-model routing shipped first</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The hardware setup is two GPUs: a 5070 Ti running Brain (Qwen3.5-27B) on port 11434, and a 2060 running Sentinel (Qwen3.5-4B) on port 11435. Both processes are alive. The two-tier routing logic is not yet built. Every LLM call in the current pipeline goes to Brain. Sentinel is plumbed and idle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              This was a deliberate sequencing call. The pipeline itself was the unknown. Wiring tier-routing at the same time would have meant debugging two unknowns at once. Ship the pipeline against a single model first, validate the architecture, leave the routing optimization for the next iteration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Why two GPUs at all instead of running both on the 5070 Ti? VRAM math. Qwen3.5-27B at Q4_K_M nearly fills the 5070 Ti's 16GB with KV cache and a usable context window. Adding Sentinel to the same card means dropping Brain to a smaller model, going to a more aggressive quant, or shrinking context. The 2060 has 6GB sitting in the same machine. Using it is free capacity. The 6GB ceiling also picked Sentinel's size: a 4B model has headroom for fast structured tasks and not much else, which is exactly the role it needs to play.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 04</p>
            <h3 className="text-xl font-bold mb-3">Anti-fabrication at the prompt layer first, structural grounding later</h3>
            <p className="text-gray-700 leading-relaxed">
              The original problem was hallucinated facts. The cleanest fix is structural: build a wall where the model can never recall facts, only repeat data injected into context. That depends on Decision 3 being finished first, because the verification pass that catches recall is the natural job for Sentinel. What I shipped instead is a strong system prompt: never invent URLs or citations, only reference sources that appear in the reference material, prefer "I don't have enough information" over guessing. This catches fabrication of links and sources reliably. It does not structurally prevent recall. I knew this was the weaker form when I shipped it. The decision was to ship discipline now and add structure later, in the same iteration as the Sentinel routing work.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 05</p>
            <h3 className="text-xl font-bold mb-3">No multi-agent council pattern</h3>
            <p className="text-gray-700 leading-relaxed">
              I considered the council/swarm pattern: run several model instances with different personas, vote on answers. Interesting, and not what I needed. My problem was hallucination on factual research, not disagreement on subjective judgment. Voting between confabulators produces confident consensus on fabricated data. I noted the pattern and moved on.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">ARCHITECTURE</p>
        <h2 className="text-3xl font-bold mb-8">How the pipeline runs</h2>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 overflow-x-auto">
          <svg viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
              </marker>
            </defs>
            <rect x="280" y="20" width="160" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="45" textAnchor="middle" fontSize="13" fill="#111827">Request</text>
            <line x1="360" y1="60" x2="360" y2="90" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="240" y="90" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="115" textAnchor="middle" fontSize="13" fill="#111827">Classify query</text>
            <line x1="360" y1="130" x2="360" y2="160" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="240" y="160" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="185" textAnchor="middle" fontSize="13" fill="#111827">Rewrite + decompose</text>
            <rect x="60" y="230" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="180" y="255" textAnchor="middle" fontSize="13" fill="#111827">Local RAG (ChromaDB)</text>
            <rect x="420" y="230" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="540" y="255" textAnchor="middle" fontSize="13" fill="#111827">Web search</text>
            <line x1="360" y1="200" x2="180" y2="230" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="360" y1="200" x2="540" y2="230" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="420" y="300" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="540" y="325" textAnchor="middle" fontSize="13" fill="#111827">LLM fetch selection</text>
            <line x1="540" y1="270" x2="540" y2="300" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="420" y="370" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="540" y="395" textAnchor="middle" fontSize="13" fill="#111827">Fetch + summarize pages</text>
            <line x1="540" y1="340" x2="540" y2="370" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="240" y="450" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="475" textAnchor="middle" fontSize="13" fill="#111827">Context assembly</text>
            <line x1="180" y1="270" x2="320" y2="450" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="540" y1="410" x2="400" y2="450" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="240" y="520" width="240" height="50" rx="4" fill="#111827" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="542" textAnchor="middle" fontSize="13" fill="white">Brain (Qwen3.5-27B)</text>
            <text x="360" y="558" textAnchor="middle" fontSize="11" fill="#9ca3af">RTX 5070 Ti · port 11434</text>
            <line x1="360" y1="490" x2="360" y2="520" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="240" y="600" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="625" textAnchor="middle" fontSize="13" fill="#111827">Response with sources</text>
            <line x1="360" y1="570" x2="360" y2="600" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <rect x="500" y="600" width="200" height="50" rx="4" fill="white" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="600" y="622" textAnchor="middle" fontSize="12" fill="#6b7280">Sentinel (Qwen3.5-4B)</text>
            <text x="600" y="638" textAnchor="middle" fontSize="10" fill="#9ca3af">RTX 2060 · idle in research path</text>
          </svg>
        </div>

        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
          <p>The orchestrator runs each request through the pipeline above. Local document retrieval and web retrieval run in parallel. The web branch has its own intelligence step (LLM fetch selection) before fetching, which keeps the assembled context clean. Both branches feed into a single context assembly stage that labels local and web sources separately so the model can distinguish them.</p>
          <p>The platform exposes 20 API endpoints through FastAPI, uses ChromaDB for both local document and web cache vector stores, and persists session memory in SQLite. A Telegram bot provides a second interface alongside the HTTP API.</p>
          <p>Sentinel is loaded and health-checked but not yet in the research pipeline's request path. The dashed box on the diagram is the next build for the research side. Sentinel is already actively used by the Trading Platform for news sentiment classification, which is where the dual-GPU architecture was validated first.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">WHAT'S NEXT</p>
        <h2 className="text-3xl font-bold mb-6">In order</h2>
        <ol className="space-y-3 text-gray-700 leading-relaxed max-w-3xl list-decimal list-inside">
          <li>Route utility tasks to Sentinel on the 2060: classification, query rewriting, fetch decisions, page summarization. The build that finally uses both GPUs in the research pipeline.</li>
          <li>Add Sentinel as a verification pass on Brain's final answer: read the answer alongside source material, flag claims not supported by context. The structural grounding layer that Decision 4 deferred.</li>
          <li>Per-claim source attribution surfaced in the response, not just in the sources block.</li>
          <li>An evaluation harness. Quality is currently judged through daily use. Fine for one user, not fine for anything else.</li>
          <li>Mark documents in the library as authoritative versus opinion. The system currently treats them the same.</li>
        </ol>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">DELIVERABLES</p>
        <h2 className="text-3xl font-bold mb-8">Receipts</h2>
        <div className="space-y-4">
          <a href="https://github.com/tanishkthorat/notes-on-private-rag-systems" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Architecture notes (public repo)</h3>
                <p className="text-gray-600">Design decisions and lessons from building a production-style private AI platform. Dual-model inference, grounded generation, refusal as a feature.</p>
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