import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navmain() {
    return (
        <div>
                      <nav>
                      <NavLink className="navtext" exact to="/">
                Home
              </NavLink>
              <NavLink className="navtext" exact to="/About">
                About
              </NavLink>
              <NavLink className="navtext" exact to="/Projects">
                My projects
              </NavLink>
              <NavLink  className="navtext" exact to="/Contact">
                Contact
              </NavLink>
            </nav>
        </div>
    )
}
