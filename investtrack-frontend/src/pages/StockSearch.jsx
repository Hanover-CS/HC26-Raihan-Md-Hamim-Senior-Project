import { useState } from "react";
import { motion } from "framer-motion";
import { fetchQuote } from "../api/itick";
import FuturisticBackground from "../components/FuturisticBackground";

export default function StockSearch() {
  const [symbol, setSymbol] = useState("");
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [watchlistMessage, setWatchlistMessage] = useState("");
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState("");

  async function handleSearch() {
    if (!symbol.trim()) return;
    setLoading(true);
    setError("");
    setQuote(null);
    setWatchlistMessage("");
    setNews([]);

    try {
      const data = await fetchQuote(symbol.toUpperCase());
      setQuote(data);
      await fetchNews(symbol.toUpperCase());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const fetchNews = async (symbol) => {
    setNewsLoading(true);
    setNewsError("");
    try {
      const response = await fetch(`/api/news/${symbol}`);
      if (!response.ok) throw new Error("Failed to fetch news");
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setNewsError("Failed to load news");
      console.error(err);
    } finally {
      setNewsLoading(false);
    }
  };

  function addToWatchlist() {
    if (!quote) return;
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!stored.includes(quote.symbol)) {
      const updated = [...stored, quote.symbol];
      localStorage.setItem("watchlist", JSON.stringify(updated));
      setWatchlistMessage(`Added ${quote.symbol} to watchlist!`);
    } else {
      setWatchlistMessage(`${quote.symbol} is already in your watchlist.`);
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
        <h1 className="premium-title">Stock Search</h1>
        <p className="muted premium-sub">Find real‑time data for any US ticker</p>
      </motion.div>

      <motion.section
        className="panel premium-search-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="card premium-search-card">
          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="AAPL"
                className="premium-input"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <motion.button
              className="btn premium-search-btn"
              onClick={handleSearch}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? <span className="loader"></span> : "Search"}
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

      {quote && (
        <motion.section
          className="panel premium-result-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card premium-result-card">
            <div className="quote-header">
              <h2 className="quote-symbol">{quote.symbol}</h2>
              <span className="quote-price">${quote.price}</span>
            </div>
            <div className="quote-change">
              <span className={quote.change >= 0 ? "positive" : "negative"}>
                {quote.change > 0 ? "+" : ""}
                {quote.change.toFixed(2)} ({quote.changePercent}%)
              </span>
            </div>
            <motion.button
              className="btn premium-watchlist-btn"
              onClick={addToWatchlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              + Add to Watchlist
            </motion.button>
            {watchlistMessage && (
              <p className="success premium-success">{watchlistMessage}</p>
            )}

            {/* News Section */}
            <div className="news-section premium-news">
              <h3>Recent News</h3>
              {newsLoading && <p className="muted">Loading news...</p>}
              {newsError && <p className="error">{newsError}</p>}
              {!newsLoading && !newsError && news.length === 0 && (
                <p className="muted">No recent news found.</p>
              )}
              <div className="news-list">
                {news.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-item premium-news-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
                  >
                    <h4>{item.title}</h4>
                    <p className="news-meta">
                      {item.source} • {new Date(item.pubDate).toLocaleDateString()}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}