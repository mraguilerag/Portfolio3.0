export type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "App de recetas — Caso de estudio UX/UI",
    description:
      "Aplicación móvil diseñada con un proceso centrado en el usuario: investigación, arquitectura de información, UI y validación mediante pruebas de usabilidad.",
    role: "UX Research · UI Design",
    tech: ["Figma", "UX Research", "Prototipado"],
    linkLabel: "Agregar link al case study",
  },
  {
    title: "Plataforma de iluminación y paneles solares",
    description:
      "Sitio web para una empresa de iluminación y paneles solares, integrando diseño UX/UI y herramientas de IA para optimizar la experiencia de compra.",
    role: "UI Design · Front-End Development",
    tech: ["Figma", "React", "IA"],
    linkLabel: "Agregar link al proyecto",
  },
  {
    title: "Tu próximo proyecto",
    description:
      "Espacio reservado para tu tercer proyecto destacado — reemplaza este texto con el caso de estudio, capturas y resultados.",
    role: "Rol por definir",
    tech: ["Tech", "Stack"],
    placeholder: true,
  },
  {
    title: "Tu próximo proyecto",
    description:
      "Espacio reservado para tu cuarto proyecto destacado — reemplaza este texto con el caso de estudio, capturas y resultados.",
    role: "Rol por definir",
    tech: ["Tech", "Stack"],
    placeholder: true,
  },
];
