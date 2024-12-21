import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa"; // Importing icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FADADD] text-[#333333] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {" "}
        {/* Increased py-4 for taller navbar */}
        {/* Logo */}
        <div className="text-3xl font-bold">
          {" "}
          {/* Increased font size */}
          <Link to="/">PregnancyJourney</Link>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {" "}
          {/* Increased space-x-8 for wider space between items */}
          <li className="flex items-center space-x-2">
            <FaHome className="w-6 h-6" /> {/* Smaller icon size: w-6 h-6 */}
            <Link to="/" className="text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUserPlus className="w-6 h-6" />{" "}
            {/* Smaller icon size: w-6 h-6 */}
            <Link to="/register" className="text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Register
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaSignInAlt className="w-6 h-6" />{" "}
            {/* Smaller icon size: w-6 h-6 */}
            <Link to="/login" className="text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Login
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            {/* Smaller icon size: w-6 h-6 */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="bg-[#FADADD] text-[#333333] space-y-2 px-4 py-4">
          {" "}
          {/* Increased py-4 for taller mobile navbar */}
          <li className="flex items-center space-x-2">
            <FaHome className="w-6 h-6" /> {/* Smaller icon size: w-6 h-6 */}
            <Link to="/" className="block text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUserPlus className="w-6 h-6" />{" "}
            {/* Smaller icon size: w-6 h-6 */}
            <Link to="/register" className="block text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Register
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaSignInAlt className="w-6 h-6" />{" "}
            {/* Smaller icon size: w-6 h-6 */}
            <Link to="/login" className="block text-xl hover:text-[#FF6F61]">
              {" "}
              {/* Larger text and coral hover */}
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
