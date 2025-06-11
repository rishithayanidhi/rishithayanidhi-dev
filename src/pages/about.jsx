/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-x-hidden">
      {/* About Title */}
      <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-12 font-[ubuntu] text-center md:text-left">
        <span>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/office/40/user.png"
            alt="user"
          />
        </span>
        About <span className="text-purple-300">Me</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 max-w-6xl w-full">
        {/* Profile Picture */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl shadow-red-500/50 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#111] cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(165, 42, 42)" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-400 to-transparent opacity-0"
            whileHover={{ opacity: 1, y: "100%" }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* About Details */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold font-[Ubuntu] text-white">
            I'm Rishi T
          </h3>
          <p className="text-sm sm:text-base text-blue-300 font-bold font-[Ubuntu] mt-1 mb-3">
            Student | FullStack Developer
          </p>
          <p className="text-sm sm:text-base font-medium font-[Ubuntu] text-gray-300 mb-5 text-justify">
            I'm Rishi, a passionate frontend and backend developer and a second-year student at Sri Sairam Engineering College. I am dedicated to continuous learning, pushing my limits, and creating seamless digital experiences. With a strong interest in web development, I focus on building intuitive and efficient solutions while actively participating in social initiatives that drive positive change.
          </p>

          {/* Personal Info */}
          <div className="text-gray-300 flex flex-col sm:grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base break-words w-full">
            <p className="break-words">
              <span className="text-blue-400 font-bold">Age:</span>
              <span className="pl-1">19</span>
            </p>
            <p className="break-words">
              <span className="text-blue-400 font-bold">Email:</span>
              <span className="pl-1">rishithayanidhi@gmail.com</span>
            </p>
            <p className="break-words">
              <span className="text-blue-400 font-bold">Phone:</span>
              <span className="pl-1">9884947313</span>
            </p>
            <p className="break-words">
              <span className="text-blue-400 font-bold">Place:</span>
              <span className="pl-1">Chennai, India</span>
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1qYjngEfL8uu8TsPyC1Z31lWZx6vthHmD/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group bg-[#b3b300] text-black font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                style={{ boxShadow: "0px 5px 10px rgba(247, 244, 48, 0.6)" }}
              >
                <span className="inline-flex items-center gap-1">
                  {"Resume".split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block group-hover:animate-bounce"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">›</span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
