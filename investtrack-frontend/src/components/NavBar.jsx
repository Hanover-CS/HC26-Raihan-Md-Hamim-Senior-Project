import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <h2>InvestTrack</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Stock Search</Link>
      </div>
    </nav>
  );
}
