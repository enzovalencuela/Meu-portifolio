import React from "react";
import "./Main.css";

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

          <div className="projeto-destaque-div">
            <h2 className="title_project_destaque">Projeto Destaque</h2>
            <div class="card-destaque">
              <img src="/assets/img/7.png" alt="" />
              <div class="card__content">
                <h2 className="name">Jubitasks</h2>
                <p class="card__description">
                  Sua Lista de Tarefas! Bem-vindo ao Jubitasks! Cansado de
                  esquecer compromissos ou se perder na organização das suas
                  tarefas? O Jubitasks é a solução perfeita para você!
                  Desenvolvido para ser intuitivo e eficiente, ele te ajuda a
                  gerenciar suas atividades diárias, projetos e ideias de forma
                  simples e visual.
                </p>
                <div className="title-btn">
                  <div className="buttons-project">
                    <a
                      href="https://github.com/enzovalencuela/JubiTasks-TodoList"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-github">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99992 1.33331C7.12444 1.33331 6.257531.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28593 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                            fill="currentcolor"
                          ></path>
                        </svg>
                        Github
                      </button>
                    </a>
                    <a
                      href="https://enzovalencuela-jubitasks-todolist.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">Acessar</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
