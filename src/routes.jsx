import React from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  CollectionsPage,
  DashboardPage,
  HistoryPage,
  HomePage,
  LikePage,
  LoginPage,
  MyContentPage,
  SubscriptionsPage,
} from "./pages/index";
import Layout from "./Layout";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/likes",
        element: <LikePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/my-content",
        element: <MyContentPage />,
      },
      {
        path: "/collections",
        element: <CollectionsPage />,
      },
      {
        path: "/subscriptions",
        element: <SubscriptionsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppRoutes;
