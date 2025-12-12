/**
 * File: HoldingDetails.jsx
 * Purpose: Shows details for a selected holding (second key feature: selection + details panel).
 */
import { UI } from "../constants";

export default function HoldingDetails({ holding }) {
  const card = {
    margin: `${UI.GAP_16} auto 0`,
    maxWidth: UI.APP_MAX_WIDTH,
    background: UI.CARD_BG,
    border: `1px solid ${UI.CARD_BORDER}`,
    borderRadius: UI.RADIUS_LG,
    padding: "18px",
  };

  const muted = { color: UI.TEXT_MUTED };

  if (!holding) {
    return (
      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Holding Details</h3>
        <p style={muted}>Select a result to view details.</p>
      </div>
    );
  }

  return (
    <div style={card}>
      <h3 style={{ marginTop: 0 }}>Holding Details</h3>
      <p>
        <strong>Investor:</strong> {holding.investor}
      </p>
      <p>
        <strong>Ticker:</strong> {holding.ticker}
      </p>
      <p>
        <strong>Shares:</strong> {holding.shares.toLocaleString()}
      </p>
      <p style={muted}>
        Next step later: replace sample data with real SEC 13F data.
      </p>
    </div>
  );
}

