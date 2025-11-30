  import React from "react";

  export default function NavLinks() {
    const links = ["About", "Education", "Skills", "Achievements", "Projects"];

    return (
      <>
        <nav className="font-poppins flex  sm:flex-row gap-8 justify-between border border-transparent bg-white/20 p-4 rounded-full">
          {links.map((name, i) => (
            <a
              key={i}
              href={`#${name.toLowerCase()}`}
              className="font-light sm:text-sm md:text-md lg:text-lg text-white 
            px-3 py-1 transition-all duration-300
            hover:text-transparent hover:bg-gradient-to-r hover:from-[#0FD4DB] hover:to-[#003615] hover:bg-clip-text"
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="font-poppins">
          <a href="mailto:pascua.marcin1@gmail.com" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#0FD4DB] hover:to-[#003615] hover:bg-clip-text transition-all duration-300">Contact Me</a>
        </div>
      </>
    );
  }
