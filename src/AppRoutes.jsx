import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
//import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/*<Route path="/projetos/:slug" element={<ProjectDetails />} />*/}
      <Route path="/projetos" element={<ProjectsPage />} />
    </Routes>
  );
}

export default AppRoutes;
