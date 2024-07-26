import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

const MotionLink = motion(Link);

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const Home = () => {
  const carouselImages = [
    { 
      url: 'https://www.cedarcollege.sa.edu.au/wp-content/uploads/2022/05/sports2.jpg', 
      alt: 'Annual Sports Day' 
    },
    { 
      url: 'https://dnycf48t040dh.cloudfront.net/Top-US-science-competitions-and-events-for-school-students.jpeg', 
      alt: 'Science Exhibition' 
    },
    { 
      url: 'https://www.bakerschoolpto.org/uploads/1/2/5/0/12506508/1137915_orig.jpg', 
      alt: 'Cultural Fest' 
    },
  ];

  const links = [
    { to: "/academics", text: "Academics", color: "bg-blue-500 hover:bg-blue-600" },
    { to: "/admissions", text: "Admissions", color: "bg-green-500 hover:bg-green-600" },
    { to: "/events", text: "Events", color: "bg-yellow-500 hover:bg-yellow-600" },
    { to: "/contact", text: "Contact Us", color: "bg-red-500 hover:bg-red-600" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Welcome to Our Springdale Public School
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 shadow-xl rounded-xl overflow-hidden"
        >
          <Carousel images={carouselImages} />
        </motion.div>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl text-gray-700 mb-12 text-center max-w-5xl mx-auto"
        >
          Welcome to Springdale Public School, where we nurture young minds for a brighter future. 
        </motion.p>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {links.map((link, index) => (
            <MotionLink
              key={index}
              to={link.to}
              className={`${link.color} text-white p-6 rounded-xl text-center text-lg font-semibold shadow-md`}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {link.text}
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
