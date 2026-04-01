import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";


import Register from "./pages/register";
import Login from "./pages/login";
import Layout from "./pages/Layout";
import Home from "./pages/home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/register",
        element: <Register />
      },
    {
        path: "/login",
        element: <Login />
      },
    {
        path: "/",
        element: <Home />
      }
    ]
    }
  ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
