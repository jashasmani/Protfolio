import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import MainNavbar from "./Component/Navbar/MainNavbar";
import Contact from "./Component/Contact/Contact";
import First from "./Component/First/First";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moreproject from "./Component/MoreProject/Moreproject";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <MainNavbar isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <Routes>
          <Route path="/" element={<First isDarkMode={isDarkMode}/>} />
          <Route path="/home" element={<Main isDarkMode={isDarkMode}/>} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode}/>} />
          <Route
            path="/project"
            element={
              <Moreproject
                isDarkMode={isDarkMode}
                handleToggle={handleToggle}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
