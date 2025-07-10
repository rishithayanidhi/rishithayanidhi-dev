import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/author.jpg";

const HomePage = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["UI Developer", "Backend Developer", "Exploring GenAI", "Devops Enthusiast"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="min-h-screen w-screen relative overflow-hidden bg-[#0f172a] font-[ubuntu]">
      {/* Animated background shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center w-screen px-8 sm:px-16 lg:px-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center order-1 lg:order-2 mt-24 sm:mt-28 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 m-1 bg-slate-900 animate-float">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white space-y-8 order-2 lg:order-1 text-center lg:text-left sm:pt-16 lg:pt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-lg sm:text-xl text-gray-300 font-medium">Hello, It's Me</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Rishi Thayanidhi
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-lg sm:text-xl text-gray-300 font-medium">And I'm a</span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 tracking-wide">
                  {currentText}
                  <span className="animate-pulse ml-1 text-emerald-400">|</span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
            >
              I’m a passionate and curious developer who loves tackling new challenges and crafting meaningful digital experiences. Always eager to explore emerging ideas, I thrive on problem-solving and continuously learning — pushing myself to grow and adapt.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex space-x-3 justify-center lg:justify-start"
            >
              {[
                { Icon: FaGithub, url: "https://github.com" },
                { Icon: FaLinkedin, url: "https://linkedin.com" },
                { Icon: FaInstagram, url: "https://instagram.com" },
              ].map(({ Icon, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-500/40"
                >
                  <Icon className="text-white text-xl" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="pt-4 mb-12 flex justify-center lg:justify-start"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-slate-900 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  More About Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
