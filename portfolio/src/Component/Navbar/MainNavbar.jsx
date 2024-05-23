import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNavbar.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

function CustomNavbar({ isDarkMode, handleToggle }) {
  return (
    <Navbar
      expand="lg"
      className="pe-4 d-flex justify-content-between"
      style={{
        boxShadow: isDarkMode
          ? "0 4px 6px rgba(255, 255, 255, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/home"
        className={isDarkMode ? "ms-5 text-light" : "ms-5"}
      >
        Jash Asmani
      </Navbar.Brand>
      <div className="d-flex align-items-center">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <Nav.Link
              as={Link}
              to="/"
              id={isDarkMode ? "hd" : "h"}
              className={isDarkMode ? "text-light" : ""}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              id={isDarkMode ? "hd" : "h"}
              className={isDarkMode ? "text-light" : ""}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              id={isDarkMode ? "hd" : "h"}
              className={isDarkMode ? "text-light" : ""}
            >
              BLOG
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              id={isDarkMode ? "hd" : "h"}
              className={isDarkMode ? "text-light" : ""}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="d-flex align-items-center">
        <button
          as={Link}
          to="/hire-me"
          type="button"
          className={
            isDarkMode
              ? "mx-3 btn btn-outline-light"
              : "mx-3 btn btn-outline-dark"
          }
          style={{
            "--bs-btn-padding-y": ".30rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem",
          }}
        >
          Resume
        </button>
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-2"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label
          className="btn btn"
          htmlFor="btn-check-2"
          style={{
            border: `1px solid ${isDarkMode ? "white" : "black"}`,
            "--bs-btn-padding-y": ".10rem",
            "--bs-btn-padding-x": ".25rem",
            "--bs-btn-font-size": ".75rem",
          }}
        >
          {isDarkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
        </label>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
