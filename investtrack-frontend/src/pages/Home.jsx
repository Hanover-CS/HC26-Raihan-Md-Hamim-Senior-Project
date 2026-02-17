
import { motion } from "framer-motion";
import FuturisticBackground from "../components/FuturisticBackground.jsx";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const featureVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Home() {
  return (
    <div className="page">
      <FuturisticBackground />

      {/* Hero Section */}
      <motion.div
        className="pageHead"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>InvestTrack</motion.h1>
        <motion.p className="muted" variants={itemVariants}>
          Track tickers, compare moves, and build a watchlist.
          <br />
          <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
            Clean UI first, fancy vibes second.
          </span>
        </motion.p>
      </motion.div>

      {/* System Status Badges */}
      <motion.section
        className="panel"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="card" variants={itemVariants}>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <span className="badge">✅ SYSTEM ONLINE</span>
            <span className="badge">⚡ VITE + REACT</span>
            <span className="badge">📈 FMP DATA</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Feature Cards */}
      <motion.section
        className="panel"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          <motion.div className="card feature-card" variants={featureVariants} whileHover={{ scale: 1.05 }}>
            <h3>🔍 Stock Search</h3>
            <p className="muted">Get real-time quotes, price changes, and key metrics for any US ticker.</p>
            <Link to="/stock" className="feature-link">Try it →</Link>
          </motion.div>

          <motion.div className="card feature-card" variants={featureVariants} whileHover={{ scale: 1.05 }}>
            <h3>⚖️ Compare</h3>
            <p className="muted">Side-by-side comparison of two stocks – performance, volume, and more.</p>
            <Link to="/compare" className="feature-link">Compare now →</Link>
          </motion.div>

          <motion.div className="card feature-card" variants={featureVariants} whileHover={{ scale: 1.05 }}>
            <h3>📋 Watchlist</h3>
            <p className="muted">Save your favorite tickers and monitor them in one place.</p>
            <Link to="/watchlist" className="feature-link">View watchlist →</Link>
          </motion.div>

          <motion.div className="card feature-card" variants={featureVariants} whileHover={{ scale: 1.05 }}>
            <h3>🏦 Top Investors</h3>
            <p className="muted">Explore institutional investors and their 13F holdings (mock data).</p>
            <Link to="/investors" className="feature-link">See leaders →</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Tip Section */}
      <motion.section
        className="panel"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="card" variants={itemVariants}>
          <p className="muted" style={{ textAlign: "center" }}>
            💡 <strong>Tip:</strong> Use <strong>Stock Search</strong> for a single ticker, <strong>Compare</strong> for side-by-side, and <strong>Watchlist</strong> to save favorites.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}