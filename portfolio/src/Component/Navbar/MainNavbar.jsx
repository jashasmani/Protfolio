import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavbar.css";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightIcon from "@mui/icons-material/Nightlight";

function CustomNavbar({ isDarkMode, handleToggle }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={`${isDarkMode ? "navbar-dark text-white" : "navbar-light "}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home" className="left">
          Jash Asmani
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex m-auto">
            <Nav.Link as={Link} to="/" className="rm-bottom left">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="rm-bottom left">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className="rm-bottom left">
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="rm-bottom left">
              BLOG
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/resume"
              className="rm-bottom left"
              style={{ marginRight: ".5rem" }}
            >
              RESUME
            </Nav.Link>
            <div className="d-flex align-items-center ">
              <Button
                type="primary"
                shape="circle"
                icon={
                  isDarkMode ? (
                    <Brightness7Icon />
                  ) : (
                    <NightlightIcon style={{ color: "black" }} />
                  )
                }
                onClick={handleToggle}
                className="rm-border left mode1"
                id="mode1"
              />
            </div>
            <div className="d-flex align-items-center ">
              <Button
                onClick={handleToggle}
                className="rm-border left mode1"
                id="mode2"
                style={{
                  background: isDarkMode ? "white" : "black",
                  color: !isDarkMode ? "white" : "black",
                }}
              >
                {isDarkMode ? "LIGHT" : "DARK"}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
