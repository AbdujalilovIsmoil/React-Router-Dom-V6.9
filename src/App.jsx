import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./components/RouterLayout";
import Home from "./components/Home";
import About from "./components/About";
import ItemList from "./components/About/ItemList";

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
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
