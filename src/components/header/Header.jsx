import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Nav className="bg-dark">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </Nav>
    </>
  );
}
