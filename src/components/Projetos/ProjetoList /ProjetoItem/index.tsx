import React from "react";

import { ProjetosListType } from "../../../../content/ProjetosContent";

export function ProjetoItem({ title, img, link, skills }: ProjetosListType) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-full min-h-[200px] md:min-h-[275px] lg:min-h-[350px] rounded-lg border-[6px] md:border-[10px] border-black overflow-hidden group"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl uppercase font-semibold mb-2">
          {title}
        </h3>
        <ul className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="px-2 py-1 bg-[#7843e9] text-white rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
