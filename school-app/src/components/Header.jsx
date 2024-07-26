import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wider hover:text-blue-300 transition duration-300">Springdale Public School</Link>
        <nav className="hidden md:flex space-x-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="text-lg font-medium hover:text-blue-300 transition duration-300">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about" className="text-lg font-medium hover:text-blue-300 transition duration-300">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/academics" className="text-lg font-medium hover:text-blue-300 transition duration-300">Academics</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/admissions" className="text-lg font-medium hover:text-blue-300 transition duration-300">Admissions</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/faculty" className="text-lg font-medium hover:text-blue-300 transition duration-300">Faculty</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/students" className="text-lg font-medium hover:text-blue-300 transition duration-300">Students</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/gallery" className="text-lg font-medium hover:text-blue-300 transition duration-300">Gallery</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="text-lg font-medium hover:text-blue-300 transition duration-300">Contact</Link>
          </motion.div>
        </nav>
        <button 
          className="md:hidden focus:outline-none p-2 rounded hover:bg-blue-800 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-blue-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Home</Link>
          <Link to="/about" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">About</Link>
          <Link to="/academics" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Academics</Link>
          <Link to="/admissions" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Admissions</Link>
          <Link to="/faculty" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Faculty</Link>
          <Link to="/students" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Students</Link>
          <Link to="/gallery" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Gallery</Link>
          <Link to="/contact" className="block py-3 px-6 text-sm hover:bg-blue-700 transition duration-300">Contact</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
