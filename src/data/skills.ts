import { FaReact } from "react-icons/fa";
import {
  SiSketch,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiStorybook,
} from "react-icons/si";
import { Code2, PenTool, Sparkles } from "lucide-react";
import FigmaLogo from "../components/icons/FigmaLogo";

export const heroBubbles = [
  { label: "Figma", icon: FigmaLogo, color: undefined },
  { label: "GitHub", icon: SiGithub, color: "#F5F5F5" },
  { label: "VS Code", icon: Code2, color: "#007ACC" },
  { label: "AI", icon: Sparkles, color: "#c4a5fb" },
];

export const designTools = [
  { label: "Figma", icon: FigmaLogo },
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
