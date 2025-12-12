/**
 * File: NavBar.jsx
 * Purpose: Top navigation bar that provides links to the main routes.
 */
import { Link } from "react-router-dom";
import { ROUTES, UI } from "../constants";

export default function NavBar() {
  const shell = {
    height: UI.NAV_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 18px",
    borderBottom: `1px solid ${UI.NAV_BORDER}`,
    backdropFilter: `blur(${UI.NAV_BLUR})`,
    position: "sticky",
    top: 0,
    zIndex: 10,
  };

  const brand = {
    fontWeight: 800,
    letterSpacing: "0.4px",
    textDecoration: "none",
    color: "white",
  };

  const pillRow = { display: "flex", gap: UI.GAP_8 };

  const pill = {
    padding: "8px 12px",
    borderRadius: "999px",
    border: `1px solid ${UI.NAV_BORDER}`,
    textDecoration: "none",
    color: "white",
    background: "rgba(255,255,255,0.06)",
  };

  return (
    <nav style={shell}>
      <Link style={brand} to={ROUTES.HOME}>
        InvestTrack
      </Link>

      <div style={pillRow}>
        <Link style={pill} to={ROUTES.HOME}>
          Home
        </Link>
        <Link style={pill} to={ROUTES.PROPOSAL}>
          Proposal
        </Link>
        <Link style={pill} to={ROUTES.ANNOTATED}>
          Annotated Bibliography
        </Link>
      </div>
    </nav>
  );
}
