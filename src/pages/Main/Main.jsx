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
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=17&pause=1000&color=686868&center=true&width=480&lines=Seja+bem+vindo+ao+meu+portifólio!;Sou+Desenvolvedor+Front+End"
              alt="Typing SVG"
            />
          </div>
          <div className="img_principal">
            <img className="my-img" src={minhaFoto} alt="Minha foto" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
