import React from "react";
import { Header, Sidebar } from "./components/layout/index";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
