import React, { Children } from "react";
import Card from "./Card";

export default function Education() {
  return (
    <div id="education" className="education mx-auto w-fit p-5">
      <div className="flex flex-row">
        <hr class="flex-grow border-gray-400 mt-10 ml-5 mr-5"></hr>
        <h1 className="text-5xl text-[#0FD4DB] font-bold flex align-items justify-center mt-2 mb-10">
          Education
        </h1>
        <hr class="flex-grow border-gray-400 mt-10 ml-5 mr-5"></hr>
      </div>

      <div className="education-section flex flex-row justify-between mt-10 m-20 gap-10 mb-5">
        <Card
          logo={"/ccs-logo.png"}
          title={"Calamba Central School"}
          award={"With High Honors"}
          year={"2011-2017"}
        />

        <Card
          logo={"/cnchs-logo.png"}
          title={"Calamba National Comprehensive School"}
          subtitle={"Special Program in Journalism"}
          award={"With High Honors"}
          year={"2017-2021"}
        />

        <Card
          logo={"/monhs-logo.png"}
          title={"Misamis Occidental National High School"}
          subtitle={"Accountancy, Business, and Management"}
          award={"With High Honors"}
          year={"2021-2023"}
        />

        <Card
          logo={"/uclm-logo.png"}
          title={"University of Cebu - Lapu-Lapu and Mandaue"}
          subtitle={"Bachelor of Science in Information Technology"}
          award={"Dean's Lister"}
          year={"2023-Present"}
        />
      </div>
    </div>
  );
}
