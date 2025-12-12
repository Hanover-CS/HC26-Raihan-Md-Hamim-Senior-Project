/**
 * File: SortPicker.jsx
 * Purpose: Dropdown to select sorting for the results list.
 */
import { SORT, UI } from "../constants";

export default function SortPicker({ value, onChange }) {
  const row = {
    display: "flex",
    justifyContent: "center",
    marginTop: UI.GAP_12,
  };

  const select = {
    padding: "10px 12px",
    borderRadius: UI.RADIUS_MD,
    border: `1px solid ${UI.CARD_BORDER}`,
    background: "rgba(0,0,0,0.25)",
    color: "white",
    outline: "none",
  };

  return (
    <div style={row}>
      <select style={select} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={SORT.INVESTOR_AZ}>Sort: Investor (A–Z)</option>
        <option value={SORT.TICKER_AZ}>Sort: Ticker (A–Z)</option>
        <option value={SORT.SHARES_DESC}>Sort: Shares (High–Low)</option>
      </select>
    </div>
  );
}
