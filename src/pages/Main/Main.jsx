import React from "react";
import "./Main.css";
import minhaFoto from "../../../public/assets/img/minha_foto_cinza_3d.png";

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
          <p align="center" className="visitantes">
            <b>Github Status</b>
          </p>
        </div>

        <div className="graphics">
          <div className="graphics-only">
            <img
              width="100%"
              height="100%"
              src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=enzovalencuela&theme=dark"
              alt="Linguagens mais usadas de Enzo Valencuela"
            />
          </div>
          <div className="graphics-double">
            <img
              height="100%"
              src="https://github-readme-stats.vercel.app/api?username=enzovalencuela&theme=dark&hide_border=true"
              alt="Estatísticas do GitHub de Enzo Valencuela"
            />
            <img
              height="100%"
              src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=enzovalencuela&theme=dark&utcOffset=-3"
              alt="Estatísticas do GitHub de Enzo Valencuela"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

/* 
    
 | [![GitHub Commits]()](https://github.com/vn7n24fzkq/github-profile-summary-cards) | [![GitHub Details](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=klusvarghi&theme=dracula)](https://github.com/vn7n24fzkq/github-profile-summary-cards) |  
 | ----------- | ----------- |
 */
