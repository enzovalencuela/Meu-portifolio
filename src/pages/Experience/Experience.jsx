/* eslint-disable no-unused-vars */
import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageContext";

function Experience() {
  const { copy } = useLanguage();
  const experiences = [
    {
      id: 1,
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Tailwind",
        "CSS",
        "MUI",
        "Swiper.js",
        "Framer Motion",
        "Chart.js",
        "Canva",
        "Instagram",
      ],
    },
    {
      id: 2,
      tech: ["Canva", "Instagram"],
    },
    {
      id: 3,
      tech: ["Canva", "Instagram"],
    },
    {
      id: 4,
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "PostgreSql",
        "Firebase",
        "Trree.js",
      ],
    },
    {
      id: 5,
      tech: ["Integração de IA", "Javascript"],
    },
    {
      id: 6,
      tech: ["Next.js", "React", "Javascript", "Tailwind", "Chart Js", "MongoDb"],
    },
    {
      id: 7,
      tech: ["Next.js", "Vite", "Javascript", "Chakra UI", "Css"],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  /* animação item */
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section experience-section">
      <motion.h2
        id="experience-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {copy.experience.title}
      </motion.h2>

      <motion.div
        className="timeline"
        aria-labelledby="experience-title"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => {
          const translatedExperience = copy.experience.items[index];

          return (
          <motion.article
            className="timeline-item"
            key={exp.id}
            variants={item}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">{translatedExperience.date}</span>

              <h3>{translatedExperience.role}</h3>
              <h4>{translatedExperience.company}</h4>

              <ul>
                {translatedExperience.description.map((descriptionItem, descriptionIndex) => (
                  <li key={descriptionIndex}>{descriptionItem}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Experience;
