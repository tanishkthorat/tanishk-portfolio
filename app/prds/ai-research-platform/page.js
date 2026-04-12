export const metadata = {
  title: "AI Research Platform PRD — Tanishk Thorat",
  description: "Product requirements document for a self-hosted RAG and research platform with dual-GPU inference, multi-stage retrieval pipeline, and anti-fabrication discipline.",
};

const TOC = [
  { id: "overview", label: "1. Overview" },
  { id: "goals", label: "2. Goals & non-goals" },
  { id: "personas", label: "3. User personas" },
  { id: "metrics", label: "4. Success metrics" },
  { id: "functional", label: "5. Functional requirements" },
  { id: "nonfunctional", label: "6. Non-functional requirements" },
  { id: "acceptance", label: "7. Acceptance criteria" },
  { id: "architecture", label: "8. Architecture" },
  { id: "oos", label: "9. Out of scope" },
  { id: "open", label: "10. Open questions" },
  { id: "appendix", label: "11. Design decisions" },
];

export default function AIResearchPlatformPRD() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900 transition">CASE STUDIES</a>
          {" / "}
          <a href="/case-studies/ai-research-platform" className="hover:text-gray-900 transition">AI RESEARCH PLATFORM</a>
          {" / "}
          <span>PRD</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">AI Research Platform</h1>
        <p className="text-lg text-gray-500 mb-6">Product Requirements Document</p>

        <table className="text-sm border border-gray-200 rounded">
          <tbody>
            <tr className="border-b border-gray-200"><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Author</td><td className="px-4 py-2">Tanishk Thorat</td></tr>
            <tr className="border-b border-gray-200"><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Status</td><td className="px-4 py-2">In active development. Single-user deployment.</td></tr>
            <tr><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Last updated</td><td className="px-4 py-2">April 2026</td></tr>
          </tbody>
        </table>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 flex gap-12">

        {/* Sticky TOC */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <nav className="sticky top-24">
            <p className="text-xs font-mono text-gray-500 mb-3">CONTENTS</p>
            <ul className="space-y-2 text-sm">
              {TOC.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-gray-600 hover:text-gray-900 transition">{item.label}</a></li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="flex-1 min-w-0 space-y-16 text-gray-800 leading-relaxed">

          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
            <div className="space-y-4">
              <p>The AI Research Platform is a self-hosted research tool that combines a private document library with live web retrieval and runs entirely on local hardware. It is designed to answer research questions by assembling context from multiple sources in a multi-stage pipeline, then synthesizing an answer through a local large language model. The platform exists because hosted alternatives fail on at least one of three axes that matter for serious research work: persistent personal libraries, live web access, or inspectability of the pipeline between question and answer.</p>
            </div>
          </section>

          <section id="goals">
            <h2 className="text-2xl font-bold mb-4">2. Goals and non-goals</h2>
            <p className="font-semibold mb-2">Goals</p>
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>Provide a single workspace for querying a personal book library and live web sources</li>
              <li>Run all inference on hardware owned and operated by the user, with no third-party API dependency</li>
              <li>Make every step of the research pipeline independently inspectable and replaceable</li>
              <li>Enforce anti-fabrication discipline at the prompt layer today, with architectural grounding planned next</li>
              <li>Maintain daily-use performance; faster response than switching to a hosted alternative</li>
            </ul>
            <p className="font-semibold mb-2">Non-goals</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-user authentication, sharing, or collaboration</li>
              <li>A consumer-grade user interface</li>
              <li>Replacing hosted models for general conversational use</li>
              <li>Training or fine-tuning the underlying language models</li>
            </ul>
          </section>

          <section id="personas">
            <h2 className="text-2xl font-bold mb-4">3. User personas</h2>
            <p><span className="font-semibold">Primary persona: the researcher-operator.</span> A single user with technical proficiency, daily research needs across long-form text (book library) and current information (web), and an explicit preference for inspectable systems over hosted black boxes. Comfortable with command-line tools and willing to operate the system as an engineer in addition to using it as a researcher.</p>
          </section>

          <section id="metrics">
            <h2 className="text-2xl font-bold mb-4">4. Success metrics</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-4 py-2 text-left font-mono border-b border-gray-200">Metric</th>
                    <th className="px-4 py-2 text-left font-mono border-b border-gray-200">Target</th>
                    <th className="px-4 py-2 text-left font-mono border-b border-gray-200">Measurement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Daily active use</td><td className="px-4 py-2">≥ 1 research session per day</td><td className="px-4 py-2">Session log count</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Fabricated source incidents</td><td className="px-4 py-2">Zero</td><td className="px-4 py-2">Manual review of citations</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Web cache hit rate</td><td className="px-4 py-2">Above 30% within 90 days</td><td className="px-4 py-2">Cache hit/miss logs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Mean answer latency</td><td className="px-4 py-2">Under 60s for typical queries</td><td className="px-4 py-2">API response timing</td></tr>
                  <tr><td className="px-4 py-2">Fallback to hosted models</td><td className="px-4 py-2">Decreasing month over month</td><td className="px-4 py-2">Self-reported, weekly</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="functional">
            <h2 className="text-2xl font-bold mb-4">5. Functional requirements</h2>
            <div className="space-y-4">
              <p><span className="font-mono text-sm text-gray-500">FR-1: Document ingestion.</span> The system shall ingest documents from a local library into a vector store using semantic boundary chunking, preserving filename and source metadata for citation.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-2: Query classification.</span> Each user query shall be classified before retrieval to determine whether it requires fresh web data, library-only retrieval, or both.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-3: Query rewriting.</span> User queries shall be rewritten before web search if the original phrasing is suboptimal for retrieval, and decomposed into sub-queries when the question is multi-part.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-4: Web search and fetch selection.</span> The system shall execute web search against multiple engines, then use a model-driven selection step to determine which result URLs are worth fetching. Naive top-N fetching is rejected.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-5: Page summarization.</span> Each fetched web page shall be summarized before injection into the synthesis prompt.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-6: Context assembly.</span> Local document context and web context shall be assembled as separately labeled sections in the synthesis prompt.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-7: Synthesis.</span> A primary language model (Qwen3.5-27B, Brain) shall generate the final answer from the assembled context.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-8: Anti-fabrication enforcement.</span> The system prompt shall instruct the model to refuse to invent URLs, citations, or sources, and to prefer explicit refusal over guessing.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-9: Source attribution.</span> Every response shall return a structured source list referencing the documents and URLs used during retrieval.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-10: Persistent session memory.</span> The system shall maintain per-session conversation history in a local database, with periodic summarization for long sessions.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-11: Telegram interface.</span> A secondary interface shall allow query submission and response delivery through a Telegram bot.</p>
            </div>
          </section>

          <section id="nonfunctional">
            <h2 className="text-2xl font-bold mb-4">6. Non-functional requirements</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50 text-gray-600">
                  <tr><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Category</th><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Requirement</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Performance</td><td className="px-4 py-2">Synthesis responses under 60s for typical queries; streaming output for long generations</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Reliability</td><td className="px-4 py-2">Graceful degradation when individual components fail; system continues to serve from remaining sources</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Security & privacy</td><td className="px-4 py-2">All inference local; no third-party API calls during query handling; library never leaves user hardware</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Maintainability</td><td className="px-4 py-2">Each pipeline stage independently inspectable, replaceable, and testable in isolation</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Hardware footprint</td><td className="px-4 py-2">Operates within 16 GB VRAM (RTX 5070 Ti) for primary inference and 6 GB VRAM (RTX 2060) for secondary capacity</td></tr>
                  <tr><td className="px-4 py-2 whitespace-nowrap">Observability</td><td className="px-4 py-2">Structured logging at each pipeline stage; per-stage timing for performance analysis</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="acceptance">
            <h2 className="text-2xl font-bold mb-4">7. Acceptance criteria</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><span className="font-semibold">Given</span> a query that can be answered from the local library, <span className="font-semibold">when</span> the user submits it, <span className="font-semibold">then</span> the system retrieves relevant chunks, synthesizes an answer, and returns source citations.</li>
              <li><span className="font-semibold">Given</span> a query requiring fresh information, <span className="font-semibold">when</span> classified as a freshness query, <span className="font-semibold">then</span> the system executes web search, selects URLs through the model-driven selection step, fetches and summarizes pages, and synthesizes an answer with web sources cited.</li>
              <li><span className="font-semibold">Given</span> a query for which retrieval returns no high-confidence material, <span className="font-semibold">when</span> the system synthesizes a response, <span className="font-semibold">then</span> the response does not invent URLs, citations, or specific factual claims unsupported by retrieved context.</li>
              <li><span className="font-semibold">Given</span> a multi-part query, <span className="font-semibold">when</span> the system processes it, <span className="font-semibold">then</span> it decomposes the query into sub-queries before retrieval.</li>
              <li><span className="font-semibold">Given</span> a previously fetched web URL within the cache TTL, <span className="font-semibold">when</span> a query requires that URL, <span className="font-semibold">then</span> the system serves from cache rather than re-fetching.</li>
            </ul>
          </section>

          <section id="architecture">
            <h2 className="text-2xl font-bold mb-4">8. Architecture</h2>
            <p className="mb-6">Request flows through discrete pipeline stages: classification determines retrieval strategy, queries are rewritten and decomposed, local RAG and web retrieval run in parallel, web results pass through an LLM-driven fetch selection step before pages are fetched and summarized, then local and web contexts are assembled separately and fed to Brain for synthesis. Sentinel is loaded on the secondary GPU but is not yet routed in the research pipeline; it is actively used by the Trading Platform, which validated the dual-GPU architecture first.</p>
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
              <img src="/screenshots/research-chat.png" alt="Research platform live query: book library retrieval, GPU status panel showing Brain on 5070 Ti and Sentinel on 2060, pipeline activity log" className="w-full block" />
            </div>
            <p className="text-sm text-gray-500">Live query against the research platform. Right panel shows both GPUs active, RAG and web cache collections populated, and the classify → history → LLM activity trace.</p>
          </section>

          <section id="oos">
            <h2 className="text-2xl font-bold mb-4">9. Out of scope</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-user authentication, role-based access, or shared workspaces</li>
              <li>Mobile or desktop client applications beyond the existing API and Telegram interfaces</li>
              <li>Document editing, annotation, or library curation tools</li>
              <li>Fine-tuning or training of the underlying models</li>
              <li>Integration with hosted LLM APIs as a fallback</li>
              <li>Real-time data streams</li>
            </ul>
          </section>

          <section id="open">
            <h2 className="text-2xl font-bold mb-4">10. Open questions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Routing layer rollout.</span> When should utility-task routing to Sentinel be introduced, and which tasks migrate first? Current proposed order: classification, rewriting, fetch selection, page summarization, memory summarization.</li>
              <li><span className="font-semibold">Verification pass.</span> Once routing is in place, should Sentinel run an unconditional verification pass on Brain's outputs, or only when retrieval confidence falls below a threshold?</li>
              <li><span className="font-semibold">Source attribution granularity.</span> Is per-claim attribution worth the engineering cost for a single-user system?</li>
              <li><span className="font-semibold">Authority weighting in retrieval.</span> The library mixes reference works and opinion. Should authority be a tag that influences ranking?</li>
              <li><span className="font-semibold">Evaluation harness.</span> What's the minimum viable harness that would catch regressions without becoming a maintenance burden?</li>
            </ul>
          </section>

          <section id="appendix">
            <h2 className="text-2xl font-bold mb-4">11. Appendix: design decisions</h2>
            <p>The reasoning behind specific architectural choices — pipeline versus chat wrapper, LLM-driven fetch selection, two-GPU sequencing, prompt-layer-first anti-fabrication — lives on the case study page at <a href="/case-studies/ai-research-platform" className="underline hover:text-gray-900">/case-studies/ai-research-platform</a>.</p>
          </section>

        </article>
      </div>

      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500">
        <p><a href="/case-studies/ai-research-platform" className="hover:text-gray-900 transition">← Back to case study</a></p>
      </footer>
    </main>
  );
}