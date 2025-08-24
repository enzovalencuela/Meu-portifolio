import React, { useEffect, useState } from "react";
import "./Projects.css";
import StackIcons from "@/components/Stackicons/StackIcons";
import { Swiper, SwiperSlide } from "swiper/react";

const projectsData = [
  {
    id: 1,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Vite", icon: "/vite.png" },
      { name: "Typescript", icon: "/typescript.svg" },
      { name: "styled-components", icon: "/styled-components.svg" },
      { name: "Material UI", icon: "/material-ui.svg" },
      { name: "Chart Js", icon: "/chartjs.svg" },
      { name: "Axios", icon: "/axios.svg" },
      { name: "Cypress", icon: "/cypress.svg" },
    ],
    name: "Dashboard de Vendas",
    github: "https://github.com/enzovalencuela/projeto-sales-dashboard",
    deploy: "https://projeto-sales-dashboard.vercel.app/",
    img: "/9.png",
    description:
      "Desenvolvi um Sales Dashboard, para gerenciamento de vendas. Este projeto foi uma ótima oportunidade para aprofundar minhas habilidades e trabalhar com uma stack super moderna e requisitada no mercado.",
  },
  {
    id: 2,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/next.js.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Firebase", icon: "/firebase.svg" },
    ],
    name: "Jubitasks",
    github: "https://github.com/enzovalencuela/JubiTasks-TodoList",
    deploy: "https://enzovalencuela-jubitasks-todolist.netlify.app",
    img: "/7.png",
    description:
      "Sua Lista de Tarefas! O Jubitasks é a solução perfeita para você! Desenvolvido para ser intuitivo e eficiente, ele te ajuda a gerenciar suas atividades diárias, projetos e ideias de forma simples e visual.",
  },
  {
    id: 3,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Vite", icon: "/vite.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "css", icon: "/css.png" },
      { name: "Chakra UI", icon: "/chakra-ui.png" },
    ],
    name: "Meu Portifólio",
    github: "https://github.com/enzovalencuela/Meu-portifolio",
    deploy: "https://enzovalencuela-meu-portifolio.netlify.app",
    img: "/1.png",
    description:
      "Este é o meu portfólio profissional, desenvolvido com tecnologias modernas para apresentar meus projetos e habilidades na área de desenvolvimento Full Stack.",
  },
  {
    id: 4,
    stack: [
      { name: "HTML", icon: "/html.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Css", icon: "/css.png" },
    ],
    name: "Projeto Avanti",
    github: "https://github.com/enzovalencuela/Projeto-Avanti",
    deploy: "https://enzovalencuela-projeto-avanti.netlify.app",
    img: "/4.png",
    description:
      "Este projeto é uma página web de uma loja de roupas chamada AVANTI, criada com o objetivo de apresentar produtos de forma moderna, interativa e responsiva.",
  },
  {
    id: 5,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Vite", icon: "/vite.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Css", icon: "/css.png" },
    ],
    name: "Projeto Github API",
    github: "https://github.com/enzovalencuela/Projeto-Github-API",
    deploy: "https://enzovalencuela-projeto-github-api.netlify.app",
    img: "/3.png",
    description:
      "Aplicação web construída com React que consome a GitHub API para buscar informações públicas de usuários. Basta digitar o nome de usuário do GitHub para visualizar os dados como: Nome, Bio, Foto de perfil",
  },
  {
    id: 6,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/next.js.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Chart Js", icon: "/chartjs.svg" },
      { name: "Mongodb", icon: "/mongodb.png" },
    ],
    name: "Projeto Proxion",
    github: "https://github.com/enzovalencuela/Projeto-Proxion",
    deploy: "/",
    img: "/5.png",
    description:
      "Proxion é uma plataforma web desenvolvida como uma ferramenta preventiva de vistoria de equipamentos, voltada à otimização de processos internos e ao monitoramento detalhado de inspeções técnicas.",
  },
  {
    id: 7,
    stack: [
      { name: "HTML", icon: "/html.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Css", icon: "/css.png" },
    ],
    name: "World Football Players",
    github: "https://github.com/enzovalencuela/World-Football-Players",
    deploy: "https://enzovalencuela-world-football-players.netlify.app",
    description:
      "O World Football Players é um site desenvolvido com HTML, CSS e JavaScript que permite visualizar informações sobre jogadores de futebol, técnicos, clubes e seleções.",
    img: "/2.png",
  },
  {
    id: 8,
    stack: [
      { name: "React", icon: "/react.png" },
      { name: "Vite", icon: "/vite.png" },
      { name: "Javascript", icon: "/javascript.svg" },
      { name: "Css", icon: "/css.png" },
    ],
    name: "Blog de Arquitetura",
    github: "https://github.com/enzovalencuela/projeto-blog",
    deploy: "https://enzovalencuela-projeto-blog.netlify.app/",
    description:
      "Este projeto foi desenvolvido utilizando React e Vite. Ele simula uma página de arquitetura fictícia, funcionando como uma landing page com múltiplas seções, e demonstra a aplicação de diversos conceitos fundamentais do React.",
    img: "/8.png",
  },
];

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

  return (
    <>
      <h2 className="title__projects" id="projects">
        Projetos
      </h2>
      {isMobile ? (
        <Swiper pagination slidesPerView={1} centeredSlides>
          {projectsData.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{
                height: "410px",
                padding: "20px 9.5%",
              }}
            >
              <div className="card">
                <img src={project.img} alt="" />
                <div className="card__content">
                  <h2 className="name">{project.name}</h2>
                  <p className="card__description">{project.description}</p>
                  {project.stack && <StackIcons stack={project.stack} />}
                  <div className="title-btn">
                    <div className="buttons-project">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-github">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99992 1.33331C7.12444 1.33331 6.257531.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28593 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                          Github
                        </button>
                      </a>
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="button">Acessar</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="div__projects">
          {projectsData.map((project) => (
            <div className="card" key={project.id}>
              <img src={project.img} alt="" />
              <div className="card__content">
                <h2 className="name">{project.name}</h2>
                <p className="card__description">{project.description}</p>
                {project.stack && <StackIcons stack={project.stack} />}
                <div className="title-btn">
                  <div className="buttons-project">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-github">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99992 1.33331C7.12444 1.33331 6.257531.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28593 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                            fill="currentcolor"
                          ></path>
                        </svg>
                        Github
                      </button>
                    </a>
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">Acessar</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
