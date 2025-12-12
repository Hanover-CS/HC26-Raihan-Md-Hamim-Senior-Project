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

export const UI = {
  APP_MAX_WIDTH: "980px",

  NAV_HEIGHT: "64px",
  NAV_BLUR: "12px",
  NAV_BORDER: "rgba(255,255,255,0.10)",

  CARD_BG: "rgba(255,255,255,0.06)",
  CARD_BORDER: "rgba(255,255,255,0.12)",
  TEXT_MUTED: "rgba(255,255,255,0.70)",

  RADIUS_LG: "16px",
  RADIUS_MD: "12px",

  GAP_8: "8px",
  GAP_12: "12px",
  GAP_16: "16px",
  GAP_24: "24px",

  INPUT_WIDTH: "320px",
};

export const SORT = {
  INVESTOR_AZ: "INVESTOR_AZ",
  TICKER_AZ: "TICKER_AZ",
  SHARES_DESC: "SHARES_DESC",
};

const RAW_SAMPLE = [
  { investor: "Berkshire Hathaway", ticker: "AAPL", shares: 915000000 },
  { investor: "Berkshire Hathaway", ticker: "KO", shares: 400000000 },
  { investor: "Vanguard", ticker: "MSFT", shares: 600000000 },
  { investor: "BlackRock", ticker: "NVDA", shares: 250000000 },
];

export const SAMPLE_HOLDINGS = RAW_SAMPLE.map((x) => new Holding(x));
