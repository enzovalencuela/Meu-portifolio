/* eslint-disable no-unused-vars */
import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 1,
      date: "Jul 2025 — Atual",
      role: "Desenvolvedor Full Stack / Marketing",
      company: "Mega Jr - Empresa Júnior de Computação",
      description: [
        "Gestão das mídias sociais da empresa, criando e gerenciando conteúdos para Instagram.",
        "Divulgação para eventos, processos seletivos e projetos por meio das redes sociais.",
        "Desenvolvimento de interfaces web responsivas utilizando React, Vite, JavaScript, Typescript, Node.js, Tailwind, Css, MUI.",
        "Colaboração com desenvolvedores e designers na construção de projetos web da empresa.",
        "Otimização de performance e experiência do usuário nas aplicações desenvolvidas.",
      ],
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
      date: "Set 2023 — Recorrentemente",
      role: "Designer Gráfico",
      company: "ACA - Associação de Ciclismo Amambaiense",
      description: [
        "Criação de banners e posts para divulgação de eventos de ciclismo.",
        "Desenvolvimento de materiais promocionais para redes sociais utilizando Canva e ferramentas de design gráfico.",
        "Produção de peças visuais informativas e atrativas para promoção de eventos esportivos.",
        "Entrega de materiais de alta qualidade dentro dos prazos, contribuindo para maior engajamento nas redes sociais.",
      ],
      tech: ["Canva", "Instagram"],
    },
    {
      id: 3,
      date: "Set 2022 — Recorrentemente",
      role: "Designer Gráfico",
      company: "Pedal de Prata Sport Bike",
      description: [
        "Criação de materiais visuais e conteúdos para redes sociais.",
        "Desenvolvimento de banners, posts promocionais e peças gráficas para campanhas e divulgação.",
        "Vetorização e otimização do logotipo da empresa, fortalecendo a identidade visual da marca.",
        "Produção de materiais de comunicação visual para diferentes plataformas e ações de marketing.",
      ],
      tech: ["Canva", "Instagram"],
    },

    {
      id: 4,
      date: "Jan 2026 — Fev 2026",
      role: "Desenvolvedor Full Stack",
      company: "Pedal de Prata Sport Bike",
      description: [
        "Desenvolvimento de sistema de gerenciamento para oficina de bicicletas.",
        "Implementação de controle de ordens de serviço, catálogo de serviços, gestão de clientes e inventário de bikes à venda.",
        "Criação de backend seguro utilizando Firebase Admin SDK para autenticação e controle de acesso.",
        "Modelagem e integração com banco de dados relacional utilizando Prisma.",
      ],
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
      date: "Jul 2025 — Set 2025",
      role: "Desenvolvedor de Software",
      company: "Pin People - Parceria Escola DNC",
      description: [
        "Desenvolvi uma automação utilizando ferramentas de IA (Gemini) para otimizar o fluxo de trabalho da área de Customer Operations (COPS).",
        "Transformação automática de transcrições de reuniões em atas organizadas e formatadas.",
        "Automatização da distribuição das atas nos canais internos da empresa, eliminando trabalho manual.",
        "Criação de uma solução eficiente e replicável alinhada à estratégia da empresa de evitar ferramentas externas mais caras.",
      ],
      tech: ["Integração de IA", "Javascript"],
    },
    {
      id: 6,
      date: "Abr 2025 — Mai 2025",
      role: "Desenvolvedor Front End",
      company: "Proxion Solutions - Parceria Escola DNC",
      description: [
        "Participação no desenvolvimento de uma ferramenta de vistoria preventiva para a Proxion.",
        "Desenvolvimento do front-end utilizando Next.js e Tailwind CSS para criação de interfaces responsivas e intuitivas.",
        "Implementação de funcionalidades para listagem e vistoria de equipamentos e gerenciamento de defeitos.",
        "Criação de páginas e dashboards para acompanhamento geral das vistorias.",
        "Trabalho em equipe utilizando Trello para gestão de tarefas e Figma para prototipação e design.",
      ],
      tech: [
        "Next.js",
        "React",
        "Javascript",
        "Tailwind",
        "Chart Js",
        "MongoDb",
      ],
    },
    {
      id: 7,
      date: "Jan 2025 — Mar 2025",
      role: "Desenvolvedor Front End",
      company: "Salve Vet - Parceria Escola DNC",
      description: [
        "Participação no desenvolvimento front-end de Painel de Gestão veterinária.",
        "Criação e implementação das páginas de login e cadastro, focando em usabilidade e experiência do usuário.",
        "Ajustes de layout e desenvolvimento de componentes reutilizáveis para melhorar a consistência visual da aplicação.",
        "Utilização de tecnologias modernas como Next.js, Vite, Chakra UI e JavaScript.",
        "Colaboração em equipe utilizando metodologias ágeis, reuniões periódicas e ferramentas de design como Figma.",
      ],
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experiência
      </motion.h2>

      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp) => (
          <motion.div className="timeline-item" key={exp.id} variants={item}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">{exp.date}</span>

              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>

              <ul>
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
