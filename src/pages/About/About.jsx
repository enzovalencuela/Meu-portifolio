import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div class="apresentation" id="about">
        <h2 class="title-main-skills">Sobre Mim</h2>
        <div class="apresentation__text-content">
          <p>
            Sou <b>Enzo Valençuela</b>, desenvolvedor <b>Full Stack</b> com
            experiência em criação de interfaces modernas, intuitivas e
            funcionais. Minha trajetória profissional começou no{" "}
            <b>Design Gráfico</b>, onde desenvolvi habilidades avançadas em
            composição visual, identidade de marca e criação de materiais
            gráficos. Com o tempo, minha paixão pela tecnologia me levou ao{" "}
            <b>Desenvolvimento Web</b>, onde hoje aplico conhecimentos tanto no{" "}
            <b>Front End</b> quanto no <b>Back End</b> para criar soluções
            digitais completas.
          </p>

          <h2>Cursos / Graduações:</h2>

          <ul>
            <li>2x Imersão Alura Front End (Concluído);</li>
            <li>Desenvolvimento Front End - DNC (Em andamento);</li>
            <li>
              Introdução à Ciência da Computação - Harvard CS50 (Em andamento);
            </li>
            <li>
              Criação de sites com HTML, CSS e JavaScript - Bradesco
              (Concluído);
            </li>
            <li>Curso de Auxiliar Administrativo (Em andamento);</li>
            <li>
              Bacharelado em Sistemas de Informação - UFMS (Em andamento).
            </li>
          </ul>
        </div>
      </div>

      <div class="main-skills">
        <h2 class="title-main-skills">Minhas habilidades</h2>

        <div align="center" class="skill">
          <h3>Front-end</h3>
          <img src="https://skillicons.dev/icons?i=js,html,css,react,tailwind" />
        </div>

        <div align="center" class="skill">
          <h3>Estudando</h3>
          <img src="https://skillicons.dev/icons?i=nodejs,prisma,express" />
        </div>

        <div align="center" class="skill">
          <h3>Ferramentas</h3>
          <img src="https://skillicons.dev/icons?i=git,github,netlify,npm,vscode,yarn" />
        </div>
      </div>

      <div>
        <h2 class="title-servicos">Serviços que ofereço</h2>
      </div>
      <div class="div-servicos">
        <div class="servicos-frontEnd">
          <h2 class="subtitulo-servicos">Front end</h2>
          <article class="servicos">
            <table class="tabela-servicos">
              <tr>
                <td>
                  <header class="item-servico">
                    <h3>DEV de Sites</h3>
                    <p>Criação de sites responsivos e otimizados</p>
                  </header>
                </td>
                <td>
                  <header class="item-servico">
                    <h3>Landing Pages</h3>
                    <p>Páginas de captura personalizadas</p>
                  </header>
                </td>
              </tr>
              <tr>
                <td>
                  <header class="item-servico">
                    <h3>Aplicações Web</h3>
                    <p>Desenvolvimento de aplicações interativas</p>
                  </header>
                </td>
                <td>
                  <header class="item-servico">
                    <h3>Otimização</h3>
                    <p>Melhoria da velocidade de carregamento</p>
                  </header>
                </td>
              </tr>
            </table>
          </article>
        </div>

        <div class="servicos-designGrafico">
          <h2 class="subtitulo-servicos">Design Gráfico</h2>
          <article class="servicos">
            <table class="tabela-servicos">
              <tr>
                <td>
                  <header class="item-servico">
                    <h3>Mídia social</h3>
                    <p>Criação de imagens, banners e posts personalizadosa</p>
                  </header>
                </td>
                <td>
                  <header class="item-servico">
                    <h3>Identidade Visual</h3>
                    <p>Identidade reconhecível para empresas e projetos.</p>
                  </header>
                </td>
              </tr>
              <tr>
                <td>
                  <header class="item-servico">
                    <h3>Materiais Impressos</h3>
                    <p>
                      Criação de layouts para materiais como cartões de visita
                    </p>
                  </header>
                </td>
                <td>
                  <header class="item-servico">
                    <h3>Websites e Interfaces</h3>
                    <p>Desenvolvimento de layouts e interfaces visuais</p>
                  </header>
                </td>
              </tr>
            </table>
          </article>
        </div>
      </div>
    </>
  );
}

export default About;
