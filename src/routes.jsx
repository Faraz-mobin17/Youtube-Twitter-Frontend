import React from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  CollectionsPage,
  DashboardPage,
  HistoryPage,
  HomePage,
  LikePage,
  LoginPage,
  SubscriptionsPage,
} from "./pages/index";
import Layout from "./Layout";
import Playlits from "./pages/Playlits";
import Settings from "./pages/Settings";
import SignupPage from "./pages/SignupPage";
import ChannelPage from "./pages/ChannelPage";
import StudioPage from "./pages/StudioPage";
import ChannelVideos from "./components/specific/Channel/ChannelVideos";
import ChannelPlaylist from "./components/specific/Channel/ChannelPlaylist";
import ChannelTweets from "./components/specific/Channel/ChannelTweets";
import ChannelSubscribed from "./components/specific/Channel/ChannelSubscribed";

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
        element: <ChannelPage />,
        children: [
          {
            path: "videos",
            element: <ChannelVideos />,
          },
          {
            path: "playlists",
            element: <ChannelPlaylist />,
          },
          {
            path: "tweets",
            element: <ChannelTweets />,
          },
          {
            path: "subscribed",
            element: <ChannelSubscribed />,
          },
        ],
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
    path: "/studio",
    element: <StudioPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default AppRoutes;
