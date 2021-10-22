import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { Navbar, NavDropdown } from "react-bootstrap";
import SearchBar from "../common/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const proData = require("../data/products.json");

const Navigation = () => {
  function loggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/categories">
            Categories
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          {/* <NavLink className="nav-link" to ='/categories'> */}
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          {/* </NavLink> */}
        </li>

        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Hello X
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Log out{" "}
            {/* Log out {currentUser.first_name || currentUser.username} */}
          </Link>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/Cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        GameShop
      </Link>

      {loggedInNav()}
    </nav>
  );
};

export default Navigation;
