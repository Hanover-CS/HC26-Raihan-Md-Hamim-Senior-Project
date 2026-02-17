import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchQuote } from "../api/itick";
import FuturisticBackground from "../components/FuturisticBackground";

export default function Watchlist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load watchlist from localStorage on mount
  useEffect(() => {
    loadWatchlist();
  }, []);

  async function loadWatchlist() {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (stored.length === 0) {
      setItems([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Fetch quotes for all symbols
      const results = await Promise.all(
        stored.map(symbol => fetchQuote(symbol))
      );
      setItems(results);
    } catch (err) {
      console.error("Watchlist error:", err);
      setError(`Failed to load: ${err.message}`);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  // Remove symbol from watchlist
  function removeFromWatchlist(symbol) {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updated = stored.filter(s => s !== symbol);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    // Update state – remove the item from items array
    setItems(prev => prev.filter(item => item.symbol !== symbol));
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
        <h1 className="premium-title">Watchlist</h1>
        <p className="muted premium-sub">Your favorite tickers, always up to date</p>
      </motion.div>

      <motion.section
        className="panel premium-watchlist-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="card premium-watchlist-card">
          {loading && (
            <div className="watchlist-loading">
              <span className="loader"></span>
              <p className="muted">Loading your watchlist...</p>
            </div>
          )}

          {error && (
            <motion.p
              className="error premium-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {!loading && !error && items.length === 0 && (
            <motion.div
              className="watchlist-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="muted">Your watchlist is empty.</p>
              <a href="/stock" className="btn premium-watchlist-cta">
                + Add Stocks
              </a>
            </motion.div>
          )}

          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.symbol}
                className="watchlist-item premium-watchlist-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className="watchlist-item-info">
                  <div className="watchlist-symbol">{item.symbol}</div>
                  <div className="watchlist-price">${item.price}</div>
                  <div className={`watchlist-change ${item.change >= 0 ? "positive" : "negative"}`}>
                    {item.change > 0 ? "+" : ""}
                    {item.change.toFixed(2)} ({item.changePercent}%)
                  </div>
                </div>
                <motion.button
                  className="watchlist-remove-btn"
                  onClick={() => removeFromWatchlist(item.symbol)}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,80,80,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  title="Remove from watchlist"
                >
                  🗑️
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}