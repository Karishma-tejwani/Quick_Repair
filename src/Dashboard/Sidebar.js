import React, { useState } from "react";
import "../Style/Admin.css";
import { NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Customers",
      name: "Customers",
      icon: <FaUserAlt />,
    },
    {
      path: "/Orders",
      name: "Orders",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Add",
      name: "Add",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Edit",
      name: "Edit",
      icon: <FaShoppingBag />,
    },
    {
      path: "/Services",
      name: "Services",
      icon: <FaThList />,
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
