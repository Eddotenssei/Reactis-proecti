import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <div>home page</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}