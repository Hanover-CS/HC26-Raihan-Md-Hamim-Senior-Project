const API_KEY = import.meta.env.VITE_FMP_API_KEY;

export async function quoteShort(symbol) {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("API error");
  }

  const data = await res.json();
  return data[0];
}
