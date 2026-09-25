import Link from "next/link";
import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "GTM Engineering — Tanishk Thorat",
  description: "Building a GTM system for a consulting practice entering US logistics: market selection, account research, buyer targeting, and the first fifteen outbound emails.",
};

const sections = [
  {
    id: "market",
    eyebrow: "01 · MARKET AND OFFER",
    title: "Choosing a market and an initial offer",
    paragraphs: [
      "The first hypothesis was specific: an after-hours booking recovery pilot for small dental groups. That gave research a concrete audience, qualification criteria, and a service to test.",
      "Reviewing actual practices challenged the targeting assumptions. Multiple locations did not necessarily establish shared operations. A single location could contain a substantial clinician group. Public booking features revealed less about internal processes than we initially assumed.",
      "As the service broadened toward custom software and integrations, the commercial focus moved to US third-party logistics companies. Customer onboarding, fulfillment instructions, returns, and billing offered concrete workflows to investigate.",
      "That was a working market hypothesis. We had not established that 3PLs would convert better than healthcare or other sectors.",
    ],
  },
  {
    id: "qualification",
    eyebrow: "02 · ACCOUNT SELECTION",
    title: "Turning a broad market into account-selection decisions",
    paragraphs: [
      "“US 3PL” was a starting category. Account research needed to establish a relevant business, an identifiable leader, and a plausible connection between its operations and something our team could deliver.",
      "I separated three questions:",
    ],
    bullets: [
      ["Company fit", "Is this the right organization, operating in the market we intend to serve?"],
      ["Commercial relevance", "Is there a source-backed reason to explore a particular workflow?"],
      ["Contact readiness", "Have we identified an appropriate person and resolved the company relationship?"],
    ],
    after: [
      "An unresolved identity could hold an account even when its business looked promising. An inaccessible website meant missing evidence, not an unsuitable company. A returned email address did not establish mailbox deliverability.",
      "Those distinctions prevented list size from becoming a substitute for qualification.",
    ],
  },
  {
    id: "offer",
    eyebrow: "03 · COMMERCIAL RELEVANCE",
    title: "Defining an offer around the customer’s existing operation",
    paragraphs: [
      "Research showed that many prospects already advertised warehouse systems, portals, integrations, and automation. A generic automation pitch would overlook capabilities they already had.",
      "Two service directions emerged: customer software integrations and customer-specific operations workflows.",
      "The questions became narrower. How does an unusual customer order system connect to the warehouse? What happens when packing instructions change? How does approved extra work reach billing?",
      "These were discovery angles, not diagnosed failures. The initial conversation would establish whether a meaningful problem existed, what the company already used, and whether custom work was appropriate.",
      "The commercial path was an initial fit conversation, optional paid discovery, and a scope and price based on the engagement. The early fixed-price dental pilot could not sensibly price every custom integration.",
      "Differentiation remains a hypothesis to test: whether the team can solve a specific customer requirement that existing products or internal capacity do not adequately cover.",
    ],
  },
  {
    id: "workflow",
    eyebrow: "04 · SYSTEM DESIGN",
    title: "Building the workflow",
    paragraphs: [
      "I used Clay for contact enrichment and Instantly for sending. The custom work coordinated evidence, decisions, approvals, and handoffs between those tools.",
      "Research and writing ran as bounded specialist tasks within one shared business context. Structured records preserved progress and decisions between runs. A dashboard surfaced unresolved holds, drafts, spending reviews, and next actions.",
      "Public research could proceed within defined limits. Paid requests and sending required review of the exact batch. Saved attempt records helped prevent interrupted work from silently repeating a paid operation.",
    ],
  },
  {
    id: "targeting",
    eyebrow: "05 · A DECISION IN PRACTICE",
    title: "A targeting decision that changed the process",
    paragraphs: [
      "Distribution Technology exposed a weakness in the original contact-search logic.",
      "A company-only search returned 28 profiles. Seniority filtering reduced that to four. Adding the selected title keywords eliminated the remaining results.",
      "The search was excluding possible buyers before we had assessed them.",
      "I changed the rule to start with the highest-ranking evidenced leader. For this account, that meant President and CEO Tom Miralia, with other leaders retained as alternatives. A decision-maker did not need “operations” in their title to deserve consideration.",
      "This changed both the targeting logic and the enrichment sequence: establish the person and company relationship first, then spend on contact data.",
      "Across a later batch, 77 email lookups returned 74 addresses. That demonstrated contact-data retrieval; it did not establish 74 deliverable recipients.",
    ],
  },
  {
    id: "personalization",
    eyebrow: "06 · EVIDENCE TO OUTREACH",
    title: "Keeping personalization grounded",
    paragraphs: [
      "The Company Briefing specialist handed the writer source-backed facts, recipient relevance, one proposed angle, unknowns, and claims to avoid. Each brief was tied to its company, recipient, and run.",
      "This prevented a common failure: turning “the company offers this service” into “the company struggles with this process.”",
      "Drafts went through factual and editorial review. Approved messages were saved as exact versions, then checked against campaign records. All fifteen confirmed sends were reconciled to their intended recipient, sender, subject, and body.",
      "That makes later feedback attributable to what actually went out.",
    ],
  },
  {
    id: "correction",
    eyebrow: "07 · COURSE CORRECTION",
    title: "Correcting the build sequence",
    paragraphs: [
      "At one point, the project had hundreds of passing tests and substantial infrastructure, but no demonstrated sales interaction.",
      "I redirected effort toward completing a practical commercial cycle: choose an account, identify a buyer, prepare a relevant message, review it, and send it.",
      "The same lesson returned after launch. New drafts were technically grounded but still failed my editorial review. Changing the writing model did not resolve the offer or make the transition from a customer situation to our service feel natural.",
      "I held the next batch and returned to the commercial question: why should this person care enough to respond?",
    ],
  },
  {
    id: "progress",
    eyebrow: "08 · OBSERVED PROGRESS",
    title: "What is demonstrated",
    paragraphs: [
      "As of September 25, the project had produced a 94-company leadership shortlist, completed a batch returning 74 work-email addresses, and confirmed fifteen personalized sends across three campaigns.",
      "These are separate operational milestones, not a single conversion funnel.",
      "The recurring research-to-draft workflow is connected and scheduled. Its first complete production run remains unobserved. The last saved campaign check recorded no inbound messages; later buyer responses and revenue are not established in this case study.",
    ],
  },
  {
    id: "next",
    eyebrow: "09 · PROPOSED NEXT EXPERIMENT",
    title: "The next experiment",
    paragraphs: [
      "The next proposed test is a small cohort built around one service direction and a consistent account profile.",
      "Before launch, I would define the qualification rules, offer, call to action, and observation window. I would keep those reasonably consistent so that every disappointing result did not trigger simultaneous changes to targeting, copy, and the service itself.",
      "The decision rules would distinguish different failures:",
    ],
    bullets: [
      ["Delivery problems", "Check contact data and sending before judging the offer."],
      ["Replies identify the wrong owner", "Change the targeting."],
      ["Conversations reveal little urgency", "Revisit the problem or audience."],
      ["Repeated, concrete needs", "Move into deeper discovery and a scoped proposal."],
    ],
    after: [
      "Alongside replies and conversations, I would track founder review time, cost per usable account, and how much rewriting each draft requires.",
      "The next milestone is evidence that this process finds relevant buyers, starts useful conversations, and fits the time available to operate it.",
    ],
  },
];

