import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const About = () => {
  return (
    <React.Fragment>
      <h2>About Page</h2>
      <ul>
        <li className="m-2">
          <NavLink
            to="team"
            className={(e) =>
              e.isActive
                ? "bg-secondary text-light text-decoration-none rounded p-1"
                : ""
            }
          >
            team
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="company"
            className={(e) =>
              e.isActive
                ? "bg-secondary text-light text-decoration-none rounded p-1"
                : ""
            }
          >
            company
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </React.Fragment>
  );
};

export default About;
