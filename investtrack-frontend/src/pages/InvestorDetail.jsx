
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FuturisticBackground from "../components/FuturisticBackground.jsx";

export default function InvestorDetail() {
  const { id } = useParams();
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/investor/${id}/holdings`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch holdings');
        return res.json();
      })
      .then(data => {
        setHoldings(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const formatValue = (value) => `$${value.toLocaleString()}`;
  const formatShares = (shares) => shares.toLocaleString();

  return (
    <div className="page">
      <FuturisticBackground />
      <div className="pageHead">
        <h1>Investor Holdings</h1>
        <p className="muted">CIK: {id}</p>
      </div>

      <section className="panel">
        <div className="card">
          {loading && <p>Loading holdings...</p>}
          {error && <p className="muted" style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && holdings.length === 0 && (
            <p className="muted">No holdings data available.</p>
          )}
          {!loading && !error && holdings.length > 0 && (
            <table className="investor-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Shares</th>
                  <th>Estimated Value</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((h, idx) => (
                  <tr key={idx}>
                    <td>
                      <Link to={`/stock?symbol=${h.symbol}`}>{h.symbol}</Link>
                    </td>
                    <td>{formatShares(h.shares)}</td>
                    <td>{formatValue(h.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div style={{ marginTop: '1rem' }}>
            <Link to="/investors">← Back to Top Investors</Link>
          </div>
        </div>
      </section>
    </div>
  );
}