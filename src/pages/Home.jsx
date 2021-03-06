import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="imghome">
      <div id="stars"> </div>
      <div id="stars2"> </div>
      <div id="stars3"> </div>

<div id="title"></div>
        <h1 className="title">Edouard Pfauwadel</h1>
        <hr></hr>
        <h2 className="subtitle">Full Stack Web Developper</h2>
        <nav className="nav nav-pills nav-fill navtext">
          <NavLink
            className="nav-item"
           
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-link active"
            exact
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-link active"
            exact
            to="/Projects"
          >
            My projects
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-link active"
            exact
            to="/Contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }
}
