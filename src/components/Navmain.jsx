import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navmain() {
    return (
        <div className="navmain">
                      <nav className="nav nav-pills nav-fill navtext">
                      <NavLink className="nav-item" activeClassName="nav-link active" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-item" activeClassName="nav-link active" exact to="/About">
                About
              </NavLink>
              <NavLink className="nav-item" activeClassName="nav-link active" exact to="/Projects">
                My projects
              </NavLink>
              <NavLink  className="nav-item"  activeClassName="nav-link active"exact to="/Contact">
                Contact
              </NavLink>
            </nav>
        </div>
    )
}
