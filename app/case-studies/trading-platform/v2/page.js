import Link from "next/link";
import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "Trading Platform V2 — Research Agents — Tanishk Thorat",
  description: "Version 2 of my trading platform: an eight-stage research team, deterministic paper trading, a strategy lab, and an evidence-led broker migration.",
};

const decisions = [
  {
    id: "research",
    title: "Give disagreement a place in the workflow",
    paragraphs: [
      "Version 1 brought prices, news, market regimes and strategy rules into one place. Version 2 asks how an investment idea survives scrutiny before it becomes a decision.",
      "I built an eight-stage research process: Scout, Data Steward, Research Lead, Quant, Challenger, Lead response, Portfolio proposal and Risk review. Each stage has a defined responsibility and a saved handoff. The Challenger’s objection and the Lead’s response remain visible alongside the conclusion.",
      "The stages run in sequence, so later work can examine what came before it. A deterministic controller owns progress and recovery. Accepting research records my judgment; it does not place an order.",
      "This costs more coordination than asking one model for a stock recommendation. The benefit is that I can inspect where a conclusion came from, what challenged it, and which questions remain unresolved.",
    ],
  },
  {
    id: "calculations",
    title: "Make calculations and revisions inspectable",
    paragraphs: [
      "The original platform separated strategy compilation from execution. Version 2 extends that principle to research: numerical conclusions use recorded calculation inputs, formulas and outputs. Sources are fixed for a research cycle; substantive changes create a linked revision rather than rewriting the earlier case.",
      "The Microsoft pilot made this concrete. An earlier revision completed the eight-stage workflow but produced only one of four requested discounted-cash-flow sensitivities. Stage completion alone did not satisfy the research requirement.",
      "Revision 5 subsequently completed all eight stages and all four calculations, with independent arithmetic and preservation checks recorded in the release evidence. The investment disposition still remained wait/blocked, with further Risk conditions and owner review required.",
      "That was a useful result: a completed analysis could still conclude that the evidence was insufficient to act.",
    ],
  },
  {
    id: "recovery",
    title: "Recover saved work before asking the model to repeat it",
    paragraphs: [
      "Long research cases exposed practical limits: large evidence packets, truncated tool arguments and response timeouts. Increasing every budget would have made the system more expensive without resolving ambiguous outcomes.",
      "I introduced compact indexes, paged evidence reads and bounded calculation receipts while keeping the full records available. Stage and request identities tie a submission to the right case and predecessor.",
      "If a stage committed successfully but its response was lost, recovery checks the saved record before making another model call. If the outcome remains uncertain, the workflow pauses for reconciliation. Earlier attempts and linked revisions stay available for inspection.",
      "The research desk makes this usable through a case list, stage progress, calculations, disagreements and review controls in an authenticated browser interface.",
    ],
  },
  {
    id: "paper",
    title: "Separate research autonomy from execution authority",
    paragraphs: [
      "The Day Desk is a separate paper-trading service with a standing, bounded mandate. Routine paper entries and exits can run without approving each trade; changes to strategies or limits still require review.",
      "Its initial mandate uses $10,000 in fictional capital, five approved symbols, long-only whole-share positions, no leverage and at most three positions. Position size is capped at 10% of desk equity. A 2% daily-loss threshold stops new entries and initiates exits. Session rules stop entries before the close and begin flattening before the session ends.",
      "These are control rules, not guarantees about fills or maximum realized loss. Gaps, outages and execution prices can still prevent the intended result.",
      "Execution and risk checks are deterministic. Models receive no broker credentials or order-placement tools. The post-session review can propose a hypothesis for a future test, but cannot rewrite the active strategy or increase its limits.",
    ],
  },
  {
    id: "lab",
    title: "Build a strategy lab that can report an inconclusive result",
    paragraphs: [
      "Version 1 introduced a backtester. Version 2 adds a separate lab with versioned candidates, frozen datasets, saved execution assumptions and reproducible reports. The initial rule families are momentum, opening-range breakout, VWAP reclaim, moving-average crossover and mean-reversion rebound.",
      "The lab has no network access, broker credentials or order-submission capability. Candidate configuration cannot change the approved risk policy. Reports show base and stressed execution costs, data coverage and unresolved simulated positions.",
      "The first multi-session dataset contained 9,702 usable minute bars and 48 missing expected minutes. The affected experiments were marked incomplete rather than ranked as comparable performance.",
      "A September 15 after-close replay reached the close with all simulated positions flat, but four missing QQQ minutes still made the results provisional. Four trading strategies lost money; the mean-reversion candidate made no trades. No winner was selected and no strategy was promoted. This was a historical replay, not a prospective blind test.",
      "The point of preserving those outcomes is to make the next experiment better, rather than tune the story around the most attractive number.",
    ],
  },
  {
    id: "broker",
    title: "Migrate the broker one verified boundary at a time",
    paragraphs: [
      "The project is also moving toward an Interactive Brokers integration. I kept the incumbent Alpaca paper desk separate while developing the new connection, execution journal and recovery controls.",
      "The September 22 checkpoint established an authenticated read-only connection and resolved all five approved instruments. Its recorded quotes were delayed by about fifteen minutes. The observer submitted no orders and did not change the dashboard’s active provider.",
      "A successful broker connection does not establish real-time data entitlement or qualify an execution service. The candidate keeps data readers separate from the writer and retains order identities when a submission outcome is uncertain, rather than blindly resending.",
      "Broker-aware backup and restore, integrated research and learning, sustained session testing, and cutover qualification remain open in the reviewed migration records. The read-only milestone is progress toward the migration, not its completion.",
    ],
  },
];

