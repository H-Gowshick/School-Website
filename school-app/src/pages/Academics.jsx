import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CurriculumSection = ({ level, subjects, isOpen, toggleOpen }) => (
  <motion.div 
    className="mb-8 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    layout
  >
    <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
      <h3 className="text-2xl font-bold text-indigo-800">{level}</h3>
      <motion.svg
        className="w-6 h-6 text-indigo-600"
        animate={{ rotate: isOpen ? 180 : 0 }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </motion.svg>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="grid grid-cols-2 gap-4 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {subjects.map((subject, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-800">{subject}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </motion.div>
);

const MethodologyItem = ({ item, index }) => (
  <motion.li 
    className="flex items-center mb-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
  >
    <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>{item}</span>
  </motion.li>
);

const ResourceItem = ({ item, index }) => (
  <motion.li 
    className="flex items-center mb-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
  >
    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    <span>{item}</span>
  </motion.li>
);

const Academics = () => {
  const [openCurriculum, setOpenCurriculum] = useState(null);
  const [activeSection, setActiveSection] = useState('curriculum');

  const curricula = [
    {
      level: 'Primary (Grades 1-5)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education']
    },
    {
      level: 'Secondary (Grades 6-10)',
      subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art']
    },
    {
      level: 'Senior Secondary (Grades 11-12)',
      subjects: [
        'Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English',
        'Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English'
      ]
    }
  ];

  const methodologies = [
    "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
  ];

  const resources = [
    'Digital classrooms',
    'Interactive learning modules',
    'Access to online educational platforms'
  ];

  const toggleCurriculum = (index) => {
    setOpenCurriculum(openCurriculum === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Academics
        </motion.h1>

        <div className="flex justify-center mb-8">
          <button 
            className={`px-6 py-2 rounded-l-lg ${activeSection === 'curriculum' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('curriculum')}
          >
            Curriculum
          </button>
          <button 
            className={`px-6 py-2 ${activeSection === 'methodology' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('methodology')}
          >
            Methodology
          </button>
          <button 
            className={`px-6 py-2 rounded-r-lg ${activeSection === 'resources' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('resources')}
          >
            Resources
          </button>
        </div>
        
        <AnimatePresence mode="wait">
          {activeSection === 'curriculum' && (
            <motion.section 
              key="curriculum"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Curriculum</h2>
              {curricula.map((curriculum, index) => (
                <CurriculumSection 
                  key={index} 
                  level={curriculum.level} 
                  subjects={curriculum.subjects} 
                  isOpen={openCurriculum === index}
                  toggleOpen={() => toggleCurriculum(index)}
                />
              ))}
            </motion.section>
          )}

          {activeSection === 'methodology' && (
            <motion.section 
              key="methodology"
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Teaching Methodology</h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                We use a blend of traditional and modern teaching techniques to cater to different learning styles.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {methodologies.map((item, index) => (
                  <MethodologyItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.section>
          )}

          {activeSection === 'resources' && (
            <motion.section 
              key="resources"
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Educational Resources</h2>
              <ul className="space-y-4">
                {resources.map((item, index) => (
                  <ResourceItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Academics;
