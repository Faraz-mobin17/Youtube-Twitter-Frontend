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
import Playlits from "./pages/Playlits";
import Settings from "./pages/Settings";
import SignupPage from "./pages/SignupPage";

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
        path: "/channel",
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
      {
        path: "/playlists",
        element: <Playlits />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default AppRoutes;
