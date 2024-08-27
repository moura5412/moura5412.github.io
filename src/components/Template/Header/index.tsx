import React, { useEffect, useState } from "react";

export default function Header() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/#sobre", text: "Sobre" },
    { href: "/#projetos", text: "Projetos" },
    { href: "/#contato", text: "Contato" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full mx-auto sticky top-0 py-4 px-7 md:px-15 lg:px-20 shadow-lg bg-white z-50">
      <div className="w-full h-[45px] md:h-[60px] flex justify-between items-center">
        <div className="cursor-default w-[60px] md:w-[70px] lg:w-[90px]">
          <img src="/images/logo.png" alt="Logo do Site" />
        </div>
        {isMobile ? (
          <>
            <button
              className="block w-[45px] p-[10px] rounded-full bg-customColor-blue"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <img
                  src="/images/close.svg"
                  alt="icone de fechar"
                  className="w-full h-auto"
                />
              ) : (
                <img
                  src="/images/menu.svg"
                  alt="icone do menu"
                  className="w-full h-auto"
                />
              )}
            </button>

            <nav
              className={`absolute w-full overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "h-[195px]" : "h-0"
              } bg-white shadow-lg top-[77px] right-0`}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block py-3 px-10 text-right font-bold uppercase tracking-[1px] border-b border-neutral-200 last:border-b-0 duration-300 hover:text-customColor-blue"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </>
        ) : (
          <nav className="flex gap-10 lg:gap-12">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-bold text-lg uppercase tracking-[1px] duration-300 hover:text-customColor-blue"
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
