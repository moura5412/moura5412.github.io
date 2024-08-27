import React from "react";
import { tv } from "tailwind-variants";

type BlocoProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  variant?: "basic" | "inside";
};

const bloco = tv({
  base: "w-full h-auto flex flex-col flex-wrap items-center gap-6",
  variants: {
    variant: {
      basic: "mb-16 md:mb-24",
      inside: "",
    },
  },
  defaultVariants: {
    variant: "basic",
  },
});

export default function Bloco({
  title,
  description,
  children,
  ...props
}: BlocoProps) {
  const classes = bloco(props);

  return (
    <div className={classes}>
      <h2 className="text-center text-black text-3xl md:text-5xl uppercase tracking-[1.5px] md:tracking-[3px] font-bold">
        {title}
      </h2>
      <hr className="h-1.5 w-12 rounded-xl mx-auto bg-customColor-blue" />
      {description ? (
        <p className="w-full md:w-9/12 text-center text-sm md:text-base text-gray-600">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
