"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // Smoothly scroll to section
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="text-3xl font-bold text-cyan-600">
          Sudharshana
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-cyan-400 transition 
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
                           before:bg-cyan-400 before:transition-all before:duration-300 
                           hover:before:w-full"
                onClick={(e) => handleLinkClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center space-y-4 py-4">
          {["Home", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative block text-gray-300 hover:text-cyan-400 transition 
                           before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] 
                           before:bg-cyan-400 before:transition-all before:duration-100
                           hover:before:w-full hover:before:left-0"
                onClick={(e) => handleLinkClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
