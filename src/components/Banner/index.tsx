import React from "react";
import ButtonLink from "../ButtonLink";

import { BannerContentType } from "../../content/BannerContent";

type BannerProps = {
  BannerContent: BannerContentType;
};

export default function Banner({ BannerContent }: BannerProps) {
  return (
    <div className="relative w-full py-24 md:py-0 px-4 md:px-0 min-h-[500px] md:min-h-fit h-auto md:h-[750px] bg-[url('/images/common-bg.svg')] bg-cover bg-no-repeat">
      <div className="absolute w-full h-full inset-0 m-auto bg-gray-100 bg-opacity-80" />
      <div className="relative max-w-[1200px] w-11/12 mx-auto h-full flex flex-col justify-center gap-10 z-20">
        <h1 className="w-full md:w-[600px] text-center md:text-left text-black text-4xl md:text-6xl uppercase tracking-[1.5px] md:tracking-[3px] font-extrabold z-30">
          {BannerContent.title}
        </h1>
        <p className="w-full md:w-3/4 text-gray-800 text-base md:text-lg text-center md:text-left z-30">
          {BannerContent.description}
        </p>
        <div className="w-full h-auto flex justify-center md:justify-start gap-3 z-30">
          <ButtonLink variant="solid" href="/files/Curriculo.pdf" download>
            Baixar CV
          </ButtonLink>

          <ButtonLink href="/#contato" variant="outline">
            Entre em contato
          </ButtonLink>
        </div>
        <div className="absolute flex flex-row md:flex-col gap-4 w-fit h-fit right-0 left-0 md:left-auto top-auto md:top-0 bottom-[-80px] md:bottom-0 m-auto bg-black rounded-full py-2 md:py-4 px-4 md:px-3 z-20">
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
      </div>
    </div>
  );
}
