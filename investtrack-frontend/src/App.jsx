/**
 * File: App.jsx
 * Purpose: Home page for InvestTrack. Search + sort + select + favorites.
 */
import { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SortPicker from "./components/SortPicker";
import Results from "./components/Results";
import HoldingDetails from "./components/HoldingDetails";

import { SAMPLE_HOLDINGS, SORT, UI } from "./constants";
import {
  filterHoldings,
  sortHoldings,
  loadFavorites,
  saveFavorites,
} from "./utils/holdings";

export default function App() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState(SORT.INVESTOR_ASC);
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState(() => loadFavorites());

  const filtered = useMemo(() => {
    const f = filterHoldings(SAMPLE_HOLDINGS, query);
    return sortHoldings(f, sortKey);
  }, [query, sortKey]);

  const isFavorite = selected ? favorites.has(selected.id) : false;

  function handleSearch(nextQuery) {
    setQuery(nextQuery);
    setSelected(null);
  }

  function handleSelect(holding) {
    setSelected(holding);
  }

  function toggleFavorite(holding) {
    const next = new Set(favorites);
    if (next.has(holding.id)) next.delete(holding.id);
    else next.add(holding.id);

    setFavorites(next);
    saveFavorites(next);
  }

  const pageStyle = { background: UI.BG, minHeight: "100vh" };

  const container = {
    maxWidth: UI.MAX_WIDTH,
    margin: "0 auto",
    padding: UI.PAGE_PAD,
    textAlign: "center",
  };

  const title = { marginTop: "10px", color: UI.TITLE, fontSize: "44px" };
  const subtitle = { marginTop: "6px", color: UI.MUTED, fontSize: "16px" };

  return (
    <div style={pageStyle}>
      <NavBar />

      <div style={container}>
        <h1 style={title}>Welcome to InvestTrack</h1>
        <div style={subtitle}>
          A learning tool to follow investors and market trends
        </div>

        <div style={{ marginTop: "18px" }}>
          <SearchBar onSearch={handleSearch} />
          <SortPicker value={sortKey} onChange={setSortKey} />
        </div>

        <Results
          items={filtered}
          selectedId={selected?.id ?? ""}
          favorites={favorites}
          onSelect={handleSelect}
          onToggleFavorite={toggleFavorite}
        />

        <HoldingDetails holding={selected} isFavorite={isFavorite} />
      </div>
    </div>
  );
}
