// src/pages/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FuturisticBackground from '../components/FuturisticBackground';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(username, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page">
      <FuturisticBackground />
      <div className="pageHead">
        <h1>Create Account</h1>
      </div>
      <section className="panel">
        <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password (min 6 characters)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <button type="submit" className="btn">Sign Up</button>
          </form>
          <p style={{ marginTop: '1rem' }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </div>
  );
}