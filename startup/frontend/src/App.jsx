import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Navbar from "./components/Navbar";
import Startup from "./Routes/Startup";
import Investor from "./Routes/Investors";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
