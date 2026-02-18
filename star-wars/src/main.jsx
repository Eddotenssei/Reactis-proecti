import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import SpeciesDetails from './assets/pages/SpeciesDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SpeciesDetails",
    element: <SpeciesDetails />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />

  </StrictMode>,
)
