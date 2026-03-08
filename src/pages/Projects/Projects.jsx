/* eslint-disable no-unused-vars */
import React from "react";
import { projectsData } from "./ProjectsData";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const projectsToShow = projectsData.slice(0, 4);

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
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>

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
