import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './Layout/Layout';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Inbox from './pages/Inbox';
import Friends from './pages/Friends';
import Marketplace from './pages/Marketplace';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { 
        index: true, 
        element: <Homepage></Homepage>
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
      },
      {
        path: "marketplace",
        element: <Marketplace></Marketplace>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
