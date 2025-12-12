/**
 * File: main.jsx
 * Purpose: Application entry point and route configuration.
 */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import App from "./App";
import Proposal from "./pages/Proposal";
import AnnotatedBibliography from "./pages/AnnotatedBibliography";
import { ROUTES } from "./constants";

function Shell() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<App />} />
        <Route path={ROUTES.PROPOSAL} element={<Proposal />} />
        <Route path={ROUTES.ANNOTATED} element={<AnnotatedBibliography />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  </React.StrictMode>
);
