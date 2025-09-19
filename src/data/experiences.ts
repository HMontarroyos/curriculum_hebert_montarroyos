export interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor de software",
    company: "Genialnet",
    period: "Março 2024 - Até o momento",
    tasks: [
      "Desenvolvedor Front-end.",
      "Atuo no desenvolvimento de interfaces responsivas utilizando React e TypeScript, com foco em usabilidade, performance e escalabilidade.",
      "Utilizo React Hook Form junto com Zod para construção de formulários dinâmicos e validações robustas.",
      "Gerencio estado global e sincronização de dados usando Zustand e React Query para otimização da experiência do usuário.",
      "Estilizo componentes com Material UI, mantendo consistência visual e seguindo boas práticas de design responsivo.",
      "Integro APIs REST com Axios em colaboração próxima ao time de back-end, garantindo comunicação eficiente entre front e back.",
      "Faço uso de i18next para internacionalização e Keycloak para gerenciamento de autenticação e sessão.",
      "Mantenho a qualidade do código com ESLint, Prettier e automações via Husky, além de garantir testes com Vitest.",
    ],
  },
  {
    title: "Analista de Sistemas",
    company: "Nova Tendência",
    period: "Novembro 2023 - Fevereiro 2024",
    tasks: [
      "Desenvolvedor Front-end.",
      "Atuei com desenvolvimento de interfaces utilizando React, com foco em usabilidade, performance e escalabilidade.",
      "Utilizava React Hook Form e Yup para criação de formulários com validações robustas e reutilizáveis.",
      "Aplicava o padrão Redux Ducks com Redux-Saga para controle eficiente do estado da aplicação e manipulação de efeitos assíncronos.",
      "Estilizava componentes com Material-UI, mantendo consistência visual e aderência a boas práticas de design responsivo.",
      "Realizava testes automatizados com Jest e Enzyme, garantindo qualidade e estabilidade contínua do código.",
      "Colaborava com times de back-end na integração de APIs REST, cuidando da comunicação entre interface e lógica de negócio.",
      "Utilizava ferramentas como ESLint (Airbnb config) e Husky para manter o código limpo, padronizado e integrado a pipelines de CI/CD.",
    ],
  },
  {
    title: "Analista de Desenvolvimento",
    company: "Calindra",
    period: "Agosto 2020 - Maio 2023",
    tasks: [
      "Desenvolvedor Front-end.",
      "Auxiliava com tarefas no Back-end para integrar as interfaces com a lógica de negócio.",
      "Utilizava de frameworks e bibliotecas populares, como React no front e NodeJS no back-end.",
      "Integração de APIs de terceiros para fornecer recursos adicionais aos aplicativos.",
      "Otimização de desempenho de sites e aplicativos para garantir uma experiência do usuário ágil.",
    ],
  },
  {
    title: "Trainee em Tecnologia",
    company: "Volanty",
    period: "Fevereiro 2020 - Agosto 2020",
    tasks: [
      "Programa de Desenvolvimento Full Stack.",
      "Abordado diversos tipos de tecnologias em diferentes Stacks tendo a vivência prática e teórica.",
      "Algumas das Stacks abordadas: Front-end, Back-end, Mobile, Análise de dados entre outras.",
    ],
  },
  {
    title: "Suporte Técnico",
    company: "Mls Wireless",
    period: "Setembro 2018 - Fevereiro 2020",
    tasks: [
      "Configuração de redes em ambiente Windows e Linux.",
      "Suporte técnico telefônico. Abertura e retorno de chamados.",
      "Suporte técnico interno.",
    ],
  },
];
