/**
 * File: holdings.js
 * Purpose: Filtering and sorting helpers for holdings.
 */

export function filterHoldings(holdings, query) {
  const trimmed = (query || "").trim();
  if (!trimmed) return holdings;

  return holdings.filter((h) => h.matchesQuery(trimmed));
}

export function sortHoldings(holdings, sortMode) {
  if (!sortMode || sortMode === "NONE") return holdings;

  const copy = [...holdings];

  if (sortMode === "SHARES_DESC") {
    copy.sort((a, b) => b.shares - a.shares);
  }

  if (sortMode === "SHARES_ASC") {
    copy.sort((a, b) => a.shares - b.shares);
  }

  return copy;
}
// src/utils/holdings.js

const FAVORITES_KEY = "investtrack:favorites";

// returns a Set of favorite keys
export function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr);
  } catch {
    return new Set();
  }
}

// accepts a Set or Array of keys and saves it
export function saveFavorites(favs) {
  const arr = Array.isArray(favs) ? favs : Array.from(favs ?? []);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
}
