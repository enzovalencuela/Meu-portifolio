/* eslint-disable no-unused-vars */
import React from "react";
import "./Main.css";
import minhaFoto from "/minha_foto.png";
import { motion } from "framer-motion";

const Main = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="section home-section">
      <motion.div
        className="home-text"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item}>
          Olá, eu sou <span className="my-name">Enzo Valençuela</span>.
        </motion.h1>

        <motion.p className="home-role" variants={item}>
          Desenvolvedor Full Stack com foco em React, Node.js, JavaScript,
          TypeScript e PostgreSQL.
        </motion.p>

        <motion.p className="home-description" variants={item}>
          Construo aplicacoes web completas, responsivas e orientadas a
          performance para empresas, projetos digitais e produtos reais.
        </motion.p>

        <motion.a href="#contact" className="btn-primary" variants={item}>
          Vamos Conversar?
        </motion.a>

        <motion.div className="social-links" variants={item}>
          <a
            href="https://github.com/enzovalencuela"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub de Enzo Valençuela"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/enzo-silva10/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn de Enzo Valençuela"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="home-image"
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={minhaFoto}
          alt="Foto de perfil de Enzo Valençuela, desenvolvedor full stack"
        />
      </motion.div>
    </section>
  );
};

export default Main;
