import React from "react";
import "../Style/Admin.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <span>
          Quick<span>Repair</span>
        </span>
      </div>
      <div className="menu">
        <div className="menuItems active">
          <ul>
            <li>
              <NavLink to="/Dashboard">
                <a href="#">
                  <span className="icon">
                    <i className="zmdi zmdi-home"></i>
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Orders">
                <a href="#">
                  <span className="icon">
                    <i className="zmdi zmdi-shopping-cart"></i>
                  </span>
                  <span className="title">Orders</span>
                </a>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Services">
                <a href="#">
                  <span className="icon">
                    <i className="zmdi zmdi-wrench"></i>
                  </span>
                  <span className="title">Services</span>
                </a>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Add">
                <a href="#">
                  <span className="icon">
                    <i className="zmdi zmdi-accounts-add"></i>
                  </span>
                  <span className="title">Workers</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Customers">
                <a href="#">
                  <span className="icon">
                    <i className="zmdi zmdi-accounts"></i>
                  </span>
                  <span className="title">Customers</span>
                </a>
              </NavLink>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="zmdi zmdi-star"></i>
                </span>
                <span className="title">Feedback</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="title">SignOut</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
