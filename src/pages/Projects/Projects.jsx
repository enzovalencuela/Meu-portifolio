import React, { useEffect, useState } from "react";
import { projectsData } from "./ProjectsData";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 428);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsToShow = isMobile ? projectsData : projectsData.slice(0, 8);

  return (
    <section id="projects">
      <h2>Projetos</h2>
      {isMobile ? (
        <Swiper pagination slidesPerView={1} centeredSlides>
          {projectsToShow.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{
                height: "450px",
                padding: "60px 9.5% 0px",
              }}
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="div__projects">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
