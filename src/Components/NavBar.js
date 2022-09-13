import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Style.css";
import logo from "../images/log.png";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

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
            <i
              className="zmdi zmdi-home zmdi-hc-lg"
              style={{ marginLeft: "80%", marginTop: "45%" }}
            ></i>
            <li style={{ marginLeft: "70%" }}>Home</li>
          </NavLink>

          <NavLink className="about" to="/about">
            <i
              className="zmdi zmdi-accounts zmdi-hc-lg"
              style={{ marginLeft: "80%", marginTop: "35%" }}
            ></i>
            <li style={{ marginLeft: "70%" }}>About</li>
          </NavLink>

          <div className="service">
            {/* using material design icons */}
            <i
              className="fa-solid fa-people-carry-box fa-lg"
              style={{ marginLeft: "35%", marginTop: "15%" }}
            ></i>
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

          <NavLink
            className="company"
            style={{ marginLeft: "-2%" }}
            to="/company"
          >
            <i
              className="fa-solid fa-building-circle-check fa-lg"
              style={{ marginLeft: "30%", marginTop: "30%" }}
            ></i>
            <li>Company</li>
          </NavLink>

          {/* <NavLink className="hire" to="/hire"> */}
          {/* <UserOutlined /> */}
          {/* <i class="fa-solid fa-user-check fa-lg"></i>
            <li>Hire</li>
          </NavLink> */}

          <NavLink className="contact" to="/contact">
            <i
              className="fa-regular fa-address-card fa-lg"
              style={{ marginLeft: "20%", marginTop: "37%" }}
            ></i>
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
                    Login
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
