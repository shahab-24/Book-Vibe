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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
