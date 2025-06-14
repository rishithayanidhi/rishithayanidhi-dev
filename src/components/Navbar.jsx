import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Skills", "Education", "Projects"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-2xl text-white border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-lg tracking-wide font-bold font-[Cambria] hover:overline text-yellow-300 transition duration-300 hover:scale-105"
        >
          RISHI T
        </Link>

        {/* Center: Desktop Nav Links (including Contact) */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2 font-medium font-[Ubuntu] text-base">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:overline hover:text-yellow-300 transition duration-300 hover:scale-105 inline-block"
              >
                {item}.
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="hover:overline hover:text-yellow-300 transition duration-300 hover:scale-105 inline-block"
            >
              Contact.
            </Link>
          </li>
        </ul>

        {/* Right: Resume Button (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1qYjngEfL8uu8TsPyC1Z31lWZx6vthHmD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-yellow-400 text-black text-sm font-[Ubuntu] rounded-md transition-transform duration-300 ease-out hover:overline hover:font-bold hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: "0px 2px 5px rgba(247, 244, 48, 0.6)" }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] px-6 pb-4 pt-2 font-[Ubuntu] text-white shadow-lg">
          <ul className="space-y-4 text-center">
            {[...navItems, "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-orange-500 transition duration-300 hover:scale-105"
                >
                  {item}.
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