const comparison = [
  ["Research", "Combined ticker context and model synthesis", "Saved specialist stages, challenge, response and Risk review"],
  ["Strategies", "Natural-language compilation into deterministic rules", "Separate candidate lab with frozen inputs and reproducible reports"],
  ["Operation", "Watchlist scans, dashboard and alerts", "Research case workflow plus a bounded autonomous paper desk"],
  ["Learning", "Manual backtest review and iteration", "Recorded outcomes and proposed tests; no automatic promotion"],
  ["Broker work", "Original research and paper-validation foundation", "Alpaca paper desk; IBKR read-only milestone with cutover still open"],
];
const paragraphStyle = "font-sans text-base md:text-[17px] leading-[1.75] text-[var(--fg-muted)] mb-5";
const linkStyle = "text-[var(--accent)] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";

export default function TradingPlatformV2() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-24 pb-8 font-mono text-[10px] uppercase tracking-[0.12em]">
        <Link href="/" className={linkStyle}>Tanishk Thorat</Link><span aria-hidden="true"> / </span>
        <Link href="/case-studies/trading-platform" className={linkStyle}>Trading platform</Link><span aria-hidden="true"> / </span>
        <span aria-current="page">Version 2</span>
      </nav>
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <header className="pb-12">
          <SectionEyebrow>VERSION 2 · TRADING AGENTS</SectionEyebrow>
          <h1 className="font-mono text-4xl md:text-5xl font-medium leading-[1.15] tracking-[-0.01em] text-[var(--fg)] mb-6">From a trading platform to a research team</h1>
          <p className={paragraphStyle}>A research desk that records disagreement, a paper desk that executes within fixed limits, and a strategy lab that keeps failed experiments visible.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] mb-8">IN DEVELOPMENT · PAPER TRADING · SEPTEMBER 2026</p>
          <div className="max-w-[640px]">
            <p className={paragraphStyle}>I built the first version to research stocks, express strategies in plain English and evaluate them against price data. Trading Agents builds on that work by separating research, execution and experimentation into distinct workflows.</p>
            <p className={paragraphStyle}>The central design question is how much authority each component should have. Agents can investigate and challenge an idea. Deterministic services own calculations, workflow state and execution controls. I retain the decisions that change the mandate.</p>
            <p className="font-mono text-[12px]"><Link href="/case-studies/trading-platform#version-1" className={linkStyle}>Read the Version 1 foundation →</Link></p>
          </div>
        </header>
        <section aria-labelledby="evolution-title" className="py-10 border-y border-[var(--rule)]">
          <SectionEyebrow>WHAT CHANGED</SectionEyebrow>
          <h2 id="evolution-title" className="font-mono text-2xl md:text-3xl text-[var(--fg)] mb-6">The next layer of the same project</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm leading-relaxed">
              <caption className="sr-only">Comparison of the original trading platform and Version 2</caption>
              <thead><tr className="border-b border-[var(--rule)]">{["Area", "Version 1", "Version 2"].map((label) => <th key={label} scope="col" className="p-3 font-mono font-medium text-[var(--accent)]">{label}</th>)}</tr></thead>
              <tbody>{comparison.map(([label, before, after]) => <tr key={label} className="border-b border-[var(--rule)]"><th scope="row" className="p-3 align-top font-mono font-medium text-[var(--fg)]">{label}</th><td className="p-3 align-top">{before}</td><td className="p-3 align-top">{after}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <nav aria-label="Version 2 contents" className="py-8 border-b border-[var(--rule)]">
          <ol className="grid gap-3 sm:grid-cols-2 font-mono text-[13px] leading-relaxed">
            {decisions.map((decision, index) => <li key={decision.id}><a href={`#${decision.id}`} className={linkStyle}>{String(index + 1).padStart(2, "0")} / {decision.title}</a></li>)}
          </ol>
        </nav>
        {decisions.map((decision, index) => (
          <section key={decision.id} id={decision.id} aria-labelledby={`${decision.id}-title`} className="py-12 border-b border-[var(--rule)] scroll-mt-20">
            <SectionEyebrow>DECISION {String(index + 1).padStart(2, "0")}</SectionEyebrow>
            <h2 id={`${decision.id}-title`} className="font-mono text-2xl md:text-3xl font-medium text-[var(--fg)] leading-[1.25] mb-8 max-w-[720px]">{decision.title}</h2>
            <div className="max-w-[640px]">{decision.paragraphs.map((paragraph) => <p key={paragraph} className={paragraphStyle}>{paragraph}</p>)}</div>
          </section>
        ))}
        <section aria-labelledby="failure-title" className="py-12 border-b border-[var(--rule)]">
          <SectionEyebrow>A FAILURE THAT CHANGED THE TESTS</SectionEyebrow>
          <h2 id="failure-title" className="font-mono text-2xl md:text-3xl font-medium text-[var(--fg)] mb-8">A healthy service can still do nothing</h2>
          <div className="max-w-[640px]">
            <p className={paragraphStyle}>The first partial paper session exposed a mismatch between a provider response and our test fixture. The broker returned an asset field named “class”; the entry check expected “asset_class.” All five approved symbols were eligible, yet 38 buy-signal evaluations were filtered before any intent was created.</p>
            <p className={paragraphStyle}>Those were 38 evaluations, not 38 distinct missed trades. Correcting the fixture reproduced the failure. A one-line production change fixed the field lookup, and the recorded 89-test suite passed, including invalid-metadata cases.</p>
            <p className={paragraphStyle}>The lesson was to verify the full path from real provider data to an admitted decision. Process uptime and green tests built on the wrong fixture were insufficient.</p>
          </div>
        </section>
        <section aria-labelledby="status-title" className="py-12 border-b border-[var(--rule)]">
          <SectionEyebrow>PROGRESS AND LIMITS</SectionEyebrow>
          <h2 id="status-title" className="font-mono text-2xl md:text-3xl font-medium text-[var(--fg)] mb-8">What this version establishes</h2>
          <div className="max-w-[640px]">
            <p className={paragraphStyle}>The recorded milestones establish a completed research revision, a deployed bounded paper desk, reproducible strategy experiments and an authenticated read-only IBKR connection. They do not establish profitable trading or a completed broker migration.</p>
            <p className={paragraphStyle}>The next work is qualifying complete sessions, evaluating strategies on prospective evidence, finishing broker recovery and data integration, and measuring whether the research process improves decisions. Any promotion should follow that evidence.</p>
            <p className="font-sans text-sm leading-relaxed text-[var(--fg-muted)]">Case study updated September 25, 2026, from source code and dated project records through September 23. Verification counts describe the recorded checkpoints, not a fresh rerun or a claim that services are currently running. Version 1 backtest results remain part of the earlier snapshot.</p>
          </div>
        </section>
        <footer className="pt-8 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.08em]">
          <Link href="/case-studies/trading-platform#version-1" className={linkStyle}>← Version 1</Link>
          <Link href="/case-studies" className={linkStyle}>All case studies →</Link>
        </footer>
      </article>
    </main>
  );
}
