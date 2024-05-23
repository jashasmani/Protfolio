import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import About from "../About/About";
import MainNavbar from "../Navbar/MainNavbar";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Social from "../RightSide/Social";
import Contect from "../Contact/Contact";

function First() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <div
        style={{ background: isDarkMode ? "dark" : "light", height: "100vh" }}
      >
        {/* <MainNavbar isDarkMode={isDarkMode} handleToggle={handleToggle} /> */}
        <Main isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <About />
        <Projects isDarkMode={isDarkMode} />
        <Skill />
        <Social />
        {/* <Contect /> */}
      </div>
    </>
  );
}

export default First;
