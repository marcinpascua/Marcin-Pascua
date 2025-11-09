import React from "react";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between  m-10 mb-5">
      <div className="w-32 mb-10 sm:mb-0">
        <img src="/chin-logo.png" alt="chin logo" />
      </div>
      <NavLinks />
    </header>
  );
}
