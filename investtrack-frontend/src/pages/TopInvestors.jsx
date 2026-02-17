import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FuturisticBackground from "../components/FuturisticBackground";

// Function to generate initials from company name
const getInitials = (name) => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

// Function to format AUM in billions
const formatAUM = (aum) => {
  if (aum >= 1e12) return `$${(aum / 1e12).toFixed(2)}T`;
  if (aum >= 1e9) return `$${(aum / 1e9).toFixed(2)}B`;
  return `$${aum.toLocaleString()}`;
};

export default function TopInvestors() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/top-investors")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setInvestors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <FuturisticBackground />
      <motion.div
        className="pageHead"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="premium-title">Top Investors</h1>
        <p className="muted premium-sub">
          Institutional investment managers ranked by Assets Under Management (AUM)
        </p>
      </motion.div>

      <motion.section
        className="panel premium-investors-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="card premium-investors-card">
          {loading && (
            <div className="investors-loading">
              <span className="loader"></span>
              <p className="muted">Loading top investors...</p>
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

          {!loading && !error && investors.length === 0 && (
            <motion.div
              className="investors-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="muted">No investor data available.</p>
            </motion.div>
          )}

          {!loading && !error && investors.length > 0 && (
            <div className="investors-table">
              {/* Table Header */}
              <div className="investors-header">
                <div className="investors-rank">Rank</div>
                <div className="investors-logo"></div>
                <div className="investors-name">Investor Name</div>
                <div className="investors-location">Location</div>
                <div className="investors-aum">AUM</div>
              </div>

              {/* Table Rows */}
              {investors.map((inv, index) => (
                <motion.div
                  key={inv.id}
                  className="investors-row"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="investors-rank">#{index + 1}</div>
                  <div className="investors-logo">
                    <div className="investor-logo-circle">
                      {getInitials(inv.name)}
                    </div>
                  </div>
                  <div className="investors-name">
                    <Link to={`/investor/${inv.id}`} className="investor-link">
                      {inv.name}
                    </Link>
                  </div>
                  <div className="investors-location">
                    {inv.city}, {inv.state}
                  </div>
                  <div className="investors-aum">{formatAUM(inv.aum)}</div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}