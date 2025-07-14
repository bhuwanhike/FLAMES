import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Explore from "./Routes/Explore";
import Navbar from "./components/Navbar";
import Startup from "./Routes/Startup";
import Investor from "./Routes/Investors";
import About from "./Routes/About";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Settings from "./Routes/Settings";

function App() {
  const location = useLocation();
  const hideNavbarOnPaths = ["/settings"];
  return (
    <AuthProvider>
      {!hideNavbarOnPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
