/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageContext";
import {
  FaCloudUploadAlt,
  FaDatabase,
  FaGitAlt,
  FaJsSquare,
  FaMagic,
  FaNodeJs,
  FaReact,
  FaVial,
} from "react-icons/fa";

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
    { icon: FaReact, name: copy.skills.items[0] },
    { icon: FaJsSquare, name: copy.skills.items[1] },
    { icon: FaNodeJs, name: copy.skills.items[2] },
    { icon: FaDatabase, name: copy.skills.items[3] },
    { icon: FaMagic, name: copy.skills.items[4] },
    { icon: FaCloudUploadAlt, name: copy.skills.items[5] },
    { icon: FaGitAlt, name: copy.skills.items[6] },
    { icon: FaVial, name: copy.skills.items[7] },
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
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
          <motion.div
            key={index}
            className="skill-item"
            role="listitem"
            variants={item}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon aria-hidden="true" />
            <p>{skill.name}</p>
          </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Habilidades;
