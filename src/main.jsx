import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/user/home'
import AllProduct from './pages/user/all-product'
import Cart from './pages/user/cart'
import Profile from './pages/user/profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/all-product",
    element: <AllProduct />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
