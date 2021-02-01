import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logoOrigin from "../../Images/logo.svg";
import "./NavBar.css";



function NavBar() {
  return (
<Navbar bg="dark" variant="light" expand="lg">
<img className="Logo-navBar" width="180" src={logoOrigin} />
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
</Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;
