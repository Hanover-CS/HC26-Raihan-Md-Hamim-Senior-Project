/**
 * File: Results.jsx
 * Purpose: Displays holdings filtered by the current search query.
 */
export default function Results({ items }) {
  if (!items || items.length === 0) {
    return (
      <div>
        <h2>Results</h2>
        <p>No results.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {items.map((x) => (
          <li key={`${x.investor}-${x.ticker}`}>
            <strong>{x.investor}</strong> — {x.ticker} —{" "}
            {Number(x.shares).toLocaleString()} shares
          </li>
        ))}
      </ul>
    </div>
  );
}
