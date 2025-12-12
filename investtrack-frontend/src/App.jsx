/**
 * File: App.jsx
 * Purpose: Home page for InvestTrack. Provides search + sorting over holdings and shows results + details.
 */

import { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import HoldingDetails from "./components/HoldingDetails";
import SortPicker from "./components/SortPicker";
import { SAMPLE_HOLDINGS, UI, SORT } from "./constants";

function matchesQuery(holding, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    holding.investor.toLowerCase().includes(q) ||
    holding.ticker.toLowerCase().includes(q)
  );
}

function sortHoldings(list, sortBy) {
  const copy = [...list];

  if (sortBy === SORT.TICKER) {
    return copy.sort((a, b) => a.ticker.localeCompare(b.ticker));
  }
  if (sortBy === SORT.SHARES) {
    return copy.sort((a, b) => b.shares - a.shares);
  }
  return copy.sort((a, b) => a.investor.localeCompare(b.investor));
}

export default function App() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState(SORT.INVESTOR);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const searched = SAMPLE_HOLDINGS.filter((h) => matchesQuery(h, query));
    return sortHoldings(searched, sortBy);
  }, [query, sortBy]);

  function handleSearch(nextQuery) {
    setQuery(nextQuery);
    setSelected(null);
  }

  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: UI.PAGE_MARGIN_TOP }}>
        <h1>Welcome to InvestTrack</h1>
        <p>A learning tool to follow investors and market trends</p>

        <SearchBar onSearch={handleSearch} />

        <div style={{ marginTop: UI.SORT_MARGIN_TOP }}>
          <SortPicker value={sortBy} onChange={setSortBy} />
        </div>

        <Results items={filtered} onSelect={setSelected} />
        <HoldingDetails holding={selected} />
      </div>
    </>
  );
}
