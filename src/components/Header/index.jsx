import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="fs-3 text-uppercase text-dark" to="/">
            Router
          </NavLink>
          <ul className="nav-list d-flex align-items-center gap-3 mt-2">
            <li className="nav-item list-unstyled">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fs-5 text-danger" : "nav-link fs-5"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fs-5 text-danger" : "nav-link fs-5"
                }
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
