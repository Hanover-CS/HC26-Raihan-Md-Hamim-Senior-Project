import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Proxy for stock API (optional, if you ever need it)
app.get("/api/quote/:symbol", (req, res) => {
  res.json({ ok: true, symbol: req.params.symbol });
});

// ========== NEWS PROXY (Yahoo Finance RSS) ==========
app.get("/api/news/:symbol", async (req, res) => {
  const { symbol } = req.params;
  try {
    const rssUrl = `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${symbol}&region=US&lang=en-US`;
    const response = await fetch(rssUrl);
    const xmlText = await response.text();

    // Simple regex parsing for RSS items  
    const news = [];
    const itemRegex = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<pubDate>(.*?)<\/pubDate>[\s\S]*?<description>(.*?)<\/description>[\s\S]*?<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xmlText)) !== null) {
      news.push({
        title: match[1].replace(/<!\[CDATA\[|\]\]>/g, ''),
        link: match[2],
        pubDate: match[3],
        description: match[4].replace(/<!\[CDATA\[|\]\]>/g, ''),
        source: "Yahoo Finance"
      });
    }

    res.json(news);
  } catch (err) {
    console.error("🔥 News fetch error:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// ========== TOP INVESTORS==========
app.get("/api/top-investors", (req, res) => {
  const investors = [
    {
      id: "0001067983",
      name: "Berkshire Hathaway Inc",
      aum: 780000000000,
      city: "Omaha",
      state: "NE"
    },
    {
      id: "0001359008",
      name: "Bridgewater Associates LP",
      aum: 235000000000,
      city: "Westport",
      state: "CT"
    },
    {
      id: "0001032810",
      name: "Renaissance Technologies LLC",
      aum: 165000000000,
      city: "East Setauket",
      state: "NY"
    },
    {
      id: "0001166559",
      name: "BlackRock Inc",
      aum: 9100000000000,
      city: "New York",
      state: "NY"
    },
    {
      id: "0001087429",
      name: "Vanguard Group Inc",
      aum: 7200000000000,
      city: "Malvern",
      state: "PA"
    }
  ];
  res.json(investors);
});

// investor holdings
app.get("/api/investor/:id/holdings", (req, res) => {
  const holdings = [
    { symbol: "AAPL", shares: 1000000, value: 255780000 },
    { symbol: "MSFT", shares: 500000, value: 200000000 },
    { symbol: "GOOGL", shares: 300000, value: 450000000 }
  ];
  res.json(holdings);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});