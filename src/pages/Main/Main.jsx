import React from "react";
import "./Main.css";
import minhaFoto from "/minha_foto_cinza_3d.png";

const Main = () => {
  return (
    <section id="home" class="section home-section">
      <div class="home-text">
        <h1>
          Olá, eu sou <span class="highlight">Edilson Enzo</span>.
        </h1>
        <p>
          Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e
          funcionais.
        </p>
        <a href="#contact" class="btn-primary">
          Vamos Conversar?
        </a>
        <div class="social-links">
          <a href="https://github.com/enzovalencuela" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/enzo-silva10/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="home-image">
        <img src={minhaFoto} alt="Foto de Perfil" />
      </div>
    </section>
  );
};

export default Main;
