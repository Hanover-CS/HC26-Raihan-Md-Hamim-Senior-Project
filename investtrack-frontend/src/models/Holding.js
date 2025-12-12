/**
 * File: Holding.js
 * Purpose: Model class representing a single holding row (investor + ticker + shares).
 */

export default class Holding {
  constructor({ investor, ticker, shares, sector }) {
    this.investor = investor;
    this.ticker = ticker;
    this.shares = shares;
    this.sector = sector ?? "Unknown";
  }

  matchesQuery(query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;

    return (
      this.investor.toLowerCase().includes(q) ||
      this.ticker.toLowerCase().includes(q)
    );
  }

  key() {
    return `${this.investor}__${this.ticker}`;
  }
}
