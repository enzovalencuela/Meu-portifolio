import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const languageOptions = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

export const LanguageContext = createContext(null);

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      openLanguageMenu: "Abrir seleção de idioma",
      languageMenu: "Selecionar idioma",
      brandAriaLabel: "Ir para o início do portfólio de Enzo Valençuela",
      mainNavigation: "Navegação principal do portfólio",
      darkMode: "Alternar modo escuro",
    },
    hero: {
      greeting: "Olá, eu sou",
      role:
        "Desenvolvedor Full Stack com foco em React, Node.js, JavaScript, TypeScript e PostgreSQL.",
      description:
        "Construo aplicações web completas, responsivas e orientadas a performance para empresas, projetos digitais e produtos reais.",
      cta: "Vamos conversar?",
      imageAlt: "Foto de perfil de Enzo Valençuela, desenvolvedor full stack",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
    },
    about: {
      title: "Sobre mim",
      paragraph1:
        "Meu nome completo é Edilson Enzo da Silva Valençuela, também conhecido profissionalmente como Enzo Valençuela. Sou desenvolvedor Full Stack com foco em JavaScript, TypeScript, React, Node.js, Express e PostgreSQL. Atualmente curso Sistemas de Informação e atuo como desenvolvedor na empresa júnior de computação da minha faculdade, participando do desenvolvimento de aplicações web e soluções para clientes.",
      paragraph2:
        "Tenho experiência na construção de aplicações completas, desde interfaces modernas e responsivas até APIs robustas e integração com banco de dados.",
      highlights: [
        { title: "+1 ano", text: "Estudando desenvolvimento web" },
        { title: "3º semestre", text: "Sistemas de Informação" },
        { title: "Empresa Júnior", text: "Projetos reais para clientes" },
        { title: "Full Stack", text: "React • Node • PostgreSQL" },
      ],
      resume: "Ver currículo",
      resumeAria: "Abrir currículo de Enzo Valençuela",
    },
    skills: {
      title: "Minhas habilidades",
      items: [
        "React & Next.js",
        "JavaScript & TypeScript",
        "Node.js & Express",
        "SQL & NoSQL",
        "Tailwind CSS & Material UI",
        "Firebase",
        "Git & GitHub",
        "Cypress",
      ],
    },
    projects: {
      title: "Projetos",
      intro:
        "Seleção de projetos desenvolvidos com foco em performance, experiência do usuário e resolução de problemas reais.",
      openDetails: "Abrir detalhes do projeto",
      imageAlt: "Imagem do projeto",
      openRepository: "Abrir repositório do projeto",
      openProject: "Abrir projeto",
      github: "GitHub",
      access: "Acessar",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          date: "Jul 2025 — Atual",
          role: "Desenvolvedor Full Stack / Marketing",
          company: "Mega Jr - Empresa Júnior de Computação",
          description: [
            "Gestão das mídias sociais da empresa, criando e gerenciando conteúdos para Instagram.",
            "Divulgação para eventos, processos seletivos e projetos por meio das redes sociais.",
            "Desenvolvimento de interfaces web responsivas utilizando React, Vite, JavaScript, TypeScript, Node.js, Tailwind, CSS e MUI.",
            "Colaboração com desenvolvedores e designers na construção de projetos web da empresa.",
            "Otimização de performance e experiência do usuário nas aplicações desenvolvidas.",
          ],
        },
        {
          date: "Set 2023 — Recorrentemente",
          role: "Designer Gráfico",
          company: "ACA - Associação de Ciclismo Amambaiense",
          description: [
            "Criação de banners e posts para divulgação de eventos de ciclismo.",
            "Desenvolvimento de materiais promocionais para redes sociais utilizando Canva e ferramentas de design gráfico.",
            "Produção de peças visuais informativas e atrativas para promoção de eventos esportivos.",
            "Entrega de materiais de alta qualidade dentro dos prazos, contribuindo para maior engajamento nas redes sociais.",
          ],
        },
        {
          date: "Set 2022 — Recorrentemente",
          role: "Designer Gráfico",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Criação de materiais visuais e conteúdos para redes sociais.",
            "Desenvolvimento de banners, posts promocionais e peças gráficas para campanhas e divulgação.",
            "Vetorização e otimização do logotipo da empresa, fortalecendo a identidade visual da marca.",
            "Produção de materiais de comunicação visual para diferentes plataformas e ações de marketing.",
          ],
        },
        {
          date: "Jan 2026 — Fev 2026",
          role: "Desenvolvedor Full Stack",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Desenvolvimento de sistema de gerenciamento para oficina de bicicletas.",
            "Implementação de controle de ordens de serviço, catálogo de serviços, gestão de clientes e inventário de bikes à venda.",
            "Criação de backend seguro utilizando Firebase Admin SDK para autenticação e controle de acesso.",
            "Modelagem e integração com banco de dados relacional utilizando Prisma.",
          ],
        },
        {
          date: "Jul 2025 — Set 2025",
          role: "Desenvolvedor de Software",
          company: "Pin People - Parceria Escola DNC",
          description: [
            "Desenvolvi uma automação utilizando ferramentas de IA (Gemini) para otimizar o fluxo de trabalho da área de Customer Operations (COPS).",
            "Transformação automática de transcrições de reuniões em atas organizadas e formatadas.",
            "Automatização da distribuição das atas nos canais internos da empresa, eliminando trabalho manual.",
            "Criação de uma solução eficiente e replicável alinhada à estratégia da empresa de evitar ferramentas externas mais caras.",
          ],
        },
        {
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
        },
        {
          date: "Jan 2025 — Mar 2025",
          role: "Desenvolvedor Front End",
          company: "Salve Vet - Parceria Escola DNC",
          description: [
            "Participação no desenvolvimento front-end de painel de gestão veterinária.",
            "Criação e implementação das páginas de login e cadastro, focando em usabilidade e experiência do usuário.",
            "Ajustes de layout e desenvolvimento de componentes reutilizáveis para melhorar a consistência visual da aplicação.",
            "Utilização de tecnologias modernas como Next.js, Vite, Chakra UI e JavaScript.",
            "Colaboração em equipe utilizando metodologias ágeis, reuniões periódicas e ferramentas de design como Figma.",
          ],
        },
      ],
    },
    contact: {
      title: "Contatos",
      subject: "Novo contato pelo portfólio",
      email: "Email",
      emailPlaceholder: "seuemail@exemplo.com",
      message: "Como posso te ajudar?",
      messagePlaceholder: "Descreva seu projeto, ideia ou necessidade.",
      submit: "Enviar mensagem",
      profile: "Perfil",
      follow: "Me siga para mais...",
      networks: "Minhas redes",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      whatsappAria: "Abrir WhatsApp de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
    },
    footer: {
      text: "Construindo aplicações web modernas e resolvendo problemas com código.",
      quote: "A melhor maneira de prever o futuro é inventá-lo.",
      rights: "Todos os direitos reservados.",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
      emailAria: "Enviar email para Enzo Valençuela",
    },
    projectDetails: {
      portfolio: "Portfólio",
      type: "Tipo",
      mainStack: "Stack principal",
      status: "Status",
      published: "Publicado",
      noPublicDeploy: "Sem deploy público",
      viewOnline: "Ver projeto online",
      viewRepository: "Ver repositório",
      backToProjects: "Voltar para projetos",
      technologies: "Tecnologias utilizadas",
      context: "Contexto",
      deliveryTitle: "O que este projeto entrega",
      deliveryText1:
        "{name} foi desenvolvido com foco em resolver uma necessidade específica de produto, unindo interface clara, navegação objetiva e implementação alinhada a boas práticas de desenvolvimento web.",
      deliveryText2:
        "O projeto reforça minha atuação como desenvolvedor full stack ao combinar experiência do usuário, organização de componentes, integração entre camadas da aplicação e cuidado com entrega visual.",
      quickSummary: "Resumo rápido",
      publicVersion: "Possui versão pública acessível.",
      noPublicVersion: "Sem versão pública no momento.",
      sourceAvailable: "Código-fonte disponível para consulta.",
      sourceUnavailable: "Código-fonte privado ou indisponível.",
      approach: "Abordagem",
      technicalTitle: "Decisões técnicas e foco de implementação",
      technicalText1:
        "A construção desta solução priorizou consistência visual, organização técnica e uma stack coerente com o objetivo do produto. A seleção das tecnologias foi pensada para sustentar performance, manutenção e boa experiência em diferentes tamanhos de tela.",
      technicalText2:
        "Além da interface, o projeto demonstra capacidade de estruturar fluxos reais de uso, lidar com integrações externas quando necessário e transformar requisitos em entregas navegáveis e funcionais.",
      navigation: "Navegação",
      continueExploring: "Continue explorando",
      previousProject: "Projeto anterior",
      nextProject: "Próximo projeto",
      startOfList: "Início da lista",
      endOfList: "Fim da lista",
      imageAlt: "Imagem de apresentação do projeto {name}",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      openLanguageMenu: "Open language selection",
      languageMenu: "Select language",
      brandAriaLabel: "Go to the top of Enzo Valençuela's portfolio",
      mainNavigation: "Main portfolio navigation",
      darkMode: "Toggle dark mode",
    },
    hero: {
      greeting: "Hi, I'm",
      role:
        "Full Stack Developer focused on React, Node.js, JavaScript, TypeScript and PostgreSQL.",
      description:
        "I build complete, responsive, performance-oriented web applications for companies, digital products and real-world projects.",
      cta: "Let's talk?",
      imageAlt: "Profile photo of Enzo Valençuela, full stack developer",
      githubAria: "Open Enzo Valençuela's GitHub",
      linkedinAria: "Open Enzo Valençuela's LinkedIn",
    },
    about: {
      title: "About me",
      paragraph1:
        "My full name is Edilson Enzo da Silva Valençuela, and I am also professionally known as Enzo Valençuela. I am a Full Stack Developer focused on JavaScript, TypeScript, React, Node.js, Express and PostgreSQL. I am currently studying Information Systems and working as a developer at my college's junior computing company, contributing to web applications and client solutions.",
      paragraph2:
        "I have experience building complete applications, from modern responsive interfaces to robust APIs and database integration.",
      highlights: [
        { title: "+1 year", text: "Studying web development" },
        { title: "3rd semester", text: "Information Systems" },
        { title: "Junior Company", text: "Real client projects" },
        { title: "Full Stack", text: "React • Node • PostgreSQL" },
      ],
      resume: "View resume",
      resumeAria: "Open Enzo Valençuela's resume",
    },
    skills: {
      title: "My skills",
      items: [
        "React & Next.js",
        "JavaScript & TypeScript",
        "Node.js & Express",
        "SQL & NoSQL",
        "Tailwind CSS & Material UI",
        "Firebase",
        "Git & GitHub",
        "Cypress",
      ],
    },
    projects: {
      title: "Projects",
      intro:
        "A selection of projects built with a focus on performance, user experience and solving real problems.",
      openDetails: "Open project details",
      imageAlt: "Project image",
      openRepository: "Open project repository",
      openProject: "Open project",
      github: "GitHub",
      access: "Open",
    },
    experience: {
      title: "Experience",
      items: [
        {
          date: "Jul 2025 — Present",
          role: "Full Stack Developer / Marketing",
          company: "Mega Jr - Junior Computing Company",
          description: [
            "Managed the company's social media, creating and publishing Instagram content.",
            "Promoted events, recruitment processes and projects through social networks.",
            "Developed responsive web interfaces using React, Vite, JavaScript, TypeScript, Node.js, Tailwind, CSS and MUI.",
            "Collaborated with developers and designers in the delivery of company web projects.",
            "Improved application performance and user experience.",
          ],
        },
        {
          date: "Sep 2023 — Ongoing",
          role: "Graphic Designer",
          company: "ACA - Amambaí Cycling Association",
          description: [
            "Created banners and posts to promote cycling events.",
            "Produced promotional materials for social media using Canva and graphic design tools.",
            "Designed informative and appealing visual pieces for sports events.",
            "Delivered high-quality materials on time, contributing to stronger engagement on social media.",
          ],
        },
        {
          date: "Sep 2022 — Ongoing",
          role: "Graphic Designer",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Created visual materials and social media content.",
            "Designed banners, promotional posts and graphic assets for campaigns and promotion.",
            "Vectorized and optimized the company logo, strengthening the brand identity.",
            "Produced visual communication materials for different platforms and marketing actions.",
          ],
        },
        {
          date: "Jan 2026 — Feb 2026",
          role: "Full Stack Developer",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Built a management system for a bicycle repair shop.",
            "Implemented work order control, service catalog, customer management and bicycle inventory for sale.",
            "Created a secure backend with Firebase Admin SDK for authentication and access control.",
            "Modeled and integrated a relational database using Prisma.",
          ],
        },
        {
          date: "Jul 2025 — Sep 2025",
          role: "Software Developer",
          company: "Pin People - DNC School Partnership",
          description: [
            "Developed an automation using AI tools (Gemini) to optimize the workflow of the Customer Operations area (COPS).",
            "Automatically transformed meeting transcripts into organized and formatted minutes.",
            "Automated the distribution of minutes in the company's internal channels, removing manual work.",
            "Built an efficient, repeatable solution aligned with the company's strategy of avoiding more expensive external tools.",
          ],
        },
        {
          date: "Apr 2025 — May 2025",
          role: "Front End Developer",
          company: "Proxion Solutions - DNC School Partnership",
          description: [
            "Participated in the development of a preventive inspection tool for Proxion.",
            "Developed the front-end with Next.js and Tailwind CSS to create responsive and intuitive interfaces.",
            "Implemented features for listing and inspecting equipment and managing defects.",
            "Created pages and dashboards for overall inspection monitoring.",
            "Worked in a team using Trello for task management and Figma for prototyping and design.",
          ],
        },
        {
          date: "Jan 2025 — Mar 2025",
          role: "Front End Developer",
          company: "Salve Vet - DNC School Partnership",
          description: [
            "Participated in the front-end development of a veterinary management dashboard.",
            "Created and implemented login and registration pages with a focus on usability and user experience.",
            "Improved layouts and reusable components to strengthen the application's visual consistency.",
            "Used modern technologies such as Next.js, Vite, Chakra UI and JavaScript.",
            "Collaborated in a team using agile practices, regular meetings and design tools such as Figma.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subject: "New contact through portfolio",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "How can I help you?",
      messagePlaceholder: "Describe your project, idea or need.",
      submit: "Send message",
      profile: "Profile",
      follow: "Follow me for more...",
      networks: "My networks",
      githubAria: "Open Enzo Valençuela's GitHub",
      whatsappAria: "Open Enzo Valençuela's WhatsApp",
      linkedinAria: "Open Enzo Valençuela's LinkedIn",
    },
    footer: {
      text: "Building modern web applications and solving problems with code.",
      quote: "The best way to predict the future is to invent it.",
      rights: "All rights reserved.",
      githubAria: "Open Enzo Valençuela's GitHub",
      linkedinAria: "Open Enzo Valençuela's LinkedIn",
      emailAria: "Send email to Enzo Valençuela",
    },
    projectDetails: {
      portfolio: "Portfolio",
      type: "Type",
      mainStack: "Main stack",
      status: "Status",
      published: "Published",
      noPublicDeploy: "No public deploy",
      viewOnline: "View live project",
      viewRepository: "View repository",
      backToProjects: "Back to projects",
      technologies: "Technologies used",
      context: "Context",
      deliveryTitle: "What this project delivers",
      deliveryText1:
        "{name} was built to solve a specific product need, combining a clear interface, objective navigation and implementation aligned with good web development practices.",
      deliveryText2:
        "This project reinforces my work as a full stack developer by combining user experience, component organization, integration across application layers and care for visual delivery.",
      quickSummary: "Quick summary",
      publicVersion: "A public version is available.",
      noPublicVersion: "No public version at the moment.",
      sourceAvailable: "Source code available for review.",
      sourceUnavailable: "Private or unavailable source code.",
      approach: "Approach",
      technicalTitle: "Technical decisions and implementation focus",
      technicalText1:
        "This solution was built prioritizing visual consistency, technical organization and a stack aligned with the product goal. The chosen technologies support performance, maintainability and a good experience across screen sizes.",
      technicalText2:
        "Beyond the interface, the project demonstrates the ability to structure real usage flows, handle external integrations when needed and turn requirements into navigable, functional deliveries.",
      navigation: "Navigation",
      continueExploring: "Keep exploring",
      previousProject: "Previous project",
      nextProject: "Next project",
      startOfList: "Start of list",
      endOfList: "End of list",
      imageAlt: "Project preview image for {name}",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      openLanguageMenu: "Abrir selección de idioma",
      languageMenu: "Seleccionar idioma",
      brandAriaLabel: "Ir al inicio del portafolio de Enzo Valençuela",
      mainNavigation: "Navegación principal del portafolio",
      darkMode: "Alternar modo oscuro",
    },
    hero: {
      greeting: "Hola, soy",
      role:
        "Desarrollador Full Stack enfocado en React, Node.js, JavaScript, TypeScript y PostgreSQL.",
      description:
        "Construyo aplicaciones web completas, responsivas y orientadas al rendimiento para empresas, productos digitales y proyectos reales.",
      cta: "¿Hablamos?",
      imageAlt: "Foto de perfil de Enzo Valençuela, desarrollador full stack",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
    },
    about: {
      title: "Sobre mí",
      paragraph1:
        "Mi nombre completo es Edilson Enzo da Silva Valençuela y también soy conocido profesionalmente como Enzo Valençuela. Soy desarrollador Full Stack con enfoque en JavaScript, TypeScript, React, Node.js, Express y PostgreSQL. Actualmente estudio Sistemas de Información y trabajo como desarrollador en la empresa júnior de computación de mi facultad, participando en el desarrollo de aplicaciones web y soluciones para clientes.",
      paragraph2:
        "Tengo experiencia en la construcción de aplicaciones completas, desde interfaces modernas y responsivas hasta APIs robustas e integración con bases de datos.",
      highlights: [
        { title: "+1 año", text: "Estudiando desarrollo web" },
        { title: "3er semestre", text: "Sistemas de Información" },
        { title: "Empresa Júnior", text: "Proyectos reales para clientes" },
        { title: "Full Stack", text: "React • Node • PostgreSQL" },
      ],
      resume: "Ver currículum",
      resumeAria: "Abrir currículum de Enzo Valençuela",
    },
    skills: {
      title: "Mis habilidades",
      items: [
        "React & Next.js",
        "JavaScript & TypeScript",
        "Node.js & Express",
        "SQL & NoSQL",
        "Tailwind CSS & Material UI",
        "Firebase",
        "Git & GitHub",
        "Cypress",
      ],
    },
    projects: {
      title: "Proyectos",
      intro:
        "Selección de proyectos desarrollados con foco en rendimiento, experiencia del usuario y resolución de problemas reales.",
      openDetails: "Abrir detalles del proyecto",
      imageAlt: "Imagen del proyecto",
      openRepository: "Abrir repositorio del proyecto",
      openProject: "Abrir proyecto",
      github: "GitHub",
      access: "Acceder",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          date: "Jul 2025 — Actualidad",
          role: "Desarrollador Full Stack / Marketing",
          company: "Mega Jr - Empresa Júnior de Computación",
          description: [
            "Gestión de las redes sociales de la empresa, creando y administrando contenidos para Instagram.",
            "Difusión de eventos, procesos selectivos y proyectos a través de redes sociales.",
            "Desarrollo de interfaces web responsivas utilizando React, Vite, JavaScript, TypeScript, Node.js, Tailwind, CSS y MUI.",
            "Colaboración con desarrolladores y diseñadores en la construcción de proyectos web de la empresa.",
            "Optimización del rendimiento y de la experiencia del usuario en las aplicaciones desarrolladas.",
          ],
        },
        {
          date: "Sep 2023 — Recurrentemente",
          role: "Diseñador Gráfico",
          company: "ACA - Asociación de Ciclismo Amambaiense",
          description: [
            "Creación de banners y publicaciones para divulgar eventos de ciclismo.",
            "Desarrollo de materiales promocionales para redes sociales usando Canva y herramientas de diseño gráfico.",
            "Producción de piezas visuales informativas y atractivas para promover eventos deportivos.",
            "Entrega de materiales de alta calidad dentro de los plazos, contribuyendo a un mayor compromiso en redes sociales.",
          ],
        },
        {
          date: "Sep 2022 — Recurrentemente",
          role: "Diseñador Gráfico",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Creación de materiales visuales y contenidos para redes sociales.",
            "Desarrollo de banners, publicaciones promocionales y piezas gráficas para campañas y divulgación.",
            "Vectorización y optimización del logotipo de la empresa, fortaleciendo la identidad visual de la marca.",
            "Producción de materiales de comunicación visual para diferentes plataformas y acciones de marketing.",
          ],
        },
        {
          date: "Ene 2026 — Feb 2026",
          role: "Desarrollador Full Stack",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Desarrollo de un sistema de gestión para taller de bicicletas.",
            "Implementación de control de órdenes de servicio, catálogo de servicios, gestión de clientes e inventario de bicicletas en venta.",
            "Creación de un backend seguro utilizando Firebase Admin SDK para autenticación y control de acceso.",
            "Modelado e integración con base de datos relacional utilizando Prisma.",
          ],
        },
        {
          date: "Jul 2025 — Sep 2025",
          role: "Desarrollador de Software",
          company: "Pin People - Alianza Escuela DNC",
          description: [
            "Desarrollé una automatización con herramientas de IA (Gemini) para optimizar el flujo de trabajo del área de Customer Operations (COPS).",
            "Transformación automática de transcripciones de reuniones en actas organizadas y formateadas.",
            "Automatización de la distribución de las actas en los canales internos de la empresa, eliminando trabajo manual.",
            "Creación de una solución eficiente y replicable alineada con la estrategia de la empresa de evitar herramientas externas más costosas.",
          ],
        },
        {
          date: "Abr 2025 — May 2025",
          role: "Desarrollador Front End",
          company: "Proxion Solutions - Alianza Escuela DNC",
          description: [
            "Participación en el desarrollo de una herramienta de inspección preventiva para Proxion.",
            "Desarrollo del front-end utilizando Next.js y Tailwind CSS para crear interfaces responsivas e intuitivas.",
            "Implementación de funcionalidades para listado e inspección de equipos y gestión de defectos.",
            "Creación de páginas y dashboards para el seguimiento general de las inspecciones.",
            "Trabajo en equipo utilizando Trello para la gestión de tareas y Figma para prototipado y diseño.",
          ],
        },
        {
          date: "Ene 2025 — Mar 2025",
          role: "Desarrollador Front End",
          company: "Salve Vet - Alianza Escuela DNC",
          description: [
            "Participación en el desarrollo front-end de un panel de gestión veterinaria.",
            "Creación e implementación de páginas de inicio de sesión y registro, con foco en usabilidad y experiencia del usuario.",
            "Ajustes de layout y desarrollo de componentes reutilizables para mejorar la consistencia visual de la aplicación.",
            "Uso de tecnologías modernas como Next.js, Vite, Chakra UI y JavaScript.",
            "Colaboración en equipo utilizando metodologías ágiles, reuniones periódicas y herramientas de diseño como Figma.",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subject: "Nuevo contacto desde el portafolio",
      email: "Email",
      emailPlaceholder: "tuemail@ejemplo.com",
      message: "¿Cómo puedo ayudarte?",
      messagePlaceholder: "Describe tu proyecto, idea o necesidad.",
      submit: "Enviar mensaje",
      profile: "Perfil",
      follow: "Sígueme para más...",
      networks: "Mis redes",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      whatsappAria: "Abrir WhatsApp de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
    },
    footer: {
      text: "Construyendo aplicaciones web modernas y resolviendo problemas con código.",
      quote: "La mejor manera de predecir el futuro es inventarlo.",
      rights: "Todos los derechos reservados.",
      githubAria: "Abrir GitHub de Enzo Valençuela",
      linkedinAria: "Abrir LinkedIn de Enzo Valençuela",
      emailAria: "Enviar email a Enzo Valençuela",
    },
    projectDetails: {
      portfolio: "Portafolio",
      type: "Tipo",
      mainStack: "Stack principal",
      status: "Estado",
      published: "Publicado",
      noPublicDeploy: "Sin deploy público",
      viewOnline: "Ver proyecto online",
      viewRepository: "Ver repositorio",
      backToProjects: "Volver a proyectos",
      technologies: "Tecnologías utilizadas",
      context: "Contexto",
      deliveryTitle: "Qué ofrece este proyecto",
      deliveryText1:
        "{name} fue desarrollado para resolver una necesidad específica de producto, combinando una interfaz clara, navegación objetiva e implementación alineada con buenas prácticas de desarrollo web.",
      deliveryText2:
        "El proyecto refuerza mi actuación como desarrollador full stack al combinar experiencia del usuario, organización de componentes, integración entre capas de la aplicación y cuidado con la entrega visual.",
      quickSummary: "Resumen rápido",
      publicVersion: "Tiene una versión pública accesible.",
      noPublicVersion: "No tiene versión pública por el momento.",
      sourceAvailable: "Código fuente disponible para consulta.",
      sourceUnavailable: "Código fuente privado o no disponible.",
      approach: "Enfoque",
      technicalTitle: "Decisiones técnicas y foco de implementación",
      technicalText1:
        "La construcción de esta solución priorizó la consistencia visual, la organización técnica y una stack coherente con el objetivo del producto. La selección de tecnologías fue pensada para sostener rendimiento, mantenimiento y una buena experiencia en diferentes tamaños de pantalla.",
      technicalText2:
        "Además de la interfaz, el proyecto demuestra capacidad para estructurar flujos reales de uso, manejar integraciones externas cuando es necesario y transformar requisitos en entregas navegables y funcionales.",
      navigation: "Navegación",
      continueExploring: "Sigue explorando",
      previousProject: "Proyecto anterior",
      nextProject: "Próximo proyecto",
      startOfList: "Inicio de la lista",
      endOfList: "Fin de la lista",
      imageAlt: "Imagen de presentación del proyecto {name}",
    },
  },
};

function interpolate(template, values = {}) {
  if (typeof template !== "string") {
    return template;
  }

  return template.replace(/\{(.*?)\}/g, (_, key) => values[key] ?? "");
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "pt";
    }

    return window.localStorage.getItem("language") || "pt";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
      document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    }
  }, [language]);

  const value = useMemo(() => {
    const t = (key, values) => {
      const keys = key.split(".");
      let current = translations[language];

      for (const item of keys) {
        current = current?.[item];
      }

      if (current == null) {
        return key;
      }

      return interpolate(current, values);
    };

    const currentLanguage =
      languageOptions.find((option) => option.code === language) || languageOptions[0];

    return {
      language,
      setLanguage,
      t,
      copy: translations[language],
      currentLanguage,
      languageOptions,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
