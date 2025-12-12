/**
 * File: SortPicker.jsx
 * Purpose: Dropdown used to select how results should be sorted.
 */

import { SORT, UI } from "../constants";

export default function SortPicker({ value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div style={{ display: "inline-block", marginTop: UI.SPACING_8 }}>
      <label style={{ marginRight: UI.SPACING_8 }}>
        Sort by:
        <select
          value={value}
          onChange={handleChange}
          style={{ marginLeft: UI.SPACING_8 }}
        >
          <option value={SORT.INVESTOR}>Investor (A→Z)</option>
          <option value={SORT.TICKER}>Ticker (A→Z)</option>
          <option value={SORT.SHARES}>Shares (High→Low)</option>
        </select>
      </label>
    </div>
  );
}
