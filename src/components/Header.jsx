import React from "react";
import NavLinks from "./NavLinks";
import SlideDownComponent from "./SlideDownComponent";

export default function Header() {
  return (
    <SlideDownComponent>
      <header className="flex flex-col md:flex-row lg:flex-row items-center justify-between p-12">
        <div className="w-28 mb-10 md:mb-0">
          <img src="/chin-logo.png" alt="chin logo" />
        </div>

        <NavLinks />

        <div className="font-poppins mt-10 md:mt-0">
          <a
            href="mailto:pascua.marcin1@gmail.com"
            className="text-white  hover:text-transparent hover:bg-gradient-to-r hover:from-[#0FD4DB] hover:to-[#003615] hover:bg-clip-text transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </header>
    </SlideDownComponent>
  );
}
