import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Skills", "Education", "Projects"];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-2xl text-white border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative font-[Ubuntu]">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg tracking-wide font-bold font-[Cambria] text-yellow-300 hover:overline transition-transform duration-300 hover:scale-105"
        >
          RISHI T
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2 text-base font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:overline hover:text-yellow-300 transition-transform duration-300 hover:scale-105"
              >
                {item}.
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="hover:overline hover:text-yellow-300 transition-transform duration-300 hover:scale-105"
            >
              Contact.
            </Link>
          </li>
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1qYjngEfL8uu8TsPyC1Z31lWZx6vthHmD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-yellow-400 text-black text-sm rounded-md shadow-md hover:shadow-yellow-400/50 transition-transform duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#0F172A] px-6 pt-2 pb-4 font-[Ubuntu] text-white border-t border-white/10 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ul className="space-y-4 text-center">
            {[...navItems, "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-300 transition-colors duration-200"
                >
                  {item}.
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
