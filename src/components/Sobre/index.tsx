import React from "react";
import Bloco from "../Bloco";
import ButtonLink from "../ButtonLink";

import { SobreContentType } from "../../content/SobreContent";

type SobreProps = {
  SobreContent: SobreContentType;
};

export default function Sobre({ SobreContent }: SobreProps) {
  return (
    <div id="sobre" className="w-full h-auto py-28 bg-gray-100">
      <div className="max-w-[1200px] w-11/12 mx-auto">
        <Bloco title="Sobre" />
        <ul className="w-full h-auto flex flex-col-reverse md:flex-row justify-start md:justify-between">
          <li className="w-full md:w-5/12">
            <h3 className="font-bold uppercase text-center md:text-left text-2xl mb-4 md:mb-6">
              {SobreContent.SobreTextContent.title}
            </h3>
            {SobreContent.SobreTextContent.description.map(
              (description, index) => (
                <p
                  className="text-center md:text-left text-sm md:text-base mb-4 last-of-type:mb-8 text-gray-600"
                  key={index}
                >
                  {description}
                </p>
              )
            )}
            <div className="w-full flex justify-center md:justify-start">
              <ButtonLink href="/#contato">Entre em contato</ButtonLink>
            </div>
          </li>
          <li className="w-full md:w-5/12 mb-14 md:mb-0 text-center md:text-left">
            <h3 className="font-bold uppercase text-center md:text-left text-2xl mb-4 md:mb-6">
              {SobreContent.SobreSkillsContent.title}
            </h3>
            {SobreContent.SobreSkillsContent.skills.map((skill, index) => (
              <div
                key={index}
                className="w-fit inline-block p-3 md:p-4 mb-3 md:mb-6 mr-3 md:mr-6 text-sm md:text-base bg-gray-300/20 rounded-md font-semibold text-gray-600"
              >
                {skill}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
