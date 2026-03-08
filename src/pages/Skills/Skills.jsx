/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

function Habilidades() {
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
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { icon: "fab fa-react", name: "React & Next.js" },
    { icon: "fab fa-js-square", name: "JavaScript & TypeScript" },
    { icon: "fab fa-node-js", name: "Node.js & Express" },
    { icon: "fas fa-database", name: "SQL & NoSQL" },
    { icon: "fas fa-magic", name: "Tailwind CSS & Material UI" },
    { icon: "fas fa-cloud-upload-alt", name: "Firebase" },
    { icon: "fab fa-git-alt", name: "Git & GitHub" },
    { icon: "fas fa-vial", name: "Cypress" },
  ];

  return (
    <section id="skills" className="section skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Minhas Habilidades
      </motion.h2>

      <motion.div
        className="skills-grid-v2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={item}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Habilidades;
