import React, { useEffect, useState } from "react";
import "./Main.css";
import minhaFoto from "/minha_foto.png";

const Main = () => {
  const [link, setLink] = useState();

  useEffect(() => {
    const updateLink = () => {
      const tela = window.innerWidth;
      const baseLink = "https://readme-typing-svg.herokuapp.com?font=Poppins";
      const defaultParams =
        "&duration=3000&pause=1000&color=555555&vCenter=true&multiline=true&width=500&height=70&lines=Desenvolvedor+Full-Stack+%7C+Solucionando";

      if (tela < 428) {
        setLink(`${baseLink}&size=22&center=true${defaultParams};problemas+`);
      } else if (tela < 1128) {
        setLink(`${baseLink}&size=19&center=true${defaultParams}+problemas;`);
      } else {
        setLink(`${baseLink}&size=19&center=false${defaultParams}+problemas;`);
      }
    };

    updateLink();

    window.addEventListener("resize", updateLink);

    return () => {
      window.removeEventListener("resize", updateLink);
    };
  }, []);

  return (
    <section id="home" class="section home-section">
      <div class="home-text">
        <h1>
          Olá, eu sou <span class="highlight">Enzo Valençuela</span>.
        </h1>
        <a>
          <img
            src={`https://readme-typing-svg.herokuapp.com?font=Poppins&size=${link}com+c%C3%B3digo+e+tecnologia.`}
            alt="Typing SVG"
          />
        </a>
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
