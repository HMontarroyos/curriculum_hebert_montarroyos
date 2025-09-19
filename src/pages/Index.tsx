import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import TechIcon from "../components/TechIcon";
import { Button } from "../components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { areas } from "@/data/areas";
import { awards } from "@/data/awards";
import { calculateAge } from "@/utils";
import { saveAs } from "file-saver";
import { Curriculum } from "@/assets/documents";
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from "@/components/ui/toast";
import { GrDocumentDownload } from "react-icons/gr";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);

  const birthDate = new Date("1996-06-14");
  const age = calculateAge(birthDate);
  const config = {
    firstName: "HEBERT ",
    lastName: "MONTARROYOS",
    address: "RIO DE JANEIRO, BRASIL",
    email: "hebertmontarroyos@hotmail.com",
  };

  const handleDownloadCurriculum = () => {
    saveAs(Curriculum, "Curriculum_Hebert_Montarroyos.pdf");
    setOpen(true);
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
    <ToastProvider>
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
                Muito prazer me chamo Hebert Matheus Montarroyos Pinho, natural
                do Rio de Janeiro, atualmente com {age} anos. Como desenvolvedor
                de software sou especializado no front-end, também tenho
                experiência no desenvolvimento back-end. Gosto de metodologias
                ágeis afim de organizar a entrega, especialmente o Scrum, e
                adoro trabalhar em equipe. Possuo sólidos conhecimentos em
                Javascript. Tenho experiência no desenvolvimento de aplicações
                front-end utilizando do framework React, além de trabalhar no
                back-end quando necessário com o Nodejs, possuo interesse em
                melhores práticas de desenvolvimento. Sou uma pessoa
                descontraída, o que facilita a interação e a colaboração com
                colegas. Procuro sempre me manter atualizado com as tendências e
                avanços tecnológicos, buscando aprimorar minhas habilidades
                constantemente. Sou apaixonado pela criação de interfaces e pela
                experiência do usuário a quais também mantenho um estudo em
                particular. Estou sempre buscando contribuir com meu
                conhecimento e criatividade em projetos desafiadores.
              </p>
              <Button onClick={handleDownloadCurriculum}>
                Download Curriculum
                <GrDocumentDownload className="w-6 h-6" />
              </Button>
              <SocialIcons />
            </div>
          </Section>
          <Section id="experience" className="bg-portfolio-content">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-portfolio-text mb-12">
                Experiências
              </h2>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-primary font-medium mb-4">
                        {exp.company}
                      </div>
                      <ul className="space-y-2 text-portfolio-text-muted">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:text-right">
                      <span className="text-primary font-medium text-lg">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
          <Section id="education" className="bg-white/50">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-portfolio-text mb-12">
                Formação Acadêmica
              </h2>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-portfolio-text mb-2">
                        {edu.institution}
                      </h3>
                      <div className="text-lg text-primary font-medium mb-4">
                        {edu.degree}
                      </div>

                      <div className="text-portfolio-text-muted space-y-3">
                        {edu.highlight && (
                          <p>
                            <strong>{edu.highlight}</strong>
                          </p>
                        )}
                        {edu.description && <p>{edu.description}</p>}
                        {edu.details && (
                          <ul className="space-y-1 ml-4">
                            {edu.details.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <span className="text-primary font-medium text-lg">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
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
                  <div className="space-y-3">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        <span className="text-lg text-portfolio-text">
                          {area.name}
                        </span>
                      </div>
                    ))}
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
                  Além de ser um amante da tecnologia e atuar como desenvolvedor
                  Front-End, sou também um entusiasta das artes e da história,
                  com uma paixão especial pelas artes marciais. Pratico Sanda
                  (Boxe Chinês) e Aikidô, disciplinas que me ensinaram
                  disciplina, foco e equilíbrio, valores que levo também para
                  minha vida profissional.
                </p>
                <p>
                  Apaixonado por inovação, estou sempre em busca de novos
                  aprendizados: no tempo livre estudo, leio livros e exploro
                  novas stacks, colocando em prática cada conhecimento
                  adquirido, seja em projetos pessoais no GitHub ou em cursos e
                  palestras online, que somam certificações ao meu crescimento.
                  Também valorizo profundamente os soft skills.
                </p>
                <p>
                  Por isso, dedico parte da minha rotina a palestras e leituras
                  de desenvolvimento pessoal, sempre registrando insights e
                  ajustando pontos de melhoria. Meu objetivo é evoluir
                  continuamente, não apenas como profissional, mas também como
                  ser humano, contribuindo de forma significativa com o mundo ao
                  meu redor.
                </p>
                <p>
                  Além da tecnologia, tenho outro grande amor: o RPG. Sou Mestre
                  de RPG e fundador de uma iniciativa chamada de Tecno Forja RPG
                  que reúne mestres e jogadores, promovendo inclusão, diversão e
                  aprendizado. Através dessa comunidade, já realizamos diversas
                  ações sociais, levando o RPG como ferramenta de criatividade,
                  empatia e integração para todos.
                </p>
              </div>
            </div>
          </Section>
          <Section id="awards">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-portfolio-text mb-12">
                PRÊMIOS & CERTIFICAÇÕES
              </h2>

              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Trophy className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg text-portfolio-text-muted leading-relaxed">
                        Em <strong>{award.year}</strong>, participei do{" "}
                        <strong>{award.title}</strong>. {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </main>
      </div>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="grid gap-1">
          <ToastTitle>Curriculum baixado com sucesso!</ToastTitle>
          <ToastDescription>
            O arquivo foi salvo no seu dispositivo 📂
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default Index;
