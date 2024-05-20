import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import About from "./Component/About/About";
import MainNavbar from "./Component/Navbar/MainNavbar";
import Skill from "./Component/Skill/Skill";
import Projects from "./Component/Projects/Projects";

function App() {
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
        <MainNavbar isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <Main isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <About />
        <Projects />
        <Skill />
      </div>
    </>
  );
}

export default App;
