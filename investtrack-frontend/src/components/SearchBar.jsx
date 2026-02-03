export default function SearchBar({ symbol, setSymbol }) {
  return (
    <div>
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="AAPL"
      />
      <button style={{ marginLeft: "0.5rem" }}>Search</button>
    </div>
  );
}


