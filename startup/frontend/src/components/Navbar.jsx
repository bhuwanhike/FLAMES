import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-blue-600">Startvestor</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#startups" className="hover:text-blue-600">
            Startups
          </a>
          <a href="#investors" className="hover:text-blue-600">
            Investors
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 pb-4 text-gray-700">
          <a href="#" className="block hover:text-blue-600">
            Home
          </a>
          <a href="#startups" className="block hover:text-blue-600">
            Startups
          </a>
          <a href="#investors" className="block hover:text-blue-600">
            Investors
          </a>
          <a href="#about" className="block hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
