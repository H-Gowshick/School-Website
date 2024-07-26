import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Form from '../components/Form';

const AdmissionStep = ({ number, title, description, index }) => (
  <motion.div 
    className="flex items-start mb-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
      {number}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const DateItem = ({ date, event, index }) => (
  <motion.li 
    className="flex items-center mb-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <svg className="w-8 h-8 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800">{date}</span>
      <p className="text-gray-600">{event}</p>
    </div>
  </motion.li>
);

const Admissions = () => {
  const [activeSection, setActiveSection] = useState('process');

  const handleSubmit = (formData) => {
    console.log('Admission form submitted:', formData);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          Admissions
        </motion.h1>

        <div className="flex justify-center mb-8">
          <button 
            className={`px-6 py-2 rounded-l-lg ${activeSection === 'process' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('process')}
          >
            Process
          </button>
          <button 
            className={`px-6 py-2 ${activeSection === 'apply' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('apply')}
          >
            Apply Now
          </button>
          <button 
            className={`px-6 py-2 rounded-r-lg ${activeSection === 'dates' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} font-semibold transition-colors duration-300`}
            onClick={() => setActiveSection('dates')}
          >
            Important Dates
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeSection === 'process' && (
            <motion.section 
              key="process"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-500 pb-2">Admission Process</h2>
              <AdmissionStep 
                number="1" 
                title="Submit Application" 
                description="Admission forms are available for download. Submit the completed form along with required documents at the school office."
                index={0}
              />
              <AdmissionStep 
                number="2" 
                title="Criteria" 
                description="Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
                index={1}
              />
              <AdmissionStep 
                number="3" 
                title="Entrance Test" 
                description="Qualified applicants will be invited to take an entrance exam."
                index={2}
              />
              <AdmissionStep 
                number="4" 
                title="Interview" 
                description="Selected students and parents will be called for an interview."
                index={3}
              />
              <AdmissionStep 
                number="5" 
                title="Final Decision" 
                description="Admission results will be communicated to all applicants."
                index={4}
              />
            </motion.section>
          )}

          {activeSection === 'apply' && (
            <motion.section 
              key="apply"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-500 pb-2">Apply Now</h2>
              <Form onSubmit={handleSubmit} />
            </motion.section>
          )}

          {activeSection === 'dates' && (
            <motion.section 
              key="dates"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-500 pb-2">Important Dates</h2>
              <ul className="space-y-4">
                <DateItem date="March 1st" event="Admission Form Availability" index={0} />
                <DateItem date="March 31st" event="Last Date for Submission" index={1} />
                <DateItem date="April 15th" event="Entrance Test" index={2} />
                <DateItem date="April 30th" event="Announcement of Results" index={3} />
              </ul>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admissions;
