import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to InvestTrack</h1>
      <p>A learning tool to follow investors and market trends</p>

      <SearchBar />
      <Results />
    </div>
  );
}
