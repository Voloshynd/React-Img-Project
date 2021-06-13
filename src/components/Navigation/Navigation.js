import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/hot" activeClassName="active">
            Hot
          </NavLink>
        </li>
        <li>
          <NavLink to="/regular" activeClassName="active">
            Regular
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload" activeClassName="active">
            Upload
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
