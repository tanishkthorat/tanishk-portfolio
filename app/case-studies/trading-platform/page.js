import { SectionEyebrow } from "@/app/_components/SectionEyebrow";

export const metadata = {
  title: "Trading Platform — Tanishk Thorat",
  description: "A self-hosted swing trading platform with natural-language strategy compilation, regime-aware risk controls, deterministic execution, and Sentinel-powered news sentiment.",
};

const TABLE_CELL = "py-3 font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]";
const TABLE_HEADER = "font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]";
const TABLE_LABEL = "font-mono text-[13px] text-[var(--fg)]";

function TradingArchitectureDiagram() {
  return (
    <figure className="my-10 border border-[var(--rule)] bg-[var(--bg-raised)] p-6">
      {/* Strategy Compilation flow */}
      <div className="mb-10">
        <figcaption className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-4">STRATEGY COMPILATION · ONE-TIME</figcaption>
        <div className="flex flex-wrap items-center gap-2 text-[var(--accent-dim)]">
          <div className="px-3 py-2 bg-[var(--bg)] border border-[var(--rule)]">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">User strategy</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">natural language</p>
          </div>
          <span className="text-[var(--accent-dim)]">→</span>
          <div className="px-3 py-2 bg-[var(--accent)] border border-[var(--accent)]">
            <p className="font-mono text-sm font-medium text-[var(--bg)]">Brain</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bg)] opacity-80">Qwen3.5-27B</p>
          </div>
          <span className="text-[var(--accent-dim)]">→</span>
          <div className="px-3 py-2 bg-[var(--bg)] border border-[var(--rule)]">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Parse → JSON</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">+ confidence</p>
          </div>
          <span className="text-[var(--accent-dim)]">→</span>
          <div className="px-3 py-2 bg-[var(--bg)] border border-[var(--rule)]">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">User confirms</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">/ refines</p>
          </div>
          <span className="text-[var(--accent-dim)]">→</span>
          <div className="px-3 py-2 bg-[var(--bg)] border border-[var(--rule)]">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">SQLite</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">strategy store</p>
          </div>
        </div>
      </div>

      {/* Scan Cycle flow */}
      <div className="text-[var(--accent-dim)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-4">SCAN CYCLE · EVERY 15 MIN</p>

        {/* Stage 1: Regime (single centered box) */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--fg)]">Regime detection</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">detect_regime() · 5 states</p>
          </div>
        </div>

        {/* Connector: 1 → 4 fan-out */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5">
          <line x1="50" y1="0" x2="50" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="12.5" y1="10" x2="87.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="12.5" y1="10" x2="12.5" y2="20" stroke="currentColor" strokeWidth="0.4" />
          <line x1="37.5" y1="10" x2="37.5" y2="20" stroke="currentColor" strokeWidth="0.4" />
          <line x1="62.5" y1="10" x2="62.5" y2="20" stroke="currentColor" strokeWidth="0.4" />
          <line x1="87.5" y1="10" x2="87.5" y2="20" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 2: 4 parallel signal columns (news column has Sentinel below) */}
        <div className="flex items-stretch">
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">Strategy eval</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">evaluate_condition() + regime adj</p>
            </div>
            <div className="flex-1 w-px bg-[var(--accent-dim)]"></div>
          </div>
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">Options flow</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">vol × OI scan</p>
            </div>
            <div className="flex-1 w-px bg-[var(--accent-dim)]"></div>
          </div>
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">FRED macro</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">indicators pipeline</p>
            </div>
            <div className="flex-1 w-px bg-[var(--accent-dim)]"></div>
          </div>
          <div className="flex-1 px-1.5 flex flex-col items-center">
            <div className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--rule)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--fg)]">News feeds</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">Finnhub · yfinance</p>
            </div>
            <div className="w-px h-4 bg-[var(--accent-dim)]"></div>
            <div className="w-full px-3 py-2 bg-[var(--accent)] border border-[var(--accent)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--bg)]">Sentinel</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bg)] opacity-80">Qwen3.5-4B · sentiment + class</p>
            </div>
          </div>
        </div>

        {/* Connector: 4 → 1 fan-in */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5">
          <line x1="12.5" y1="0" x2="12.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="37.5" y1="0" x2="37.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="62.5" y1="0" x2="62.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="87.5" y1="0" x2="87.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="12.5" y1="10" x2="87.5" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 3: Brain synthesis */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-[var(--accent)] border border-[var(--accent)] text-center">
            <p className="font-mono text-sm font-medium text-[var(--bg)]">Brain · analysis pass</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--bg)] opacity-80">context: regime + flow + FRED + sentiment</p>
          </div>
        </div>

        {/* Connector: 1 → 2 fan-out */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5">
          <line x1="50" y1="0" x2="50" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="25" y1="10" x2="75" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="25" y1="10" x2="25" y2="20" stroke="currentColor" strokeWidth="0.4" />
          <line x1="75" y1="10" x2="75" y2="20" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Stage 4: Outputs */}
        <div className="flex">
          <div className="flex-1 px-1.5">
            <div className="px-3 py-2 border border-[var(--accent)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--accent)]">Dashboard</p>
            </div>
          </div>
          <div className="flex-1 px-1.5">
            <div className="px-3 py-2 border border-[var(--accent)] text-center">
              <p className="font-mono text-sm font-medium text-[var(--accent)]">Telegram alerts</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function TradingPlatform() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <a href="/" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">TANISHK THORAT</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <a href="/case-studies" className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">CASE STUDIES</a>
          <span className="text-[var(--fg-dim)]"> / </span>
          <span className="text-[var(--accent)]">TRADING PLATFORM</span>
        </p>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-dim)]">ONE USER (ME) · NO LIVE TRADING</span>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Trading Platform</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px] mb-8">
          A self-hosted swing trading research system built on top of the AI Research Platform. Two motivations: an active project I work on daily, and a domain where LLM mistakes are auditable because every claim is a number that can be checked.
        </p>
        <div className="mt-6">
          <a href="/prds/trading-platform" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2">Read the full PRD →</a>
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
                <td className={TABLE_CELL}>Shares Brain (27B) and FastAPI server with the AI Research Platform. Sentinel (4B) handles news classification here.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Data sources</td>
                <td className={TABLE_CELL}>6 external feeds: yfinance (prices), Finnhub (news, earnings), SEC EDGAR (insider filings), FRED (macro), IMF (global indicators), RSS (Reuters, CNBC, MarketWatch)</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Strategies</td>
                <td className={TABLE_CELL}>3 built-in (Earnings Momentum, RS Pullback, Flow + Catalyst) plus user-defined strategies via natural language</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Backtester</td>
                <td className={TABLE_CELL}>Walk-forward engine with regime-aware position sizing, no look-ahead bias, entry at next bar's open</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Dashboard</td>
                <td className={TABLE_CELL}>8-tab web UI: Dashboard, Watchlist, Portfolio, Scanner, Strategies, Earnings, News, Journal</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>API surface</td>
                <td className={TABLE_CELL}>40+ endpoints covering scanning, analysis, portfolio, news, macro, and chat</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Background monitor</td>
                <td className={TABLE_CELL}>Runs every 15 minutes during market hours with premarket and post-close phases</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>In use since</td>
                <td className={TABLE_CELL}>February 2026, 33-ticker watchlist scanned every 15 minutes plus additional research</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>PROBLEM</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Why this exists</h2>
        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            This started as "let me try using the research platform to analyze a stock." The hallucination problem that triggered the AI Research Platform was on a ticker query. Stocks were the natural test domain because every number the model produces can be checked against a source. If the model says a stock is up 12% this quarter, I can verify that in seconds. If it invents an earnings date, I catch it immediately. No other domain I work in offers that kind of immediate verification.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            It grew into its own project because I wanted everything in one place: research a ticker, express a trading strategy in plain English, run it against historical data, and iterate. The existing tools (TradingView, Finviz, Stock Rover) are good at individual pieces. None of them let me describe a strategy in natural language and have it compiled into something that actually executes deterministically against price data.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The platform shares its FastAPI infrastructure, ChromaDB instance, and Brain LLM with the AI Research Platform. It is a domain-specific agent built on shared infrastructure, not a standalone application.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>KEY DECISIONS</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">Six decisions that shaped the system</h2>

        <div className="space-y-12 max-w-[640px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 01</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">An active project and a falsifiability harness</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              This platform is not a toy project used to prove a point. It is an active research tool I use daily. But the reason it started with stock analysis, rather than any other domain, is that financial data is the best falsifiability harness for an LLM: every claim is a number, every number has a source, and a wrong number is immediately visible. Both motivations are real, and the combination explains why decisions throughout favor inspectability over convenience.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 02</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Rules-based regime detection today, ML next</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The system classifies the current market into one of five states: BULL_LOW_VOL, BULL_NORMAL, CHOPPY, BEAR, HIGH_VOL. The classifier is a pure-Python decision tree over SPY moving averages and VIX level, with HIGH_VOL overriding everything when VIX hits 30 or above. Five states was the starting point, not a final taxonomy. The current implementation is intentionally simple, but not because rules-based is the right end state. Regime detection has to actually gate trades and shape risk before the classifier is worth optimizing. If I had built an ML classifier first, I would have spent weeks tuning a model with no downstream consequence. Shipping the rules version first means every later improvement to the classifier has a measurable effect on real strategy behavior. Next: ML-based classification, likely HMM or clustering on a wider feature set including yield curve, sector rotation, and breadth indicators.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 03</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Regimes as risk controls, not labels</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              A regime detector that paints a label on a dashboard is decoration. In this system, regimes are the gate on every trade. Position-size multiplier drops to 0.5 in BEAR and HIGH_VOL, 0.75 in CHOPPY. Stop-loss widening scales with regime volatility. Each strategy has an allowlist of regimes in which it is permitted to execute: Strategy 2 (momentum) only fires in bull regimes, Strategies 1 and 3 run everywhere. The decision was that detection without consequence is a dashboard widget. If the regime classifier exists at all, every downstream component has to read from it. The cost is that adding a new strategy means thinking about which regimes it belongs in, not just writing entry logic.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 04</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Natural-language strategy compiler with deterministic execution</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              This is the headline feature. A user describes a trading strategy in plain English. Brain (Qwen3.5-27B) parses it into structured JSON containing entry conditions, exit conditions, and position rules. The system returns a parsing-confidence score and a human-readable interpretation for confirmation. Iterative refinement is supported through a feedback loop with Brain. Once confirmed, a pure-Python condition evaluator executes the strategy against price data forever after, with no LLM in the execution path.
            </p>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The alternative on one side was a manual form: dropdowns for indicators, number fields for thresholds. Faster to ship, impossible to use, because real trading strategies live in prose. The alternative on the other side was letting the LLM execute the strategy directly each cycle. Fewer moving parts, but non-deterministic, slow, and the entire reason this domain was chosen is that execution needs to be auditable. Brain compiles once into something readable and debuggable. The compiled form runs deterministically.
            </p>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              System strategies (the built-in three) are write-protected; only their backtest results can be updated. User-ingested strategies are fully editable. This separation prevents accidental edits to the strategies that the regime gating logic depends on.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 05</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Sentinel does sentiment, Brain does synthesis</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              This is where the dual-GPU architecture was validated. Sentinel (Qwen3.5-4B on the RTX 2060) classifies news headlines into a nine-category taxonomy and scores sentiment from -1.0 to 1.0 in batched calls with 4-hour caching. Brain (Qwen3.5-27B on the 5070 Ti) handles strategy compilation, trade analysis synthesis, and enriched-context chat. The split works because classification is a fast structured task that a 4B model handles well, while synthesis over mixed data sources (regime, technicals, sentiment, flow, macro) needs the larger model. This validated the dual-GPU design before applying the same split to the AI Research Platform's pipeline.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] mb-2">DECISION 06</p>
            <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-4 mb-4">Per-regime backtesting as a design rule</h3>
            <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
              The backtesting engine is built. Walk-forward simulation, regime-aware sizing, partial exits, stop/target evaluation, monthly returns. What is locked as a design rule is how the backtester is used: backtest each strategy within each regime separately, not across all market conditions in aggregate. Aggregate backtests over the last decade are misleading because the period was net bullish. Any long-biased strategy gets a free win from regime distribution, not from edge. Per-regime backtesting forces the question of whether the strategy actually has positive expectancy in each market state, which is the only question worth answering if regimes are going to gate execution (Decision 3).
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>ARCHITECTURE</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">How the system runs</h2>

        <TradingArchitectureDiagram />

        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The platform shares its Brain LLM, FastAPI server, and ChromaDB instance with the AI Research Platform. The scan cycle runs deterministically: regime detection gates which strategies fire, the condition evaluator checks parsed strategies against price data, and regime adjustments modify position size and stop-loss levels. Options flow detection scans watchlist tickers for unusual activity using volume-to-open-interest ratios and estimated premium thresholds.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            Sentinel (Qwen3.5-4B on the RTX 2060) is actively used here, not idle. It classifies news headlines from Finnhub and yfinance into nine categories (EARNINGS, MACRO, POLITICAL, GLOBAL, COMMODITIES, SECTOR, COMPANY, CRYPTO, GENERAL) and scores sentiment (BULLISH/BEARISH/NEUTRAL with a -1.0 to 1.0 numerical score) in batched LLM calls with 4-hour caching. Political headlines get a separate Sentinel scoring pass for macro impact analysis. This is where the dual-GPU architecture was validated first: Brain handles strategy compilation and synthesis, Sentinel handles fast classification. The same split is planned for the research pipeline but shipped here first because sentiment classification is a natural Sentinel-sized task.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The system also monitors SEC EDGAR for insider activity. It parses Form 4 filings to extract insider transactions (purchases, sales, grants, exercises), then groups purchases by ticker within a 5-day window to detect clusters. A cluster of 3+ insiders buying is flagged as STRONG; 2 insiders as MODERATE. 8-K filings are parsed for item codes (material agreements, earnings, control changes) to catch significant corporate events.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            All market data (regime state, indicators, options flow, FRED macro, Sentinel sentiment scores) is injected into Brain's context for the analysis pass. Brain never recalls a number from training.
          </p>
        </div>
      </section>

      {/* Failure Handling */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>FAILURE HANDLING</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">When things break</h2>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5 max-w-[640px]">
          The system is designed so that each component fails independently:
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
                <td className={TABLE_CELL}>Trading chat returns an error. Scanner continues running, alerts still fire, but no LLM analysis.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Sentinel (4B)</td>
                <td className={TABLE_CELL}>News classification falls back to keyword matching plus FinBERT for sentiment scoring.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>Finnhub</td>
                <td className={TABLE_CELL}>Earnings and news endpoints return partial data. Scanner continues with price data only.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>yfinance</td>
                <td className={TABLE_CELL}>Scanner cannot run (no price data). Monitor logs an error but doesn't crash.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>SEC EDGAR</td>
                <td className={TABLE_CELL}>Insider cluster detection returns empty. Rest of the system unaffected.</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL} whitespace-nowrap align-top`}>FRED</td>
                <td className={TABLE_CELL}>Macro dashboard shows cached values (up to 4 hours stale).</td>
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
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-6">Backtest results</h2>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5 max-w-[640px]">
          The backtester has been run across all three system strategies on a 33-ticker watchlist over a 2-year period. Results for the RS Pullback strategy:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th className={`py-3 pr-4 ${TABLE_HEADER}`}>Metric</th>
                <th className={`py-3 ${TABLE_HEADER}`}>Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--rule)]">
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Total trades</td>
                <td className={TABLE_CELL}>50</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Win rate</td>
                <td className={TABLE_CELL}>46%</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Profit factor</td>
                <td className={TABLE_CELL}>1.36x</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Total return</td>
                <td className={TABLE_CELL}>27.45%</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Max drawdown</td>
                <td className={TABLE_CELL}>23.34%</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Sharpe ratio</td>
                <td className={TABLE_CELL}>1.89</td>
              </tr>
              <tr>
                <td className={`py-3 pr-4 ${TABLE_LABEL}`}>Avg hold time</td>
                <td className={TABLE_CELL}>14.6 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5 max-w-[640px]">
          The other two system strategies (Earnings Momentum, Flow + Catalyst) have also been backtested and are tagged in the dashboard.
        </p>

        <h3 className="font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-10 mb-4">Live monitoring</h3>
        <div className="max-w-[640px]">
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            The background monitor has been running since February 2026, scanning the watchlist every 15 minutes during market hours. Premarket scans check for overnight earnings results; post-close scans generate daily summaries.
          </p>
          <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] mb-5">
            Currently running paper trades to validate the system before live execution.
          </p>
        </div>
      </section>

      {/* What's Next */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--rule)]">
        <SectionEyebrow>WHAT'S NEXT</SectionEyebrow>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mt-6 mb-8">In order</h2>

        <div className="space-y-6 max-w-[640px]">
          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">1.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">Per-regime backtest runner.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">A scheduled batch that runs walk-forward backtests across the full strategy library and generates a per-regime performance matrix. Right now backtests are run manually; this automates the process and makes regime-specific edge easier to track.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">2.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">ML-based regime classification.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">The current rules-based classifier works, but a model trained on yield curve, sector rotation, and breadth indicators would catch regime shifts earlier. This upgrade happens once the rules-based version's error rate justifies the work.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-mono text-[var(--accent-dim)]">3.</span>
            <div>
              <p className="font-mono text-base font-medium text-[var(--fg)] mb-1">Sentinel routing for the AI Research Platform.</p>
              <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)]">The dual-GPU split was validated here first (Sentinel does classification, Brain does synthesis). Porting the same pattern to the research pipeline is next.</p>
            </div>
          </div>
        </div>
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
