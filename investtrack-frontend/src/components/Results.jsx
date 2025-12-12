/**
 * File: Results.jsx
 * Purpose: Table that displays holdings and allows selecting + favoriting.
 */

import { formatShares } from "../constants";

export default function Results({ items, selectedKey, onSelect, favorites, onToggleFavorite }) {
  if (!items || items.length === 0) {
    return (
      <div className="card" style={{ marginTop: 16 }}>
        <div className="cardBody">
          <h2 style={{ margin: 0 }}>Results</h2>
          <p className="sub" style={{ marginTop: 10 }}>
            No results. Try a different investor or ticker.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <div className="cardHeader">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h2 style={{ margin: 0 }}>Results</h2>
          <span className="pill">{items.length} items</span>
        </div>
      </div>

      <div className="cardBody">
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th style={{ width: 50 }}></th>
                <th>Investor</th>
                <th>Ticker</th>
                <th>Sector</th>
                <th style={{ textAlign: "right" }}>Shares</th>
              </tr>
            </thead>

            <tbody>
              {items.map((h) => {
                const key = h.key();
                const isSelected = selectedKey === key;
                const isFav = favorites.has(key);

                return (
                  <tr
                    key={key}
                    className={`trClickable ${isSelected ? "trSelected" : ""}`}
                    onClick={() => onSelect(h)}
                  >
                    <td>
                      <button
                        className={`star ${isFav ? "starOn" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(h);
                        }}
                        aria-label="Toggle favorite"
                        title="Favorite"
                      >
                        {isFav ? "★" : "☆"}
                      </button>
                    </td>
                    <td><b>{h.investor}</b></td>
                    <td>{h.ticker}</td>
                    <td>{h.sector}</td>
                    <td style={{ textAlign: "right" }}>{formatShares(h.shares)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="small" style={{ marginTop: 10 }}>
          Tip: click a row to view details. Click ☆ to favorite.
        </p>
      </div>
    </div>
  );
}

