import React from "react";
import Bloco from "../Bloco";
import ButtonLink from "../ButtonLink";

import { ContatoContentType } from "../../content/ContatoContent";

type ContatoProps = {
  ContatoContent: ContatoContentType;
};

export default function Contato({ ContatoContent }: ContatoProps) {
  return (
    <div
      id="contato"
      className="relative w-full py-28 px-4 md:px-0 h-auto bg-[url('/images/common-bg.svg')] bg-cover bg-no-repeat"
    >
      <div className="absolute w-full h-full inset-0 m-auto bg-gray-100 bg-opacity-80 z-10" />
      <div className="relative max-w-[1200px] w-11/12 mx-auto z-20">
        <Bloco
          title={ContatoContent.BlocoContatoContent.title}
          description={ContatoContent.BlocoContatoContent.description}
          variant="inside"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink
              title="linkedin"
              img="/images/icon-linkedin-white.png"
              imgHover="/images/icon-linkedin-blue.png"
              href="https://www.linkedin.com/in/gabriel-de-moura-001392127/"
              variant="solid"
              target="_blank"
            >
              Gabriel Moura
            </ButtonLink>
            <ButtonLink
              title="Github"
              img="/images/icon-github-white.png"
              imgHover="/images/icon-github-blue.png"
              href="https://github.com/moura5412"
              variant="solid"
              target="_blank"
            >
              moura5412
            </ButtonLink>
            <ButtonLink
              title="E-mail"
              img="/images/icon-mail-white.png"
              imgHover="/images/icon-mail-blue.png"
              href="mailto: moura5412@gmail.com.br"
              variant="solid"
              target="_blank"
            >
              moura5412@gmail.com.br
            </ButtonLink>
          </div>
        </Bloco>
      </div>
    </div>
  );
}
