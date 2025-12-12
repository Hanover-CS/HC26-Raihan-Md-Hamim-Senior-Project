/**
 * File: SortPicker.jsx
 * Purpose: Lets the user select how to sort the results list.
 */

import { SORT, UI } from "../constants";

export default function SortPicker({ value, onChange }) {
  return (
    <div style={{ marginTop: UI.SPACING_10 }}>
      <label>
        Sort:{" "}
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value={SORT.INVESTOR_AZ}>Investor (A-Z)</option>
          <option value={SORT.TICKER_AZ}>Ticker (A-Z)</option>
          <option value={SORT.SHARES_DESC}>Shares (High → Low)</option>
        </select>
      </label>
    </div>
  );
}
