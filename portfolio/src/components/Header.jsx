import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl">✨</span>
          <h1 className="text-xl font-bold text-gray-800">Mananchaya</h1>
        </div>

        {/* Hamburger Menu Button (เฉพาะจอเล็ก) */}
        <button
          className="block lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-12  left-0 w-full bg-white p-10 lg:p-2 lg:bg-transparent lg:flex lg:space-x-8 lg:items-center text-gray-600`}
        >
          <ul
            className={`flex flex-col items-center lg:flex-row lg:space-x-8 lg:ml-auto space-y-2 lg:space-y-0`}
          >
            <li>
              <RouterLink to="/home" className="hover:text-gray-800 cursor-pointer">
                Home
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/about" className="hover:text-gray-800 cursor-pointer">
                About
              </RouterLink>
            </li>
            <li>
              |
            </li>
            <li>
              <div className="flex items-center space-x-3">
              <button
                onClick={() => window.open('https://github.com/DraftManan', '_blank')}
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.459-1.11-1.459-.907-.62.069-.607.069-.607 1.004.07 1.533 1.03 1.533 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.801a9.56 9.56 0 012.508.338c1.91-1.296 2.75-1.026 2.75-1.026.545 1.376.202 2.393.099 2.646.64.7 1.029 1.591 1.029 2.682 0 3.842-2.337 4.687-4.566 4.936.36.31.678.921.678 1.855 0 1.339-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
                  <button
                    onClick={() => window.open('https://www.facebook.com/mananchaya.dokbua?mibextid=LQQJ4d&mibextid=LQQJ4d', '_blank')}
                    className="text-gray-800 hover:text-gray-500 transition-colors"
                  >
                    <FaFacebookF size={16} />
                  </button>
                <button
                  onClick={() => window.open('mailto:draft347@gmail.com', '_blank')}
                  className="text-gray-800 hover:text-gray-500  transition-colors"
                >
                  <HiOutlineMail size={22} />
                </button>
              </div>
               
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
