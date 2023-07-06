import { BrowserRouter, useRoutes } from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import { ShoppingCartProvider } from '../../Context';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/clothes',
      element: <Home/>
    },
    {
      path: '/electronics',
      element: <Home/>
    },
    {
      path: '/furnitures',
      element: <Home/>
    },
    {
      path: '/myaccount',
      element: <MyAccount/>
    },
    {
      path: '/myorder',
      element: <MyOrder/>
    },
    {
      path: '/myorders',
      element: <MyOrders/>
    },
    {
      path: '/myorders/last',
      element: <MyOrder/>
    },
    {
      path: '/myorders/:id',
      element: <MyOrder/>
    },
    {
      path: '/notfound',
      element: <NotFound/>
    },
    {
      path: '/signin',
      element: <SignIn/>
    }
  ])

  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar></Navbar>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App
