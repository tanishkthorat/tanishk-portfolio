import Link from "next/link";

export function EvidenceDeskCaseStudyCard({ headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <Link href="/case-studies/evidence-desk" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 05</p>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN DEVELOPMENT · EVIDENCE WORKFLOW</span>
      </div>
      <Heading className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Evidence Desk</Heading>
      <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">A research partner for accurate, accountable journalism. It turns web, document, and audiovisual sources into traceable claims while keeping contradictions, uncertainty, and editorial judgment visible.</p>
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read case study →</span>
    </Link>
  );
}
