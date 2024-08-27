export type ProjetosListType = {
  title: string;
  img: string;
  link?: string;
  skills: string[];
};

export const ProjetosList: ProjetosListType[] = [
  {
    title: "Vila Prime",
    img: "/images/vilaprime.png",
    link: "https://www.vilaprime.com.br/",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Portão de cambuí",
    img: "/images/portaocambui.png",
    link: "https://www.portaodecambui.com.br/",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Carnes de carnes fernandes",
    img: "/images/casadecarnes.png",
    link: "https://www.carnesnobresfernandes.com.br/",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Marmoraria Multiformas",
    img: "/images/marmoraria.png",
    link: "https://www.marmorariamultiformas.com.br/",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Agendamento CDB",
    img: "/images/agendamento.jpeg",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Git",
      "GitHub",
      "Scrum",
      "Kanban",
    ],
  },
  {
    title: "Site CDB",
    img: "/images/cdb.png",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "TypeScript",
      "Git",
      "GitHub",
      "Scrum",
      "Kanban",
    ],
  },
];

export type ProjetosContentType = {
  ProjetosList: ProjetosListType[];
};

export const ProjetosContent: ProjetosContentType = { ProjetosList };
