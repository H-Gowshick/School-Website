import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ title, content, image }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2 text-indigo-700">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const FilterButton = ({ label, activeFilter, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`mr-2 px-6 py-2 rounded-full font-semibold transition duration-300 ${
      activeFilter === label
        ? 'bg-indigo-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {label}
  </motion.button>
);

const Faculty = () => {
  const [filter, setFilter] = useState('All');

  const facultyMembers = [
    { id: 1, name: 'John Doe', content: 'Principal, M.Ed, 20 years of experience in educational administration.', image: 'https://media.istockphoto.com/id/1278976696/photo/mature-man-professor-standing-in-class.jpg?s=612x612&w=0&k=20&c=BBfO7aVkYBTNJ__MbRPXs2apYb4cyI3kJl9MZ2_alvc=' },
    { id: 2, name: 'Jane Smith', content: 'Vice Principal, M.Sc. in Physics, 15 years of teaching experience.', image: 'https://static9.depositphotos.com/1070812/1091/i/450/depositphotos_10916856-stock-photo-teacher-on-background-of-blackboard.jpg' },
    { id: 3, name: 'Emily Johnson', content: 'English Teacher, M.A. in English, 10 years of teaching experience.', image: 'https://t3.ftcdn.net/jpg/02/02/52/36/360_F_202523652_NqEMp50IkORLXlCmJXqgqRBLMW8xBHMP.jpg' },
    { id: 4, name: 'Michael Brown', content: 'Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.', image: 'https://st2.depositphotos.com/3258807/8987/i/450/depositphotos_89870048-stock-photo-professor-checking-students-lecture-attendance.jpg' },
    { id: 5, name: 'Sophia Davis', content: 'Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.', image: 'https://static.vecteezy.com/system/resources/previews/017/536/338/non_2x/young-woman-english-teacher-standing-at-a-whiteboard-giving-an-online-lesson-to-camera-education-at-home-in-self-isolation-during-quarantine-lockdown-photo.jpg' },
    { id: 6, name: 'David Wilson', content: 'Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.', image: 'https://st3.depositphotos.com/16122460/18951/i/450/depositphotos_189510714-stock-photo-portrait-of-male-teacher-near.jpg' },
  ];

  const filteredFaculty = filter === 'All' ? facultyMembers : facultyMembers.filter(member => member.content.includes(filter));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Our Esteemed Faculty
        </motion.h1>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 flex flex-wrap justify-center"
        >
          <FilterButton label="All" activeFilter={filter} onClick={() => setFilter('All')} />
          <FilterButton label="Principal" activeFilter={filter} onClick={() => setFilter('Principal')} />
          <FilterButton label="Vice Principal" activeFilter={filter} onClick={() => setFilter('Vice Principal')} />
          <FilterButton label="Teacher" activeFilter={filter} onClick={() => setFilter('Teacher')} />
        </motion.div>

        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFaculty.map((member) => (
              <Card
                key={member.id}
                title={member.name}
                content={member.content}
                image={member.image}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Faculty;
