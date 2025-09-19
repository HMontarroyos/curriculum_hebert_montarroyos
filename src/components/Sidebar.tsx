import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Profile } from "../assets/images";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigationItems = [
    { content: "SOBRE", href: "about" },
    { content: "EXPERIÊNCIAS", href: "experience" },
    { content: "FORMAÇÃO ACADÊMICA", href: "education" },
    { content: "HABILIDADES", href: "skills" },
    { content: "INTERESSES", href: "interests" },
    { content: "PRÊMIOS & CERTIFICAÇÕES", href: "awards" },
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setIsCollapsed(true);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-portfolio-sidebar text-portfolio-sidebar-foreground hover:bg-portfolio-sidebar-muted"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
      </Button>
      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-portfolio-sidebar text-portfolio-sidebar-foreground z-40 transition-transform duration-300 lg:translate-x-0 ${
          isCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="text-center mb-8">
            <div className="mb-4">
              <img
                src={Profile}
                alt="Hebert Montarroyos"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-tertiary"
              />
            </div>
          </div>
          <ul className="space-y-2 flex-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wider transition-all duration-200 
      hover:bg-tertiary/20
      ${
        activeSection === item.href
          ? "bg-tertiary text-tertiary-foreground border-l-4 border-tertiary"
          : "text-white/80"
      }`}
                >
                  {item.content}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default Sidebar;
