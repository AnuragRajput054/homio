import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegSmileWink } from "react-icons/fa";

const First = () => {
  const navigate = useNavigate();
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Signup Success", userCredential.user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log("Login Success", userCredential.user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Page overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            Welcome to <span className="text-blue-300">Homio</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light text-gray-200 max-w-xl mx-auto">
            A home away from home. Discover hostels, mess, and services around you with ease!
          </p>
        </motion.div>

        {/* Auth Form */}
        <motion.form
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 bg-white bg-opacity-90 rounded-3xl p-8 w-full max-w-md shadow-xl backdrop-blur-lg"
        >
          <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
            {isSignForm ? "Sign In" : "Sign Up"} <FaRegSmileWink className="inline ml-2 text-yellow-500" />
          </h2>

          {!isSignForm && (
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 my-3 w-full rounded-md bg-gray-100 text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 my-3 w-full rounded-md bg-gray-100 text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full rounded-md bg-gray-100 text-black font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errorMessage && (
            <p className="text-sm text-red-600 text-center mt-2">{errorMessage}</p>
          )}

          <button
            onClick={handleButtonClick}
            className="p-3 mt-6 w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-md hover:shadow-lg transition-all"
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={toggleSignInForm}
            className="text-center text-sm text-blue-600 mt-4 cursor-pointer hover:underline"
          >
            {isSignForm
              ? "Don't have an account? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default First;
