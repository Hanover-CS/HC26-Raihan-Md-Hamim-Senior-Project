/**
 * File: SortPicker.jsx
 * Purpose: Dropdown used to sort results.
 */

import { SORT } from "../constants";

export default function SortPicker({ value, onChange }) {
  return (
    <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value={SORT.INVESTOR_AZ}>Investor (A→Z)</option>
      <option value={SORT.TICKER_AZ}>Ticker (A→Z)</option>
      <option value={SORT.SHARES_DESC}>Shares (High→Low)</option>
    </select>
  );
}
