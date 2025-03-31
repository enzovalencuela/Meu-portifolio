import React from "react";
import "./LogotipoPage.css";
import logoNexgen from "../../../public/assets/img/logo_nexgen.png";
import logoPedalDePrata from "../../../public/assets/img/logo-pedaldeprata.png";
import logoCardenas from "../../../public/assets/img/logo-cardenas.png";
import logoFutebolDosAmigos from "../../../public/assets/img/logo-fut.png";

function LogotipoPage() {
  return (
    <>
      <div className="div-logotipos">
        <h2 className="title__projects">Logotipos</h2>
        <div className="div__img-logos">
          <img className="logo-img" src={logoNexgen} alt="Logo Nexgen" />
          <img
            className="logo-img"
            src={logoPedalDePrata}
            alt="Logo Pedal de Prata"
          />
          <img className="logo-img" src={logoCardenas} alt="Logo Cardenas" />
          <img
            className="logo-img"
            src={logoFutebolDosAmigos}
            alt="Logo Futebol dos Amigos"
          />
        </div>
      </div>
    </>
  );
}

export default LogotipoPage;
