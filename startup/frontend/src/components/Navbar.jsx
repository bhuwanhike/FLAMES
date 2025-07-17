import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../contexts/auth-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, Fletter, logout } = useContext(AuthContext);

  const [settingToggle, setSettingToggle] = useState(false);

  const handleSettingToggle = () => setSettingToggle(!settingToggle);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          PitchPort
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-600">
            Explore
          </Link>
          <Link to="/startups" className="hover:text-blue-600">
            Startups
          </Link>
          <Link to="/investors" className="hover:text-blue-600">
            Investors
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <div className="flex items-center">
            <div className="flex items-center w-10 h-10 rounded-full mr-2"></div>
            <span className="text-sm font-medium"></span>
          </div>
          {!isLoggedIn && (
            <Link
              to="/login"
              className="ml-4 px-4 py-2 bg-blue-500 !text-white rounded"
            >
              Login / Signup
            </Link>
          )}

          {isLoggedIn && (
            <div
              className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl hover:cursor-pointer"
              onClick={handleSettingToggle}
            >
              {Fletter}
            </div>
          )}

          {settingToggle && (
            <div className="absolute top-20 right-70 bg-white p-4 rounded-lg shadow-lg z-50 ">
              <Link
                to="/settings/profile"
                onClick={() => {
                  setSettingToggle(false);
                }}
                className="block hover:text-blue-600 mb-2"
              >
                Settings
              </Link>
              <div
                onClick={() => {
                  logout();
                  setSettingToggle(false);
                }}
                className=" hover:text-red-600 hover:cursor-pointer text-red-400 border-t-2 border-gray-200 pt-2"
              >
                Log out
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white p-4 rounded-lg shadow-lg absolute top-16 right-4`}
      >
        <Link to="/" className="block hover:text-blue-600 mb-2">
          Explore
        </Link>
        <Link to="/startups" className="block hover:text-blue-600 mb-2">
          Startups
        </Link>
        <Link to="/investors" className="block hover:text-blue-600 mb-2">
          Investors
        </Link>
        <Link to="/about" className="block hover:text-blue-600 mb-2">
          About
        </Link>
        {!isLoggedIn && (
          <Link
            to="/login"
            className="block bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Login / Signup
          </Link>
        )}
        {
          <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            {Fletter}
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
