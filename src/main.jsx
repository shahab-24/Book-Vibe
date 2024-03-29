import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import BookDetails from "./assets/BookDetails/BookDetails.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Components/PagesToRead/PagesToRead.jsx";
import Read from "./Components/Read.jsx";
import Wishlist from "./Components/Wishlist.jsx";
import BuyNow from "./BuyNow.jsx";
import Recommend from "./Recommend.jsx";
import ErrorPage from "./ErrorPage.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/book/:Id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch("Books.json")
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("Books.json"),
        children: [
          {
            index: true,
            element: <Read></Read>
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
       
      },
      {
        path: '/buy',
        element: <BuyNow></BuyNow> 
      },
      {
        path: '/recommend',
        element: <Recommend></Recommend>
      }
    
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
