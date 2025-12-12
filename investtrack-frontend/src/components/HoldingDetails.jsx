/**
 * File: HoldingDetails.jsx
 * Purpose: Shows details for a selected holding (investor, ticker, shares).
 */

import { UI } from "../constants";

export default function HoldingDetails({ holding }) {
  if (!holding) {
    return (
      <div style={{ marginTop: UI.SPACING_20 }}>
        <h2>Details</h2>
        <p>Select a holding to see details.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: UI.SPACING_20 }}>
      <h2>Details</h2>
      <p>
        <strong>Investor:</strong> {holding.investor}
      </p>
      <p>
        <strong>Ticker:</strong> {holding.ticker}
      </p>
      <p>
        <strong>Shares:</strong> {holding.shares.toLocaleString()}
      </p>
    </div>
  );
}
