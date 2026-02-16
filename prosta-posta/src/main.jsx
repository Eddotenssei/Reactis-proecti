import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import PostDetails from './pages/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
  path: "/postDetails/:id",
  element: <PostDetails />
}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
