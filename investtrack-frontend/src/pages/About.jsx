import FuturisticBackground from "../components/FuturisticBackground.jsx";

export default function About() {
  return (
    <div className="page">
      <FuturisticBackground />
      <div className="pageHead">
        <h1>About InvestTrack</h1>
        <p className="muted">A modern stock market visualization tool</p>
      </div>

      <section className="panel">
        <div className="card">
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            InvestTrack is a full‑stack web application designed to deliver
            real‑time stock data, intuitive comparisons, and personalized
            watchlists. Built with a focus on clean user experience and
            reliable performance, it serves as a practical demonstration of
            modern frontend architecture and API integration.
          </p>
        </div>
      </section>

      <section className="panel" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h2 className="cardTitle">
            <span className="chip">✨</span>
            <span>Key Features</span>
          </h2>
          <div className="grid2" style={{ marginTop: "1rem" }}>
            <div className="metric">
              <span className="metricLabel">📊 Real‑Time Quotes</span>
              <div className="metricValue">Live pricing & daily changes</div>
            </div>
            <div className="metric">
              <span className="metricLabel">⚖️ Compare Tool</span>
              <div className="metricValue">Side‑by‑side stock analysis</div>
            </div>
            <div className="metric">
              <span className="metricLabel">📋 Watchlist</span>
              <div className="metricValue">Persistent local storage</div>
            </div>
            <div className="metric">
              <span className="metricLabel">📈 Dashboard</span>
              <div className="metricValue">Market indices & trends</div>
            </div>
            <div className="metric">
              <span className="metricLabel">🏛️ Investor Leaderboard</span>
              <div className="metricValue">Mock institutional data</div>
            </div>
            <div className="metric">
              <span className="metricLabel">📰 Stock News</span>
              <div className="metricValue">Integrated Yahoo Finance RSS</div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h2 className="cardTitle">
            <span className="chip">🛠️</span>
            <span>Technology Stack</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
            <span className="chip ghost">React</span>
            <span className="chip ghost">Vite</span>
            <span className="chip ghost">React Router</span>
            <span className="chip ghost">Node.js</span>
            <span className="chip ghost">Express</span>
            <span className="chip ghost">Framer Motion</span>
            <span className="chip ghost">iTick API</span>
            <span className="chip ghost">Yahoo Finance</span>
          </div>
          <p className="muted" style={{ marginTop: "1.5rem" }}>
            Data is fetched from the iTick API (free tier) with client‑side
            caching to stay within rate limits. News is proxied through the
            backend to avoid CORS issues.
          </p>
        </div>
      </section>

      <section className="panel" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h2 className="cardTitle">
            <span className="chip">🎯</span>
            <span>Project Vision</span>
          </h2>
          <p className="muted">
            InvestTrack was created as a learning exercise to explore modern
            web development practices – from responsive design and animations to
            secure API integration. It is not intended for actual trading
            decisions, but rather as a demonstration of what can be built with
            current frontend tools and a little creativity.
          </p>
          <div style={{ marginTop: "2rem", textAlign: "right" }}>
            <span className="chip ghost">Version 2.0 • 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
