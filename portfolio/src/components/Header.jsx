import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl">✨</span>
          <h1 className="text-xl font-bold text-gray-800">aria</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Projects</li>
            <li className="hover:text-gray-800 cursor-pointer">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
