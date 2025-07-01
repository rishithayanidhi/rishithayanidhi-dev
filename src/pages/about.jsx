import { useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/author1.jpg";
import Footer from "../components/Footer";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <> 
    <section className="flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 md:px-8 bg-linear-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-x-hidden">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-12 font-[ubuntu] text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/office/40/user.png"
          alt="user"
        />
        About <span className="text-purple-300">Me</span>
      </motion.h2>

      {/* Image + Content Block */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-center gap-10 max-w-6xl w-full xl:min-h-[400px]">
        {/* Profile Image */}
        <motion.div
          className="mx-auto xl:mx-0 relative rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/50 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#222200] cursor-pointer xl:self-center"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(165, 161, 42)" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent opacity-0"
            whileHover={{ opacity: 1, y: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          className="flex flex-col justify-center w-full max-w-3xl text-white mt-8 xl:mt-0 xl:self-center px-2 xl:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold font-[Ubuntu] text-center xl:text-left">
            I'm Rishi T
          </h3>
          <p className="text-sm sm:text-base text-blue-300 font-bold font-[Ubuntu] mt-1 mb-3 text-center xl:text-left">
            Student | FullStack Developer
          </p>
          <p className="text-sm sm:text-base font-medium font-[Ubuntu] text-gray-300 mb-6 text-justify">
            I'm Rishi, a passionate frontend and backend developer and a second-year student at Sri Sairam Engineering College. I am dedicated to continuous learning, pushing my limits, and creating seamless digital experiences. With a strong interest in web development, I focus on building intuitive and efficient solutions while actively participating in social initiatives that drive positive change.
          </p>

          {/* Info Block */}
          <div className="text-gray-300 text-sm sm:text-base font-[Ubuntu] space-y-2 text-left mt-6">
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold min-w-[60px]">Age</span>
              <span>: 19</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold min-w-[60px]">Email</span>
              <span>: rishithayanidhi@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold min-w-[60px]">Place</span>
              <span>: Chennai, India</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold min-w-[60px]">Phone</span>
              <span>: +91 9884947313</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Button */}
      <motion.div
        className="mt-8 flex justify-center w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="https://drive.google.com/file/d/1-1cjgGQ7GU6tdnK64zRTGo8J0WdKaTgJ/view"
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
      </motion.div>
    </section>
    <Footer />
  </>   
  );
};

export default About;
