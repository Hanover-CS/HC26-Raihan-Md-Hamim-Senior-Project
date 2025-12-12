/**
 * File: HoldingDetails.jsx
 * Purpose: Details panel for the selected holding.
 */

import { formatShares } from "../constants";

export default function HoldingDetails({ holding }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <h2 style={{ margin: 0 }}>Details</h2>
      </div>

      <div className="cardBody">
        {!holding ? (
          <p className="sub" style={{ margin: 0 }}>
            Select a result to see details here.
          </p>
        ) : (
          <>
            <div className="pill" style={{ marginBottom: 12 }}>
              Selected
            </div>

            <div className="kv">
              <b>Investor</b>
              <span>{holding.investor}</span>

              <b>Ticker</b>
              <span>{holding.ticker}</span>

              <b>Sector</b>
              <span>{holding.sector}</span>

              <b>Shares</b>
              <span>{formatShares(holding.shares)}</span>
            </div>

            <p className="small" style={{ marginTop: 14 }}>
              Later you can replace this sample data with real SEC 13F data.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

