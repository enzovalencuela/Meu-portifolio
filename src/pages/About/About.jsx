/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageContext";

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
  const { copy } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>{copy.about.title}</h2>
      </motion.div>

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
            {copy.about.paragraph1}
            <br />
            <br />
            {copy.about.paragraph2}
          </p>

          <motion.div className="about-highlights" variants={container}>
            {copy.about.highlights.map((highlight) => (
              <motion.div className="highlight" variants={item} key={highlight.title}>
                <strong>{highlight.title}</strong>
                <span>{highlight.text}</span>
              </motion.div>
            ))}
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
          aria-label={copy.about.resumeAria}
        >
          {copy.about.resume}
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </motion.div>
    </section>
  );
}

export default About;
