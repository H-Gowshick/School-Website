import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryImage = ({ src, alt, index }) => (
  <motion.div
    className="relative group mb-7"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
      <p className="text-white text-lg font-semibold">{alt}</p>
    </div>
  </motion.div>
);

const GalleryVideo = ({ src, title, index }) => (
  <motion.div
    className="relative group mb-7"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <video
      src={src}
      controls
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  </motion.div>
);

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const images = [
    { src: "https://nalandaschool.org/wp-content/uploads/2023/05/children-education-1.jpg", alt: "Students participating in sports events.", category: "events" },
    { src: "https://www.researchgate.net/publication/329660326/figure/fig3/AS:703880677560320@1544829639064/Students-presenting-the-scientific-project-generated-through-the-cards-game-School-Moise.jpg", alt: "Students presenting their science projects.", category: "events" },
    { src: "https://media.licdn.com/dms/image/C5612AQFDXzzapeJe0A/article-inline_image-shrink_1000_1488/0/1520196055762?e=1726704000&v=beta&t=nqtiyLVZoqv4EGCh4SIb9QIwonjpcfJxRiDhqP4iheM", alt: "Students performing in the cultural fest.", category: "events" },
    { src: "https://www.parmetech.com/wp-content/uploads/2019/09/It_s_OK_to_Touch-1_1.jpg", alt: "A glimpse of our interactive classrooms.", category: "campus" },
    { src: "https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Importance-of-Library-in-School-Education.jpg", alt: "Students reading in the library.", category: "campus" },
  ];

  const videos = [
    { src: "https://example.com/school_tour.mp4", title: "Virtual tour of Springdale Public School", category: "videos" },
    { src: "https://example.com/annual_function.mp4", title: "Highlights from the Annual Function 2023", category: "videos" },
  ];

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);
  const filteredVideos = filter === "videos" ? videos : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-l-lg ${filter === "all" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600"} font-semibold transition-colors duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("campus")}
            className={`px-6 py-2 ${filter === "campus" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600"} font-semibold transition-colors duration-300`}
          >
            Campus
          </button>
          <button
            onClick={() => setFilter("events")}
            className={`px-6 py-2 ${filter === "events" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600"} font-semibold transition-colors duration-300`}
          >
            Events
          </button>
          <button
            onClick={() => setFilter("videos")}
            className={`px-6 py-2 rounded-r-lg ${filter === "videos" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600"} font-semibold transition-colors duration-300`}
          >
            Videos
          </button>
        </div>

        <AnimatePresence>
          {filter !== "videos" && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {filteredImages.map((image, index) => (
                <GalleryImage key={index} src={image.src} alt={image.alt} index={index} />
              ))}
            </motion.div>
          )}

          {filter === "videos" && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {filteredVideos.map((video, index) => (
                <GalleryVideo key={index} src={video.src} title={video.title} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {(filteredImages.length === 0 && filter !== "videos") && (
          <p className="text-center text-gray-500 mt-8">
            No images found for the selected category.
          </p>
        )}

        {(filteredVideos.length === 0 && filter === "videos") && (
          <p className="text-center text-gray-500 mt-8">
            No videos found for the selected category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
