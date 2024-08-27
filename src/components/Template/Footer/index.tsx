import React from "react";
import ButtonLink from "../../ButtonLink";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-black">
      <div className="max-w-[1200px] w-11/12 mx-auto">
        <ul className="flex flex-col md:flex-row justify-start md:justify-between gap-5 md:gap-0 py-12 text-white">
          <li className="w-full md:w-[50%]">
            <h5 className="w-full text-left text-lg uppercase tracking-[1px] font-bold mb-4">
              Gabriel Moura
            </h5>
            <p className="text-xs text-pretty">
              Desenvolvedor Web focado em Front-End, criando interfaces modernas
              com React e TypeScript que proporcionam uma experiência de usuário
              otimizada e elevam a qualidade do produto.
            </p>
          </li>

          <li className="w-full md:w-fit">
            <h5 className="w-full text-left text-lg uppercase tracking-[1px] font-bold mb-4">
              Links Úteis
            </h5>
            <div className="flex gap-5">
              <ButtonLink
                title="linkedin"
                img="/images/icon-linkedin-white.png"
                imgHover="/images/icon-linkedin-blue.png"
                href="https://www.linkedin.com/in/gabriel-de-moura-001392127/"
                variant="basic"
                size="none"
                target="_blank"
              />
              <ButtonLink
                title="Github"
                img="/images/icon-github-white.png"
                imgHover="/images/icon-github-blue.png"
                href="https://github.com/moura5412"
                variant="basic"
                size="none"
                target="_blank"
              />
              <ButtonLink
                title="E-mail"
                img="/images/icon-mail-white.png"
                imgHover="/images/icon-mail-blue.png"
                href="mailto: moura5412@gmail.com.br"
                variant="basic"
                size="none"
                target="_blank"
              />
            </div>
          </li>
        </ul>
        <p className="py-6 text-xs text-center uppercase text-gray-100 border-t border-gray-800">
          Gabriel Moura - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}
