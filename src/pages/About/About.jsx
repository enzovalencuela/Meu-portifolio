import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import minhaFoto from "/minha_foto_cinza_3d.png";

function About() {
  return (
    <>
      <div className="apresentation" id="about">
        <h2 className="title__about">Sobre Mim</h2>
        <div className="apresentation__text-content">
          <div className="img_principal">
            <img className="my-img" src={minhaFoto} alt="Minha foto" />
          </div>
          <div className="apresentation-text-button">
            <p>
              Desenvolvedor Front-end com experiência em criação de interfaces
              de usuário responsivas e intuitivas. Especialista em otimização de
              desempenho e implementação de soluções web modernas, resultando em
              aumento de engajamento e satisfação do cliente. Atualmente curso
              Bacharelado em Sistemas de Informação e Formação Técnica em
              Desenvolvimento Front End.
            </p>
            <div className="div__curriculo">
              <button className="btn__curriculo">
                <a href="https://drive.google.com/file/d/1jYaH9VWQhAl5rn8Fpi5pQCZyXDAjysl8/view?usp=sharing">
                  Currículo
                </a>
                <FontAwesomeIcon icon={faDownload} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-skills">
        <h2 className="title-main-skills">Minhas habilidades</h2>

        <div className="skills-container">
          <div className="skills-content">
            <div align="center" className="skill">
              <h3>Front-end</h3>
              <img src="https://skillicons.dev/icons?i=html,css,js,react,next,tailwind" />
            </div>

            <div align="center" className="skill">
              <h3>Back-End</h3>
              <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,prisma,mysql,ts" />
            </div>

            <div align="center" className="skill">
              <h3>Ferramentas</h3>
              <img src="https://skillicons.dev/icons?i=git,github,netlify,vercel,vscode,firebase" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
