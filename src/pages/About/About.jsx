import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div class="apresentation" id="about">
        <h2 class="title-main-skills">Sobre Mim</h2>
        <div class="apresentation__text-content">
          <p>
            Desenvolvedor Front-end com experiência em criação de interfaces de
            usuário responsivas e intuitivas. Especialista em otimização de
            desempenho e implementação de soluções web modernas, resultando em
            aumento de engajamento e satisfação do cliente. Atualmente curso
            Bacharelado em Sistemas de Informação e Formação Técnica em
            Desenvolvimento Front End.
          </p>
        </div>
      </div>

      <div class="main-skills">
        <h2 class="title-main-skills">Minhas habilidades</h2>

        <div class="skills-container">
          <div class="skills-content">
            <div align="center" class="skill">
              <h3>Front-end</h3>
              <img src="https://skillicons.dev/icons?i=js,html,css,react,next,tailwind" />
            </div>

            <div align="center" class="skill">
              <h3>Estudando</h3>
              <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,prisma,mysql,ts" />
            </div>

            <div align="center" class="skill">
              <h3>Ferramentas</h3>
              <img src="https://skillicons.dev/icons?i=git,github,netlify,vercel,vscode,firebase" />
            </div>
            <div className="div__curriculo">
              <button className="btn__curriculo">
                <a href="https://drive.google.com/file/d/1qSdqwGBWfOJ-DOJAEP4khuahOoKGFVxX/view?usp=drive_link">
                  Currículo
                </a>
                <FontAwesomeIcon icon={faDownload} color="#fff" />
              </button>
            </div>
          </div>
          <div class="skills-level-content">
            <div align="center" class="skill-level">
              <h3>Html</h3>
              <div class="progress-bar" data-percent="100">
                <div class="progress" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div align="center" class="skill-level">
              <h3>Css</h3>
              <div class="progress-bar" data-percent="90">
                <div class="progress" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div align="center" class="skill-level">
              <h3>Javascript</h3>
              <div class="progress-bar" data-percent="60">
                <div class="progress" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div align="center" class="skill-level">
              <h3>React</h3>
              <div class="progress-bar" data-percent="70">
                <div class="progress" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div align="center" class="skill-level">
              <h3>Next</h3>
              <div class="progress-bar" data-percent="60">
                <div class="progress" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div align="center" class="skill-level">
              <h3>Tailwind</h3>
              <div class="progress-bar" data-percent="70">
                <div class="progress" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
