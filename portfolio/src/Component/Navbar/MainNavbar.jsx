import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNavbar.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { Button } from "antd";

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
              to="/project"
              id={isDarkMode ? "hd" : "h"}
              className={isDarkMode ? "text-light" : ""}
            >
              PROJECTS
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
              className={isDarkMode ? " text-light" : ""}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="d-flex align-items-center">
        <Button
          style={{
            backgroundColor: "transparent",
            color: "inherit",
            marginLeft: ".5rem",
          }}
          className="rm-border"
        >
          Resume
        </Button>

        <Button
          type="primary"
          icon={isDarkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
          onChange={handleToggle}
          className="rm-border"
          style={{
            backgroundColor: "transparent",
            border: "0.5px white solid ",
            color: "inherit",
            marginLeft: ".5rem",
          }}
        />
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
