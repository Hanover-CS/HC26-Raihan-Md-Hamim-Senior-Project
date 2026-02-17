
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FuturisticBackground from "../components/FuturisticBackground.jsx";
import { fetchQuote } from "../api/itick";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function Dashboard() {
  const [indices, setIndices] = useState([]);
  const [watchlistQuotes, setWatchlistQuotes] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Symbols for market indices
  const indexSymbols = [
    { symbol: "SPY", name: "S&P 500" },
    { symbol: "DIA", name: "Dow Jones" },
    { symbol: "QQQ", name: "Nasdaq" },
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      setError("");

      try {
        // 1. Fetch indices
        const indexPromises = indexSymbols.map((idx) => fetchQuote(idx.symbol));
        const indexResults = await Promise.allSettled(indexPromises);
        const validIndices = indexResults
          .filter((r) => r.status === "fulfilled")
          .map((r, i) => ({ ...indexSymbols[i], ...r.value }));
        setIndices(validIndices);

        //2. Fetch watchlist from localStorage
        const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
        if (stored.length > 0) {
          const watchlistPromises = stored.map((sym) => fetchQuote(sym));
          const watchlistResults = await Promise.allSettled(watchlistPromises);
          const validWatchlist = watchlistResults
            .filter((r) => r.status === "fulfilled")
            .map((r) => r.value);
          setWatchlistQuotes(validWatchlist);
        }

      
        const mockChart = generateMockChartData();
        setChartData(mockChart);

    
      } catch (err) {
        setError("Failed to load dashboard data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // chart generator  
  const generateMockChartData = () => {
    const data = [];
    let price = 450;
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      price += (Math.random() - 0.5) * 5;
      data.push({
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        close: Math.round(price * 100) / 100,
      });
    }
    return data;
  };

  return (
    <div className="page">
      <FuturisticBackground />
      <motion.div
        className="pageHead"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>Dashboard</motion.h1>
        <motion.p className="muted" variants={itemVariants}>
          Market overview at a glance
        </motion.p>
      </motion.div>

      {loading && (
        <section className="panel">
          <div className="card">Loading dashboard...</div>
        </section>
      )}

      {error && (
        <section className="panel">
          <div className="card error">{error}</div>
        </section>
      )}

      {!loading && !error && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Market Indices */}
          <section className="panel">
            <motion.div className="card" variants={itemVariants}>
              <h2>Market Indices</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                {indices.map((idx) => (
                  <div key={idx.symbol} className="index-card">
                    <strong>{idx.name}</strong>
                    <div>${idx.price}</div>
                    <div className={idx.change >= 0 ? "positive" : "negative"}>
                      {idx.change > 0 ? "+" : ""}
                      {idx.change.toFixed(2)} ({idx.changePercent}%)
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Price Chart */}
          <section className="panel">
            <motion.div className="card" variants={itemVariants}>
              <h2>SPY - 30 Day Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#aaa" />
                  <YAxis domain={["auto", "auto"]} stroke="#aaa" />
                  <Tooltip
                    contentStyle={{ background: "#222", border: "1px solid #444" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    stroke="#00aaff"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </section>

          {/* Watchlist Snapshot */}
          <section className="panel">
            <motion.div className="card" variants={itemVariants}>
              <h2>Your Watchlist</h2>
              {watchlistQuotes.length === 0 ? (
                <p className="muted">
                  No tickers saved.{" "}
                  <Link to="/stock" style={{ color: "#00aaff" }}>
                    Add some →
                  </Link>
                </p>
              ) : (
                <table className="investor-table">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {watchlistQuotes.map((item) => (
                      <tr key={item.symbol}>
                        <td>
                          <Link to={`/stock?symbol=${item.symbol}`}>
                            {item.symbol}
                          </Link>
                        </td>
                        <td>${item.price}</td>
                        <td className={item.change >= 0 ? "positive" : "negative"}>
                          {item.change > 0 ? "+" : ""}
                          {item.change.toFixed(2)} ({item.changePercent}%)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </motion.div>
          </section>

          {/* Top Movers (mock) */}
          <section className="panel">
            <motion.div className="card" variants={itemVariants}>
              <h2>Top Movers</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <h4>📈 Top Gainers</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>TSLA +8.2%</li>
                    <li>NVDA +5.7%</li>
                    <li>AMD +4.3%</li>
                  </ul>
                </div>
                <div>
                  <h4>📉 Top Losers</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>INTC -3.1%</li>
                    <li>PFE -2.5%</li>
                    <li>KO -1.8%</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </motion.div>
      )}
    </div>
  );
}