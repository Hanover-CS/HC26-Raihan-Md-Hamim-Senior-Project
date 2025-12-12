/**
 * File: SearchBar.jsx
 * Purpose: Collects user input and triggers a search via onSearch callback.
 */

import { useState } from "react";
import { UI } from "../constants";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    onSearch(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: UI.SPACING_20 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search investor or ticker"
        style={{ padding: UI.SPACING_8, width: UI.SEARCH_INPUT_WIDTH }}
      />
      <button
        type="submit"
        style={{ marginLeft: UI.SPACING_10, padding: `${UI.SPACING_8} 12px` }}
      >
        Search
      </button>
    </form>
  );
}
