import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginSignUp from './Pages/LoginSingUp.jsx'
import Shop from './Pages/Shop.jsx'
import Product from './Pages/Product.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Cart from './Pages/Cart.jsx'
const router = createBrowserRouter([
  { 
    path: '/',
    element: <App></App>,
    children: 
      [
      {
    path: '/',
    element: <Shop></Shop> 
  },
  {
    path: '/mens',
    element :<ShopCategory></ShopCategory>
  
  },
  {
    path: '/womens',
    element: <ShopCategory></ShopCategory>
  },
  {
    path: '/kids',
    element: <ShopCategory></ShopCategory>

  },
  {
    path: '/product',
    element:<Product></Product> 
  },
  {
    path: '/productId',
    element:<Product></Product> 
  },
  {
    path: '/login',
    element : <LoginSignUp></LoginSignUp>
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  }
    ]

  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
