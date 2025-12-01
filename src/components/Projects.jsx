import React from "react";
import Card3 from "./Card3";
import SkillCard from "./SkillCard";

export default function Projects() {
  return (
    <div id="projects" className="overflow-hidden p-10 mt-20 bg-white">
      <div>
        <h1 className="text-8xl bg-gradient-to-r from-[#57C785] to-[#372A9B] bg-clip-text text-transparent  font-bold flex items-center justify-center p-5 mb-20 mt-10">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
        <Card3
          image={"/diaworld.png"}
          title={"Diaworld"}
          subtitle={"First webdev passion project of an online jewelry store"}
          badge={["HTML", "CSS", "Javascript"]}
        />

        <Card3
          image={"/multivape.png"}
          title={"Multivape Shop"}
          subtitle={
            "First group project of an online extension of a physical vape store"
          }
          badge={["Java"]}
        />
      </div>

      <div className="mt-24">
        <h1 className="text-8xl bg-gradient-to-r from-[#57C785] to-[#372A9B] bg-clip-text text-transparent  font-bold flex items-center justify-center p-5 mb-20 mt-10">
          UI UX
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
        <Card3
          image={"/popcycle.png"}
          title={"Popcycle"}
          subtitle={
            "[PASSION PROJECT] Redesigned Popcyle E-Bike website landing page. No commercial use intended."
          }
          pdf={"/popcycle.pdf"}
          badge={["Figma"]}
        />
      </div>
    </div>
  );
}
