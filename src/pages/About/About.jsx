/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <section id="about" className="section about-section">
      {/* Header */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Sobre Mim</h2>
      </motion.div>

      {/* Container */}
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="about-div-vertical" variants={item} />

        <motion.div className="about-text" variants={item}>
          <p>
            Sou desenvolvedor Full Stack com foco em JavaScript, TypeScript,
            React, Node.js, Express e PostgreSQL. Atualmente curso Sistemas de
            Informação e atuo como desenvolvedor na empresa júnior de computação
            da minha faculdade, participando do desenvolvimento de aplicações
            web e soluções para clientes.
            <br />
            <br />
            Tenho experiência na construção de aplicações completas, desde
            interfaces modernas e responsivas até APIs robustas e integração com
            banco de dados.
          </p>

          {/* Highlights */}
          <motion.div className="about-highlights" variants={container}>
            <motion.div className="highlight" variants={item}>
              <strong>+1 ano</strong>
              <span>Estudando desenvolvimento web</span>
            </motion.div>

            <motion.div className="highlight" variants={item}>
              <strong>3º semestre</strong>
              <span>Sistemas de Informação</span>
            </motion.div>

            <motion.div className="highlight" variants={item}>
              <strong>Empresa Júnior</strong>
              <span>Projetos reais para clientes</span>
            </motion.div>

            <motion.div className="highlight" variants={item}>
              <strong>Full Stack</strong>
              <span>React • Node • PostgreSQL</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Botão */}
      <motion.div
        className="div__curriculo"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          className="btn__curriculo"
          href="https://drive.google.com/file/d/1ZFeOCWJQ8BmIeCQOdetKyKXsd0hsjku_/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver currículo
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </motion.div>
    </section>
  );
}

export default About;
