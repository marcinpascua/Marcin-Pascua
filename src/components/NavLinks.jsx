  import React from "react";

  export default function NavLinks() {
    const links = ["About", "Education", "Skills", "Achievements", "Projects"];

    return (
      <>
        <nav className="w-auto font-poppins flex flex-row gap-8 items-center justify-center border border-transparent bg-white/20 p-4 rounded-full">
          {links.map((name, i) => (
            <a
              key={i}
              href={`#${name.toLowerCase()}`}
              className=" font-light text-xl md:text-2lg lg:text-xl text-white 
            px-3 py-1 transition-all duration-300
            hover:text-[#0FD4DB]"
            >
              {name}
            </a>
          ))}
        </nav>
      </>
    );
  }
