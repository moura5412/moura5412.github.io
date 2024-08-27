import React from "react";

import { ProjetosListType } from "../../../content/ProjetosContent";
import { ProjetoItem } from "./ProjetoItem";

type ProjetosListProps = {
  projetos: ProjetosListType[];
};

export function ProjetosList({ projetos }: ProjetosListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projetos.map((projeto, index) => (
        <ProjetoItem
          key={index}
          title={projeto.title}
          img={projeto.img}
          link={projeto.link}
          skills={projeto.skills}
        />
      ))}
    </div>
  );
}
