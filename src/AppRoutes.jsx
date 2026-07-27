import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";
//import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        {/*<Route path="/projetos/:slug" element={<ProjectDetails />} />*/}
      </Routes>
    </>
  );
}

export default AppRoutes;
