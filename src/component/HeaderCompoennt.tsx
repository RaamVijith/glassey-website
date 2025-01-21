import React from "react";

const HeaderComponent: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-4 flex items-center justify-between">
      {/* Dropdown and Search */}
      <div className="flex items-center space-x-4">
        {/* Dropdown */}
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Category selector"
          >
            <option>All Categories</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border border-gray-300 rounded-md p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute top-2 left-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 9a7.65 7.65 0 11-15.3 0 7.65 7.65 0 0115.3 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* User Icon */}
        <button className="text-gray-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-6 8h6a6 6 0 016 6H4a6 6 0 016-6z"
            />
          </svg>
        </button>

        {/* Cart Icon */}
        <div className="relative">
          <button className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l-2 10H5L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17a2 2 0 11-4 0m4 0a2 2 0 10-4 0m0 0a2 2 0 104 0z"
              />
            </svg>
          </button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
