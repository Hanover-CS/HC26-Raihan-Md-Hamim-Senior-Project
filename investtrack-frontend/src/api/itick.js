// src/api/itick.js
const BASE_URL = "https://api.itick.org";
const API_KEY = import.meta.env.VITE_ITICK_API_KEY;

// Simple in-memory cache with TTL (10 seconds)
const cache = new Map();
const CACHE_TTL = 10000; // 10 seconds

export async function fetchQuote(symbol) {
  const cacheKey = symbol.toUpperCase();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`✅ Using cached data for ${symbol}`);
    return cached.data;
  }

  console.log(`🌐 Fetching fresh data for ${symbol}`);
  const url = `${BASE_URL}/stock/quote?region=US&code=${symbol}`;
  const res = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'token': API_KEY
    }
  });

  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Please wait a moment and try again.');
    }
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }

  const result = await res.json();

  if (result.code === 0) {
    const data = result.data;
    const quoteData = {
      symbol: data.s,
      price: data.ld,        // latest price
      change: data.ch,       // change amount
      changePercent: data.chp, // change percent
      volume: data.v
    };
    cache.set(cacheKey, { data: quoteData, timestamp: Date.now() });
    return quoteData;
  } else {
    throw new Error(result.msg || 'API returned error');
  }
}