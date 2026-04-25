import React, { useEffect, useState } from "react";
import "./App.css";
import AppShell from "./AppShell";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";

function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)",
    );

    const handleChange = (event) => {
      setReduceMotion(event.matches);
    };

    setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
        <AppShell />
      </MotionConfig>
      <Analytics />
    </>
  );
}

export default App;
