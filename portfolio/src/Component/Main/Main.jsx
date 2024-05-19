import React, { useState, useEffect } from "react";
import Profile from "./DP_jash.jpg";
import MainNavbar from "../Navbar/MainNavbar";
import "./Background.css";
import "./main.css";
import Background from "./Background";

const Main = ({ isDarkMode, handleToggle }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const name = "JASH ASMANI";

  useEffect(() => {
    // Animation interval to reveal characters
    const interval = setInterval(() => {
      setVisibleChars((prev) => (prev < name.length ? prev + 1 : prev));
    }, 300);

    // Reset the visible characters every 5 seconds
    const restartInterval = setInterval(() => {
      setVisibleChars(0);
    }, 5000);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(interval);
      clearInterval(restartInterval);
    };
  }, [name.length]);

  return (
    <>
      <MainNavbar isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <section className="container">
        <div className="background-container">
          <Background />
        </div>
        <div
          style={{ margin: "8rem 0" }}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center overlay-content"
        >
          <div
            className="text-center"
            style={{
              color: isDarkMode ? "#ffffff" : "#000000",
              paddingRight: "1rem",
            }}
          >
            <div className="container">
              <h6 className="title">
                I'M{" "}
                <span
                  className="sub-title"
                  style={{
                    color: isDarkMode ? "#ffffff" : "#000000",
                    paddingLeft: "8px",
                  }}
                >
                  {name.split("").map((char, index) => (
                    <span key={index}>
                      {index < visibleChars
                        ? char === " "
                          ? "\u00A0"
                          : char
                        : ""}
                    </span>
                  ))}
                </span>
              </h6>
              <h2 className="subtitle">
                Full Stack Developer & Enterprise Solutions Expert
              </h2>
              <div className="d-flex justify-content-around">
                <button
                  type="button"
                  className={
                    isDarkMode
                      ? "btn btn-outline-light btn-sm"
                      : "btn btn-outline-dark btn-sm"
                  }
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src={Profile}
              alt="Profile"
              className="my-3"
              style={{
                marginLeft: "1rem",
                maxWidth: "250px",
                maxHeight: "250px",
                border: "6px solid white",
                borderRadius: "2rem",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
