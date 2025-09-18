import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import { SiJavascript, SiDocker } from "react-icons/si";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconsMap: Record<string, React.ElementType> = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  sass: FaSass,
  javascript: SiJavascript,
  react: FaReact,
  nodejs: FaNodeJs,
  npm: FaNpm,
  docker: SiDocker,
};

const TechIcon: React.FC<TechIconProps> = ({ name, className = "" }) => {
  const IconComponent = iconsMap[name.toLowerCase()];
  if (!IconComponent) return null;

  return (
    <div
      className={`inline-flex items-center justify-center w-16 h-16 ${className}`}
    >
      <IconComponent className="w-full h-full text-portfolio-text-muted hover:text-primary transition-colors duration-300" />
    </div>
  );
};

export default TechIcon;
