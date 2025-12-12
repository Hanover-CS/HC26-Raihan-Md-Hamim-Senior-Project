import { Link } from "react-router-dom";

export default function NavBar() {
  const linkStyle = { color: "white", margin: "0 10px" };

  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/proposal">Proposal</Link>
      <Link style={linkStyle} to="/annotated">Annotated Bibliography</Link>
    </nav>
  );
}

