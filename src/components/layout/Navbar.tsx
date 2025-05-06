import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 font-medium transition-colors ${
      isActive 
        ? 'text-primary-600' 
        : 'text-gray-700 hover:text-primary-600'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Printer className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold">PrintCraft Studio</span>
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/portfolio" className={navLinkClasses}>Portfolio</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            
            <NavLink 
              to="/contact" 
              className="ml-4 btn btn-primary"
            >
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              <NavLink to="/" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100">Home</NavLink>
              <NavLink to="/about" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100">About</NavLink>
              <NavLink to="/services" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100">Services</NavLink>
              <NavLink to="/portfolio" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100">Portfolio</NavLink>
              <NavLink to="/contact" className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100">Contact</NavLink>
              <NavLink to="/contact" className="block px-3 py-2 mt-4 btn btn-primary w-full text-center">Get a Quote</NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;