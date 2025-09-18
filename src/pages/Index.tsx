import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import TechIcon from "../components/TechIcon";
import { Button } from "../components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const config = {
    firstName: "HEBERT ",
    lastName: "MONTARROYOS",
    address: "RIO DE JANEIRO, BRASIL",
    email: "hebertmontarroyos@hotmail.com",
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "education",
        "skills",
        "interests",
        "awards",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-content">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="lg:ml-80">
        <Section id="about">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-tertiary">{config.firstName}</span>
                <span className="text-primary">{config.lastName}</span>
              </h1>

              <div className="text-xl text-portfolio-text-muted mb-8 tracking-wide">
                {config.address} ·{" "}
                <a
                  href={`mailto:${config.email}`}
                  className="text-primary hover:text-primary-light transition-colors duration-200"
                >
                  {config.email}
                </a>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-portfolio-text-muted max-w-4xl">
              Me chamo Hebert Matheus Montarroyos Pinho, Natural do Rio de
              Janeiro, Nascido em 14/06/1996. Apaixonado por tudo que envolve
              tecnologia e áreas afins, sempre busco novos conhecimentos e
              aprimorar-me minhas competências a cada dia. Sempre dedicado à
              vida acadêmica, fazendo cursos extracurriculares na área de
              programação para sempre estar atualizado no setor. Sempre
              Comprometido com meus estudos e com um perfil bem analítico na
              tomada de decisões, além de focado em mostrar resultados e sempre
              evoluir cada vez mais.
            </p>

            <SocialIcons />
          </div>
        </Section>
        <Section id="experience" className="bg-portfolio-content">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-12">
              Experiências
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Analista de Desenvolvimento
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Calindra
                  </div>
                  <ul className="space-y-2 text-portfolio-text-muted">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Desenvolvedor Front-end.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Auxiliava com tarefas no Back-end para integrar as
                      interfaces com a lógica de negócio.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Utilizava de frameworks e bibliotecas populares, como
                      React no front e NodeJS no back-end.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Integração de APIs de terceiros para fornecer recursos
                      adicionais aos aplicativos.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Otimização de desempenho de sites e aplicativos para
                      garantir uma experiência do usuário ágil.
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    Agosto 2020 - Maio 2023
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Trainee em Tecnologia
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Volanty
                  </div>
                  <ul className="space-y-2 text-portfolio-text-muted">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Programa de Desenvolvimento Full Stack.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Abordado diversos tipos de tecnologias em diferentes
                      Stacks tendo a vivência prática e teórica.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Algumas das Stacks abordadas: Front-end, Back-end, Mobile,
                      Análise de dados entre outras.
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    Fevereiro 2020 - Agosto 2020
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Suporte Técnico
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Mls Wireless
                  </div>
                  <ul className="space-y-2 text-portfolio-text-muted">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Configuração de redes em ambiente windows e linux.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Suporte técnico telefônico. Abertura e retorno de
                      chamados.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Suporte técnico interno.
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    Setembro 2018 - Fevereiro 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="education" className="bg-white/50">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-12">
              Formação Acadêmica
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Faculdade Unyleya
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Pós-graduação Lato Sensu: Engenharia de Software
                  </div>
                  <div className="text-portfolio-text-muted space-y-3">
                    <p>
                      A Pós-graduação em Engenharia de Software, faz promover a
                      formação de recursos humanos para atuar nas diferentes
                      áreas do conhecimento humano, de modo a atender às
                      demandas da sociedade, utilizando as modernas tecnologias.
                    </p>
                    <p>
                      Entre as principais atribuições do engenheiro de software,
                      estão:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• Desenvolver softwares e apps</li>
                      <li>• Gerenciar projetos ligados aos softwares</li>
                      <li>• Arquitetar o design estrutural dos programas</li>
                      <li>• Realizar testes nos sistemas</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    2020 - 2021
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Centro Universitário UniDombosco
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Graduação: Sistemas para Internet (ênfase em Internet das
                    Coisas)
                  </div>
                  <div className="text-portfolio-text-muted space-y-3">
                    <p>
                      <strong>CR 8,07</strong>
                    </p>
                    <p>
                      O profissional formado em Sistema para Internet é
                      responsável em desenvolver, implementar e gerenciar sites
                      para internet, aplicativos, e-commerces, além de
                      configurar hardwares e softwares e promover a segurança do
                      sistema.
                    </p>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    2019 - 2021
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Universidade Estácio de Sá
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Graduação: Análise e Desenvolvimento de Sistemas
                  </div>
                  <div className="text-portfolio-text-muted space-y-3">
                    <p>
                      <strong>CR 8,87</strong>
                    </p>
                    <p>
                      O Curso Superior de Tecnologia em Análise e
                      Desenvolvimento de Sistemas visa capacitar o profissional
                      a desenvolver, analisar, projetar e implantar sistemas de
                      informação.
                    </p>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    2018 - 2020
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                    Centro Universitário UniCarioca
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    Técnico em Programação de Jogos Digitais
                  </div>
                  <div className="text-portfolio-text-muted">
                    <p>
                      O Curso Técnico de Programação de Jogos Digitais engloba
                      desenvolvimento de recursos, ambientes, objetos e modelos
                      utilizando a engine Unity 3D.
                    </p>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="text-primary font-medium text-lg">
                    2014 - 2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="skills">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-portfolio-text mb-12">
              HABILIDADES
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-portfolio-text-muted mb-6 tracking-wide">
                  LINGUAGENS & FERRAMENTAS DE PROGRAMAÇÃO
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {[
                    "html5",
                    "css3",
                    "javascript",
                    "react",
                    "nextjs",
                    "gatsby",
                    "jest",
                    "typescript",
                    "nodejs",
                    "express",
                    "mysql",
                    "mongodb",
                    "docker",
                  ].map((tech) => (
                    <TechIcon
                      key={tech}
                      name={tech}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-portfolio-text-muted mb-6 tracking-wide">
                  ÁREA DE ATUAÇÃO
                </h3>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg text-portfolio-text">
                    Desenvolvedor Front-End
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="interests" className="bg-white/50">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-portfolio-text mb-12">
              INTERESSES
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-portfolio-text-muted">
              <p>
                Além de amante da Tecnologia e Desenvolvedor Front-End, sou um
                entusiasta das artes e história além de amar lutar. Apaixonado
                por Artes Marciais sou praticante de Sanda(Boxe Chinês) e
                Aikido. Sou aficionado por novas tecnologias, sempre no tempo
                livre estou estudando ou lendo algum livro afim com o intuito de
                aperfeiçoar e aprender uma nova stack.
              </p>

              <p>
                Sempre colocando cada conhecimento em prática seja por projetos
                próprios no Github ou por certificados de Cursos e palestras
                online. Jamais esqueço dos soft skills, para isso sempre assisto
                palestras e leio livros de Desenvolvimento Pessoal sempre
                anotando e corrigindo possíveis pontos fracos no dia a dia.
                Buscando sempre a aprender e me tornar um ser humano melhor
                podendo contribuir ainda mais com o mundo.
              </p>
            </div>
          </div>
        </Section>
        <Section id="awards">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-portfolio-text mb-12">
              PRÊMIOS & CERTIFICAÇÕES
            </h2>

            <div className="flex items-start space-x-4">
              <Trophy className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-portfolio-text-muted leading-relaxed">
                Participei em 2015 do Projeto Rio Ideias +450 o qual fiquei
                entre as 30 primeiros colocados com suas ideias de aplicativos
                para a cidade do Rio de Janeiro.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Index;
