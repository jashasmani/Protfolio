import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Social from "../RightSide/Social";
import Footer from "../Footer/Footer";

function First({ isDarkMode }) {
  return (
    <>
      <div
        style={{ background: isDarkMode ? "dark" : "light", height: "100vh" }}
      >
        <Main isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skill isDarkMode={isDarkMode} />
        <Social />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default First;
