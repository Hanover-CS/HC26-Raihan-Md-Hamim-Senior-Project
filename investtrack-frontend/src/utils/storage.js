const KEY = "investtrack_watchlist_v1";

export function loadWatchlist() {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveWatchlist(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addToWatchlist(symbol) {
  const s = symbol.trim().toUpperCase();
  if (!s) return loadWatchlist();
  const list = loadWatchlist();
  const next = Array.from(new Set([s, ...list]));
  saveWatchlist(next);
  return next;
}

export function removeFromWatchlist(symbol) {
  const s = symbol.trim().toUpperCase();
  const list = loadWatchlist();
  const next = list.filter((x) => x !== s);
  saveWatchlist(next);
  return next;
}
