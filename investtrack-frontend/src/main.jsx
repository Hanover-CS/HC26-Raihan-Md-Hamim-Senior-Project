import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";

function Proposal() {
  return <h2>Proposal Page (Coming Soon)</h2>;
}

function AnnotatedBibliography() {
  return <h2>Annotated Bibliography (Coming Soon)</h2>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link style={{ color: "white", margin: "0 10px" }} to="/">Home</Link>
      <Link style={{ color: "white", margin: "0 10px" }} to="/proposal">Proposal</Link>
      <Link style={{ color: "white", margin: "0 10px" }} to="/annotated">Annotated Bibliography</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/proposal" element={<Proposal />} />
      <Route path="/annotated" element={<AnnotatedBibliography />} />
     
    </Routes>
  </BrowserRouter>
);
