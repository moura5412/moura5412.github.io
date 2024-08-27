import React, { useState } from "react";

import { tv } from "tailwind-variants";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    download?: boolean;
    children?: React.ReactNode;
    img?: string | boolean;
    imgHover?: string;
    title?: string;
    variant?: "basic" | "solid" | "outline";
    size?: "none" | "sm" | "md" | "lg";
  };

const linkButtonStyles = tv({
  base: "font-medium cursor-pointer w-fit h-auto flex flex-wrap items-center text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300",
  variants: {
    variant: {
      basic: "",
      solid:
        "rounded-full gap-3 bg-customColor-blue border-2 border-customColor-blue",
      outline:
        "rounded-full bg-transparent border-2 border-customColor-blue text-customColor-blue",
    },
    size: {
      none: "",
      sm: "px-4 py-2 text-sm",
      md: "px-3 md:px-5 py-2 md:py-3 text-sm md:text-base",
      lg: "px-6 py-4 text-lg",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      class:
        "hover:bg-transparent hover:text-customColor-blue hover:border-customColor-blue",
    },
    {
      variant: "outline",
      class: "hover:bg-customColor-blue hover:text-white",
    },
  ],
  defaultVariants: {
    variant: "basic",
    size: "md",
  },
});

export default function LinkButton({
  href,
  download,
  children,
  img,
  imgHover,
  title,
  variant = "basic",
  ...props
}: LinkButtonProps) {
  const [currentImg, setCurrentImg] = useState(img as string);
  const classes = linkButtonStyles({ variant, ...props });

  const handleMouseEnter = () => {
    if (imgHover) {
      setCurrentImg(imgHover);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImg(img as string);
  };

  return href ? (
    <a
      href={href}
      download={download}
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {img ? (
        <img
          src={currentImg}
          alt={`Icone do ${title}`}
          className="w-[20px] md:w-[25px] h-auto transition-all duration-300"
        />
      ) : null}
      {children}
    </a>
  ) : (
    <button
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {img ? (
        <img
          src={currentImg}
          alt={`Icone do ${title}`}
          className="w-[20px] md:w-[25px] h-auto transition-all duration-300"
        />
      ) : null}
      {children}
    </button>
  );
}
