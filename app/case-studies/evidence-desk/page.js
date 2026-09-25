import Link from "next/link";
import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "Evidence Desk — Tanishk Thorat",
  description: "An evidence-first research system that helps journalists move from source material to traceable claims, competing explanations, and accountable editorial decisions.",
};

const sections = [
  {
    id: "problem",
    eyebrow: "01 · THE REPORTING PROBLEM",
    title: "More material does not automatically produce better reporting",
    paragraphs: [
      "Reporting on a public institution or public figure can mean working across articles, reports, PDFs, interviews, livestreams, and thousands of hours of archived video. Search can surface a relevant sentence without revealing who said it, what they were responding to, or whether the same record contains a serious contradiction.",
      "General-purpose AI compresses this material quickly, but compression introduces its own risk. A summary can blur evidence with interpretation, repeat several versions of the same account as independent confirmation, or turn an unresolved lead into confident prose.",
      "I built Evidence Desk around a different question: how can software help a journalist examine more material while making the path from source to conclusion easier to challenge?",
    ],
  },
  {
    id: "boundary",
    eyebrow: "02 · THE EVIDENCE BOUNDARY",
    title: "Evidence, interpretation, and editorial decisions stay separate",
    paragraphs: [
      "The system stores captured sources and exact passages separately from claims, interpretations, and model output. A factual claim can point to an inspected source passage; generated text cannot become evidence merely because a model produced or repeated it.",
      "Evidence attached to a claim has an explicit role: supporting, contradicting, or contextual. Uncertainty and missing links remain part of the record instead of being edited out of the final answer path.",
      "When a source changes or a claim is narrowed, the earlier capture and assessment remain available. Revision is treated as part of responsible reporting, not as history to overwrite.",
    ],
    bullets: [
      ["Exact provenance", "Captured bytes, hashes, passages, timestamps, and source identity remain inspectable."],
      ["Revisable claims", "A claim can be narrowed or challenged without deleting its previous assessment."],
      ["Visible disagreement", "Supporting and contrary evidence remain distinct rather than collapsing into one confidence score."],
      ["Human authority", "The system proposes research records; the journalist decides what the evidence establishes."],
    ],
  },
  {
    id: "workflow",
    eyebrow: "03 · FROM QUESTION TO DECISION",
    title: "A bounded research workflow",
    paragraphs: [
      "A project begins with a research question, scope, audience, and evidence cutoff. Discovery is bounded so that a failed source, an access limitation, or an unanswered question remains visible instead of silently triggering an unlimited search.",
      "The researcher inspects the relevant passage before saving a claim. Later evidence can support it, challenge it, or force a revision. The resulting record can inform an angle or working draft, but the source trail remains available beside the prose.",
    ],
  },
  {
    id: "archive",
    eyebrow: "04 · ARCHIVE RESEARCH",
    title: "Using large media archives without pretending they are already understood",
    paragraphs: [
      "The current prototype connects the evidence workflow to a searchable long-form video archive. Its latest map covers 1,221 caption-ready videos and 254,691 retrievable segments organized across 240 topic leaves.",
      "Those numbers describe search coverage, not verified conclusions. Returned passages retain timestamps and source identity, while speaker, quotation, rebuttal, and endorsement can remain unresolved until a person reviews the surrounding exchange.",
      "This distinction matters for journalism: a searchable archive can generate leads and context, but it should not manufacture ownership or intent when the underlying material is ambiguous.",
    ],
  },
  {
    id: "decision",
    eyebrow: "05 · A DECISION IN PRACTICE",
    title: "Rejecting a better headline metric",
    paragraphs: [
      "The first lexical retrieval baseline reached 0.873 Recall@10 and 0.883 nDCG@10 on an adjudicated evaluation set, with no critical misses. A dense retrieval experiment improved the headline numbers to 0.964 Recall@10 and 0.974 nDCG@10.",
      "It also collapsed no-answer recall from 1.0 to zero and introduced three critical misses. I kept the simpler lexical baseline and deferred the apparently stronger model.",
      "That decision became a product principle: optimization is useful only when it improves the reporting task without making unsupported answers harder to detect.",
    ],
  },
  {
    id: "demonstrated",
    eyebrow: "06 · WHAT IS DEMONSTRATED",
    title: "An inspectable path from lead to claim",
    paragraphs: [
      "A live research pilot exercised discovery, public-source capture, text-PDF inspection, exact quotation checks, claim persistence, counterevidence, and revision through the browser workspace.",
      "One follow-up narrowed an overbroad allegation to the passage the source actually supported, preserved the original assessment, and kept an official denial as separate evidence. Invalid or ambiguous quote links were rejected rather than silently saved.",
      "The current value is therefore not automatic truth. It is a research record that shows what was inspected, what changed, what remains uncertain, and why an editorial conclusion was made.",
    ],
  },
  {
    id: "limits",
    eyebrow: "07 · LIMITS AND NEXT TEST",
    title: "What the system does not claim",
    paragraphs: [
      "Evidence Desk is an in-development research partner, not a fact-checking oracle or autonomous newsroom. It can verify source identity, capture integrity, exact quotations, and workflow lineage. It cannot determine that a source is truthful, independent, representative, or complete.",
      "Video attribution remains provisional, archive coverage is not semantic recall, and generated findings require review. The system has not yet demonstrated lower correction burden or faster reporting than an experienced journalist's existing workflow.",
      "The next evaluation should compare fixed reporting questions under matched limits. The useful outcomes are supported claims, meaningful counterevidence, missed sources, review minutes, and corrections required before publication—not the number of documents processed or words generated.",
    ],
  },
];

