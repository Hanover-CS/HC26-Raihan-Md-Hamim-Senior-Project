/**
 * File: SearchBar.jsx
 * Purpose: Collects a search query and calls onSearch with a trimmed value.
 */
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function submit() {
    const q = value.trim();
    if (onSearch) onSearch(q);
  }

  return (
    <div>
      <input
        placeholder="Search investor or ticker"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>Search</button>
    </div>
  );
}

