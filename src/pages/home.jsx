import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/author1.jpg"; // Replace with your actual image path

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(in oklab, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-5xl font-[ubuntu] font-bold mb-4">Rishi Thayanidhi</h1>
          <h2 className="text-2xl font-[ubuntu] font-semibold mb-4">I am a Web Developer</h2>
          <p className="text-gray-300 mb-6 font-[ubuntu]">
            A passionate web developer based in the state of California. With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highly functional websites.
          </p>
          <button className="font-[ubuntu] bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded text-white font-medium">
            My Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative rounded-full overflow-hidden w-72 h-72 shadow-xl bg-gradient-to-tr from-purple-700 to-purple-900">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
