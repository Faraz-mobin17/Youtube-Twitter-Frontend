// App.jsx
import React from "react";
import Header from "./components/layout/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import Login from "./components/auth/components/Login";
import Signup from "./components/auth/components/Signup";
function App() {
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

export default App;
