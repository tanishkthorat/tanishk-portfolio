import Link from "next/link";
import Image from "next/image";

const versions = [
  {
    version: "Version 1",
    href: "/case-studies/trading-platform#version-1",
    status: "ARCHIVED · VERSION 1",
    description: "The original swing trading research platform: natural-language strategy compilation, deterministic execution, regime-aware risk controls, and backtesting. Preserved as the foundation for Version 2.",
    archived: true,
  },
  {
    version: "Version 2",
    href: "/case-studies/trading-platform/v2",
    status: "IN ACTIVE DEVELOPMENT",
    description: "The next chapter: an eight-stage research team, bounded paper trading, and a reproducible strategy lab. Built on the original trading platform, with decisions and failed experiments kept inspectable.",
    archived: false,
  },
];

export function TradingCaseStudyCards({ headingLevel = "h2", showImage = false }) {
  const Heading = headingLevel;
  return (
    <div className="space-y-6">
      {versions.map((item) => (
        <Link key={item.version} href={item.href} className="block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 min-w-0 p-8">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 02</p>
                <span className={`font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border ${item.archived ? "border-[var(--fg-muted)] text-[var(--fg-muted)]" : "border-[var(--accent)] text-[var(--accent)]"}`}>{item.status}</span>
              </div>
              <Heading className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Trading Platform · {item.version}</Heading>
              <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">{item.description}</p>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read {item.version} →</span>
            </div>
            {showImage && item.archived && (
              <div className="relative min-h-56 md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--rule)] bg-[var(--bg)]">
                <Image src="/screenshots/trading-strategies.png" alt="Version 1 trading platform strategies tab with backtest results" fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover object-left-top" />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