const workflow = [
  "Frame the question",
  "Discover sources",
  "Capture and verify",
  "Inspect exact evidence",
  "Save or revise a claim",
  "Test counterevidence",
  "Make an editorial decision",
];

const linkStyle = "text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";
const paragraphStyle = "font-sans text-base md:text-[17px] leading-[1.75] text-[var(--fg-muted)] mb-5";

export default function EvidenceDesk() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-24 pb-8 font-mono text-[10px] tracking-[0.14em] uppercase">
        <Link href="/" className={linkStyle}>Tanishk Thorat</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/case-studies" className={linkStyle}>Case studies</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-[var(--accent)]">Evidence Desk</span>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        <header className="pb-12">
          <SectionEyebrow>INDEPENDENT BUILD · JOURNALISM RESEARCH SYSTEM</SectionEyebrow>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Evidence Desk</h1>
          <p className="font-sans text-xl md:text-2xl leading-[1.45] text-[var(--fg)] max-w-[720px] mb-6">A research partner for accurate, accountable journalism.</p>
          <p className="font-mono text-[11px] text-[var(--accent)] mb-10">IN DEVELOPMENT · <time dateTime="2026-09-25">SEPTEMBER 2026</time></p>
          <div className="max-w-[640px]">
            <p className={paragraphStyle}>Evidence Desk helps journalists investigate complex stories across web pages, documents, transcripts, and audiovisual archives. It connects proposed claims to exact source evidence, preserves conflicting accounts and revisions, and highlights unresolved questions before publication.</p>
            <p className={paragraphStyle}>The system is built around one rule: every factual claim should be traceable, every contradiction should remain visible, and every conclusion should remain reviewable.</p>
          </div>
        </header>

        <aside aria-label="System at a glance" className="grid gap-px sm:grid-cols-3 bg-[var(--rule)] border border-[var(--rule)] mb-12">
          {[
            ["Purpose", "Turn source material into inspectable research records"],
            ["Core boundary", "Generated text never becomes evidence"],
            ["Current status", "Working prototype with human review"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[var(--bg-raised)] p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent)] mb-2">{label}</p>
              <p className="font-sans text-sm leading-relaxed text-[var(--fg-muted)]">{value}</p>
            </div>
          ))}
        </aside>

        <nav aria-label="Case study contents" className="border-y border-[var(--rule)] py-8">
          <SectionEyebrow>INSIDE THE CASE STUDY</SectionEyebrow>
          <ol className="grid gap-3 sm:grid-cols-2 font-mono text-[13px] leading-relaxed">
            {sections.map((section, index) => (
              <li key={section.id}><a href={`#${section.id}`} className={linkStyle}>{String(index + 1).padStart(2, "0")} / {section.title}</a></li>
            ))}
          </ol>
        </nav>

        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="py-12 border-b border-[var(--rule)] scroll-mt-20">
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <h2 id={`${section.id}-title`} className="font-mono text-2xl md:text-3xl font-medium leading-[1.25] text-[var(--fg)] mb-8 max-w-[720px]">{section.title}</h2>
            {section.id === "workflow" && (
              <figure className="mb-8 border border-[var(--rule)] bg-[var(--bg-raised)] p-5 sm:p-6">
                <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">From question to editorial decision</figcaption>
                <ol className="grid gap-3 sm:grid-cols-2">
                  {workflow.map((stage, index) => (
                    <li key={stage} className="flex items-center gap-3 border border-[var(--rule)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--fg)]">
                      <span aria-hidden="true" className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>{stage}
                    </li>
                  ))}
                </ol>
              </figure>
            )}
            <div className="max-w-[640px]">
              {section.paragraphs.map((paragraph) => <p key={paragraph} className={paragraphStyle}>{paragraph}</p>)}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-4 mb-6 font-sans text-base md:text-[17px] leading-[1.75]">
                  {section.bullets.map(([label, text]) => <li key={label}><strong className="font-medium text-[var(--fg)]">{label}: </strong>{text}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        <footer className="pt-8 font-mono text-[11px] uppercase tracking-[0.08em]">
          <Link href="/case-studies" className={linkStyle}>← Back to case studies</Link>
        </footer>
      </article>
    </main>
  );
}
