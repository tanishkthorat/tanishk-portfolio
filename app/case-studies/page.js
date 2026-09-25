import { GTMCaseStudyCard } from "@/app/_components/GTMCaseStudyCard";

export const metadata = {
  title: "Case Studies — Tanishk Thorat",
  description: "Four case studies on AI systems and GTM engineering: an outbound consulting workflow, a research platform, a trading platform, and a regulated biotech deployment plan.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <a
            href="/"
            className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            TANISHK THORAT
          </a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">CASE STUDIES</span>
        </p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Four case studies.</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]">
          Two systems I built and operate on my own hardware. A GTM workflow reaching its first real outreach. A deployment plan for a fictional regulated client. Each one is here because the decisions inside it are worth defending in an interview.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <div className="space-y-6">

          <GTMCaseStudyCard />

          <a href="/case-studies/ai-research-platform" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 01</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h2 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">AI Research Platform</h2>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                  A self-hosted research tool I built to learn where private RAG systems actually break. Dual-GPU inference, a multi-stage pipeline, and a strict no-fabrication discipline. One user: me, daily.
                </p>
              </div>
              <span className="text-[var(--accent-dim)] text-2xl mt-1">→</span>
            </div>
          </a>

          <a href="/case-studies/trading-platform/v2" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 02</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h2 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Trading Platform · Version 2</h2>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                  The next chapter: an eight-stage research team, bounded paper trading, and a reproducible strategy lab. Built on the original trading platform, with decisions and failed experiments kept inspectable.
                </p>
              </div>
              <span className="text-[var(--accent-dim)] text-2xl mt-1">→</span>
            </div>
          </a>

          <a href="/case-studies/strategic-synthesis-engine" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 03</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--fg-dim)] text-[var(--fg-dim)]">NOT-DEPLOYED</span>
                </div>
                <h2 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Strategic Synthesis Engine</h2>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                  A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that doesn't trust AI. Take-home turned case study.
                </p>
              </div>
              <span className="text-[var(--accent-dim)] text-2xl mt-1">→</span>
            </div>
          </a>

        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[var(--rule)] font-mono text-[11px] text-[var(--fg-dim)]">
        <p>
          <a href="/" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">← Back to home</a>
        </p>
      </footer>
    </main>
  );
}
