/**
 * File: Holding.js
 * Purpose: Models a single investor holding and provides basic helpers.
 */

export default class Holding {
  constructor({ investor, ticker, shares }) {
    this.investor = investor;
    this.ticker = ticker;
    this.shares = shares;
  }

  matchesQuery(query) {
    if (!query) return true;

    const q = query.toLowerCase();
    const investor = this.investor.toLowerCase();
    const ticker = this.ticker.toLowerCase();

    return investor.includes(q) || ticker.includes(q);
  }

  key() {
    return `${this.investor}-${this.ticker}`;
  }
}
