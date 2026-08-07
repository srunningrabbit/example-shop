import React from 'react';
import Home from './pages/Home/Home';
import Patterns from './pages/Patterns/Patterns'
import Items from './pages/Items/Items';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';
import Search from './pages/Search/Search';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "patterns", element: <Patterns /> },
      { path: "yarn", element: <Items itemType="yarn" /> },
      { path: "tools", element: <Items itemType="tools" /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
      { path: "search", element: <Search /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
