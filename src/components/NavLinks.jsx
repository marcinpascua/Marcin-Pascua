import React from "react";

export default function NavLinks() {
  const links = ["About", "Education", "Skills", "Achievements", "Projects"];

  return (
    <>
      <nav className="font-poppins flex  sm:flex-row gap-8 justify-between border border-transparent bg-white/30 p-4 rounded-full">
        {links.map((name, i) => (
          <a
            key={i}
            href={`/${name.toLowerCase()}`}
            className=" font-light sm:text-sm lg:text-lg md:text-md text-white   hover:text-[#592536]   px-3 py-1 transition-all duration-300"
          >
            {name}
          </a>
        ))}
      </nav>

      <div className="font-poppins">
        <a href="mailto:pascua.marcin1@gmail.com" className="text-white hover:text-[#FFF0D6] transition-all duration-300">Contact Me</a>
      </div>
    </>
  );
}
