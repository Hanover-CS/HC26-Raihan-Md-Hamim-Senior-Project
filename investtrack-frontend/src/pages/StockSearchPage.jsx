import { useState } from "react";
import { quoteShort } from "../api/fmp";

export default function StockSearch() {
  const [symbol, setSymbol] = useState("");
  const [stock, setStock] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setError("");
    setStock(null);
    setLoading(true);

    try {
      const data = await quoteShort(symbol);
      setStock(data);
    } catch {
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <h1>Stock Search</h1>

      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="AAPL"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {stock && (
        <div className="card">
          <h2>{stock.symbol}</h2>
          <p>Price: ${stock.price}</p>
          <p style={{ color: stock.change >= 0 ? "#22c55e" : "#ef4444" }}>
            Change: {stock.change}
          </p>
          <p>Volume: {stock.volume}</p>
        </div>
      )}
    </div>
  );
}
