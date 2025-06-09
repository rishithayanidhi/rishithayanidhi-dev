// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-2xl z-50">
//       <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        
//         {/* Navbar Title - redirects to homepage */}
//         <Link to="/" className="cursor-pointer hover:text-orange-500 transition duration-300 text-lg font-semibold tracking-wide font-[Ubuntu]">
//           Rishi T.
//         </Link>

//         {/* Centered Navbar Links */}
//         <ul className="flex space-x-6 text-black font-medium text-base font-[Ubuntu] ml-auto mr-auto">
//           {["About", "Skills", "Education", "Projects", "Experience"].map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="hover:text-orange-500 transition duration-300"
//               >
//                 {item}.
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Contact aligned right */}
//         <Link
//           to="/contact"
//           className="text-black font-medium text-base font-[Ubuntu] hover:text-orange-500 transition duration-300"
//         >
//           Contact.
//         </Link>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger and close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skills", "Education", "Projects", "Experience"];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-2xl z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-wide font-[Ubuntu] hover:text-orange-500 transition duration-300">
          Rishi T.
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-black font-medium text-base font-[Ubuntu]">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-orange-500 transition duration-300"
              >
                {item}.
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block text-black font-medium text-base font-[Ubuntu] hover:text-orange-500 transition duration-300"
        >
          Contact.
        </Link>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 shadow-lg font-[Ubuntu]">
          <ul className="space-y-3 text-black font-medium text-base">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-orange-500 transition duration-300"
                >
                  {item}.
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block hover:text-orange-500 transition duration-300"
              >
                Contact.
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
