import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
