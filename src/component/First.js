import React from "react";
import Header from "./Header";

const First = () => {
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute p-12 bg-gray-100 w-3/12 my-36 right-0 left-0 mx-auto bg-opacity-30 rounded-lg">
        <p className="text-xl mt--20 ml-5 align-middle justify-center  font-bold">Find Your Comfort with Homio</p>
        <h1 className="text-3xl p-4  font-semibold py-4">Sign In</h1>
        <input 
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-opacity-50 font-bold rounded-lg bg-black text-white"
        ></input>
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-50 font-bold bg-black rounded-lg text-white"
        ></input>
        <br></br>
        <button className="p-4 my-6 w-full rounded-lg bg-blue-300">Sign In</button>
        <p className="p-3 text-xl font-bold">Don't have Account! Sign Up Now</p>
      </form>
    </div>
  );
};

export default First;
