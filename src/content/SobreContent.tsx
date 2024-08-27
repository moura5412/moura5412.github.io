type SobreTextContentType = {
  title: string;
  description: string[];
};

const SobreTextContent: SobreTextContentType = {
  title: "Conheça-me!",
  description: [
    "Sou um Desenvolvedor Web com foco em Front-end, especializado em construir e gerenciar o Front-end de Sites e Aplicações Web, contribuindo para o sucesso geral do produto. Confira alguns dos meus trabalhos na seção de Projetos.",
    "Além disso, valorizo a troca de conhecimento e estou sempre disposto a ajudar outros membros da Comunidade Dev, compartilhando insights e aprendizados sobre Desenvolvimento Web e Programação. Estou aberto a conexões profissionais e discussões sobre as melhores práticas da área.",
    "Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que combine com minhas habilidades e experiência, não hesite em me contatar.",
  ],
};

type SobreSkillsContentType = {
  title: string;
  skills: string[];
};

const SobreSkillsContent: SobreSkillsContentType = {
  title: "Habilidades e Competências",
  skills: [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "React",
    "TypeScript",
    "PHP",
    "Git",
    "GitHub",
    "Design Responsivo",
    "Scrum",
    "Kanban",
    "Colaboração em equipe",
    "Adaptabilidade",
  ],
};

export type SobreContentType = {
  SobreTextContent: SobreTextContentType;
  SobreSkillsContent: SobreSkillsContentType;
};

export const SobreContent: SobreContentType = {
  SobreTextContent,
  SobreSkillsContent,
};
