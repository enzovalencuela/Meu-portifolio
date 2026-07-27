/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProjectTranslation,
  projectsWithSlug,
} from "../Projects/ProjectsData";
import ProjectCard from "../../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageContext";
import "./ProjectsPage.css";

function ProjectsPage() {
  const { language, copy } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  // Tradução dos projetos
  const allProjects = projectsWithSlug.map((project) =>
    getProjectTranslation(project, language),
  );

  // Lógica do Filtro
  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  // Rótulos traduzidos dos filtros
  const filterLabels = {
    pt: {
      all: "Todos",
      megajr: "Mega Jr",
      fullstack: "Full-Stack",
      freelance: "Freelance",
      frontend: "Front-End",
    },
    en: {
      all: "All",
      megajr: "Mega Jr",
      fullstack: "Full-Stack",
      freelance: "Freelance",
      frontend: "Front-End",
    },
    es: {
      all: "Todos",
      megajr: "Mega Jr",
      fullstack: "Full-Stack",
      freelance: "Freelance",
      frontend: "Front-End",
    },
    de: {
      all: "Alle",
      megajr: "Mega Jr",
      fullstack: "Full-Stack",
      freelance: "Freelance",
      frontend: "Front-End",
    },
    it: {
      all: "Tutti",
      megajr: "Mega Jr",
      fullstack: "Full-Stack",
      freelance: "Freelance",
      frontend: "Front-End",
    },
  };

  const currentLabels = filterLabels[language] || filterLabels.pt;

  const filters = [
    { key: "all", label: currentLabels.all },
    { key: "megajr", label: currentLabels.megajr },
    { key: "fullstack", label: currentLabels.fullstack },
    { key: "freelance", label: currentLabels.freelance },
    { key: "frontend", label: currentLabels.frontend },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="projetos-page-container">
      <div className="projetos-page-header">
        <div className="back-link" onClick={() => navigate("/")}>
          ← {copy.projects.backToHome}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {copy.projects?.allProjectsTitle || "Todos os Projetos"}
        </motion.h1>

        <p className="projetos-page-description">
          {copy.projects?.allProjectsIntro ||
            "Explore o portfólio completo de aplicações web, sistemas corporativos e projetos em equipe."}
        </p>

        {/* Filtros por Categoria */}
        <div className="filters-container">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Projetos com Animação de Troca de Filtro */}
      <motion.div
        className="div__projects"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              layout
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ProjectsPage;
