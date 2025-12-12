/**
 * File: Results.jsx
 * Purpose: Displays holdings filtered by the current query and supports selecting an item.
 */
import { UI } from "../constants";

export default function Results({ items, selectedKey, onSelect }) {
  const card = {
    margin: `${UI.GAP_24} auto 0`,
    maxWidth: UI.APP_MAX_WIDTH,
    background: UI.CARD_BG,
    border: `1px solid ${UI.CARD_BORDER}`,
    borderRadius: UI.RADIUS_LG,
    padding: "18px",
  };

  const title = { margin: 0, textAlign: "center" };
  const muted = { color: UI.TEXT_MUTED, textAlign: "center" };

  const list = {
    listStyle: "none",
    padding: 0,
    margin: `${UI.GAP_16} 0 0`,
    display: "grid",
    gap: UI.GAP_12,
  };

  const rowBase = {
    display: "flex",
    justifyContent: "space-between",
    gap: UI.GAP_12,
    padding: "12px 12px",
    borderRadius: UI.RADIUS_MD,
    border: `1px solid ${UI.CARD_BORDER}`,
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer",
  };

  if (!items || items.length === 0) {
    return (
      <div style={card}>
        <h2 style={title}>Results</h2>
        <p style={muted}>No results.</p>
      </div>
    );
  }

  return (
    <div style={card}>
      <h2 style={title}>Results</h2>
      <p style={muted}>Click a row to view details.</p>

      <ul style={list}>
        {items.map((x) => {
          const key = `${x.investor}-${x.ticker}`;
          const isSelected = key === selectedKey;

          const row = {
            ...rowBase,
            outline: isSelected ? "2px solid rgba(0,180,255,0.55)" : "none",
            background: isSelected ? "rgba(0,180,255,0.10)" : rowBase.background,
          };

          return (
            <li key={key} style={row} onClick={() => onSelect(x)}>
              <div>
                <div style={{ fontWeight: 800 }}>{x.investor}</div>
                <div style={{ color: UI.TEXT_MUTED }}>{x.ticker}</div>
              </div>

              <div style={{ fontWeight: 800 }}>
                {x.shares.toLocaleString()} shares
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


