import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// Nota: alguns dispositivos/sistemas não renderizam emojis de bandeira e
// exibem apenas as letras (ex.: "BR"). Para garantir consistência, usamos
// ícones de bandeira via CDN com fallback para emoji se a rede falhar.
export const languageOptions = [
  {
    code: "pt",
    flag: "🇧🇷",
    icon: "https://flagcdn.com/w20/br.png",
    label: "Português",
  },
  {
    code: "en",
    flag: "🇺🇸",
    icon: "https://flagcdn.com/w20/us.png",
    label: "English",
  },
  {
    code: "es",
    flag: "🇪🇸",
    icon: "https://flagcdn.com/w20/es.png",
    label: "Español",
  },
  {
    code: "de",
    flag: "🇩🇪",
    icon: "https://flagcdn.com/w20/de.png",
    label: "Deutsch",
  },
  {
    code: "it",
    flag: "🇮🇹",
    icon: "https://flagcdn.com/w20/it.png",
    label: "Italiano",
  },
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
    feedback: {
      title: "Depoimentos",
      description: "Feedbacks aprovados de pessoas e clientes que acompanharam meus projetos.",
      loading: "Carregando feedbacks...",
      loadError: "Nao foi possivel carregar feedbacks agora.",
      projectLabel: "Projeto",
      approvedLabel: "Feedback aprovado",
      success: "Feedback enviado! Obrigado por contribuir.",
      form: {
        title: "Deixe seu feedback",
        subtitle: "Seu feedback sera enviado para aprovacao antes de aparecer no site.",
        name: "Nome",
        namePlaceholder: "Seu nome",
        project: "Projeto (opcional)",
        projectPlaceholder: "Ex: COP 15 UFMS",
        message: "Feedback",
        messagePlaceholder: "Conte como foi sua experiencia...",
        submit: "Enviar feedback",
        sending: "Enviando...",
      },
      errors: {
        INVALID_NAME: "O nome deve ter entre 2 e 80 caracteres.",
        INVALID_MESSAGE: "O feedback deve ter entre 10 e 800 caracteres.",
        INVALID_PROJECT: "O nome do projeto deve ter no maximo 120 caracteres.",
        INVALID_LOCALE: "Idioma invalido.",
        LOAD_FAILED: "Nao foi possivel carregar feedbacks agora.",
        SUBMIT_FAILED: "Nao foi possivel enviar feedback.",
        METHOD_NOT_ALLOWED: "Metodo nao permitido.",
        NETWORK: "Erro de conexao. Tente novamente.",
        GENERIC: "Erro ao enviar feedback.",
      },
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
    feedback: {
      title: "Testimonials",
      description: "Approved feedback from people and clients who followed my projects.",
      loading: "Loading feedback...",
      loadError: "Could not load feedback right now.",
      projectLabel: "Project",
      approvedLabel: "Approved feedback",
      success: "Feedback sent! Thank you for contributing.",
      form: {
        title: "Share your feedback",
        subtitle: "Your feedback will be reviewed before it appears on the website.",
        name: "Name",
        namePlaceholder: "Your name",
        project: "Project (optional)",
        projectPlaceholder: "Ex: COP 15 UFMS",
        message: "Feedback",
        messagePlaceholder: "Tell how your experience was...",
        submit: "Send feedback",
        sending: "Sending...",
      },
      errors: {
        INVALID_NAME: "Name must be between 2 and 80 characters.",
        INVALID_MESSAGE: "Feedback must be between 10 and 800 characters.",
        INVALID_PROJECT: "Project name must be at most 120 characters.",
        INVALID_LOCALE: "Invalid language.",
        LOAD_FAILED: "Could not load feedback right now.",
        SUBMIT_FAILED: "Could not send feedback.",
        METHOD_NOT_ALLOWED: "Method not allowed.",
        NETWORK: "Connection error. Please try again.",
        GENERIC: "Error sending feedback.",
      },
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
    feedback: {
      title: "Testimonios",
      description: "Opiniones aprobadas de personas y clientes que siguieron mis proyectos.",
      loading: "Cargando testimonios...",
      loadError: "No fue posible cargar los testimonios ahora.",
      projectLabel: "Proyecto",
      approvedLabel: "Testimonio aprobado",
      success: "¡Feedback enviado! Gracias por contribuir.",
      form: {
        title: "Deja tu feedback",
        subtitle: "Tu feedback será revisado antes de aparecer en el sitio.",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        project: "Proyecto (opcional)",
        projectPlaceholder: "Ej: COP 15 UFMS",
        message: "Feedback",
        messagePlaceholder: "Cuenta cómo fue tu experiencia...",
        submit: "Enviar feedback",
        sending: "Enviando...",
      },
      errors: {
        INVALID_NAME: "El nombre debe tener entre 2 y 80 caracteres.",
        INVALID_MESSAGE: "El feedback debe tener entre 10 y 800 caracteres.",
        INVALID_PROJECT: "El nombre del proyecto debe tener como máximo 120 caracteres.",
        INVALID_LOCALE: "Idioma inválido.",
        LOAD_FAILED: "No fue posible cargar los testimonios ahora.",
        SUBMIT_FAILED: "No fue posible enviar el feedback.",
        METHOD_NOT_ALLOWED: "Método no permitido.",
        NETWORK: "Error de conexión. Inténtalo de nuevo.",
        GENERIC: "Error al enviar feedback.",
      },
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
  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      experience: "Erfahrung",
      contact: "Kontakt",
      openLanguageMenu: "Sprachauswahl öffnen",
      languageMenu: "Sprache wählen",
      brandAriaLabel: "Zum Anfang von Enzo Valençuelas Portfolio",
      mainNavigation: "Hauptnavigation des Portfolios",
      darkMode: "Dunkelmodus umschalten",
    },
    hero: {
      greeting: "Hallo, ich bin",
      role:
        "Full‑Stack‑Entwickler mit Fokus auf React, Node.js, JavaScript, TypeScript und PostgreSQL.",
      description:
        "Ich baue vollständige, responsive und performante Webanwendungen für Unternehmen, digitale Produkte und reale Projekte.",
      cta: "Lass uns sprechen?",
      imageAlt: "Profilfoto von Enzo Valençuela, Full‑Stack‑Entwickler",
      githubAria: "Enzo Valençuelas GitHub öffnen",
      linkedinAria: "Enzo Valençuelas LinkedIn öffnen",
    },
    about: {
      title: "Über mich",
      paragraph1:
        "Mein vollständiger Name ist Edilson Enzo da Silva Valençuela, beruflich auch als Enzo Valençuela bekannt. Ich bin Full‑Stack‑Entwickler mit Fokus auf JavaScript, TypeScript, React, Node.js, Express und PostgreSQL. Derzeit studiere ich Wirtschaftsinformatik und arbeite als Entwickler in der Junior‑IT‑Firma meiner Hochschule, wo ich an Webanwendungen und Kund*in­nenlösungen mitwirke.",
      paragraph2:
        "Ich habe Erfahrung im Aufbau kompletter Anwendungen – von modernen, responsiven Oberflächen bis hin zu robusten APIs und Datenbank‑Integration.",
      highlights: [
        { title: "+1 Jahr", text: "Webentwicklung im Studium" },
        { title: "3. Semester", text: "Wirtschaftsinformatik" },
        { title: "Junior‑Firma", text: "Reale Kundenprojekte" },
        { title: "Full Stack", text: "React • Node • PostgreSQL" },
      ],
      resume: "Lebenslauf ansehen",
      resumeAria: "Lebenslauf von Enzo Valençuela öffnen",
    },
    skills: {
      title: "Meine Fähigkeiten",
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
      title: "Projekte",
      intro:
        "Eine Auswahl an Projekten mit Fokus auf Performance, Nutzererlebnis und die Lösung realer Probleme.",
      openDetails: "Projektdetails öffnen",
      imageAlt: "Projektbild",
      openRepository: "Repository öffnen",
      openProject: "Projekt öffnen",
      github: "GitHub",
      access: "Öffnen",
    },
    experience: {
      title: "Erfahrung",
      items: [
        {
          date: "Juli 2025 — Heute",
          role: "Full‑Stack‑Entwickler / Marketing",
          company: "Mega Jr – Junior‑IT‑Unternehmen",
          description: [
            "Betreuung der Social‑Media‑Kanäle des Unternehmens und Erstellung von Inhalten für Instagram.",
            "Bewerbung von Events, Bewerbungsphasen und Projekten über soziale Netzwerke.",
            "Entwicklung responsiver Weboberflächen mit React, Vite, JavaScript, TypeScript, Node.js, Tailwind, CSS und MUI.",
            "Zusammenarbeit mit Entwickler*innen und Designer*innen bei Webprojekten des Unternehmens.",
            "Optimierung von Performance und Nutzererlebnis in den entwickelten Anwendungen.",
          ],
        },
        {
          date: "Sep 2023 — Laufend",
          role: "Grafikdesigner",
          company: "ACA – Amambaí Cycling Association",
          description: [
            "Erstellung von Bannern und Posts zur Bewerbung von Radsport‑Events.",
            "Produktion von Werbematerialien für soziale Medien mit Canva und weiteren Design‑Tools.",
            "Gestaltung informativer und ansprechender Visuals für Sportveranstaltungen.",
            "Pünktliche Lieferung hochwertiger Materialien und Steigerung des Engagements in sozialen Netzwerken.",
          ],
        },
        {
          date: "Sep 2022 — Laufend",
          role: "Grafikdesigner",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Erstellung visueller Materialien und Social‑Media‑Inhalte.",
            "Design von Bannern, Werbeposts und Grafiken für Kampagnen und Promotion.",
            "Vektorisierung und Optimierung des Firmenlogos zur Stärkung der Markenidentität.",
            "Produktion visueller Kommunikationsmittel für verschiedene Plattformen und Marketing‑Aktionen.",
          ],
        },
        {
          date: "Jan 2026 — Feb 2026",
          role: "Full‑Stack‑Entwickler",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Entwicklung eines Management‑Systems für eine Fahrrad‑Werkstatt.",
            "Umsetzung von Arbeitsauftrags‑Kontrolle, Servicekatalog, Kund*innen‑Verwaltung und Fahrrad‑Inventar.",
            "Aufbau eines sicheren Backends mit Firebase Admin SDK für Authentifizierung und Zugriffskontrolle.",
            "Modellierung und Integration einer relationalen Datenbank mit Prisma.",
          ],
        },
        {
          date: "Jul 2025 — Sep 2025",
          role: "Softwareentwickler",
          company: "Pin People – Partnerschaft mit DNC School",
          description: [
            "Entwicklung einer Automatisierung mit KI‑Tools (Gemini) zur Optimierung des Workflows im Bereich Customer Operations (COPS).",
            "Automatische Umwandlung von Meeting‑Transkripten in strukturierte und formatierte Protokolle.",
            "Automatisierte Verteilung der Protokolle in internen Kanälen des Unternehmens und Reduzierung manueller Arbeit.",
            "Aufbau einer effizienten, reproduzierbaren Lösung im Sinne der Firmenstrategie, teure externe Tools zu vermeiden.",
          ],
        },
        {
          date: "Apr 2025 — Mai 2025",
          role: "Front‑End‑Entwickler",
          company: "Proxion Solutions – Partnerschaft mit DNC School",
          description: [
            "Mitwirkung bei der Entwicklung eines Tools für präventive Inspektionen für Proxion.",
            "Front‑End‑Entwicklung mit Next.js und Tailwind CSS für responsive, intuitive Interfaces.",
            "Implementierung von Funktionen zur Auflistung und Inspektion von Geräten sowie zum Mängel‑Management.",
            "Erstellung von Seiten und Dashboards zur Gesamtübersicht der Inspektionen.",
            "Teamarbeit mit Trello für Aufgabenmanagement und Figma für Prototyping und Design.",
          ],
        },
        {
          date: "Jan 2025 — Mär 2025",
          role: "Front‑End‑Entwickler",
          company: "Salve Vet – Partnerschaft mit DNC School",
          description: [
            "Mitwirkung bei der Front‑End‑Entwicklung eines Veterinär‑Management‑Dashboards.",
            "Erstellung und Implementierung von Login‑ und Registrierungsseiten mit Fokus auf Usability und UX.",
            "Layout‑Anpassungen und Entwicklung wiederverwendbarer Komponenten für visuelle Konsistenz.",
            "Einsatz moderner Technologien wie Next.js, Vite, Chakra UI und JavaScript.",
            "Zusammenarbeit im Team mit agilen Methoden, regelmäßigen Meetings und Design‑Tools wie Figma.",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      subject: "Neue Kontaktanfrage über das Portfolio",
      email: "E‑Mail",
      emailPlaceholder: "dein@email.com",
      message: "Wie kann ich helfen?",
      messagePlaceholder: "Beschreibe dein Projekt, deine Idee oder deinen Bedarf.",
      submit: "Nachricht senden",
      profile: "Profil",
      follow: "Folge mir für mehr…",
      networks: "Meine Netzwerke",
      githubAria: "GitHub von Enzo Valençuela öffnen",
      whatsappAria: "WhatsApp von Enzo Valençuela öffnen",
      linkedinAria: "LinkedIn von Enzo Valençuela öffnen",
    },
    feedback: {
      title: "Feedbacks",
      description: "Freigegebene Rückmeldungen von Personen und Kund*innen zu meinen Projekten.",
      loading: "Feedbacks werden geladen...",
      loadError: "Feedbacks konnten gerade nicht geladen werden.",
      projectLabel: "Projekt",
      approvedLabel: "Freigegebenes Feedback",
      success: "Feedback gesendet! Danke für deinen Beitrag.",
      form: {
        title: "Hinterlasse dein Feedback",
        subtitle: "Dein Feedback wird geprüft, bevor es auf der Website erscheint.",
        name: "Name",
        namePlaceholder: "Dein Name",
        project: "Projekt (optional)",
        projectPlaceholder: "Z. B. COP 15 UFMS",
        message: "Feedback",
        messagePlaceholder: "Erzähle, wie deine Erfahrung war...",
        submit: "Feedback senden",
        sending: "Wird gesendet...",
      },
      errors: {
        INVALID_NAME: "Der Name muss zwischen 2 und 80 Zeichen lang sein.",
        INVALID_MESSAGE: "Das Feedback muss zwischen 10 und 800 Zeichen lang sein.",
        INVALID_PROJECT: "Der Projektname darf höchstens 120 Zeichen haben.",
        INVALID_LOCALE: "Ungültige Sprache.",
        LOAD_FAILED: "Feedbacks konnten gerade nicht geladen werden.",
        SUBMIT_FAILED: "Feedback konnte nicht gesendet werden.",
        METHOD_NOT_ALLOWED: "Methode nicht erlaubt.",
        NETWORK: "Verbindungsfehler. Bitte erneut versuchen.",
        GENERIC: "Fehler beim Senden des Feedbacks.",
      },
    },
    footer: {
      text: "Moderne Webanwendungen bauen und Probleme mit Code lösen.",
      quote: "Die beste Art, die Zukunft vorherzusagen, ist, sie zu erfinden.",
      rights: "Alle Rechte vorbehalten.",
      githubAria: "GitHub von Enzo Valençuela öffnen",
      linkedinAria: "LinkedIn von Enzo Valençuela öffnen",
      emailAria: "E‑Mail an Enzo Valençuela senden",
    },
    projectDetails: {
      portfolio: "Portfolio",
      type: "Typ",
      mainStack: "Haupt‑Stack",
      status: "Status",
      published: "Veröffentlicht",
      noPublicDeploy: "Kein öffentlicher Deploy",
      viewOnline: "Live‑Projekt ansehen",
      viewRepository: "Repository ansehen",
      backToProjects: "Zurück zu Projekten",
      technologies: "Verwendete Technologien",
      context: "Kontext",
      deliveryTitle: "Was dieses Projekt liefert",
      deliveryText1:
        "{name} wurde entwickelt, um einen spezifischen Produktbedarf zu lösen – mit klarer Oberfläche, zielgerichteter Navigation und Umsetzung nach guten Web‑Entwicklungs‑Praktiken.",
      deliveryText2:
        "Das Projekt unterstreicht meine Full‑Stack‑Arbeit durch Nutzererlebnis, Komponenten‑Organisation, Integration über Anwendungsschichten und sorgfältige visuelle Ausführung.",
      quickSummary: "Kurze Zusammenfassung",
      publicVersion: "Öffentliche Version verfügbar.",
      noPublicVersion: "Zurzeit keine öffentliche Version.",
      sourceAvailable: "Quellcode zur Einsicht verfügbar.",
      sourceUnavailable: "Quellcode privat oder nicht verfügbar.",
      approach: "Vorgehen",
      technicalTitle: "Technische Entscheidungen und Fokus",
      technicalText1:
        "Die Lösung priorisierte visuelle Konsistenz, technische Organisation und einen Stack passend zum Produktziel. Die gewählten Technologien unterstützen Performance, Wartbarkeit und gutes Erlebnis über Bildschirmgrößen hinweg.",
      technicalText2:
        "Über das Interface hinaus zeigt das Projekt die Fähigkeit, reale Nutzungsflüsse zu strukturieren, externe Integrationen bei Bedarf zu handhaben und Anforderungen in navigierbare, funktionale Ergebnisse zu verwandeln.",
      navigation: "Navigation",
      continueExploring: "Weiter erkunden",
      previousProject: "Voriges Projekt",
      nextProject: "Nächstes Projekt",
      startOfList: "Anfang der Liste",
      endOfList: "Ende der Liste",
      imageAlt: "Vorschaubild für das Projekt {name}",
    },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      skills: "Competenze",
      projects: "Progetti",
      experience: "Esperienza",
      contact: "Contatti",
      openLanguageMenu: "Apri selezione lingua",
      languageMenu: "Seleziona lingua",
      brandAriaLabel: "Vai all'inizio del portfolio di Enzo Valençuela",
      mainNavigation: "Navigazione principale del portfolio",
      darkMode: "Attiva/disattiva tema scuro",
    },
    hero: {
      greeting: "Ciao, sono",
      role:
        "Sviluppatore Full Stack con focus su React, Node.js, JavaScript, TypeScript e PostgreSQL.",
      description:
        "Costruisco applicazioni web complete, responsive e orientate alle prestazioni per aziende, prodotti digitali e progetti reali.",
      cta: "Parliamo?",
      imageAlt: "Foto profilo di Enzo Valençuela, sviluppatore full stack",
      githubAria: "Apri il GitHub di Enzo Valençuela",
      linkedinAria: "Apri il LinkedIn di Enzo Valençuela",
    },
    about: {
      title: "Chi sono",
      paragraph1:
        "Il mio nome completo è Edilson Enzo da Silva Valençuela, conosciuto professionalmente anche come Enzo Valençuela. Sono uno sviluppatore Full Stack focalizzato su JavaScript, TypeScript, React, Node.js, Express e PostgreSQL. Attualmente studio Sistemi d'Informazione e lavoro come sviluppatore nella junior company della mia università, contribuendo a applicazioni web e soluzioni per clienti.",
      paragraph2:
        "Ho esperienza nella creazione di applicazioni complete: dalle interfacce moderne e responsive a API robuste e integrazione con database.",
      highlights: [
        { title: "+1 anno", text: "Studio dello sviluppo web" },
        { title: "3º semestre", text: "Sistemi d'Informazione" },
        { title: "Junior Company", text: "Progetti reali per clienti" },
        { title: "Full Stack", text: "React • Node • PostgreSQL" },
      ],
      resume: "Vedi CV",
      resumeAria: "Apri il CV di Enzo Valençuela",
    },
    skills: {
      title: "Le mie competenze",
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
      title: "Progetti",
      intro:
        "Selezione di progetti costruiti con focus su performance, esperienza utente e soluzione di problemi reali.",
      openDetails: "Apri dettagli del progetto",
      imageAlt: "Immagine del progetto",
      openRepository: "Apri repository",
      openProject: "Apri progetto",
      github: "GitHub",
      access: "Apri",
    },
    experience: {
      title: "Esperienza",
      items: [
        {
          date: "Lug 2025 — Presente",
          role: "Sviluppatore Full Stack / Marketing",
          company: "Mega Jr - Junior Company di Informatica",
          description: [
            "Gestione dei canali social dell'azienda e creazione di contenuti per Instagram.",
            "Promozione di eventi, selezioni e progetti tramite i social network.",
            "Sviluppo di interfacce web responsive con React, Vite, JavaScript, TypeScript, Node.js, Tailwind, CSS e MUI.",
            "Collaborazione con sviluppatori e designer nella realizzazione di progetti web dell'azienda.",
            "Ottimizzazione delle prestazioni e dell'esperienza utente nelle applicazioni sviluppate.",
          ],
        },
        {
          date: "Set 2023 — In corso",
          role: "Graphic Designer",
          company: "ACA - Associazione Ciclistica di Amambaí",
          description: [
            "Creazione di banner e post per la promozione di eventi ciclistici.",
            "Produzione di materiali promozionali per i social utilizzando Canva e strumenti di grafica.",
            "Realizzazione di contenuti visivi informativi e accattivanti per eventi sportivi.",
            "Consegna puntuale di materiali di alta qualità, aumentando l'engagement sui social.",
          ],
        },
        {
          date: "Set 2022 — Ricorrente",
          role: "Graphic Designer",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Creazione di materiali visivi e contenuti per i social media.",
            "Design di banner, post promozionali e asset grafici per campagne e promozioni.",
            "Vettorializzazione e ottimizzazione del logo aziendale, rafforzando l'identità del brand.",
            "Produzione di materiali di comunicazione visiva per diverse piattaforme e azioni di marketing.",
          ],
        },
        {
          date: "Gen 2026 — Feb 2026",
          role: "Sviluppatore Full Stack",
          company: "Pedal de Prata Sport Bike",
          description: [
            "Sviluppo di un sistema di gestione per un'officina di biciclette.",
            "Implementazione di controllo ordini di servizio, catalogo dei servizi, gestione clienti e inventario biciclette in vendita.",
            "Creazione di un backend sicuro con Firebase Admin SDK per autenticazione e controllo accessi.",
            "Modeling e integrazione con database relazionale tramite Prisma.",
          ],
        },
        {
          date: "Lug 2025 — Set 2025",
          role: "Software Developer",
          company: "Pin People - Partnership con DNC School",
          description: [
            "Sviluppo di un'automazione con strumenti di IA (Gemini) per ottimizzare il flusso di lavoro dell'area Customer Operations (COPS).",
            "Trasformazione automatica delle trascrizioni delle riunioni in verbali organizzati e formattati.",
            "Automazione della distribuzione dei verbali nei canali interni dell'azienda, eliminando lavoro manuale.",
            "Creazione di una soluzione efficiente e replicabile allineata alla strategia aziendale di evitare strumenti esterni più costosi.",
          ],
        },
        {
          date: "Apr 2025 — Mag 2025",
          role: "Front End Developer",
          company: "Proxion Solutions - Partnership con DNC School",
          description: [
            "Partecipazione allo sviluppo di uno strumento di ispezione preventiva per Proxion.",
            "Sviluppo del front‑end con Next.js e Tailwind CSS per creare interfacce responsive e intuitive.",
            "Implementazione di funzionalità per elenco e ispezione apparecchiature e gestione difetti.",
            "Creazione di pagine e dashboard per il monitoraggio generale delle ispezioni.",
            "Lavoro di squadra con Trello per la gestione attività e Figma per prototipazione e design.",
          ],
        },
        {
          date: "Gen 2025 — Mar 2025",
          role: "Front End Developer",
          company: "Salve Vet - Partnership con DNC School",
          description: [
            "Partecipazione allo sviluppo front‑end di un pannello di gestione veterinaria.",
            "Creazione e implementazione delle pagine di login e registrazione con focus su usabilità ed esperienza utente.",
            "Regolazioni di layout e sviluppo di componenti riutilizzabili per migliorare la coerenza visiva dell'applicazione.",
            "Uso di tecnologie moderne come Next.js, Vite, Chakra UI e JavaScript.",
            "Collaborazione in team con metodologie agili, riunioni periodiche e strumenti di design come Figma.",
          ],
        },
      ],
    },
    contact: {
      title: "Contatti",
      subject: "Nuovo contatto dal portfolio",
      email: "Email",
      emailPlaceholder: "tua@email.com",
      message: "Come posso aiutarti?",
      messagePlaceholder: "Descrivi il tuo progetto, idea o necessità.",
      submit: "Invia messaggio",
      profile: "Profilo",
      follow: "Seguimi per altro…",
      networks: "Le mie reti",
      githubAria: "Apri il GitHub di Enzo Valençuela",
      whatsappAria: "Apri il WhatsApp di Enzo Valençuela",
      linkedinAria: "Apri il LinkedIn di Enzo Valençuela",
    },
    feedback: {
      title: "Feedback",
      description: "Feedback approvati da persone e clienti che hanno seguito i miei progetti.",
      loading: "Caricamento feedback...",
      loadError: "Impossibile caricare i feedback ora.",
      projectLabel: "Progetto",
      approvedLabel: "Feedback approvato",
      success: "Feedback inviato! Grazie per il contributo.",
      form: {
        title: "Lascia il tuo feedback",
        subtitle: "Il tuo feedback sarà revisionato prima di apparire sul sito.",
        name: "Nome",
        namePlaceholder: "Il tuo nome",
        project: "Progetto (opzionale)",
        projectPlaceholder: "Es: COP 15 UFMS",
        message: "Feedback",
        messagePlaceholder: "Racconta com'è stata la tua esperienza...",
        submit: "Invia feedback",
        sending: "Invio...",
      },
      errors: {
        INVALID_NAME: "Il nome deve contenere tra 2 e 80 caratteri.",
        INVALID_MESSAGE: "Il feedback deve contenere tra 10 e 800 caratteri.",
        INVALID_PROJECT: "Il nome del progetto deve avere massimo 120 caratteri.",
        INVALID_LOCALE: "Lingua non valida.",
        LOAD_FAILED: "Impossibile caricare i feedback ora.",
        SUBMIT_FAILED: "Impossibile inviare il feedback.",
        METHOD_NOT_ALLOWED: "Metodo non consentito.",
        NETWORK: "Errore di connessione. Riprova.",
        GENERIC: "Errore durante l'invio del feedback.",
      },
    },
    footer: {
      text: "Costruire applicazioni web moderne e risolvere problemi con il codice.",
      quote: "Il modo migliore per prevedere il futuro è inventarlo.",
      rights: "Tutti i diritti riservati.",
      githubAria: "Apri il GitHub di Enzo Valençuela",
      linkedinAria: "Apri il LinkedIn di Enzo Valençuela",
      emailAria: "Invia email a Enzo Valençuela",
    },
    projectDetails: {
      portfolio: "Portfolio",
      type: "Tipo",
      mainStack: "Stack principale",
      status: "Stato",
      published: "Pubblicato",
      noPublicDeploy: "Nessun deploy pubblico",
      viewOnline: "Vedi progetto live",
      viewRepository: "Vedi repository",
      backToProjects: "Torna ai progetti",
      technologies: "Tecnologie utilizzate",
      context: "Contesto",
      deliveryTitle: "Cosa offre questo progetto",
      deliveryText1:
        "{name} è stato sviluppato per soddisfare un'esigenza specifica di prodotto, unendo interfaccia chiara, navigazione diretta e implementazione allineata alle buone pratiche di sviluppo web.",
      deliveryText2:
        "Il progetto rafforza il mio lavoro come sviluppatore full stack combinando esperienza utente, organizzazione dei componenti, integrazione tra gli strati dell'applicazione e cura della resa visiva.",
      quickSummary: "Riassunto veloce",
      publicVersion: "Versione pubblica disponibile.",
      noPublicVersion: "Nessuna versione pubblica al momento.",
      sourceAvailable: "Codice sorgente disponibile.",
      sourceUnavailable: "Codice sorgente privato o non disponibile.",
      approach: "Approccio",
      technicalTitle: "Decisioni tecniche e focus di implementazione",
      technicalText1:
        "La soluzione ha dato priorità alla coerenza visiva, all'organizzazione tecnica e a uno stack coerente con l'obiettivo del prodotto. Le tecnologie scelte supportano performance, manutenibilità e una buona esperienza su varie dimensioni di schermo.",
      technicalText2:
        "Oltre all'interfaccia, il progetto dimostra la capacità di strutturare flussi d'uso reali, gestire integrazioni esterne quando necessario e trasformare requisiti in risultati navigabili e funzionali.",
      navigation: "Navigazione",
      continueExploring: "Continua a esplorare",
      previousProject: "Progetto precedente",
      nextProject: "Prossimo progetto",
      startOfList: "Inizio elenco",
      endOfList: "Fine elenco",
      imageAlt: "Immagine di anteprima del progetto {name}",
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
