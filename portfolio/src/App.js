import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import About from "./Component/About/About";

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
        style={{ background: isDarkMode ? "dark" : "light", height: "80vh" }}
      >
        <Main isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <About />
      </div>
    </>
  );
}

export default App;
