 
import { useState, useEffect } from 'react';

export default function StockNews({ symbol }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!symbol) return;
    
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Option 1: Using RapidAPI (recommended)
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
          }
        };
        
        const response = await fetch(
          `https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=${symbol}%3ANASDAQ`,
          options
        );
        const data = await response.json();
        setNews(data.data?.news || []);
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, [symbol]);

  if (loading) return <div className="news-section">Loading news...</div>;
  if (error) return <div className="news-section error">{error}</div>;
  if (!news.length) return <div className="news-section">No recent news</div>;

  return (
    <div className="news-section">
      <h3>Recent News</h3>
      <div className="news-list">
        {news.map((item, idx) => (
          <div key={idx} className="news-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h4>{item.title}</h4>
              <p className="news-meta">
                {item.source} • {new Date(item.published_at).toLocaleDateString()}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}