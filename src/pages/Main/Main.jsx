import React from "react";
import "./Main.css";
import minhaFoto from "../../../public/assets/img/minha-foto.png";

const Main = () => {
  return (
    <main>
      <section className="section-pricipal" id="home">
        <div className="div-principal">
          <div className="texts-principal">
            <h2 className="title__principal">
              Eu sou Enzo <br />
              Valençuela
            </h2>
            <img
              id="frase-cabecalho"
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=17&pause=1000&color=686868&center=true&width=480&lines=Seja+vem+vindo+ao+meu+portifólio!;Sou+Desenvolvedor+FrontEnd+e+Designer+Gráfico"
              alt="Typing SVG"
            />
          </div>
          <div className="img_principal">
            <img className="my-img" src={minhaFoto} alt="Minha foto" />
          </div>
        </div>
      </section>

      <div className="github-info">
        <div align="center">
          <br />
          <p align="center" className="visitantes">
            <b>Visitantes</b>
          </p>
          <p align="center">
            <img
              align="center"
              src="https://profile-counter.glitch.me/{enzovalencuela}/count.svg"
              alt="Contador de visitantes"
            />
          </p>
          <br />
        </div>

        <div className="graphics">
          <img
            width="40%"
            src="https://github-readme-stats.vercel.app/api?username=enzovalencuela&show_icons=true&count_private=true&hide_border=true&title_color=E8E5BC&icon_color=E8E5BC&text_color=c9d1d9&bg_color=0d1117"
            alt="Estatísticas do GitHub de Enzo Valencuela"
          />
          <img
            width="36%"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=enzovalencuela&layout=compact&hide_border=true&title_color=E8E5BC&text_color=E8E5BC&bg_color=0d1117"
            alt="Linguagens mais usadas de Enzo Valencuela"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
