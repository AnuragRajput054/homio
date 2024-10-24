import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import First from "./First";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./Intro";

const Body = () => {
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
    }
  ]);

  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
