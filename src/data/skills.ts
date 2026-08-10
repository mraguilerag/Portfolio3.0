import { FaReact } from "react-icons/fa";
import {
  SiFigma,
  SiSass,
  SiTypescript,
  SiWebflow,
  SiSketch,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiStorybook,
} from "react-icons/si";
import { Code2, PenTool } from "lucide-react";

export const heroBubbles = [
  { label: "Figma", icon: SiFigma, color: "#F24E1E" },
  { label: "React", icon: FaReact, color: "#61DAFB" },
  { label: "Sass", icon: SiSass, color: "#CC6699" },
  { label: "TS", icon: SiTypescript, color: "#3178C6" },
  { label: "Webflow", icon: SiWebflow, color: "#4353FF" },
];

export const designTools = [
  { label: "Figma", icon: SiFigma },
  { label: "Adobe XD", icon: PenTool },
  { label: "Sketch", icon: SiSketch },
];

export const frontEndTools = [
  { label: "HTML", icon: SiHtml5 },
  { label: "CSS", icon: SiCss },
  { label: "JavaScript", icon: SiJavascript },
  { label: "React", icon: FaReact },
];

export const otherTools = [
  { label: "Git", icon: SiGit },
  { label: "VS Code", icon: Code2 },
  { label: "Storybook", icon: SiStorybook },
];
