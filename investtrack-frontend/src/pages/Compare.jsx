import { useState } from "react";
import { motion } from "framer-motion";
import { fetchQuote } from "../api/itick";
import FuturisticBackground from "../components/FuturisticBackground";

export default function Compare() {
  const [symbolA, setSymbolA] = useState("AAPL");
  const [symbolB, setSymbolB] = useState("MSFT");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCompare() {
    setError("");
    setData(null);
    setLoading(true);

    try {
      // Fetch first symbol
      const left = await fetchQuote(symbolA.toUpperCase());
      // Slight delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1200));
      const right = await fetchQuote(symbolB.toUpperCase());

      setData({ left, right });
    } catch (err) {
      console.error("Comparison error:", err);
      if (err.message.includes("429") || err.message.includes("limit exceeded")) {
        setError("Rate limit exceeded. Please wait a moment and try again.");
      } else {
        setError(`Comparison failed: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <FuturisticBackground />
      <motion.div
        className="pageHead"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="premium-title">Compare Stocks</h1>
        <p className="muted premium-sub">Side‑by‑side analysis of two tickers</p>
      </motion.div>

      <motion.section
        className="panel premium-compare-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="card premium-compare-card">
          <div className="compare-inputs">
            <div className="compare-input-wrapper">
              <span className="search-icon">📈</span>
              <input
                type="text"
                value={symbolA}
                onChange={(e) => setSymbolA(e.target.value.toUpperCase())}
                placeholder="AAPL"
                className="premium-compare-input"
              />
            </div>
            <div className="compare-input-wrapper">
              <span className="search-icon">📊</span>
              <input
                type="text"
                value={symbolB}
                onChange={(e) => setSymbolB(e.target.value.toUpperCase())}
                placeholder="MSFT"
                className="premium-compare-input"
              />
            </div>
            <motion.button
              className="btn premium-compare-btn"
              onClick={handleCompare}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? <span className="loader"></span> : "Compare"}
            </motion.button>
          </div>
          {error && (
            <motion.p
              className="error premium-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}
        </div>
      </motion.section>

      {data && (
        <motion.section
          className="panel premium-result-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card premium-compare-result-card">
            <div className="compare-grid">
              {/* Left Stock */}
              <div className="compare-stock">
                <div className="quote-header">
                  <h2 className="quote-symbol">{data.left.symbol}</h2>
                  <span className="quote-price">${data.left.price}</span>
                </div>
                <div className="quote-change">
                  <span className={data.left.change >= 0 ? "positive" : "negative"}>
                    {data.left.change > 0 ? "+" : ""}
                    {data.left.change.toFixed(2)} ({data.left.changePercent}%)
                  </span>
                </div>
                <div className="stock-meta">
                  <div className="meta-item">
                    <span className="meta-label">Volume</span>
                    <span className="meta-value">{data.left.volume?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="vs-divider">
                <span className="vs-text">VS</span>
              </div>

              {/* Right Stock */}
              <div className="compare-stock">
                <div className="quote-header">
                  <h2 className="quote-symbol">{data.right.symbol}</h2>
                  <span className="quote-price">${data.right.price}</span>
                </div>
                <div className="quote-change">
                  <span className={data.right.change >= 0 ? "positive" : "negative"}>
                    {data.right.change > 0 ? "+" : ""}
                    {data.right.change.toFixed(2)} ({data.right.changePercent}%)
                  </span>
                </div>
                <div className="stock-meta">
                  <div className="meta-item">
                    <span className="meta-label">Volume</span>
                    <span className="meta-value">{data.right.volume?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}