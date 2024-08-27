import React from "react";
import Bloco from "../Bloco";

import { ProjetosContentType } from "../../content/ProjetosContent";
import { ProjetosList } from "./ProjetoList ";

type ProjetosProps = {
  ProjetosContent: ProjetosContentType;
};

export default function Projetos({ ProjetosContent }: ProjetosProps) {
  return (
    <div id="projetos" className="w-full h-auto py-28 bg-gray-100">
      <div className="max-w-[1200px] w-11/12 mx-auto">
        <Bloco
          title="Projetos"
          description="Alguns dos projetos em que trabalhei ou contribuí implementando novas funcionalidades."
        />
        <ProjetosList projetos={ProjetosContent.ProjetosList} />
      </div>
    </div>
  );
}
