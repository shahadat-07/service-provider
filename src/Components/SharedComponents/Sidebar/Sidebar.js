import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FcCalendar, FcInTransit } from "react-icons/fc";
const Sidebar = () => {
  const addEvent = () => {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("-translate-x-full");
  };
  return (
    <>
      {/* mobile menu bar  */}

      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* <!-- logo --> */}
        <a href="#" className="block p-4 text-white font-bold">
          Let's Build
        </a>

        {/* <!-- mobile menu button --> */}
        <button
          onClick={addEvent}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* <!-- sidebar --> */}
      <div className="sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* logo  */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Let's Build</span>
        </a>

        {/* <!-- nav --> */}
        <nav>
          <a
            href="#"
            className="flex block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <FcCalendar className="mt-1 mr-2" /> Calendar
          </a>
          <a
            href=""
            className="flex block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <FcInTransit className="mt-1 mr-2" /> Logistics
          </a>
          <a
            href=""
            className="flex block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <BsFillMapFill className="mt-1 mr-2" color="cyan" /> Google Maps
          </a>
          <a
            href=""
            className="flex block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            <FaEdit className="mt-1 mr-2" color="sky-blue" /> Edit Template
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Update Tables
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Reports
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Old Dashboard
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Graphs
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
