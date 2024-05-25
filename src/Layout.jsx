import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/MainContent";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}
