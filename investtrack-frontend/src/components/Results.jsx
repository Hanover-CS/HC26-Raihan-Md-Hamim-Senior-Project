/**
 * File: Results.jsx
 * Purpose: Displays holdings filtered by the current search query and allows selection.
 */

import { UI } from "../constants";

export default function Results({ items, onSelect }) {
  const listStyle = { listStyle: "none", padding: 0 };

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
      <ul style={listStyle}>
        {items.map((x) => (
          <li
            key={`${x.investor}-${x.ticker}`}
            style={{ cursor: "pointer", marginBottom: UI.SPACING_8 }}
            onClick={() => onSelect?.(x)}
          >
            <strong>{x.investor}</strong> — {x.ticker} —{" "}
            {x.shares.toLocaleString()} shares
          </li>
        ))}
      </ul>
      <p style={{ marginTop: UI.SPACING_10 }}>
        Tip: click an item to view details.
      </p>
    </div>
  );
}
