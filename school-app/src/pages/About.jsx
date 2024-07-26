import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useScroll, animate } from 'framer-motion';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-indigo-500 pb-2">{children}</h2>
);

const FacilityCard = ({ item, image }) => {
  return (
    <motion.div
      className="w-64 h-80 bg-white rounded-xl shadow-xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={item} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item}</h3>
        <p className="text-sm text-gray-600">
          Our {item.toLowerCase()} provides students with the best resources for their educational journey.
        </p>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ year, event }) => (
  <motion.div
    className="flex mb-8"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center mr-4">
      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
        {year}
      </div>
      <div className="h-full w-0.5 bg-indigo-600"></div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
      <p className="text-gray-700">{event}</p>
    </div>
  </motion.div>
);

const AnimatedCounter = ({ value, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <div className="text-center">
      <motion.h3 className="text-4xl font-bold">{rounded}</motion.h3>
      <p>{label}</p>
    </div>
  );
};

const FloatingShape = ({ size, color, speed }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{
        width: size,
        height: size,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      }}
      animate={{
        y: ['0%', '100%'],
        transition: {
          duration: speed,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      }}
    />
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  const timeline = [
    { year: 1985, event: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students." },
    { year: 1995, event: "Expansion of facilities" },
    { year: 2005, event: "Introduction of advanced curriculum" },
    { year: 2020, event: "Integration of digital learning platforms" }
  ];

  return (
    <motion.div style={{ y }} className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 relative overflow-hidden">
      <FloatingShape size="50px" color="bg-blue-200 opacity-20" speed={20} />
      <FloatingShape size="100px" color="bg-purple-200 opacity-20" speed={25} />
      <FloatingShape size="75px" color="bg-indigo-200 opacity-20" speed={30} />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our School
        </motion.h1>
        
        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <SectionTitle>Our History</SectionTitle>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <TimelineItem key={index} year={item.year} event={item.event} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SectionTitle>Key Statistics</SectionTitle>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <AnimatedCounter value={1000} label="Students" />
            <AnimatedCounter value={50} label="Teachers" />
            <AnimatedCounter value={95} label="Graduation Rate" />
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <SectionTitle>Vision and Mission</SectionTitle>
          <div className="flex mb-4">
            <button 
              className={`px-4 py-2 ${activeTab === 'vision' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} rounded-l-lg`}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'mission' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} rounded-r-lg`}
              onClick={() => setActiveTab('mission')}
            >
              Mission
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            {activeTab === 'vision' ? (
              <p className="text-gray-700 leading-relaxed">
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
            )}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SectionTitle>Message from the Principal</SectionTitle>
          <div className="relative">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="relative z-10 italic text-gray-800 pl-8 py-4 mb-4 border-l-4 border-indigo-500">
              "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
            </blockquote>
            <p className="text-right text-gray-600 font-semibold">- Dr. Jane Smith, Principal</p>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SectionTitle>Infrastructure and Facilities</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityCard item="Science Lab" image="https://www.utility.rentals/wp-content/uploads/2020/01/Spruce-up-your-science-lab.jpg" />
            <FacilityCard item="Computer Lab" image="https://safsms.com/blog/wp-content/uploads/2017/01/setting-up-a-computer-lab-in-school.jpeg" />
            <FacilityCard item="Library" image="https://theeducationview.com/wp-content/uploads/2022/07/Library-A-School-Inside-a-School.jpg" />
            <FacilityCard item="Playground" image="https://upload.wikimedia.org/wikipedia/commons/5/58/Furen-high-school-playground-wuxi-china.jpg" />
            <FacilityCard item="Gymnasium" image="https://www.courierpress.com/gcdn/presto/2020/08/29/PEVC/7ce93a8e-7b3f-406e-a4db-6857a3c1c243-keating01.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp" />
            <FacilityCard item="Swimming Pool" image="https://laceyparks.org/wp-content/uploads/2021/11/North-Thurston-HS-pool-2.jpg" />
          </div>
        </motion.section>
      


      </div>
    </motion.div>
  );
};

export default About;
