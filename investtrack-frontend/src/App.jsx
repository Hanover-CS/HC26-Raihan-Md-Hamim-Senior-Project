import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import AnnotatedBibliography from "./pages/AnnotatedBibliography";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/annotated-bibliography" element={<AnnotatedBibliography />} />
      </Routes>
    </>
  );
}
