import React from "react";
import "./App.css";
import AppShell from "./AppShell";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <AppShell />
      <Analytics />
    </>
  );
}

export default App;
