import React from 'react';
import { motion } from 'framer-motion';

const AchievementCard = ({ title, description }) => (
  <motion.div 
    className="bg-white shadow-md rounded-lg p-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const ActivityCard = ({ name, description, image }) => (
  <motion.div 
    className="bg-white shadow-md rounded-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-indigo-500 pb-2">{children}</h2>
);

const Students = () => {
  const achievements = [
    { title: "John Smith", description: "National Level Math Olympiad Winner" },
    { title: "Sarah Lee", description: "Gold Medalist in State Swimming Championship" },
    { title: "Tech Innovators Club", description: "Winners of Inter-School Robotics Competition" },
  ];

  const activities = [
    { name: "Music", description: "Explore various musical talents and genres.", image: "https://www.thestudiodirector.com/wp-content/uploads/start-a-community-music-school.jpg" },
    { name: "Dance", description: "Participate in various dance forms and performances.", image: "https://www.rockinrobindjs.com/uploads/7/1/6/6/71660465/8548203_orig.jpg" },
    { name: "Drama", description: "Engage in theatrical productions and improvisations.", image: "https://www.lakesideschool.org/uploaded/Arts/Drama/IMG_7063.jpg" },
    { name: "Art", description: "Showcase artistic skills in different mediums.", image: "https://strategyeducation.co.uk/wp-content/uploads/2022/04/Bringing-the-Arts-into-your-Classroom.jpg" },
    { name: "Sports", description: "Participate in a variety of sports and physical activities.", image: "https://blog.friendscentral.org/hs-fs/hubfs/FCS%20CX%20image.jpg?width=848&name=FCS%20CX%20image.jpg" },
    { name: "Robotics", description: "Build and compete with innovative robots.", image: "https://fox59.com/wp-content/uploads/sites/21/2023/05/IMG_9773.jpeg?w=2560&h=1440&crop=1" },
    { name: "Debate Club", description: "Engage in debates on various topics.", image: "https://www.latymer.co.uk/_site/data/images/news/62/main-2023-03%20Debate%20club%203.jpg" },
    { name: "Science Club", description: "Explore scientific concepts and experiments.", image: "https://www.brightsparksscience.co.uk/wp-content/uploads/2017/12/After-School-CLubs-01-01.jpg" },
  ];

  const clubs = [
    { name: "Literary Society", description: "Engage in literary activities and discussions.", image: "https://chstigerlibrary.com/wp-content/uploads/2018/03/img_1026cropped.jpg" },
    { name: "Environmental Club", description: "Work on sustainability and environmental awareness projects.", image: "https://rosemont.scusd.edu/sites/main/files/imagecache/lightbox/main-images/fixed_eco_club_group_pic.jpg" },
    { name: "Astronomy Club", description: "Explore the wonders of the universe and stargazing.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegygNr9QWtbCoJZZX47-RtupanyZfkHle6w&s" },
    { name: "Coding Club", description: "Develop programming skills and work on tech projects.", image: "https://images.squarespace-cdn.com/content/v1/5d00027f6ef1b60001fb7afb/6ff7ebf2-aa36-42a1-b3c7-776c87273f79/Screen+Shot+2022-11-01+at+3.12.49+PM.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Student Life
        </motion.h1>

        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Student Achievements</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} title={achievement.title} description={achievement.description} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>Extracurricular Activities</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard key={index} name={activity.name} description={activity.description} image={activity.image} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionTitle>Student Council</SectionTitle>
          <p className="mb-4">Our Student Council plays a vital role in shaping the school community and fostering leadership skills. Elected by their peers, council members:</p>
          <ul className="list-disc list-inside mb-4">
            <li>President: Amy Parker, Grade 12</li>
            <li>Vice President: Rajiv Mehta, Grade 11</li>
            <li>Secretary: Lisa Wong, Grade 10</li>
          </ul>
          <p>Elections for the Student Council are held annually, giving students the opportunity to experience democratic processes firsthand.</p>
        </motion.section>

        <motion.section 
          className="bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionTitle>Clubs and Societies</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {clubs.map((club, index) => (
              <ActivityCard key={index} name={club.name} description={club.description} image={club.image} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Students;
