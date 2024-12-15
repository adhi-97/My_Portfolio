import logo from "../assets/AKLogo.PNG";
import { FaDownload } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownOptionClick = (sectionId) => {
    // Scroll to the selected section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the dropdown after selecting an option
    setDropdownOpen(false);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-3">
        {/* Dropdown for selecting sections */}
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="flex items-center text-sm font-small px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 hover:from-teal-400 hover:via-blue-400 hover:to-indigo-400 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>Navigate</span>
            <IoMdArrowDropdown />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
              <ul className="py-2 text-gray-300">
                <li
                  onClick={() => handleDropdownOptionClick("about")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-200"
                >
                  About
                </li>
                <li
                  onClick={() => handleDropdownOptionClick("Experience")}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-200"
                >
                  Experience
                </li>
                <li className="px-6 py-2 hover:bg-gray-700 rounded-md cursor-pointer transition duration-200">
                  <a href="#projects">Projects</a>
                </li>
                <li className="px-6 py-2 hover:bg-gray-700 rounded-md cursor-pointer transition duration-200">
                  <a href="#education">Education</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="m-8 flex item-center justify-center gap-4 text-1xl">
          <a
            href="/path-to-your-cv.pdf" // Replace this with the actual path to your CV
            download
            className="flex items-center text-sm font-small gap-2 px-4 py-2 border rounded-md border-gray-300 bg-black hover:bg-gray-800"
          >
            <FaDownload className="text-gray-0" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
