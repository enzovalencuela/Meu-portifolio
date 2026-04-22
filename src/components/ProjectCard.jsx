/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StackIcons from "@/components/Stackicons/StackIcons";
import "../pages/Projects/Projects.css";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate(`/projetos/${project.slug}`);
  };

  return (
    <motion.article
      className="card"
      role="link"
      tabIndex={0}
      aria-label={`Abrir detalhes do projeto ${project.name}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      onClick={handleOpenDetails}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpenDetails();
        }
      }}
    >
      <img src={project.img} alt={`Imagem do projeto ${project.name}`} />

      <div className="card__content">
        <h2 className="name">{project.name}</h2>

        <p className="card__description">{project.description}</p>

        {project.stack && <StackIcons stack={project.stack} />}

        <div className="title-btn">
          <div
            className="buttons-project"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir repositório do projeto ${project.name} no GitHub`}
            >
              <button className="btn-github">Github</button>
            </a>

            <a
              href={project.deploy || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir projeto ${project.name}`}
              aria-disabled={project.deploy === ""}
            >
              <button className="button" disabled={project.deploy === ""}>
                Acessar
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
