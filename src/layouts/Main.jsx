import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto my-10">
        <Outlet></Outlet>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
