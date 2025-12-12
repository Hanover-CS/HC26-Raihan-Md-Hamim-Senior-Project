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
