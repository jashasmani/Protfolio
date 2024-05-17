import React from "react";
import Profile from "./DP_jash.jpg";

const Main = ({ isDarkMode }) => {
  return (
    <section style={{ margin: "10rem 0" }}>
      <div className="d-flex flex-row justify-content-center">
        <div
          className="d-flex flex-row-reverse"
          style={{
            width: "50%",
          }}
        >
          <img
            src={Profile}
            alt="Profile"
            className=" my-3"
            style={{
              margin: "0 8rem",
              width: "10rem",
              height: "10rem",
              border: "6px solid white",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div
          className="d-flex flex-column justify-content-center align-middle"
          style={{ color: isDarkMode ? "#ffffff" : "#000000", width: "50%" }}
        >
          <h1>Jash Asmani</h1>
          <h5 className="mt-5">Crafting innovative software solutions.</h5>
        </div>
      </div>
    </section>
  );
};

export default Main;
