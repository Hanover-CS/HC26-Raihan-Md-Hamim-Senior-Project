/**
 * File: Holding.js
 * Purpose: Model class representing a single investor holding entry.
 */
export default class Holding {
  constructor({ investor, ticker, shares }) {
    this.investor = investor;
    this.ticker = ticker;
    this.shares = shares;
  }

  matchesQuery(query) {
    const q = query.trim().toLowerCase();
    if (!q) return true;

    return (
      this.investor.toLowerCase().includes(q) ||
      this.ticker.toLowerCase().includes(q)
    );
  }
}
