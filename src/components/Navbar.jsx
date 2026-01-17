import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-5 bg-black backdrop-blur-sm">
        {/* Logo */}
        <Link to="/" className="z-50">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter uppercase text-white cursor-pointer">
            GLAMIFY
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-bold tracking-widest uppercase text-sm text-white">
          <Link to="/" className="hover:text-[#FF99E2] transition">Home</Link>
          <Link to="/service" className="hover:text-[#FF99E2] transition">Service</Link>
          <Link to="/about" className="hover:text-[#FF99E2] transition">About</Link>
          <Link to="/contact" className="hover:text-[#FF99E2] transition">Contact</Link>
          <Link to="/blog" className="hover:text-[#FF99E2] transition">Blog</Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 border border-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-white w-44"
          />
          <button className="text-white text-xs uppercase hover:text-[#FF99E2]">
            Search
          </button>
        </div>

       

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-4 text-white hover:text-[#FF99E2] transition z-50"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

     

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 pt-20 px-6 py-10 md:hidden"
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-8 font-bold tracking-widest uppercase text-lg text-white">
              <Link 
                to="/" 
                className="hover:text-[#FF99E2] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/service" 
                className="hover:text-[#FF99E2] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
              <Link 
                to="/about" 
                className="hover:text-[#FF99E2] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-[#FF99E2] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className="hover:text-[#FF99E2] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>

            {/* Mobile Search in Menu */}
            <div className="mt-12 flex items-center gap-2 border border-white rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-white w-full"
              />
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  // Handle search here
                }}
                className="text-white text-xs uppercase hover:text-[#FF99E2]"
              >
                Search
              </button>
            </div>

            {/* Close Menu Area */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#FF99E2] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;