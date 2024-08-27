export type ContatoContentType = {
  BlocoContatoContent: BlocoContatoContentType;
};

type BlocoContatoContentType = {
  title: string;
  description: string;
};

const BlocoContatoContent = {
  title: "Contato",
  description:
    "Sinta-se à vontade para entrar em contato comigo através dos seguintes canais. Estou sempre aberto a conversas, colaborações e oportunidades. Sua mensagem é importante para mim, e farei o meu melhor para responder o mais rápido possível.",
};

export const ContatoContent: ContatoContentType = {
  BlocoContatoContent,
};
