export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
  description?: string;
  highlight?: string;
}

export const education: Education[] = [
  {
    institution: "Faculdade Unyleya",
    degree: "Pós-graduação Lato Sensu: Engenharia de Software",
    period: "2020 - 2021",
    description:
      "A Pós-graduação em Engenharia de Software promove a formação de recursos humanos para atuar em diversas áreas, utilizando modernas tecnologias.",
    details: [
      "Desenvolver softwares e apps",
      "Gerenciar projetos ligados aos softwares",
      "Arquitetar o design estrutural dos programas",
      "Realizar testes nos sistemas",
    ],
  },
  {
    institution: "Centro Universitário UniDombosco",
    degree: "Graduação: Sistemas para Internet (ênfase em Internet das Coisas)",
    period: "2019 - 2021",
    highlight: "CR 8,07",
    description:
      "O profissional formado em Sistemas para Internet é responsável por desenvolver, implementar e gerenciar sites, aplicativos e e-commerces, além de promover segurança do sistema.",
  },
  {
    institution: "Universidade Estácio de Sá",
    degree: "Graduação: Análise e Desenvolvimento de Sistemas",
    period: "2018 - 2020",
    highlight: "CR 8,87",
    description:
      "O curso visa capacitar o profissional a desenvolver, analisar, projetar e implantar sistemas de informação.",
  },
  {
    institution: "Centro Universitário UniCarioca",
    degree: "Técnico em Programação de Jogos Digitais",
    period: "2014 - 2015",
    description:
      "O curso técnico engloba desenvolvimento de recursos, ambientes e objetos utilizando a engine Unity 3D.",
  },
];
