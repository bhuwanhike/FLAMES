import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Startvestor
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
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
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 pb-4 text-gray-700">
          <Link to="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link to="/startups" className="block hover:text-blue-600">
            Startups
          </Link>
          <Link to="/investors" className="block hover:text-blue-600">
            Investors
          </Link>
          <Link to="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
