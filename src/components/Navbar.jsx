import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  const styled = ({ isActive }) =>
    isActive ? { color: "white" } : { color: "#bdbdbd" };

  return (
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
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="badge bg-primary">{props.productsCount}</span>
      </div>
    </nav>
  );
};

export default NavBar;
