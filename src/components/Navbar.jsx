import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";

const NavBar = (props) => {
  const [users, setusers] = useState(props.users);

  const styled = ({ isActive }) =>
    isActive ? { color: "white" } : { color: "#bdbdbd" };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            Shopping Chart
          </NavLink>
          <div className="collapse navbar-collapse .text-light" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="/">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="/cart">
                  Shopping Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="admin">
                  Admin
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="login">
                  Login
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="useres">
                  Useres
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={styled} to="adduser">
                  add Useres
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="me-5">
            <span className="badge bg-primary">{props.productsCount}</span>
          </div>
          <div
            className="d-flex "
            style={{
              // backgroundColor: "white",
              borderRadius: "5%",
              padding: ".5vw",
            }}
          >
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  style={{ backgroundColor: "#212529", border: "none" }}
                >
                  <i
                    className="fa-solid fa-circle-user"
                    style={{ color: "white", fontSize: "2vw" }}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {props.users &&
                    props.users.map((item) => (
                      <Dropdown.Item key={item._id}>
                        {item.username}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
