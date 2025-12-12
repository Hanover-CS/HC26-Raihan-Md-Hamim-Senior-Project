const FAVORITES_KEY = "investtrack:favorites";

export function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function saveFavorites(favs) {
  const arr = Array.isArray(favs) ? favs : Array.from(favs ?? []);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
}
