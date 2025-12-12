/**
 * File: NavBar.jsx
 * Purpose: Top navigation bar linking to main routes.
 */

import { Link, NavLink } from "react-router-dom";
import { ROUTES, UI } from "../constants";

function navLinkStyle({ isActive }) {
  return {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: isActive ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.20)",
  };
}

export default function NavBar() {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
      <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <Link to={ROUTES.HOME} style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>
            {UI.APP_NAME}
          </Link>

          <div className="row">
            <NavLink to={ROUTES.HOME} style={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to={ROUTES.PROPOSAL} style={navLinkStyle}>
              Proposal
            </NavLink>
            <NavLink to={ROUTES.ANNOTATED} style={navLinkStyle}>
              Annotated Bibliography
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
