import React from "react";
import ProjCard from "./ProjCard";
import UIUXCard from "./UIUXCard";

export default function Projects() {
  return (
    <div id="projects" className="overflow-hidden mt-20 bg-white">
      <div>
        <h1 className="text-8xl bg-gradient-to-r from-[#57C785] to-[#372A9B] bg-clip-text text-transparent  font-bold flex items-center justify-center mt-10 mb-10 p-5">
          Projects
        </h1>
      </div>

      {/* PROGRAMMING PROJ */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
        <ProjCard
          image={"/diaworld.png"}
          title={"Diaworld"}
          year={"2023"}
          subtitle={"First webdev passion project of an online jewelry store"}
          badge={["HTML", "CSS", "Javascript"]}
        />

        <ProjCard
          image={"/multivape.png"}
          title={"Multivape Shop"}
          year={"2024"}
          subtitle={
            "First group project of an online extension of a physical vape store"
          }
          badge={["Java"]}
        />
      </div>

      {/* UI UX PROJ */}
      <div  className="mt-24">
        <div>
          <h1 className="text-8xl bg-gradient-to-r from-[#57C785] to-[#372A9B] bg-clip-text text-transparent  font-bold flex items-center justify-center">
            UI UX
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center h-screen p-5">
          <UIUXCard
            image={"/burger-king-redesign.png"}
            title={"Burger King"}
            year={"2025"}
            subtitle={
              "[PASSION PROJECT] Redesigned landing and order pages of Burger King. No commercial use intended."
            }
            badge={["Figma"]}
          />
        </div>
      </div>
    </div>
  );
}
