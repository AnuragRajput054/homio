import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-2">New Homio</h2>
            <p className="text-gray-400">
              Helping you feel at home wherever you go. Discover services and places to settle comfortably in your new city.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="#help" className="hover:underline">Help</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v4h2v12h4V12h3.5l.5-4H13V5.5c0-.6.4-1 1-1h2V0h-3c-2.8 0-5 2.2-5 5v3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6c-.9.4-1.8.6-2.8.8a4.8 4.8 0 002.1-2.7 10.3 10.3 0 01-3.1 1.2 4.8 4.8 0 00-8.1 4.4 13.7 13.7 0 01-10-5A4.8 4.8 0 001.6 9c0 1.6.8 3 2 3.8a4.8 4.8 0 01-2.2-.6v.1c0 2.3 1.6 4.2 3.8 4.7a4.8 4.8 0 01-2.2.1c.6 1.9 2.4 3.3 4.6 3.3a9.7 9.7 0 01-6 2c-.4 0-.7 0-1-.1a13.8 13.8 0 007.4 2.2c8.8 0 13.6-7.3 13.6-13.6v-.6A9.7 9.7 0 0024 4.6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.5 0 4.8.1 1.3.1 2.1.2 2.6.3.7.2 1.2.4 1.7.9.5.5.7 1 .9 1.7.1.5.2 1.3.3 2.6.1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1 1.3-.2 2.1-.3 2.6-.2.7-.4 1.2-.9 1.7-.5.5-1 .7-1.7.9-.5.1-1.3.2-2.6.3-1.3.1-1.6.1-4.8.1s-3.5 0-4.8-.1c-1.3-.1-2.1-.2-2.6-.3-.7-.2-1.2-.4-1.7-.9-.5-.5-.7-1-.9-1.7-.1-.5-.2-1.3-.3-2.6C2 15.5 2 15.2 2 12s0-3.5.1-4.8c.1-1.3.2-2.1.3-2.6.2-.7.4-1.2.9-1.7.5-.5 1-.7 1.7-.9.5-.1 1.3-.2 2.6-.3C8.5 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1c-1.3.1-2.2.2-2.9.4-.9.2-1.7.5-2.4 1.2-.7.7-1 .5-1.2 2.4C.1 6.7 0 7.5 0 12s.1 5.3.4 6.8c.2.9.5 1.7 1.2 2.4.7.7 1.5 1 2.4 1.2 1.4.3 2.6.4 6.8.4s5.3-.1 6.8-.4c.9-.2 1.7-.5 2.4-1.2.7-.7 1-1.5 1.2-2.4.3-1.4.4-2.6.4-6.8s-.1-5.3-.4-6.8c-.2-.9-.5-1.7-1.2-2.4-.7-.7-1.5-1-2.4-1.2C16.7.1 15.5 0 12 0zM12 5.7a6.3 6.3 0 100 12.6 6.3 6.3 0 000-12.6zm0 10.5a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.3-10.4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} New Homio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
