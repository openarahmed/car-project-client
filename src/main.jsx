import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compo/Root.jsx';
import Services from './Compo/Services.jsx';
import BookMark from './Compo/BookMark.jsx';
import Cart from './Compo/Cart.jsx';
import Signin from './Compo/User/Signin.jsx';
import Login from './Compo/User/Login.jsx';
import Authprovider from './Compo/Authprovider.jsx';
import PrivetRoute from './Compo/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Services></Services>
      },
      {
        path: 'bookmark/:id',
        element: <PrivetRoute><BookMark></BookMark></PrivetRoute>,
        loader: ()=>fetch('https://y-indol-eta.vercel.app/services')

      },
      {
        path: 'cart',
        element: <Cart></Cart>,
       
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider> <RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
