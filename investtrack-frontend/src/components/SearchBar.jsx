/**
 * File: SearchBar.jsx
 * Purpose: Controlled search input UI that triggers an onSearch callback.
 */
import { useState } from "react";
import { UI } from "../constants";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const wrap = {
    display: "flex",
    gap: UI.GAP_12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: UI.GAP_16,
  };

  const input = {
    width: UI.INPUT_WIDTH,
    padding: "10px 12px",
    borderRadius: UI.RADIUS_MD,
    border: `1px solid ${UI.CARD_BORDER}`,
    background: "rgba(0,0,0,0.25)",
    color: "white",
    outline: "none",
  };

  const btn = {
    padding: "10px 14px",
    borderRadius: UI.RADIUS_MD,
    border: `1px solid ${UI.CARD_BORDER}`,
    background: "rgba(255,255,255,0.10)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value.trim());
  }

  return (
    <form style={wrap} onSubmit={handleSubmit}>
      <input
        style={input}
        placeholder="Search investor or ticker"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button style={btn} type="submit">
        Search
      </button>
    </form>
  );
}
