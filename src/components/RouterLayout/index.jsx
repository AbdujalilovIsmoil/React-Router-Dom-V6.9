import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const index = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default index;
