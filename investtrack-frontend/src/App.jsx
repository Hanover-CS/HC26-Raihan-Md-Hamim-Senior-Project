/**
 * File: App.jsx
 * Purpose: Main application entry for InvestTrack.
 */

import { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { SAMPLE_HOLDINGS, UI } from "./constants";

function matchesQuery(holding, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    holding.investor.toLowerCase().includes(q) ||
    holding.ticker.toLowerCase().includes(q)
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => SAMPLE_HOLDINGS.filter(h => matchesQuery(h, query)),
    [query]
  );

  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: UI.PAGE_MARGIN_TOP }}>
        <h1>Welcome to InvestTrack</h1>
        <p>A learning tool to follow investors and market trends</p>

        <SearchBar onSearch={setQuery} />
        <Results items={filtered} />
      </div>
    </>
  );
}

