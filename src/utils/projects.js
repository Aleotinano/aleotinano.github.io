import { technologies } from "./technologies";

const getTechnologyByName = (name) => {
  const tech = technologies.find((tech) => tech.label === name);

  return tech;
};

export const projects = [
  {
    id: "portafolio-2026",
    title: "Portafolio 2026",
    description: {
      short:
        "Portafolio personal enfocado en experiencia de usuario, animaciones y arquitectura moderna.",
      full: "Portafolio personal desarrollado para presentar mis proyectos, habilidades y experiencia como desarrollador frontend. El foco principal está en una experiencia de usuario fluida, una arquitectura clara y una estética cuidada, utilizando tecnologías modernas del ecosistema frontend.",
    },

    role: [
      "Frontend Development",
      "UI Design",
      "Arquitectura de componentes",
      "Motion & Microinteracciones",
    ],

    features: [
      "Listado interactivo de proyectos",
      "Vista detallada de proyectos con navegación y galería",
      "Animaciones y transiciones con Framer Motion",
      "Diseño responsive",
      "Arquitectura modular con componentes reutilizables",
    ],

    technicalDecisions: [
      "Uso de Astro para optimizar performance y renderizado",
      "Integración de React para componentes interactivos",
      "Tailwind CSS para un diseño consistente y escalable",
      "Framer Motion para animaciones y transiciones fluidas",
      "Separación clara entre contenido, UI y lógica",
    ],

    status: "Proyecto activo",
    private: false,
    technologies: [
      getTechnologyByName("Astro"),
      getTechnologyByName("React"),
      getTechnologyByName("Tailwind"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Framer Motion"),
      getTechnologyByName("Pnpm"),
    ],

    demo: "https://aleotinano.netlify.app",
    code: "https://github.com/Aleotinano/aleotinano.github.io",
    gallery: [
      { img: "./portafolio2026/image.png", alt: "Portada-Portafolio-2026" },
    ],
  },

  {
    id: "ansser",
    title: "Ansser Empresarial",
    description: {
      short:
        "Plataforma empresarial para la gestión integral de inventario, pedidos y usuarios.",
      full: "Aplicación web empresarial desarrollada en React para la administración centralizada de múltiples módulos de negocio. Utilizada en producción por el equipo interno de la empresa para gestionar inventario y maximizar ventas. El sistema fue optimizado para manejar grandes volúmenes de datos manteniendo alto rendimiento.",
    },

    role: [
      "Frontend Lead",
      "Desarrollo Frontend",
      "Arquitectura Frontend",
      "UI Implementation",
      "Integración con Backend (FastAPI)",
    ],

    features: [
      "Gestión administrativa de productos, combos, ordenes, ciudaes, etc.",
      "Listados avanzados con filtros combinados y ordenamiento",
      "Exportación de ordenes a Excel basada en filtros activos",
      "Soporte para grandes volúmenes de datos (+2000 órdenes)",
      "Lazy loading y renderizado optimizado",
      "Sistema de autenticación y rutas privadas",
      "Interfaz orientada a uso interno y productividad",
    ],

    technicalDecisions: [
      "Arquitectura modular basada en dominios de negocio",
      "Uso intensivo de Context API (más de 12 contextos) para estado global",
      "Separación clara entre UI, lógica y servicios",
      "Sistema de cache y preload de datos para mejorar performance",
      "Optimización de renderizado para listas grandes",
      "CSS Modules para evitar colisiones y mantener escalabilidad",
    ],

    status: "Proyecto productivo (empresa)",

    technologies: [
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Css"),
    ],
    private: true,
    demo: "private",
    gallery: [
      { img: "/ansser/ansser1.png", alt: "Dashboard administrativo Ansser" },
    ],
  },

  {
    id: "valeant",
    title: "Nova / Valeant",
    description: {
      short:
        "Software de gestión centralizada de usuarios y configuraciones de red.",
      full: "Valeant es una aplicación interna diseñada para la gestión centralizada de usuarios y configuraciones de red. Basada en la arquitectura de Dolphyn Anty, la herramienta fue desarrollada para cubrir necesidades específicas de la empresa, permitiendo administrar múltiples usuarios y proxys de forma segura, visual e intuitiva.",
      full2:
        " El proyecto se enfocó en escalabilidad, claridad visual y facilidad de uso, evolucionando de manera iterativa a partir del feedback recibido.",
    },
    role: [
      "Frontend Development (End-to-End)",
      "UI/UX Design",
      "Architecture & Technical Decisions",
      "Electron Desktop Integration",
    ],

    features: [
      "Gestión de usuarios, proxys y autenticación",
      "Creación de grupos de usuarios y proxys con filtrado avanzado",
      "Aplicación de escritorio",
      "Guía visual del estado y uso de usuarios y proxys",
      "Ejecutable multiplataforma (Windows / macOS / Linux)",
    ],

    technicalDecisions: [
      "Selección de stack moderno orientado a rendimiento y mantenibilidad",
      "Arquitectura modular y escalable basada en componentes",
      "Gestión de rutas con React Router DOM",
      "Contextos globales para el manejo de usuarios y proxys",
      "Integración con Electron para distribución como aplicación de escritorio multiplataforma",
      "Uso de CSS Modules para encapsulación y control del diseño",
    ],

    private: true,
    status: "Proyecto interno descontinuado (empresa)",
    technologies: [
      getTechnologyByName("Electron"),
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Css"),
      getTechnologyByName("Javascript"),
    ],
    demo: "private",
    code: "private",
    gallery: [
      { img: "./valeant/Valeant1.png", alt: "Portada-Valeant" },
      { img: "./valeant/Valeant2.png", alt: "Portada-Valeant" },
    ],
  },

  {
    id: "huella",
    title: "Huella",
    description: {
      short: "E-commerce de ropa vintage.",
      full: "Proyecto de e-commerce de ropa vintage enfocado en ofrecer una experiencia de compra clara y fluida, priorizando el rendimiento, la escalabilidad y la consistencia visual en todo el flujo del usuario.",

      full2:
        "Proyecto personal desarrollado para profundizar mis habilidades en React y desarrollo frontend, aplicando buenas prácticas, patrones de diseño y una arquitectura de componentes reutilizable.",
    },
    role: [
      "End-to-End Frontend Development",
      "UI/UX Design",
      "Component Architecture",
      "Responsive Design",
    ],

    features: [
      "Navegación por categorías",
      "Filtros de productos por precio, categoría y talla",
      "Carrito de compras con gestión de productos (agregar y eliminar)",
      "Diseño totalmente responsive",
      "Componentes reutilizables",
      "Optimización de imágenes para mejorar performance",
    ],

    technicalDecisions: [
      "Selección de stack moderno enfocado en rendimiento y DX",
      "Arquitectura modular basada en componentes reutilizables",
      "Modularización de hooks personalizados para el manejo de filtros",
      "Separación clara entre lógica y presentación",
      "Uso de CSS Modules para encapsulación y control del diseño",
    ],

    status: "Proyecto terminado",
    technologies: [
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Css"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Html"),
    ],
    private: false,
    demo: "https://aleotinano.github.io/Huella/",
    code: "https://github.com/Aleotinano/Huella",
    gallery: [{ img: "./huella/Huella1.png", alt: "Portada-Huella" }],
  },

  {
    id: "dafood",
    title: "DaFood",
    description: {
      short: "Software de gestión para restaurantes",
      full: "Primer proyecto personal de software de gestión para restaurantes, enfocado en la organización de pedidos y productos.",
    },
    role: ["Frontend Development", "UI Design", "Component Architecture"],

    features: [
      "Visualización y organización de mesas",
      "Componentes reutilizables",
      "Panel de comandas",
    ],

    technicalDecisions: [
      "Primer acercamiento a React y arquitectura basada en componentes",
      "Estructura modular",
      "Uso de CSS Modules para control del diseño",
    ],

    status: "Proyecto en desarrollo",
    technologies: [
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Css"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Html"),
    ],
    demo: "https://dafoodale.netlify.app/",
    code: "https://github.com/Aleotinano/DaFood-Frontend",
    gallery: [{ img: "./daFood/DaFood1.png", alt: "Portada-DaFood" }],
  },

  {
    id: "portafolio-2023",
    title: "Portafolio 2023",
    description: {
      short: "Primer portafolio personal como desarrollador frontend.",
      full: "Proyecto de portafolio personal donde presento mis primeros trabajos, habilidades y experiencia como desarrollador frontend durante 2023.",
    },
    role: [
      "Frontend Development",
      "UI Design",
      "Component Architecture",
      "Responsive Design",
    ],

    features: [
      "Sección de presentación personal",
      "Listado de proyectos con descripciones",
      "Diseño responsive",
      "Estructura clara de navegación",
      "Soporte multi idioma (i18n)",
    ],

    technicalDecisions: [
      "Primer acercamiento a React y arquitectura basada en componentes",
      "Separación de secciones en componentes reutilizables",
      "Uso de CSS Modules para organizar estilos",
      "Implementación de i18n para múltiples idiomas",
    ],

    status: "Proyecto inicial (completado)",
    technologies: [
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Css"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Html"),
    ],
    demo: "https://subtle-pony-24f2c8.netlify.app/",
    code: "https://github.com/Aleotinano/Portafolio",
    gallery: [
      { img: "./portafolio2023/image.png", alt: "Portada-Portafolio-2023" },
    ],
  },

  {
    id: "landing-ansser",
    title: "Landing",
    description: {
      short: "Landing page informativa para comercializacion.",
      full: "Landing page desarrollada para comercializacion de un producto. El trabajo se centró en la implementación frontend del diseño proporcionado, priorizando una estructura clara, responsive y preparada para futuras ampliaciones.",
    },
    role: [
      "Desarrollo Frontend",
      "Maquetación UI",
      "Implementación de diseño",
      "Responsive Layout",
    ],

    features: [
      "Landing page informativa del producto",
      "Secciones de beneficios y propuesta de valor",
      "Estructura clara de navegación",
      "Diseño responsive para desktop y mobile",
      "Preparación para futuras secciones comerciales",
    ],

    technicalDecisions: [
      "Implementación en React con arquitectura simple por secciones",
      "Separación de componentes para facilitar mantenimiento",
      "Uso de CSS modular para estilos escalables",
    ],
    private: true,
    status: "Proyecto inicial (completado)",
    technologies: [
      getTechnologyByName("React"),
      getTechnologyByName("Vite"),
      getTechnologyByName("Css"),
      getTechnologyByName("Javascript"),
      getTechnologyByName("Html"),
    ],
    gallery: [{ img: "./landing/Landing1.png", alt: "Landing-Portada" }],
  },
];
