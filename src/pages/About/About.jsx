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
          Como Desenvolvedor Full Stack, transformo problemas complexos em
          interfaces intuitivas e soluções web de alto impacto. Meu trabalho
          foca na otimização de sistemas para maximizar o engajamento e a
          satisfação do cliente final. Bacharelando em Sistemas de Informação,
          busco alinhar as melhores práticas de desenvolvimento à visão
          estratégica de tecnologia.
        </p>
      </div>
      <div className="div__curriculo">
        <button className="btn__curriculo">
          <a
            href="https://drive.google.com/file/d/1ZFeOCWJQ8BmIeCQOdetKyKXsd0hsjku_/view?usp=drive_link"
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
