import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllText from "./components/AllText";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<AllText />} />
      </Routes>
    </div>
  );
}

export default App;
