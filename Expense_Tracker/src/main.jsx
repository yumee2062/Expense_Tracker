import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layouts/RootLayout";
import Homepage from "./Pages/Homepage";
import './App.css';
import './index.css'
import About from "./Pages/About";
import Feature from "./Pages/Feature";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register"
import Login from "./Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children:[
      {
      index:true,
      element:<Homepage/>
      },
      {
      path: '/about',
      element: <About/>,
      },
      {
       path: "features",
       element: <Feature/>,
      },
      {
       path: "contact",
       element: <Contact />,
      },
      {
         path: "/register",
         element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
