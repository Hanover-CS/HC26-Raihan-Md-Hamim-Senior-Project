import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Search query:", query);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search investor or company"
        style={{ padding: "8px", width: "260px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px 12px" }}>
        Search
      </button>
    </form>
  );
}
