import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FADADD] text-[#333333] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {" "}
        {/* Reduced padding */}
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logoo.ico"
            alt="Logo"
            className="w-8 h-8" // Adjusted logo size
          />
          <Link to="/" className="text-2xl font-bold">
            PregnancyJourney
          </Link>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex items-center space-x-1">
            <FaHome className="w-5 h-5" /> {/* Icon size reduced */}
            <Link to="/" className="text-lg hover:text-[#FF6F61]">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaUserPlus className="w-5 h-5" />
            <Link to="/register" className="text-lg hover:text-[#FF6F61]">
              Register
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <FaSignInAlt className="w-5 h-5" />
            <Link to="/login" className="text-lg hover:text-[#FF6F61]">
              Login
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden bg-[#FADADD] text-[#333333] py-2 px-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <FaHome className="w-5 h-5" />
              <Link to="/" className="text-lg hover:text-[#FF6F61]">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <FaUserPlus className="w-5 h-5" />
              <Link to="/register" className="text-lg hover:text-[#FF6F61]">
                Register
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <FaSignInAlt className="w-5 h-5" />
              <Link to="/login" className="text-lg hover:text-[#FF6F61]">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
