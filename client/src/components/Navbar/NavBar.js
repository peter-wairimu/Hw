import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useLocation } from 'react-router-dom';


function NavBar() {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const handleClick = () => setClick(!click);
  if (location.pathname === '/about'|| location.pathname === '/degree'|| location.pathname === '/inquries') {
    return null;
  }
  return (
    <>

<nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            AUK
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
             
              >
                Major
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/advisor"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Advisor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/motivation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Motivation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/announce"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Announcements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/competitions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Competitions
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>


    </>
  );
}

export default NavBar;
