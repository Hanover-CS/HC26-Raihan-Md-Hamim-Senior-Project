/**
 * File: App.jsx
 * Purpose: Main page UI; holds search state and renders SearchBar + Results.
 */

import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { SAMPLE_HOLDINGS, UI } from "./constants";

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return SAMPLE_HOLDINGS;

    const q = query.toLowerCase();
    return SAMPLE_HOLDINGS.filter(
      (x) =>
        x.investor.toLowerCase().includes(q) ||
        x.ticker.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div style={{ textAlign: "center", marginTop: UI.PAGE_MARGIN_TOP }}>
      <h1>Welcome to InvestTrack</h1>
      <p>A learning tool to follow investors and market trends</p>

      <SearchBar onSearch={setQuery} />
      <Results items={filtered} />
    </div>
  );
}
