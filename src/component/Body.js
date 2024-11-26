import React, { useEffect } from "react";
import Browse from "./Browse";
import First from "./First";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./Intro";
import { useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import HotelCard from "./HotelCard";
import Admin from "./Admin";


const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Intro/>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/login",
      element:<First/>
    },
    {
      path:"/hotel",
      element: <HotelCard/>
    },
    {
      path : "/admin",
      element : <Admin/>
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
         const {uid,email,displayName} = user;
         dispatch(addUser({uid:uid, email:email, displayName:displayName}));
      } else {
        dispatch(removeUser());
        // User is signed out
      }
    });
    
  },[]);

  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
