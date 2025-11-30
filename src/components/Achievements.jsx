import React from "react";
import Card2 from "./Card2";

export default function Achievements() {
  return (
    <div id="achievements" className="mx-auto h-full p-10">
      <div>
        <h1 className="text-5xl text-[#0FD4DB] font-bold flex align-items justify-center mb-20 mt-32">
          Achievements
        </h1>
      </div>

      <div className="flex flex-row gap-5">
        <Card2
          logo={"/10th-ict.png"}
          title={"10th ICT Congress General Information Quiz Bowl"}
          award={"2nd Place"}
          year={"2023-2024"}
        />

        <Card2
          logo={"/ccs.png"}
          title={"UCLM CCS Days: General Information Quiz Bowl"}
          award={"1st Place"}
          year={"2024-2025"}
        />

        <Card2
          logo={"/11th-ict.png"}
          title={"11th ICT Congress General Information Quiz Bowl"}
          award={"2nd Place"}
          year={"2024-2025"}
        />
      </div>
    </div>
  );
}
