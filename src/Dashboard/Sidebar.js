import React, { useState } from "react";
import "../Style/Admin.css";
import { NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUsers,
  FaCartPlus,
  FaUserCog,
  FaPhoneAlt,
} from "react-icons/fa";

const Sidebar = ({ children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: `/Dashboard/${id}`,
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Customers",
      name: "Customers",
      icon: <FaUsers />,
    },
    {
      path: `/Orders/${id}`,
      name: "Orders",
      icon: <FaCartPlus />,
    },
    {
      path: `/Workers/${id}`,
      name: "Workers",
      icon: <FaUserCog />,
    },
    {
      path: "/Service",
      name: "Services",
      icon: <FaPhoneAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "350px" : "70px" }} className="sidebar">
        <div className="top_section">
          <h3 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Quick Repair
          </h3>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
