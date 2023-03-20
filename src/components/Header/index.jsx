import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <nav className="navbar bg-light ">
        <div className="container">
          <NavLink
            style={{ fontSize: "20px" }}
            className="logo text-dark"
            to="/"
          >
            Navbar
          </NavLink>
          <ul
            style={{ marginTop: "20px" }}
            className="list d-flex align-items-center gap-4"
          >
            <li className="list-item list-unstyled">
              <NavLink
                style={{ fontSize: "18px" }}
                className="list-item__link text-dark"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="list-item list-unstyled">
              <NavLink
                style={{ fontSize: "18px" }}
                className="list-item__link text-dark"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default index;
