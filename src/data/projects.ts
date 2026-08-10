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
    title: "Recipe App — UX/UI Case Study",
    description:
      "Mobile app designed with a user-centered process: research, information architecture, UI, and validation through usability testing.",
    role: "UX Research · UI Design",
    tech: ["Figma", "UX Research", "Prototyping"],
    linkLabel: "Add case study link",
  },
  {
    title: "Lighting & Solar Panels Platform",
    description:
      "Website for a lighting and solar panel company, blending UX/UI design with AI tools to optimize the shopping experience.",
    role: "UI Design · Front-End Development",
    tech: ["Figma", "React", "AI"],
    linkLabel: "Add project link",
  },
  {
    title: "Your next project",
    description:
      "Reserved space for your third featured project — replace this text with the case study, screenshots, and results.",
    role: "Role TBD",
    tech: ["Tech", "Stack"],
    placeholder: true,
  },
  {
    title: "Your next project",
    description:
      "Reserved space for your fourth featured project — replace this text with the case study, screenshots, and results.",
    role: "Role TBD",
    tech: ["Tech", "Stack"],
    placeholder: true,
  },
];
