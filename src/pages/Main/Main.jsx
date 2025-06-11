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
            <p>
              Seja bem vindo ao meu portifólio! Sou
              <span className="span-p"> Desenvolvedor Front End</span> e curso
              Sistemas de Informação.
            </p>
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
