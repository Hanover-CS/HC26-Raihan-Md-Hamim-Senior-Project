import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import StockSearch from "./pages/StockSearch.jsx";
import Compare from "./pages/Compare.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import TopInvestors from "./pages/TopInvestors.jsx";
import About from "./pages/About.jsx";
import InvestorDetail from "./pages/InvestorDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AIChat from './components/AIChat';


export default function App() {
  return (
    <div className="appShell">
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<StockSearch />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/investors" element={<TopInvestors />} />
          <Route path="/investor/:id" element={<InvestorDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AIChat />
    </div>
  );
}