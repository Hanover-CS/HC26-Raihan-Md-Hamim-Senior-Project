/**
 * File: Results.jsx
 * Purpose: Displays holdings filtered by the current search query.
 */

import { UI } from "../constants";

export default function Results({ items }) {
  if (!items || items.length === 0) {
    return (
      <div style={{ marginTop: UI.SPACING_20 }}>
        <h2>Results</h2>
        <p>No results.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: UI.SPACING_20 }}>
      <h2>Results</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((x) => (
          <li key={`${x.investor}-${x.ticker}`}>
            <strong>{x.investor}</strong> — {x.ticker} —{" "}
            {x.shares.toLocaleString()} shares
          </li>
        ))}
      </ul>
    </div>
  );
}
