import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Menu, X, PhoneCall, NotebookPen } from 'lucide-react'; // Added NotebookPen for services icon
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'About', icon: <User size={18} /> },
    { to: '/services', label: 'Services', icon: <NotebookPen size={18} /> }, // ✅ Added
    { to: '/contact', label: 'Contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left - Logo */}
        <div className="flex items-center gap-4 text-xl font-bold tracking-wide">
          <Link to="/" className="flex items-center gap-2">
          
            <span className="text-blue-600">🌐</span>
            <span>STUDYHUB</span>  
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-1 hover:text-blue-600 transition ${
                location.pathname === to ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner rounded-md mt-2 px-4 py-4 space-y-4"
          >
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 text-lg hover:text-blue-600 transition ${
                  location.pathname === to ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {icon} {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
