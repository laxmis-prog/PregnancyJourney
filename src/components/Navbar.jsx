import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa"; // Importing icons
import Logo from "../assets/logoo.png"; // Adjust path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FADADD] text-[#333333] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-1">
          <img src={Logo} alt="Logo" className="w-16 h-16" /> {/* Logo Size */}
          <Link to="/" className="text-3xl font-bold">
            PregnancyJourney
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li className="flex items-center space-x-2">
            <FaHome className="w-6 h-6" />
            <Link to="/" className="text-xl hover:text-[#FF6F61]">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUserPlus className="w-6 h-6" />
            <Link to="/register" className="text-xl hover:text-[#FF6F61]">
              Register
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaSignInAlt className="w-6 h-6" />
            <Link to="/login" className="text-xl hover:text-[#FF6F61]">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#333333] focus:outline-none"
          >
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
          <li className="flex items-center space-x-2">
            <FaHome className="w-6 h-6" />
            <Link to="/" className="block text-xl hover:text-[#FF6F61]">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUserPlus className="w-6 h-6" />
            <Link to="/register" className="block text-xl hover:text-[#FF6F61]">
              Register
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaSignInAlt className="w-6 h-6" />
            <Link to="/login" className="block text-xl hover:text-[#FF6F61]">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
