/**
 * File: main.jsx
 * Purpose: Application entry point; defines routes and renders layout.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import { ROUTES } from "./constants";

function Proposal() {
  return <h2>Proposal Page (Coming Soon)</h2>;
}

function AnnotatedBibliography() {
  return <h2>Annotated Bibliography (Coming Soon)</h2>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={ROUTES.HOME} element={<App />} />
      <Route path={ROUTES.PROPOSAL} element={<Proposal />} />
      <Route path={ROUTES.ANNOTATED} element={<AnnotatedBibliography />} />
    </Routes>
  </BrowserRouter>
);
