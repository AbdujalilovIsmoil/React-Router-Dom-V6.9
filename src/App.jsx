import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./components/RouterLayout";
import About from "./components/About";
import ItemList from "./components/About/ItemList";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/about/:id",
        element: <ItemList />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
