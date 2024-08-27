import React from "react";
import Template from "../components/Template";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";

import { BannerContent } from "../content/BannerContent";
import { SobreContent } from "../content/SobreContent";
import { ProjetosContent } from "../content/ProjetosContent";
import { ContatoContent } from "../content/ContatoContent";

const Home = () => {
  return (
    <>
      <Template>
        <Banner BannerContent={BannerContent} />
        <Sobre SobreContent={SobreContent} />
        <Projetos ProjetosContent={ProjetosContent} />
        <Contato ContatoContent={ContatoContent} />
      </Template>
    </>
  );
};

export default Home;
