export const metadata = {
  title: "Trading Platform — Tanishk Thorat",
  description: "A self-hosted swing trading platform with natural-language strategy compilation, regime-aware risk controls, deterministic execution, and Sentinel-powered news sentiment.",
};

export default function TradingPlatform() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-sm font-mono text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-900 transition">TANISHK THORAT</a>
          {" / "}
          <a href="/case-studies" className="hover:text-gray-900 transition">CASE STUDIES</a>
          {" / "}
          <span>TRADING PLATFORM</span>
        </p>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-xs font-mono px-2 py-1 bg-green-50 text-green-800 border border-green-200 rounded">IN ACTIVE DEVELOPMENT</span>
          <span className="text-xs font-mono text-gray-500">ONE USER (ME) · NO LIVE TRADING</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Trading Platform</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
          A self-hosted swing trading research system built on top of the AI Research Platform. Two motivations: an active project I work on daily, and a domain where LLM mistakes are auditable because every claim is a number that can be checked.
        </p>
        <a href="/prds/trading-platform" className="inline-block text-sm font-mono text-gray-900 hover:text-gray-600 transition border-b border-gray-900 hover:border-gray-600">
          Read the full PRD →
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">PROBLEM</p>
        <h2 className="text-3xl font-bold mb-6">Why this exists</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          <p>This started as "let me try using the research platform to analyze a stock." The hallucination problem that triggered the AI Research Platform was on a ticker query. Stocks were the natural test domain because every number the model produces can be checked against a source. If the model says a stock is up 12% this quarter, I can verify that in seconds. If it invents an earnings date, I catch it immediately. No other domain I work in has that property.</p>
          <p>It grew into its own project because I wanted everything in one place: research a ticker, express a trading strategy in plain English, run it against historical data, and iterate. The existing tools (TradingView, Finviz, Stock Rover) are good at individual pieces. None of them let me describe a strategy in natural language and have it compiled into something that actually executes deterministically against price data.</p>
          <p>The platform shares its FastAPI infrastructure, ChromaDB instance, and Brain LLM with the AI Research Platform. It is a domain-specific agent built on shared infrastructure, not a standalone application.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">KEY DECISIONS</p>
        <h2 className="text-3xl font-bold mb-8">Six decisions that shaped the system</h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 01</p>
            <h3 className="text-xl font-bold mb-3">An active project and a falsifiability harness</h3>
            <p className="text-gray-700 leading-relaxed">
              This platform is not a toy project used to prove a point. It is an active research tool I use daily. But the reason it started with stock analysis, rather than any other domain, is that financial data is the best falsifiability harness for an LLM: every claim is a number, every number has a source, and a wrong number is immediately visible. Framing it as just a side project would undersell the connection to the AI work. Framing it as just a harness would pretend I do not care about the trading itself. Both motivations are real, and the combination explains why decisions throughout favor inspectability over convenience.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 02</p>
            <h3 className="text-xl font-bold mb-3">Rules-based regime detection today, ML next</h3>
            <p className="text-gray-700 leading-relaxed">
              The system classifies the current market into one of five states: BULL_LOW_VOL, BULL_NORMAL, CHOPPY, BEAR, HIGH_VOL. The classifier is a pure-Python decision tree over SPY moving averages and VIX level, with HIGH_VOL overriding everything when VIX hits 30 or above. Five states was the starting point, not a final taxonomy. The current implementation is intentionally simple, but not because rules-based is the right end state. Regime detection has to actually gate trades and shape risk before the classifier is worth optimizing. If I had built an ML classifier first, I would have spent weeks tuning a model with no downstream consequence. Shipping the rules version first means every later improvement to the classifier has a measurable effect on real strategy behavior. Next: ML-based classification, likely HMM or clustering on a wider feature set including yield curve, sector rotation, and breadth indicators.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 03</p>
            <h3 className="text-xl font-bold mb-3">Regimes as risk controls, not labels</h3>
            <p className="text-gray-700 leading-relaxed">
              A regime detector that paints a label on a dashboard is decoration. In this system, regimes are the gate on every trade. Position-size multiplier drops to 0.5 in BEAR and HIGH_VOL, 0.75 in CHOPPY. Stop-loss widening scales with regime volatility. Each strategy has an allowlist of regimes in which it is permitted to execute: Strategy 2 (momentum) only fires in bull regimes, Strategies 1 and 3 run everywhere. The decision was that detection without consequence is a dashboard widget. If the regime classifier exists at all, every downstream component has to read from it. The cost is that adding a new strategy means thinking about which regimes it belongs in, not just writing entry logic.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 04</p>
            <h3 className="text-xl font-bold mb-3">Natural-language strategy compiler with deterministic execution</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              This is the headline feature. A user describes a trading strategy in plain English. Brain (Qwen3.5-27B) parses it into structured JSON containing entry conditions, exit conditions, and position rules. The system returns a parsing-confidence score and a human-readable interpretation for confirmation. Iterative refinement is supported through a feedback loop with Brain. Once confirmed, a pure-Python condition evaluator executes the strategy against price data forever after, with no LLM in the execution path.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              The alternative on one side was a manual form: dropdowns for indicators, number fields for thresholds. Faster to ship, impossible to use, because real trading strategies live in prose. The alternative on the other side was letting the LLM execute the strategy directly each cycle. Fewer moving parts, but non-deterministic, slow, and the entire reason this domain was chosen is that execution needs to be auditable. Brain compiles once into something readable and debuggable. The compiled form runs deterministically.
            </p>
            <p className="text-gray-700 leading-relaxed">
              System strategies (the built-in three) are write-protected; only their backtest results can be updated. User-ingested strategies are fully editable. This separation prevents accidental edits to the strategies that the regime gating logic depends on.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 05</p>
            <h3 className="text-xl font-bold mb-3">Sentinel does sentiment, Brain does synthesis</h3>
            <p className="text-gray-700 leading-relaxed">
              This is where the dual-GPU architecture was validated. Sentinel (Qwen3.5-4B on the RTX 2060) classifies news headlines into a nine-category taxonomy and scores sentiment from -1.0 to 1.0 in batched calls with 4-hour caching. Brain (Qwen3.5-27B on the 5070 Ti) handles strategy compilation, trade analysis synthesis, and enriched-context chat. The split works because classification is a fast structured task that a 4B model handles well, while synthesis over mixed data sources (regime, technicals, sentiment, flow, macro) needs the larger model. This validated the dual-GPU design before applying the same split to the AI Research Platform's pipeline.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <p className="text-xs font-mono text-gray-500 mb-3">DECISION 06</p>
            <h3 className="text-xl font-bold mb-3">Per-regime backtesting as a design rule</h3>
            <p className="text-gray-700 leading-relaxed">
              The backtesting engine is built. Walk-forward simulation, regime-aware sizing, partial exits, stop/target evaluation, monthly returns. What is locked as a design rule is how the backtester is used: backtest each strategy within each regime separately, not across all market conditions in aggregate. Aggregate backtests over the last decade are misleading because the period was net bullish. Any long-biased strategy gets a free win from regime distribution, not from edge. Per-regime backtesting forces the question of whether the strategy actually has positive expectancy in each market state, which is the only question worth answering if regimes are going to gate execution (Decision 3). This is a borrowed principle, not a learned lesson. The honest framing is to say so.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">ARCHITECTURE</p>
        <h2 className="text-3xl font-bold mb-8">How the system runs</h2>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 overflow-x-auto">
          <svg viewBox="0 0 720 880" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
            <defs>
              <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
              </marker>
            </defs>
            <rect x="220" y="20" width="280" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="45" textAnchor="middle" fontSize="13" fill="#111827">User strategy (natural language)</text>
            <line x1="360" y1="60" x2="360" y2="90" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="220" y="90" width="280" height="50" rx="4" fill="#111827" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="112" textAnchor="middle" fontSize="13" fill="white">Brain (Qwen3.5-27B)</text>
            <text x="360" y="128" textAnchor="middle" fontSize="11" fill="#9ca3af">Parse to JSON + confidence</text>
            <line x1="360" y1="140" x2="360" y2="170" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="240" y="170" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="195" textAnchor="middle" fontSize="13" fill="#111827">User confirms / refines</text>
            <line x1="360" y1="210" x2="360" y2="240" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="240" y="240" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="265" textAnchor="middle" fontSize="13" fill="#111827">SQLite strategy store</text>
            <line x1="360" y1="280" x2="360" y2="320" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="40" y="320" width="640" height="290" rx="6" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="6 3" />
            <text x="60" y="340" fontSize="11" fill="#6b7280">SCAN CYCLE</text>
            <rect x="80" y="355" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="200" y="380" textAnchor="middle" fontSize="12" fill="#111827">detect_regime() → 5 states</text>
            <rect x="80" y="415" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="200" y="440" textAnchor="middle" fontSize="12" fill="#111827">evaluate_condition() (Python)</text>
            <rect x="80" y="475" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="200" y="500" textAnchor="middle" fontSize="12" fill="#111827">regime_adjustments (size/stop)</text>
            <rect x="400" y="355" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="520" y="380" textAnchor="middle" fontSize="12" fill="#111827">Options flow scan</text>
            <rect x="400" y="415" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="520" y="440" textAnchor="middle" fontSize="12" fill="#111827">FRED macro pipeline</text>
            <rect x="400" y="475" width="240" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="520" y="500" textAnchor="middle" fontSize="12" fill="#111827">News feeds (Finnhub + yfinance)</text>
            <rect x="400" y="535" width="240" height="50" rx="4" fill="#111827" stroke="#111827" strokeWidth="1.5" />
            <text x="520" y="557" textAnchor="middle" fontSize="12" fill="white">Sentinel (Qwen3.5-4B)</text>
            <text x="520" y="573" textAnchor="middle" fontSize="10" fill="#9ca3af">RTX 2060 · sentiment + classification</text>
            <line x1="520" y1="515" x2="520" y2="535" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <line x1="360" y1="610" x2="360" y2="650" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="180" y="650" width="360" height="50" rx="4" fill="#111827" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="672" textAnchor="middle" fontSize="13" fill="white">Brain LLM analysis pass</text>
            <text x="360" y="688" textAnchor="middle" fontSize="11" fill="#9ca3af">Injected: regime + flow + FRED + sentiment</text>
            <line x1="360" y1="700" x2="360" y2="740" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow2)" />
            <rect x="200" y="740" width="320" height="40" rx="4" fill="white" stroke="#111827" strokeWidth="1.5" />
            <text x="360" y="765" textAnchor="middle" fontSize="13" fill="#111827">Dashboard + Telegram alerts</text>
          </svg>
        </div>

        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
          <p>The platform shares its Brain LLM, FastAPI server, and ChromaDB instance with the AI Research Platform. The scan cycle runs deterministically: regime detection gates which strategies fire, the condition evaluator checks parsed strategies against price data, and regime adjustments modify position size and stop-loss levels. Options flow detection scans watchlist tickers for unusual activity using volume-to-open-interest ratios and estimated premium thresholds.</p>
          <p>Sentinel (Qwen3.5-4B on the RTX 2060) is actively used here, not idle. It classifies news headlines from Finnhub and yfinance into nine categories (EARNINGS, MACRO, POLITICAL, GLOBAL, COMMODITIES, SECTOR, COMPANY, CRYPTO, GENERAL) and scores sentiment (BULLISH/BEARISH/NEUTRAL with a -1.0 to 1.0 numerical score) in batched LLM calls with 4-hour caching. Political headlines get a separate Sentinel scoring pass for macro impact analysis. This is where the dual-GPU architecture was validated first: Brain handles strategy compilation and synthesis, Sentinel handles fast classification. The same split is planned for the research pipeline but shipped here first because sentiment classification is a natural Sentinel-sized task.</p>
          <p>All market data (regime state, indicators, options flow, FRED macro, Sentinel sentiment scores) is injected into Brain's context for the analysis pass. Brain never recalls a number from training.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <p className="text-sm font-mono text-gray-500 mb-2">WHAT'S NEXT</p>
        <h2 className="text-3xl font-bold mb-6">In order</h2>
        <ol className="space-y-3 text-gray-700 leading-relaxed max-w-3xl list-decimal list-inside">
          <li>Per-regime walk-forward backtest runner: scheduled batch across the strategy library generating a per-regime performance matrix.</li>
          <li>ML-based regime classification (Decision 2 upgrade) once the rules-based version's error rate justifies the work.</li>
          <li>Sentinel routing for the AI Research Platform's pipeline (parallel to the trading platform's existing Sentinel use).</li>
          <li>IBKR paper trading integration.</li>
          <li>VCP scanner (Strategy 4, Minervini methodology).</li>
          <li>Telegram and Discord alerts on every signal upgrade.</li>
        </ol>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 text-sm text-gray-500 mt-12">
        <p>
          <a href="/case-studies" className="hover:text-gray-900 transition">← Back to case studies</a>
        </p>
      </footer>

    </main>
  );
}