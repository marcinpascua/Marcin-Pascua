import React from "react";
import Card2 from "./Card2";
import PopComponent from "./PopComponent";

export default function Achievements() {
  return (
    <div
      id="achievements"
      className="mx-auto h-full p-10 text-white justify-center mt-32"
    >
      <h1 className="text-5xl text-[#0FD4DB] font-bold flex justify-center mb-20">
        Achievements
      </h1>

      <PopComponent>
        <Card2
          logo={"/10th-ict.png"}
          image={"/10th-gen-info.jpg"}
          title={"10th ICT Congress: General Information Quiz Bowl"}
          award={"2nd Place"}
          year={"2023-2024"}
        />

        <Card2
          logo={"/ccs.png"}
          image={"/ccs-gen-info.jpg"}
          title={"UCLM CCS Days: General Information Quiz Bowl"}
          award={"1st Place"}
          year={"2024-2025"}
        />

        <Card2
          logo={"/11th-ict.png"}
          image={"/11th-gen-info.jpg"}
          title={"11th ICT Congress: General Information Quiz Bowl"}
          award={"2nd Place"}
          year={"2024-2025"}
        />
      </PopComponent>
    </div>
  );
}
