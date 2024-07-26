import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.1, color: '#3b82f6' },
    transition: { duration: 0.3 }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link to="/about" className="hover:text-blue-300 transition duration-300">About</Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link to="/academics" className="hover:text-blue-300 transition duration-300">Academics</Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link to="/admissions" className="hover:text-blue-300 transition duration-300">Admissions</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p className="mb-2">Email: info@springdale.edu</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6 text-3xl">
              <motion.a 
                href="#" 
                className="hover:text-blue-300 transition duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-blue-300 transition duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-blue-300 transition duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
