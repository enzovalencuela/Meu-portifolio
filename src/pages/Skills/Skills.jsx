/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageContext";

function Habilidades() {
  const { copy } = useLanguage();

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
    { icon: "fab fa-react", name: copy.skills.items[0] },
    { icon: "fab fa-js-square", name: copy.skills.items[1] },
    { icon: "fab fa-node-js", name: copy.skills.items[2] },
    { icon: "fas fa-database", name: copy.skills.items[3] },
    { icon: "fas fa-magic", name: copy.skills.items[4] },
    { icon: "fas fa-cloud-upload-alt", name: copy.skills.items[5] },
    { icon: "fab fa-git-alt", name: copy.skills.items[6] },
    { icon: "fas fa-vial", name: copy.skills.items[7] },
  ];

  return (
    <section id="skills" className="section skills-section">
      <motion.h2
        id="skills-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {copy.skills.title}
      </motion.h2>

      <motion.div
        className="skills-grid-v2"
        role="list"
        aria-labelledby="skills-title"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            role="listitem"
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
