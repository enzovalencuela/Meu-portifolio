import React, { useEffect, useState } from "react";
import { DarkModeContext } from "./components/ui/DarkModeContext";
import AppRoutes from "./AppRoutes";

function AppShell() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedDarkMode = window.localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;

      if (typeof window !== "undefined") {
        window.localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      }

      return newDarkMode;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <AppRoutes />
      </DarkModeContext.Provider>
    </div>
  );
}

export default AppShell;
