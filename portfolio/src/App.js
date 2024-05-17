import React, { useState, useEffect } from "react";
import "./App.css";
import MainNavbar from "./Component/Navbar/MainNavbar";
import Main from "./Component/Main/Main";

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
    <div>
      <MainNavbar isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <div
        style={{ background: isDarkMode ? "dark" : "light", height: "100vh" }}
      >
        <Main isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
