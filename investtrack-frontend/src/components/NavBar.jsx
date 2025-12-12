/**
 * File: NavBar.jsx
 * Purpose: Top navigation bar that provides links to the main routes.
 */

import { Link } from "react-router-dom";
import { ROUTES, UI } from "../constants";

export default function NavBar() {
  const linkStyle = { color: UI.LINK_COLOR, margin: UI.LINK_MARGIN };

  return (
    <nav style={{ background: UI.NAV_BG, padding: UI.NAV_PADDING }}>
      <Link style={linkStyle} to={ROUTES.HOME}>Home</Link>
      <Link style={linkStyle} to={ROUTES.PROPOSAL}>Proposal</Link>
      <Link style={linkStyle} to={ROUTES.ANNOTATED}>Annotated Bibliography</Link>
    </nav>
  );
}
