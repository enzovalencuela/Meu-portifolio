import React, { useState } from "react";
import { DarkModeContext } from "./components/ui/DarkModeContext";
import "./App.css";
import Main from "./pages/Main/Main";
import Nav from "./pages/Nav/Nav";
import Projects from "./pages/Projects/Projects";
import LogotipoPage from "./pages/LogotipoPage/LogotipoPage";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Nav />
        <Main />
        <Projects />
        <LogotipoPage />
        <Contacts />
        <Footer />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
