import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ title, date, description, image, index }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <motion.h3 
        className="font-bold text-2xl mb-2 text-indigo-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 text-sm mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {date}
      </motion.p>
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const Events = () => {
  const events = [
    {
      title: "Annual Science Fair",
      date: "May 15, 2024",
      description: "Students showcase their innovative science projects.",
      image: "https://www.dmschools.org/wp-content/uploads/2012/02/Science-Fair.jpg"
    },
    {
      title: "Sports Day",
      date: "June 10, 2024",
      description: "A day of athletic competitions and team spirit.",
      image: "https://media.licdn.com/dms/image/D5612AQHb4OXiTAUJrA/article-cover_image-shrink_720_1280/0/1702179121573?e=2147483647&v=beta&t=OsymkClVeOYmlUTZh8XwKpPt--ias921dOi8lbEwzvg"
    },
    {
      title: "Art Exhibition",
      date: "July 5, 2024",
      description: "Displaying creative artworks by our talented students.",
      image: "https://www.imagesart.co.uk/cdn/shop/files/exhibition-1-4.jpg?v=1670591371&width=3840"
    },
    {
      title: "Parents' Day",
      date: "August 20, 2024",
      description: "A special day for parents to visit and interact with teachers.",
      image: "https://fortconvent.org/wp-content/uploads/2018/07/IMG_20180712_084656.jpg"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Upcoming Events
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Events;