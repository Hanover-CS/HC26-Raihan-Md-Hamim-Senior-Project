/**
 * File: App.jsx
 * Purpose: Main app routes + home page for InvestTrack.
 * Provides search, sorting, and a details panel over sample holdings.
 */
import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import HoldingDetails from "./components/HoldingDetails";
import SortPicker from "./components/SortPicker";

import { SAMPLE_HOLDINGS, SORT, UI, ROUTES } from "./constants";

function sortHoldings(items, sortKey) {
  const copy = [...items];

  if (sortKey === SORT.TICKER_AZ) {
    copy.sort((a, b) => a.ticker.localeCompare(b.ticker));
    return copy;
  }

  if (sortKey === SORT.SHARES_DESC) {
    copy.sort((a, b) => b.shares - a.shares);
    return copy;
  }

  // default: investor A-Z
  copy.sort((a, b) => a.investor.localeCompare(b.investor));
  return copy;
}

function HomePage() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState(SORT.INVESTOR_AZ);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return SAMPLE_HOLDINGS.filter((h) => h.matchesQuery(query));
  }, [query]);

  const sorted = useMemo(() => {
    return sortHoldings(filtered, sortKey);
  }, [filtered, sortKey]);

  const selectedKey = selected ? `${selected.investor}-${selected.ticker}` : null;

  const shell = {
    minHeight: "100vh",
    color: "white",
    background:
      "radial-gradient(1200px 800px at 20% 10%, rgba(0,120,255,0.30), transparent 60%)," +
      "radial-gradient(900px 700px at 80% 20%, rgba(150,0,255,0.25), transparent 60%)," +
      "linear-gradient(180deg, rgba(0,0,0,0.92), rgba(0,0,0,0.88))",
  };

  const hero = {
    textAlign: "center",
    marginTop: "54px",
    padding: "0 16px",
  };

  const h1 = { margin: 0, fontSize: "44px", letterSpacing: "0.4px" };
  const sub = { marginTop: "10px", color: UI.TEXT_MUTED };

  function handleSearch(nextQuery) {
    setQuery(nextQuery);
    setSelected(null);
  }

  return (
    <div style={shell}>
      <NavBar />

      <div style={hero}>
        <h1 style={h1}>Welcome to InvestTrack</h1>
        <p style={sub}>A learning tool to follow investors and market trends</p>

        <SearchBar onSearch={handleSearch} />
        <SortPicker value={sortKey} onChange={setSortKey} />

        <Results
          items={sorted}
          selectedKey={selectedKey}
          onSelect={setSelected}
        />

        <HoldingDetails holding={selected} />
      </div>
    </div>
  );
}

function SimplePage({ title, children }) {
  return (
    <div style={{ minHeight: "100vh", color: "white", background: "#0b0f18" }}>
      <NavBar />
      <div style={{ maxWidth: UI.APP_MAX_WIDTH, margin: "32px auto", padding: "0 16px" }}>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <div style={{ color: UI.TEXT_MUTED, lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route
        path={ROUTES.PROPOSAL}
        element={
          <SimplePage title="Proposal">
            This is a placeholder route for your proposal content. Next upgrade:
            load and render your proposal markdown inside the app.
          </SimplePage>
        }
      />
      <Route
        path={ROUTES.ANNOTATED}
        element={
          <SimplePage title="Annotated Bibliography">
            This is a placeholder route for your annotated bibliography content.
            Next upgrade: render `annotated.md` inside the app.
          </SimplePage>
        }
      />
    </Routes>
  );
}
