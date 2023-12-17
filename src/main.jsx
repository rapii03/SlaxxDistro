import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/user/home'
import AllProduct from './pages/user/all-product'
import Cart from './pages/user/cart'
import Profile from './pages/user/profile.jsx'

import Login from './pages/dashboard/authorization/login'
import SignUp from './pages/dashboard/authorization/sign-up'
import Product from './pages/dashboard/product/product'
import Order from './pages/dashboard/order/order'
import Reportpay from './pages/dashboard/report-pay/report-pay'
import Shipment from './pages/dashboard/shipment/shipment'
import User from './pages/dashboard/user/user'

import AddProduct from './pages/dashboard/product/add-product'
import EditProduct from './pages/dashboard/product/edit-product'
import DetailOrder from './pages/dashboard/order/detail-order'
import AddUser from './pages/dashboard/user/add-user'
import EditUser from './pages/dashboard/user/edit-user'
import Shipping from './pages/user/shipping.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
    path: "/shipping",
    element: <Shipping />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/report-pay",
    element: <Reportpay />
  },
  {
    path: "/shipment",
    element: <Shipment />
  },
  {
    path: "/user",
    element: <User />
  },

  {
    path: "/add-product",
    element: <AddProduct />
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />
  },
  {
    path: "/detail-order/:id",
    element: <DetailOrder />
  },
  {
    path: "/add-user",
    element: <AddUser />
  },
  {
    path: "/edit-user/:id",
    element: <EditUser />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
