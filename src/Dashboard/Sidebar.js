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
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
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

// const Sidebar = () => {
//   return (
//     <div className="Sidebar">
//       <div className="logo">
//         <span>
//           Quick<span>Repair</span>
//         </span>
//       </div>
//       <div className="menu">
//         <div className="menuItems active">
//           <ul>
//             <li>
//               <NavLink to="/Dashboard">
//                 <a href="#">
//                   <span className="icon">
//                     <i className="zmdi zmdi-home"></i>
//                   </span>
//                   <span className="title">Dashboard</span>
//                 </a>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/Orders">
//                 <a href="#">
//                   <span className="icon">
//                     <i className="zmdi zmdi-shopping-cart"></i>
//                   </span>
//                   <span className="title">Orders</span>
//                 </a>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/Services">
//                 <a href="#">
//                   <span className="icon">
//                     <i className="zmdi zmdi-wrench"></i>
//                   </span>
//                   <span className="title">Services</span>
//                 </a>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/Add">
//                 <a href="#">
//                   <span className="icon">
//                     <i className="zmdi zmdi-accounts-add"></i>
//                   </span>
//                   <span className="title">Workers</span>
//                 </a>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Customers">
//                 <a href="#">
//                   <span className="icon">
//                     <i className="zmdi zmdi-accounts"></i>
//                   </span>
//                   <span className="title">Customers</span>
//                 </a>
//               </NavLink>
//             </li>
//             <li>
//               <a href="#">
//                 <span className="icon">
//                   <i className="zmdi zmdi-star"></i>
//                 </span>
//                 <span className="title">Feedback</span>
//               </a>
//             </li>

//             <li>
//               <a href="#">
//                 <span className="title">SignOut</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Sidebar;
