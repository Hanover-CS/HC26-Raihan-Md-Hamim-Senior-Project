/**
 * File: SearchBar.jsx
 * Purpose: Search UI that calls onSearch with trimmed text and supports clear.
 */

import { useState } from "react";
import { UI } from "../constants";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function submit() {
    onSearch(text.trim());
  }

  function clear() {
    setText("");
    onSearch("");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") submit();
  }

  return (
    <div className="row" style={{ marginTop: 14 }}>
      <input
        className="input"
        placeholder={UI.SEARCH_PLACEHOLDER}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />

      <button className="btn btnPrimary" onClick={submit}>
        Search
      </button>

      <button className="btn" onClick={clear} aria-label="Clear search">
        Clear
      </button>
    </div>
  );
}
