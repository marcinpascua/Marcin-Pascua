import React, { Children } from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skills">
      <div>
        <h1 className="text-5xl text-[#0FD4DB] font-bold flex align-items justify-center mb-20 mt-20">Skills</h1>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <SkillCard
          title="Frontend Development"
          badge={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma"]}
        />

        <SkillCard
          title="Backend Development"
          badge={["SQL Server Management Studio", "PHP", "Laravel"]}
        />

        <SkillCard
          title="Other Languages"
          badge={["C", "C#", "Java"]}
        />
      </div>
    </div>
  );
}
