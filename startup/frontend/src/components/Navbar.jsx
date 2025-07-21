<<<<<<< HEAD
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Settings, LogOut } from "lucide-react";
import { AuthContext } from "../contexts/auth-context";
import ButtonAuth from "./ButtonAuth";
=======
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../contexts/auth-context';
>>>>>>> 3e46983ae0b11c029df7af85aa9bf967de214c2e

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const { isLoggedIn, Fletter, logout } = useContext(AuthContext);

  const settingsRef = useRef(null);

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setSettingsOpen(false);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-slate-900/80 backdrop-blur-sm px-6 py-3 sticky top-0 z-50 border-b border-slate-800 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2  font-semibold "
          onClick={closeAllMenus}
        >
          <span className="logo-animation text-3xl font-bold !text-pink-600 font-poppins">
            PitchPort
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 !text-slate-300 font-semibold items-center text-[1.1rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` transition-colors nav-link !text-cyan-400 ${
                isActive ? "active" : ""
              }`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/startups"
            className={({ isActive }) =>
              ` transition-colors nav-link !text-cyan-400 ${
                isActive ? "active" : ""
              }`
            }
          >
            Startups
          </NavLink>
          <NavLink
            to="/investors"
            className={({ isActive }) =>
              ` transition-colors nav-link !text-cyan-400 ${
                isActive ? "active" : ""
              }`
            }
          >
            Investors
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` transition-colors nav-link !text-cyan-400 ${
                isActive ? "active" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <Link to="/login">
              <ButtonAuth innerText="Login / Signup" />
            </Link>
          ) : (
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setSettingsOpen(!isSettingsOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br from-purple-600 to-cyan-500 ring-2 ring-offset-2 ring-offset-slate-900 ring-cyan-500 hover:scale-105 transition-transform"
              >
                {Fletter}
              </button>
              {isSettingsOpen && (
                <div className="absolute top-14 right-0 w-48 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl py-2 z-50">
                  <Link
                    to="/settings/profile"
                    onClick={closeAllMenus}
                    className="flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50"
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeAllMenus();
                    }}
                    className="w-full flex items-center px-4 py-2 text-sm text-red-400 hover:bg-slate-700/50"
                  >
                    <LogOut size={16} className="mr-2" />
                    Log out
                  </button>
                </div>
              )}
=======
    <nav className='bg-gradient-to-r from-black to-gray-900 shadow-md px-6 py-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        {/* <Link to="/" className="logo-animation text-2xl font-bold">
  PitchPort
</Link> */}
        <Link to='/' className='flex items-center space-x-2'>
          <img src='/logo.png' alt='Logo' className='h-12 w-12 rounded-full' />
          <span className='logo-animation text-2xl font-bold'>PitchPort</span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 text-gray-100 font-medium items-center'>
          <Link to='/' className='hover:underline-offset-2'>
            Explore
          </Link>
          <Link to='/startups' className='hover:text-blue-600'>
            Startups
          </Link>
          <Link to='/investors' className='hover:text-blue-600'>
            Investors
          </Link>
          <Link to='/about' className='hover:text-blue-600'>
            About
          </Link>
          <div className='flex items-center'>
            <div className='flex items-center w-10 h-10 rounded-full mr-2'></div>
            <span className='text-sm font-medium'></span>
          </div>
          {!isLoggedIn && (
            <Link
              to='/login'
              className='ml-4 px-4 py-2 bg-green-500 !text-white rounded'
            >
              Login / Signup
            </Link>
          )}

          {isLoggedIn && (
            <div
              className='bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl hover:cursor-pointer'
              onClick={handleSettingToggle}
            >
              {Fletter}
            </div>
          )}

          {settingToggle && (
            <div className='absolute top-20 right-70 bg-white p-4 rounded-lg shadow-lg z-50 '>
              <Link
                to='/settings/profile'
                onClick={() => {
                  setSettingToggle(false);
                }}
                className='block hover:text-blue-600 mb-2'
              >
                Settings
              </Link>
              <div
                onClick={() => {
                  logout();
                  setSettingToggle(false);
                }}
                className=' hover:text-red-600 hover:cursor-pointer text-red-400 border-t-2 border-gray-200 pt-2'
              >
                Log out
              </div>
>>>>>>> 3e46983ae0b11c029df7af85aa9bf967de214c2e
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
<<<<<<< HEAD
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
=======
        <button className='md:hidden text-gray-700' onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> 3e46983ae0b11c029df7af85aa9bf967de214c2e
        </button>
      </div>

      {/* Mobile Menu */}
<<<<<<< HEAD
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-800">
          <div className="flex flex-col space-y-4 text-lg text-center">
            <Link
              to="/"
              className="text-slate-300 hover:text-cyan-400"
              onClick={closeAllMenus}
            >
              Explore
            </Link>
            <Link
              to="/startups"
              className="text-slate-300 hover:text-cyan-400"
              onClick={closeAllMenus}
            >
              Startups
            </Link>
            <Link
              to="/investors"
              className="text-slate-300 hover:text-cyan-400"
              onClick={closeAllMenus}
            >
              Investors
            </Link>
            <Link
              to="/about"
              className="text-slate-300 hover:text-cyan-400"
              onClick={closeAllMenus}
            >
              About
            </Link>

            <div className="pt-4 border-t border-slate-800">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={closeAllMenus}
                  className="block bg-slate-800 text-slate-300 border border-slate-700 px-5 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors"
                >
                  Login / Signup
                </Link>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br from-purple-600 to-cyan-500">
                      {Fletter}
                    </div>
                    <span className="text-white font-semibold">Welcome!</span>
                  </div>
                  <Link
                    to="/settings/profile"
                    onClick={closeAllMenus}
                    className="w-full text-center text-slate-300 hover:text-cyan-400"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeAllMenus();
                    }}
                    className="w-full text-center text-red-400 hover:text-red-500"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
=======
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white p-4 rounded-lg shadow-lg absolute top-16 right-4`}
      >
        <Link to='/' className='block hover:text-blue-600 mb-2'>
          Explore
        </Link>
        <Link to='/startups' className='block hover:text-blue-600 mb-2'>
          Startups
        </Link>
        <Link to='/investors' className='block hover:text-blue-600 mb-2'>
          Investors
        </Link>
        <Link to='/about' className='block hover:text-blue-600 mb-2'>
          About
        </Link>
        {!isLoggedIn && (
          <Link
            to='/login'
            className='block bg-blue-500 text-white px-4 py-2 rounded mt-2'
          >
            Login / Signup
          </Link>
        )}
        {
          <div className='bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white'>
            {Fletter}
>>>>>>> 3e46983ae0b11c029df7af85aa9bf967de214c2e
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
