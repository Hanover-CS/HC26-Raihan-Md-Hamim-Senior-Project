import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => (isActive ? "navLink active" : "navLink");

export default function NavBar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        <div className="brand">
          <span className="brandDot" />
          <span className="brandText">InvestTrack</span>
        </div>
        <nav className="nav">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/stock">Stock Search</NavLink>
          <NavLink className={linkClass} to="/compare">Compare</NavLink>
          <NavLink className={linkClass} to="/watchlist">Watchlist</NavLink>
          <NavLink className={linkClass} to="/investors">Top Investors</NavLink>
          <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}