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
  NAV_BG: "#333",
  NAV_PADDING: "10px",
  LINK_MARGIN: "0 10px",
  LINK_COLOR: "white",
  PAGE_MARGIN_TOP: "50px",
  SEARCH_INPUT_WIDTH: "260px",
  SPACING_8: "8px",
  SPACING_10: "10px",
  SPACING_20: "20px",
};

const RAW_SAMPLE_HOLDINGS = [
  { investor: "Berkshire Hathaway", ticker: "AAPL", shares: 915000000 },
  { investor: "Berkshire Hathaway", ticker: "KO", shares: 400000000 },
  { investor: "Vanguard", ticker: "MSFT", shares: 600000000 },
  { investor: "BlackRock", ticker: "NVDA", shares: 250000000 },
];

export const SAMPLE_HOLDINGS = RAW_SAMPLE_HOLDINGS.map((x) => new Holding(x));
export const SORT = {
  INVESTOR_AZ: "INVESTOR_AZ",
  TICKER_AZ: "TICKER_AZ",
  SHARES_DESC: "SHARES_DESC",
};


