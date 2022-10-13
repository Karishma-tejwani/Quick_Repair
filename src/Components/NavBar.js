import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Style.css";
import logo from "../images/log.png";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const auth = useSelector((state) => state.auth);
  console.log("login file", auth);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink className="home" to="/">
            <li>Home</li>
          </NavLink>

          <NavLink className="about" to="/about">
            <li>About</li>
          </NavLink>

          <div className="service">
            <NavDropdown
              title="Services"
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item>
                <NavLink to="/cleaning" className="dropdown">
                  Home Cleaning Service
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/carpentry" className="dropdown">
                  Carpentry Service
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/electrical" className="dropdown">
                  Electrical Appliance Repair Service
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/plumbing" className="dropdown">
                  Plumbing Service
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/painting" className="dropdown">
                  Home Painting Service
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/laundry" className="dropdown">
                  Laundry Service
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <NavLink className="company" to="/company">
            <li>Company</li>
          </NavLink>
          <NavLink className="contact" to="/contact">
            <li>Contact</li>
          </NavLink>

          <div>
            <span className="user">
              <i
                className="fa-solid fa-circle-user fa-2x"
                style={{ marginLeft: "20%", marginTop: "35%" }}
              ></i>
            </span>
            <div className="col-md-6">
              <NavDropdown id="navbarScrollingDropdown" menuVariant="dark">
                <NavDropdown.Item>
                  <NavLink to="/login" className="dropdown">
                    {auth ? "Logout" : "Login"}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/register" className="dropdown">
                    Registration
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
