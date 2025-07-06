import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Explore from "./Routes/Explore";
import Navbar from "./components/Navbar";
import Startup from "./Routes/Startup";
import Investor from "./Routes/Investors";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Register from "./Routes/Register";
import Login from "./Routes/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
