import React from "react";
import First from "./First";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="">
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/featured/beautiful-background-td7gsxerv3ecl20h.jpg"
          alt="bg"
        />
      </div>
      <div className="absolute  p-32 h-auto flex justify-between mt-36">
        <div className="w-3/6">
          <p className="text-2xl text-yellow-50">
            <p className="font-bold">Welcome to New Homio</p>
            "Welcome to New Homio – your one-stop solution for settling into a
            new city. From finding hostels and mess services to locating local
            grocery shops, we provide all the essential resources you need for a
            smooth transition. Let us help you feel at home in your new
            surroundings!"
          </p>
        </div>
        <div className="w-3/6 pl-28">
          <h1 className="font-bold text-2xl ml-48 text-yellow-50">
            Are you a User or an Admin?
          </h1>
          <div className="flex justify-between mt-10">
            <Link
              to={"/login"}
              className="p-4 pl-20 h-16 w-2/6 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl font-bold bg-orange-500"
            >
              User
            </Link>
            <Link
              to={"/admin"}
              className="p-4 pl-20 h-16 w-2/6 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl font-bold bg-orange-500"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
