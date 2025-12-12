/**
 * File: App.jsx
 * Purpose: InvestTrack home page. Search, sort, favorite, and select holdings to view details.
 */

import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import SortPicker from "./components/SortPicker";
import Results from "./components/Results";
import HoldingDetails from "./components/HoldingDetails";
import { SAMPLE_HOLDINGS, SORT, UI } from "./constants";

function sortHoldings(list, sortBy) {
  const copy = [...list];

  if (sortBy === SORT.TICKER_AZ) {
    return copy.sort((a, b) => a.ticker.localeCompare(b.ticker));
  }
  if (sortBy === SORT.SHARES_DESC) {
    return copy.sort((a, b) => b.shares - a.shares);
  }
  return copy.sort((a, b) => a.investor.localeCompare(b.investor));
}

export default function App() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState(SORT.INVESTOR_AZ);
  const [selected, setSelected] = useState(null);

  // favorites stored as Set of holding.key()
  const [favorites, setFavorites] = useState(() => new Set());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const selectedKey = selected ? selected.key() : null;

  const filtered = useMemo(() => {
    let list = SAMPLE_HOLDINGS.filter((h) => h.matchesQuery(query));

    if (showFavoritesOnly) {
      list = list.filter((h) => favorites.has(h.key()));
    }

    list = sortHoldings(list, sortBy);
    return list.slice(0, UI.MAX_RESULTS);
  }, [query, sortBy, favorites, showFavoritesOnly]);

  function handleSearch(nextQuery) {
    setQuery(nextQuery);
    setSelected(null);
  }

  function toggleFavorite(holding) {
    const key = holding.key();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="cardBody">
          <h1 className="h1">{UI.APP_NAME}</h1>
          <p className="sub">{UI.SUBTITLE}</p>

          <div className="row" style={{ marginTop: 14 }}>
            <SearchBar onSearch={handleSearch} />

            <div className="row">
              <span className="pill">Sort</span>
              <SortPicker value={sortBy} onChange={setSortBy} />
            </div>

            <button
              className={`btn ${showFavoritesOnly ? "btnPrimary" : ""}`}
              onClick={() => setShowFavoritesOnly((v) => !v)}
            >
              {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid2" style={{ marginTop: 16 }}>
        <div>
          <Results
            items={filtered}
            selectedKey={selectedKey}
            onSelect={setSelected}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        <HoldingDetails holding={selected} />
      </div>

      <p className="small" style={{ marginTop: 16 }}>
        Built with React + Vite. Next step: replace sample data with parsed 13F filings.
      </p>
    </div>
  );
}
