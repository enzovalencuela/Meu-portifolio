import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" class="section about-section">
      <h2>Sobre Mim</h2>
      <div class="about-container">
        <p>
          Desenvolvedor Full Stack com experiência em criação de interfaces de
          usuário responsivas e intuitivas. Especialista em otimização de
          desempenho e implementação de soluções web modernas, resultando em
          aumento de engajamento e satisfação do cliente. Atualmente curso
          Bacharelado em Sistemas de Informação e Cursei Desenvolvimento Front
          End.
        </p>
      </div>
      <div className="div__curriculo">
        <button className="btn__curriculo">
          <a
            href="https://drive.google.com/file/d/1ceWDO4pTspUFuIjqGZDdmvC96HhN73MJ/view?usp=drive_link"
            target="_blank"
          >
            Currículo
          </a>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
    </section>
  );
}

export default About;
