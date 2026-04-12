export const metadata = {
  title: "Trading Platform PRD — Tanishk Thorat",
  description: "Product requirements document for a self-hosted swing trading platform with natural-language strategy compilation, walk-forward backtesting, regime-aware risk controls, and Sentinel-powered news classification.",
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

export default function TradingPlatformPRD() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900 transition">CASE STUDIES</a>
          {" / "}
          <a href="/case-studies/trading-platform" className="hover:text-gray-900 transition">TRADING PLATFORM</a>
          {" / "}
          <span>PRD</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Trading Platform</h1>
        <p className="text-lg text-gray-500 mb-6">Product Requirements Document</p>

        <table className="text-sm border border-gray-200 rounded">
          <tbody>
            <tr className="border-b border-gray-200"><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Author</td><td className="px-4 py-2">Tanishk Thorat</td></tr>
            <tr className="border-b border-gray-200"><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Status</td><td className="px-4 py-2">In active development. Single-user deployment. No live trading.</td></tr>
            <tr><td className="px-4 py-2 font-mono text-gray-500 bg-gray-50 border-r border-gray-200">Last updated</td><td className="px-4 py-2">April 2026</td></tr>
          </tbody>
        </table>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 flex gap-12">

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

        <article className="flex-1 min-w-0 space-y-16 text-gray-800 leading-relaxed">

          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
            <div className="space-y-4 mb-6">
              <p>The Trading Platform is a self-hosted swing trading research and analysis system that runs on local hardware and shares infrastructure with the AI Research Platform. It combines rules-based market regime detection, a natural-language strategy compiler with deterministic execution, a walk-forward backtesting engine, unusual options flow detection, SEC EDGAR filing and insider transaction tracking, Sentinel-powered news classification and sentiment scoring, FRED and IMF macroeconomic data pipelines, a SQLite-backed portfolio tracker with live P&L, a multi-source news aggregator, and a trade journal with performance statistics. The platform exists for two reasons: as an active personal research tool used daily, and as a domain in which language model outputs are auditable because every claim is a number that can be verified against a source.</p>
              <p>This is also where the dual-GPU architecture was validated first. Brain (Qwen3.5-27B on the RTX 5070 Ti) handles strategy compilation, trade analysis synthesis, and enriched-context chat. Sentinel (Qwen3.5-4B on the RTX 2060) handles fast classification tasks: news categorization, sentiment scoring, and political impact scoring.</p>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-2">
              <img src="/screenshots/trading-dashboard.png" alt="Trading platform dashboard with macro overview, insider clusters, options flow, IMF data, and footer showing Brain and Sentinel both connected" className="w-full block" />
            </div>
            <p className="text-sm text-gray-500">Main dashboard. Footer status line shows both LLM tiers connected: Brain on port 11434, Sentinel on 11435.</p>
          </section>

          <section id="goals">
            <h2 className="text-2xl font-bold mb-4">2. Goals and non-goals</h2>
            <p className="font-semibold mb-2">Goals</p>
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>Single workspace for stock research, strategy iteration, position tracking, and LLM-assisted analysis on local hardware</li>
              <li>Strategies expressed in natural language, confirmed by the user, executed deterministically</li>
              <li>Regime-aware risk controls so strategies behave differently across market conditions</li>
              <li>All classification and sentiment work on a separate GPU tier so it never blocks synthesis</li>
              <li>Inject real market data into every LLM prompt; the model never recalls a number from training</li>
              <li>Clear separation between probabilistic components (LLM parsing, sentiment, synthesis) and deterministic components (regime detection, condition evaluation, backtesting, position sizing)</li>
            </ul>
            <p className="font-semibold mb-2">Non-goals</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-user access, broker integration as a v1 feature, automated order execution</li>
              <li>Replacing charting tools such as TradingView or Finviz</li>
              <li>Polished consumer interface</li>
              <li>Machine-learning regime classification as v1</li>
              <li>Model fine-tuning or training</li>
            </ul>
          </section>

          <section id="personas">
            <h2 className="text-2xl font-bold mb-4">3. User personas</h2>
            <p><span className="font-semibold">Primary persona: the operator-trader.</span> A single user with technical proficiency who treats the platform as both a research tool and an engineering project. Comfortable with command-line operation and willing to validate model outputs against source data.</p>
          </section>

          <section id="metrics">
            <h2 className="text-2xl font-bold mb-4">4. Success metrics</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50 text-gray-600">
                  <tr><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Metric</th><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Target</th><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Measurement</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">NL strategy parse confidence</td><td className="px-4 py-2">90% on first attempt</td><td className="px-4 py-2">parsing_confidence field</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Hallucinated numerical claims</td><td className="px-4 py-2">Zero</td><td className="px-4 py-2">Manual review against context</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Scan cycle latency (15 tickers)</td><td className="px-4 py-2">Under 60 seconds</td><td className="px-4 py-2">Scan logs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Regime detection latency</td><td className="px-4 py-2">Under 5 seconds</td><td className="px-4 py-2">Scan logs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">News classification (batch of 20)</td><td className="px-4 py-2">Under 30 seconds</td><td className="px-4 py-2">Sentinel timing logs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Sentiment cache hit rate</td><td className="px-4 py-2">Above 60% within 30 days</td><td className="px-4 py-2">Cache logs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2">Strategy evaluation determinism</td><td className="px-4 py-2">100% reproducible</td><td className="px-4 py-2">Repeated-run testing</td></tr>
                  <tr><td className="px-4 py-2">Daily monitor scan completion</td><td className="px-4 py-2">Above 95%</td><td className="px-4 py-2">Monitor logs</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="functional">
            <h2 className="text-2xl font-bold mb-4">5. Functional requirements</h2>
            <div className="space-y-4">
              <p><span className="font-mono text-sm text-gray-500">FR-1: Market regime detection.</span> Classify the current market into one of five states (BULL_LOW_VOL, BULL_NORMAL, CHOPPY, BEAR, HIGH_VOL) using a rules-based decision tree over SPY moving averages and VIX. HIGH_VOL overrides all other states.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-2: Regime-based strategy gating.</span> Maintain an allowlist mapping strategies to permitted regimes; block execution in disallowed regimes.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-3: Regime-based risk adjustment.</span> Return a position-size multiplier and stop-widening factor per regime, applied to all strategy execution and backtesting.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-4: Natural-language strategy compilation.</span> Accept a strategy in natural language, call Brain to produce structured JSON (entry, exit, position rules), return parsing-confidence and human-readable interpretation for user confirmation.</p>

              <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
                <img src="/screenshots/trading-strategies.png" alt="Strategies tab showing Create Strategy form, three system strategies and one user-created strategy, backtest results table with equity curve" className="w-full block" />
              </div>
              <p className="text-sm text-gray-500 -mt-2">Strategies tab. Top: natural-language parser ("From URL", "From Text", "Manual" tabs, "Parse with Brain" button). Middle: three system strategies (Earnings Momentum, RS Pullback, Flow + Catalyst) plus one user-created (SMC Order Block Reversal). Bottom: backtest equity curve and trade log for a 50-trade RS Pullback run.</p>

              <p><span className="font-mono text-sm text-gray-500">FR-5: Strategy refinement.</span> Accept user feedback on a parsed strategy and re-prompt Brain to produce an updated definition.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-6: Deterministic strategy execution.</span> Evaluate parsed strategies using a pure-Python condition evaluator with no LLM in the execution path.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-7: System and user strategy separation.</span> Built-in system strategies are write-protected; only backtest results may update. User strategies are fully editable.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-8: Built-in scanner strategies.</span> Ship three named strategies: Earnings Momentum, Relative Strength Pullback, Flow + Catalyst.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-9: Unusual options flow detection.</span> Scan watchlist tickers for unusual options activity using volume-to-open-interest ratios, estimated premium thresholds, and signal strength classification (HIGH, MEDIUM, LOW).</p>
              <p><span className="font-mono text-sm text-gray-500">FR-10: Walk-forward backtesting engine.</span> Run parsed strategies against historical price data with regime-aware sizing, partial exits, stop/target evaluation, and monthly returns. Entry executes at the next bar's open. Returns a full trade log, summary stats, and equity curve.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-11: SEC EDGAR integration.</span> Parse Form 4 filings for insider transactions, detect 8-K filings with item-number extraction, identify insider buying clusters (3+ unique insiders buying the same ticker within a window).</p>

              <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
                <img src="/screenshots/trading-options-insiders.png" alt="Insider Buying Clusters showing CRM moderate cluster, KRRO and SOFI strong clusters; Options Flow showing 43 high-conviction signals" className="w-full block" />
              </div>
              <p className="text-sm text-gray-500 -mt-2">Insider Buying Clusters (FR-11): real-time SEC Form 4 parsing identifies CRM as MODERATE (2 insiders), KRRO and SOFI as STRONG (10 and 3 insiders). Options Flow (FR-9): 43 HIGH, 28 MEDIUM, 5 LOW signals across the watchlist.</p>

              <p><span className="font-mono text-sm text-gray-500">FR-12: News sentiment classification (Sentinel).</span> Classify news headlines into one of nine categories (EARNINGS, MACRO, POLITICAL, GLOBAL, COMMODITIES, SECTOR, COMPANY, CRYPTO, GENERAL), score sentiment (BULLISH/BEARISH/NEUTRAL with -1.0 to 1.0 score), assign urgency (BREAKING/HIGH/NORMAL/LOW). Batched calls with 4-hour per-headline cache.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-13: Political impact scoring (Sentinel).</span> Identify politically relevant headlines via keyword matching, score sentiment and magnitude through Sentinel, map affected sectors and watchlist tickers. Graceful fallback to keyword-only when Sentinel unavailable.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-14: Multi-source news aggregator.</span> Pull news from Finnhub general, Finnhub company-specific, yfinance, and multiple RSS feeds. Deduplicate across sources. Classify through Sentinel with keyword-classifier fallback.</p>

              <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
                <img src="/screenshots/trading-news-feed.png" alt="News feed showing 87 articles from 10 sources, category and ticker tags on each headline" className="w-full block" />
              </div>
              <p className="text-sm text-gray-500 -mt-2">Aggregated news feed with category tags (FR-14). Top right shows source count: 87 articles from 10 sources.</p>

              <p><span className="font-mono text-sm text-gray-500">FR-15: FRED macroeconomic pipeline.</span> Ingest CPI, core CPI, PCE, unemployment, NFP, initial claims, GDP growth, fed funds rate, and yield curve from FRED. Generate macro summary with plain-English interpretation.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-16: IMF data pipeline.</span> Pull global economic indicators across G20 economies via the IMF SDMX API with rate limiting and configurable country selection.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-17: LLM trade analyst.</span> On demand, run Brain against a scan hit with enriched context to return structured trade analysis: direction, conviction, entry zone, stop, targets, risk-reward, reasoning, key risks, catalyst, timeframe.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-18: Enriched-context chat.</span> Expose a chat endpoint that assembles full market context (regime, prices, FRED, options flow, sentiment, portfolio, scanner signals, strategy definitions) before each Brain call.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-19: External research knowledge base.</span> Ingest content from an external research source into a local ChromaDB collection for Brain context injection, with semantic chunking and per-section metadata. Source not displayed to the user.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-20: Portfolio tracker.</span> Manage open and closed positions in SQLite with live P&L, portfolio summary, concentration checks, stop/target alert generation, daily snapshots, and position context injection for LLM prompts.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-21: Trade journal and performance stats.</span> Auto-journal trades on position close. Calculate win rate, average win, average loss, reward-to-risk, total P&L, execution discipline percentage.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-22: Background monitor.</span> Run scans on schedule during market hours with pre-market and post-close awareness. Generate alerts on new candidates, signal upgrades, entry triggers, and stop/target hits. Produce end-of-day summary.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-23: Alert delivery.</span> Deliver alerts through Telegram bot, Windows toast notifications, and persistent JSON logs with seven-day retention.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-24: Watchlist management.</span> Add, remove, query tickers in JSON-backed watchlist with SEC ticker dictionary validation.</p>
              <p><span className="font-mono text-sm text-gray-500">FR-25: Study mode.</span> CLI and scan-time flag that bypasses regime filters for learning and edge-case analysis without affecting live scan behavior.</p>
            </div>
          </section>

          <section id="nonfunctional">
            <h2 className="text-2xl font-bold mb-4">6. Non-functional requirements</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50 text-gray-600"><tr><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Category</th><th className="px-4 py-2 text-left font-mono border-b border-gray-200">Requirement</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Performance</td><td className="px-4 py-2">Scan cycle under 60s for 15-ticker watchlist; regime detection under 5s; news classification under 30s per batch of 20</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Determinism</td><td className="px-4 py-2">Strategy evaluation and backtesting produce identical results on identical inputs</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Reliability</td><td className="px-4 py-2">Sentinel unavailable falls back to keyword sentiment; FRED, IMF, yfinance, Finnhub, EDGAR all fail independently without blocking the rest of the system</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Auditability</td><td className="px-4 py-2">LLM outputs traceable to specific injected context; sentiment scores linked to source headlines; backtest trades linked to source bars</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Resource isolation</td><td className="px-4 py-2">Sentinel workload runs on a separate GPU process from Brain; classification never blocks synthesis</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Security & privacy</td><td className="px-4 py-2">All inference local; strategies, positions, journal entries, and external research content never leave user hardware</td></tr>
                  <tr className="border-b border-gray-200"><td className="px-4 py-2 whitespace-nowrap">Hardware footprint</td><td className="px-4 py-2">16 GB VRAM (5070 Ti) for Brain; 6 GB VRAM (2060) for Sentinel</td></tr>
                  <tr><td className="px-4 py-2 whitespace-nowrap">Rate limits</td><td className="px-4 py-2">Finnhub 60/min, SEC EDGAR 10/sec, IMF 8/5sec, FRED 120/min — all enforced in respective clients</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="acceptance">
            <h2 className="text-2xl font-bold mb-4">7. Acceptance criteria</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><span className="font-semibold">Given</span> a natural-language strategy, <span className="font-semibold">when</span> submitted, <span className="font-semibold">then</span> the system returns structured JSON, a confidence score, and an interpretation for confirmation.</li>
              <li><span className="font-semibold">Given</span> a confirmed strategy and current market data, <span className="font-semibold">when</span> scanned, <span className="font-semibold">then</span> evaluation is deterministic and reproducible.</li>
              <li><span className="font-semibold">Given</span> the regime is BEAR or HIGH_VOL, <span className="font-semibold">when</span> strategies execute, <span className="font-semibold">then</span> size multiplier is 0.5 and stop-widening is 0.5.</li>
              <li><span className="font-semibold">Given</span> a parsed strategy and historical data, <span className="font-semibold">when</span> the backtester runs, <span className="font-semibold">then</span> it returns a full trade log with regime-aware sizing, win rate and total return summary, and a monthly returns breakdown.</li>
              <li><span className="font-semibold">Given</span> a batch of headlines, <span className="font-semibold">when</span> classified, <span className="font-semibold">then</span> each receives a category, sentiment, score, and urgency from the defined taxonomies.</li>
              <li><span className="font-semibold">Given</span> a headline classified within the last 4 hours, <span className="font-semibold">when</span> seen again, <span className="font-semibold">then</span> the cached classification is returned without a Sentinel call.</li>
              <li><span className="font-semibold">Given</span> Sentinel is unavailable, <span className="font-semibold">when</span> political scoring is requested, <span className="font-semibold">then</span> the system falls back to keyword-only magnitude estimation.</li>
              <li><span className="font-semibold">Given</span> a watchlist, <span className="font-semibold">when</span> the EDGAR scan runs, <span className="font-semibold">then</span> the system returns insider transactions grouped into clusters flagged STRONG (3+ insiders) or MODERATE (2 insiders).</li>
              <li><span className="font-semibold">Given</span> a Brain analysis call, <span className="font-semibold">when</span> constructed, <span className="font-semibold">then</span> every numerical claim has a source in the injected context.</li>
              <li><span className="font-semibold">Given</span> a position close, <span className="font-semibold">when</span> executed, <span className="font-semibold">then</span> a journal entry is auto-created and performance stats update.</li>
            </ul>
          </section>

          <section id="architecture">
            <h2 className="text-2xl font-bold mb-4">8. Architecture</h2>
            <p className="font-semibold mb-2">GPU allocation</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-xs mb-6 overflow-x-auto">
              <pre className="whitespace-pre">{`GPU 0 (RTX 5070 Ti, 16GB) — port 11434 — Brain (Qwen3.5-27B)
  · Strategy parsing and refinement
  · Trade analysis synthesis (structured JSON)
  · Enriched-context chat

GPU 1 (RTX 2060, 6GB) — port 11435 — Sentinel (Qwen3.5-4B)
  · News categorization (9-category taxonomy)
  · Sentiment scoring (-1.0 to 1.0)
  · Political impact scoring
  · 4-hour per-headline cache`}</pre>
            </div>
            <p className="font-semibold mb-2">Request flow</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-xs mb-6 overflow-x-auto">
              <pre className="whitespace-pre">{`User strategy (natural language)
  → Brain parse → user confirm/refine → SQLite strategy store

Scan cycle (scheduled or on-demand):
  Deterministic lane:           Data/Sentinel lane:
    detect_regime()               options_flow scan
    evaluate_condition()          FRED macro
    regime_adjustments            IMF global data
    scanner strategies 1/2/3      EDGAR insider/8-K
                                  news aggregator (Finnhub + yfinance + RSS)
                                  Sentinel classify + score sentiment
                                  macro_monitor political impact

  → Brain analysis pass with injected context
  → Dashboard + Telegram + toast alerts
  → Portfolio actions → auto-journal`}</pre>
            </div>
            <p>Shared infrastructure: FastAPI server, Brain LLM, ChromaDB, and SEC ticker dictionary shared with the AI Research Platform. Storage split between SQLite (strategies, positions, external research) and JSON files (watchlist, alerts, daily summaries, journal entries). API surface is approximately 40 endpoints covering status, scan, watchlist, sentiment, filings, insiders, macro, IMF, news, earnings, analyze, chat, chart data, options flow, portfolio CRUD, and full strategy lifecycle (parse, refine, confirm, activate, backtest).</p>
          </section>

          <section id="oos">
            <h2 className="text-2xl font-bold mb-4">9. Out of scope</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Automated broker-side order execution</li>
              <li>Real-time tick-level data (system runs on end-of-day and 15-minute-delayed data)</li>
              <li>Multi-user features</li>
              <li>Mobile apps beyond Telegram</li>
              <li>ML regime classification in v1</li>
              <li>Model fine-tuning or training</li>
              <li>Public-facing documentation of the external research source</li>
            </ul>
          </section>

          <section id="open">
            <h2 className="text-2xl font-bold mb-4">10. Open questions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Backtester expansion.</span> The engine is built. Should backtests run on-demand per strategy, or as a scheduled batch generating a per-regime performance matrix?</li>
              <li><span className="font-semibold">ML regime classifier.</span> When does the rules-based classifier's error rate justify an ML upgrade? Candidate: HMM or clustering over yield curve, sector rotation, breadth.</li>
              <li><span className="font-semibold">Next Sentinel workload.</span> Sentiment is shipped. Candidates: parse-confidence verification, long-article summarization pre-Brain, options flow description generation.</li>
              <li><span className="font-semibold">IBKR paper trading integration.</span> Before or after the batch backtester?</li>
              <li><span className="font-semibold">VCP scanner (Strategy 4).</span> Does Minervini's Volatility Contraction Pattern fit the existing strategy compiler abstraction, or require a separate code path?</li>
              <li><span className="font-semibold">Sentiment cache invalidation.</span> The 4-hour TTL is a starting point. Is there a price-move or volume signal that should trigger early invalidation?</li>
              <li><span className="font-semibold">External research ingestion cadence.</span> Currently on-demand. Should it move to a scheduled background job?</li>
            </ul>
          </section>

          <section id="appendix">
            <h2 className="text-2xl font-bold mb-4">11. Appendix: design decisions</h2>
            <p>The reasoning behind specific architectural choices — rules-based regime as a deliberate first step, regimes as risk controls rather than labels, natural-language compilation with deterministic execution, the Brain/Sentinel split validated on sentiment before the research pipeline, per-regime backtesting as a design rule — lives on the case study page at <a href="/case-studies/trading-platform" className="underline hover:text-gray-900">/case-studies/trading-platform</a>.</p>
          </section>

        </article>
      </div>

      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500">
        <p><a href="/case-studies/trading-platform" className="hover:text-gray-900 transition">← Back to case study</a></p>
      </footer>
    </main>
  );
}