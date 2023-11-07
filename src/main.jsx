import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error.jsx';
import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Products from './pages/products.jsx';
import ProductSingle from './pages/productSingle.jsx';
import Cart from './pages/cart.jsx';
import Checkout from './pages/checkout.jsx';
import Thank from './pages/thank';
import Login from './pages/login';
import Register from './pages/register';
import { Provider } from 'react-redux';
import store from './utils/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    errorElement: <ErrorPage />,
  },
  ,
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/product/:productId",
    element: <ProductSingle/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/thanks",
    element: <Thank/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><RouterProvider router={router} /></Provider> 
  
)
