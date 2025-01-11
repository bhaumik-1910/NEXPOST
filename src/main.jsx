import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkdinPost from './components/LinkdinPost.jsx'
import UserProfile from './components/UserProfile.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/", element: <App />, children: [
//       { path: "/LinkdinPost", element: <LinkdinPost /> },
//     ],
//   },
// ])

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/LinkdinPost", element: <LinkdinPost /> },
  { path: "/UserProfile", element: <UserProfile /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
