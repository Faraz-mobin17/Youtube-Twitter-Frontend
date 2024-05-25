import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Error from "./components/common/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/like",
        // element:
      },
      {
        path: "/history",
        // element:
      },
      {
        path: "/my-content",
        // element:
      },
      {
        path: "/collections",
        // element:
      },
      {
        path: "/subscriptions",
        // element:
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
