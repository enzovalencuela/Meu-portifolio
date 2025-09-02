import React, { useEffect, useState } from "react";
import { DarkModeContext } from "./components/ui/DarkModeContext";
import "./App.css";
import Nav from "./pages/Nav/Nav";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./pages/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Nav />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
