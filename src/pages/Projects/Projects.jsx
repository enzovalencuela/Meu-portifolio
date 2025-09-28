import React from "react";
import { projectsData } from "./ProjectsData";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.css";

function Projects() {
  const projectsToShow = projectsData.slice(0, 8);

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="div__projects">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
