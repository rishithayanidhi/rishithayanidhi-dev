import React from "react";
import { motion } from "framer-motion";  
import profileImage from "../assets/me.jpg"; 


const About = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-5 md:px-20 mt-[0px]">
      {/* About Title */}
      <h2 className="text-4xl font-bold flex items-center gap-2 text-black mb-20 mt-0 font-[ubuntu]">
        <span className="text-4xl">
          <img
            className="mr-0.5 -mb-0.7"
            width="32"
            height="32"
            src="https://img.icons8.com/stamp/32/user.png"
            alt="user"
          />
        </span>
        About <span className="text-purple-800">Me</span>
      </h2>

{/* Main Content */}
<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-25 max-w-5xl relative z-10 md:-mr-30">
  {/* Holographic Profile Picture */}
  <motion.div
    className="relative rounded-xl overflow-hidden shadow-2xl shadow-red-500/50 w-72 h-72 md:w-80 md:h-80 bg-[#111] cursor-pointer"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(165, 42, 42)" }} // Zoom & glow effect on hover
  >
    {/* Holographic Gradient Overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-red-400 to-transparent opacity-0"
      whileHover={{ opacity: 1, y: "100%" }} // Moving holographic effect
      transition={{ duration: 0.5 }}
    ></motion.div>

    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />


  </motion.div>

  {/* About Details */}
  <div className="flex-1 text-left md:ml-6">
    <h3 className="text-2xl font-bold font-[Ubuntu] text-black">I'm Rishi T</h3>
    <p className="text-sm text-blue-900 font-bold font-[Ubuntu] mt-1 mb-3">
      Student | FullStack Developer
    </p>
    <p className=" font-medium font-[Ubuntu] text-gray-600 mb-5 pr-20 text-justify">
      I'm Rishi, a passionate frontend and backend developer and a second-year student at Sri Sairam Engineering College. I am dedicated to continuous learning, pushing my limits, and creating seamless digital experiences. With a strong interest in web development, I focus on building intuitive and efficient solutions while actively participating in social initiatives that drive positive change.
    </p>

{/* Personal Info */}
<div className="text-gray-700 grid grid-cols-2 gap-2 mr-10 text-sm">
  <p>
    <span className="text-blue-600 font-bold font-[Ubuntu]">Age :</span>
    <span className="font-medium font-[Ubuntu] pl-1">19</span>
  </p>
  <p className="-ml-4"> 
    <span className="text-blue-600 font-bold font-[Ubuntu]">Email :</span>
    <span className="font-medium font-[Ubuntu] pl-1">rishithayanidhi@gmail.com</span>
  </p>
  <p>
    <span className="text-blue-600 font-bold font-[Ubuntu]">Phone :</span>
    <span className="font-medium font-[Ubuntu] pl-1">9884947313</span>
  </p>
  <p className="-ml-4"> 
    <span className="text-blue-600 font-bold font-[Ubuntu]">Place :</span>
    <span className="font-medium font-[Ubuntu] pl-1">Chennai, India</span>
  </p>
</div>


    {/* Resume Button */}
    <div className="mt-5">
  <a
    href="https://drive.google.com/file/d/1qYjngEfL8uu8TsPyC1Z31lWZx6vthHmD/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="group cursor-pointer mt-6 bg-[#2506ad] text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
      style={{ boxShadow: "0px 5px 10px rgba(48, 68, 247, 0.6)" }}
    >
      <span className="inline-flex items-center gap-1">
        {/* Per-letter bouncing "Resume" */}
        {"Resume".split("").map((char, index) => (
          <span
            key={index}
            className="inline-block group-hover:animate-bounce"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {char}
          </span>
        ))}

        {/* Arrow moves to the right */}
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          ›
        </span>
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


