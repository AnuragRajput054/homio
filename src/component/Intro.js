import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUsers, FaTools, FaUtensils } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="New City Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Dark overlay */}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 md:px-20 py-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400 drop-shadow-lg">
            Welcome to New Homio
          </h1>
          <p className="text-lg leading-7 text-gray-200 drop-shadow">
            Moving to a new city can be overwhelming — that’s where{" "}
            <span className="text-orange-300 font-semibold">New Homio</span>{" "}
            steps in. Whether you're a student, working professional, or a
            newcomer, we help you find:
          </p>
          <ul className="mt-6 space-y-3 text-base text-gray-100 drop-shadow">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-300" /> Hostels & PGs near your location
            </li>
            <li className="flex items-center gap-3">
              <FaUtensils className="text-orange-300" /> Mess, tiffin, and local food joints
            </li>
            <li className="flex items-center gap-3">
              <FaTools className="text-orange-300" /> Plumbers, electricians, and barbers
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-orange-300" /> A local network to connect with
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 text-center drop-shadow-lg">
            Are you a User or an Admin?
          </h2>

          <div className="flex w-full justify-center gap-6">
            <Link
              to="/login"
              className="w-36 text-center py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-xl shadow-xl hover:scale-105"
            >
              User
            </Link>
            <Link
              to="/admin"
              className="w-36 text-center py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-xl shadow-xl hover:scale-105"
            >
              Admin
            </Link>
          </div>

          {/* Scroll down indicator */}
          <div className="mt-10 animate-bounce text-white text-sm opacity-70">
            Scroll down to explore more ↓
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
