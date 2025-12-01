import React from "react";
import NavLinks from "./NavLinks";
import SlideDownComponent from "./SlideDownComponent";

export default function Header() {
  return (
    <SlideDownComponent>
    <header className="flex flex-col sm:flex-row sm:gap-10 items-center justify-between p-10  mb-5">
      <div className="w-28 mb-10 sm:mb-0 ">
        <img src="/chin-logo.png" alt="chin logo" />
      </div>
      <NavLinks />
    </header>
    </SlideDownComponent>
  );
}
