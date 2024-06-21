import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import ShoppingChart from '../pages/ShoppingChart';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import ProtectedRoutes from './ProtectedRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'product-list/:categoryId',
    element: <ProductList />,
  },
  {
    path: 'product-detail/:productId',
    element: <ProductDetail />,
  },
  {
    path: 'shopping-chart',
    element: <ShoppingChart />,
  },
  {
    path: 'search',
    element: <ProductList />,
  },
  {
    path: 'checkout',
    element: <ProtectedRoutes/>,
    children: [
     { index: "true",
      element: <Checkout />}
    ]
  },
  {
    path: 'success',
    element: <ProtectedRoutes/>,
    children: [
     { index: "true",
      element: <Success />}
    ]
  },
]);
