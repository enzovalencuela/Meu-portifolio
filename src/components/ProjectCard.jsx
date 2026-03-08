/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import StackIcons from "@/components/Stackicons/StackIcons";
import "../pages/Projects/Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <img src={project.img} alt={`Imagem do projeto ${project.name}`} />

      <div className="card__content">
        <h2 className="name">{project.name}</h2>

        <p className="card__description">{project.description}</p>

        {project.stack && <StackIcons stack={project.stack} />}

        <div className="title-btn">
          <div className="buttons-project">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="btn-github">Github</button>
            </a>

            <a href={project.deploy} target="_blank" rel="noopener noreferrer">
              <button className="button" disabled={project.deploy === ""}>
                Acessar
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
