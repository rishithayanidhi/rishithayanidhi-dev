import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-[#0F172A] text-gray-300 py-10 px-4 sm:px-10 border-t border-gray-700 mt-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Copyright Text - responsive layout */}
        <div className="text-sm text-white font-[ubuntu] text-center md:text-left leading-snug flex flex-col md:flex-row md:items-center md:gap-1">
          <div>© 2025 Rishithayanidhi</div>
          <div className="hidden md:inline">—</div>
          <div>All Rights Reserved</div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/rishithayanidhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rishithayanidhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/rishithayanidhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
