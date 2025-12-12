/**
 * File: constants.js
 * Purpose: Central place for shared constants to avoid magic values and duplication.
 */

import Holding from "./models/Holding";

export const ROUTES = {
  HOME: "/",
  PROPOSAL: "/proposal",
  ANNOTATED: "/annotated",
};

export const SORT = {
  INVESTOR_AZ: "INVESTOR_AZ",
  TICKER_AZ: "TICKER_AZ",
  SHARES_DESC: "SHARES_DESC",
};

export const UI = {
  APP_NAME: "InvestTrack",
  SUBTITLE: "A learning tool to follow investors and market trends",
  SEARCH_PLACEHOLDER: "Search investor or ticker (ex: Berkshire, AAPL)",
  MAX_RESULTS: 50,
};

const RAW_SAMPLE_HOLDINGS = [
  { investor: "Berkshire Hathaway", ticker: "AAPL", shares: 915000000, sector: "Tech" },
  { investor: "Berkshire Hathaway", ticker: "KO", shares: 400000000, sector: "Consumer" },
  { investor: "Vanguard", ticker: "MSFT", shares: 600000000, sector: "Tech" },
  { investor: "BlackRock", ticker: "NVDA", shares: 250000000, sector: "Tech" },
  { investor: "State Street", ticker: "AMZN", shares: 120000000, sector: "Consumer" },
  { investor: "Fidelity", ticker: "TSLA", shares: 95000000, sector: "Auto" },
  { investor: "Vanguard", ticker: "GOOGL", shares: 210000000, sector: "Tech" },
  { investor: "BlackRock", ticker: "JPM", shares: 180000000, sector: "Finance" },
  { investor: "State Street", ticker: "V", shares: 140000000, sector: "Finance" },
  { investor: "Fidelity", ticker: "META", shares: 110000000, sector: "Tech" },
];

export const SAMPLE_HOLDINGS = RAW_SAMPLE_HOLDINGS.map((x) => new Holding(x));

export function formatShares(n) {
  return Number(n).toLocaleString();
}