const stages = [
  "Account discovery", "Suitability screen", "Company evidence", "Leadership selection",
  "Contact enrichment", "Commercial brief", "Draft", "Founder review", "Campaign execution", "Outcome review",
];

const linkStyle = "text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";
const paragraphStyle = "font-sans text-base md:text-[17px] leading-[1.75] text-[var(--fg-muted)] mb-5";

export default function GTMEngineering() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-24 pb-8 font-mono text-[10px] tracking-[0.14em] uppercase">
        <Link href="/" className={linkStyle}>Tanishk Thorat</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/case-studies" className={linkStyle}>Case studies</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-[var(--accent)]">GTM engineering</span>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        <header className="pb-12">
          <SectionEyebrow>INDEPENDENT VENTURE · GTM STRATEGY AND ENGINEERING</SectionEyebrow>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Engineering a GTM system from zero</h1>
          <p className={paragraphStyle}>From choosing a market to researching accounts, finding buyers, and sending the first fifteen emails.</p>
          <p className="font-mono text-[11px] text-[var(--accent)] mb-10">IN PROGRESS · <time dateTime="2026-09-25">SEPTEMBER 25, 2026</time></p>
          <div className="max-w-[640px]">
            <p className={paragraphStyle}>I’m building an outbound system for a consulting practice offering custom software, integrations, and operations automation. I lead prospecting and business development; a delivery partner handles contracting and implementation.</p>
            <p className={paragraphStyle}>The operating targets were roughly ten founder hours a week and a $500 monthly tools budget. The goal was to create a repeatable way to decide which companies to approach, what might matter to them, and whether a conversation was worth pursuing.</p>
            <p className={paragraphStyle}>The system has now supported fifteen individually prepared outbound emails. Buyer validation and revenue remain the next tests.</p>
          </div>
        </header>

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
                <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">From research to outcome review</figcaption>
                <ol className="grid gap-3 sm:grid-cols-2">
                  {stages.map((stage, index) => (
                    <li key={stage} className="flex items-center gap-3 border border-[var(--rule)] bg-[var(--bg)] p-3 font-mono text-sm text-[var(--fg)]">
                      <span aria-hidden="true" className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>{stage}
                    </li>
                  ))}
                </ol>
                <p className="font-sans text-sm leading-relaxed text-[var(--fg-muted)] mt-5">Clay: contact enrichment. Instantly: campaign execution. Founder review: paid batches and exact outbound copy. Outcome interpretation remains supervised.</p>
              </figure>
            )}
            <div className="max-w-[640px]">
              {section.paragraphs.map((paragraph) => <p key={paragraph} className={paragraphStyle}>{paragraph}</p>)}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-4 mb-6 font-sans text-base md:text-[17px] leading-[1.75]">
                  {section.bullets.map(([label, text]) => <li key={label}><strong className="font-medium text-[var(--fg)]">{label}: </strong>{text}</li>)}
                </ul>
              )}
              {section.after?.map((paragraph) => <p key={paragraph} className={paragraphStyle}>{paragraph}</p>)}
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
