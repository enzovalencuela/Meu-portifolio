/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Main.css";
import minhaFoto from "/minha_foto.png";
import { motion } from "framer-motion";

const Main = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const updateLink = () => {
      const tela = window.innerWidth;
      const baseLink = "https://readme-typing-svg.herokuapp.com?font=Poppins";

      const defaultParams =
        "&duration=3000&pause=1000&color=555555&vCenter=true&multiline=true&width=600";

      if (tela < 428) {
        setLink(
          `${baseLink}&size=30&center=true${defaultParams}&height=160&lines=Desenvolvedor+Full+Stack;React+•+Node+•+PostgreSQL;Construindo+aplicações+web+completas`,
        );
      } else if (tela < 1128) {
        setLink(
          `${baseLink}&size=19&center=true${defaultParams}&height=70&lines=Desenvolvedor+Full+Stack+|+React+•+Node+•+PostgreSQL;Construindo+aplicações+web+completas+do+front+ao+back`,
        );
      } else {
        setLink(
          `${baseLink}&size=19&center=false${defaultParams}&height=70&lines=Desenvolvedor+Full+Stack+|+React+•+Node+•+PostgreSQL;Construindo+aplicações+web+completas+do+front+ao+back`,
        );
      }
    };

    updateLink();
    window.addEventListener("resize", updateLink);

    return () => window.removeEventListener("resize", updateLink);
  }, []);

  /* animações */

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

        <motion.div variants={item}>
          <img src={link} alt="Typing SVG" />
        </motion.div>

        <motion.a href="#contact" className="btn-primary" variants={item}>
          Vamos Conversar?
        </motion.a>

        <motion.div className="social-links" variants={item}>
          <a
            href="https://github.com/enzovalencuela"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/enzo-silva10/"
            target="_blank"
            rel="noreferrer"
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
        <img src={minhaFoto} alt="Foto de Perfil" />
      </motion.div>
    </section>
  );
};

export default Main;
