/* eslint-disable no-unused-vars */
import React from "react";
import { getProjectTranslation, projectsWithSlug } from "./ProjectsData";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";
import "./Projects.css";
import { useLanguage } from "@/components/ui/LanguageContext";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { language, copy } = useLanguage();
  const navigate = useNavigate();
  const projectsToShow = projectsWithSlug
    .slice(0, 4)
    .map((project) => getProjectTranslation(project, language));

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-header">
        <div className="projects-header-text">
          <motion.h2
            id="projects-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {copy.projects.title}
          </motion.h2>
          <p className="projects-intro">{copy.projects.intro}</p>
        </div>

        <div className="see-all-btn" onClick={navigate("/projetos")}>
          <span>{copy.projects.seeAll}</span>
          <span className="arrow">→</span>
        </div>
      </div>

      <motion.div
        className="div__projects"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectsToShow.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
