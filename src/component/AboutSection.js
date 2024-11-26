import React from 'react';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 rounded-xl">
        <img
          src="https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg"
          alt="New Homio"
          className="rounded-xl shadow-2xl"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to New Homio</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          New Homio is your go-to platform when moving to a new city. Whether you're looking 
          for a place to stay, a nearby mess, or everyday essentials like groceries and 
          stationery, New Homio has you covered. We provide detailed listings for hostels, 
          PG accommodations, hospitals, malls, and more. 
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our platform helps you seamlessly settle into a new environment by connecting you 
          with essential services and stores in your area. With New Homio, you can feel at 
          home no matter where you move. Discover the best spots for your daily needs and 
          get the support you need while settling into your new home.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
