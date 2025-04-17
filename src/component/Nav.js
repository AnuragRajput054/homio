import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const nevigate = useNavigate();
  const movetoHome=()=>{
        nevigate("/"); 
  }

  return (
    <div>
         <header className="bg-white shadow-md ">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">
          New Homio 
        </div>

        <ul className="flex space-x-8 text-2xl pl-96 font-bold">
          <li className="hover:text-red-500 cursor-pointer"   onClick={() => movetoHome()}>
            Home
          </li>
          <li className="relative">
            <button
              className="hover:text-blue-500 cursor-pointer focus:outline-none"
            >
              Services
            </button>
          </li>

          <li className="hover:text-blue-500 cursor-pointer">
            Help
          </li>
        </ul>

        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReIklHILjPiYLwbRMNJHavZ7BaCQLbpjjPw&s"
            alt="User Logo"
            className="w-10 h-10 rounded-full border border-gray-200"
          />
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Nav