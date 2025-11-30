import React, { Children } from "react";
import EducCard from "./EducCard";

export default function Education() {
  return (
    <div id="education" className="education mx-auto w-fit p-10">
      <div className="flex flex-row">
        <hr class="flex-grow border-gray-400 mt-10 ml-5 mr-5"></hr>
        <h1 className="text-5xl text-[#0FD4DB] font-bold flex align-items justify-center mb-20 mt-2">
          Education
        </h1>
        <hr class="flex-grow border-gray-400 mt-10 ml-5 mr-5"></hr>
      </div>

      <div className="education-section flex flex-row justify-between m-20 gap-10">
        <EducCard
          logo={"/ccs-logo.png"}
          title={"Calamba Central School"}
          honor={"With High Honors"}
          year={"2011-2017"}
        />

        <EducCard
          logo={"/cnchs-logo.png"}
          title={"Calamba National Comprehensive School"}
          subtitle={"Special Program in Journalism"}
          honor={"With High Honors"}
          year={"2017-2021"}
        />

        <EducCard
          logo={"/monhs-logo.png"}
          title={"Misamis Occidental National High School"}
          subtitle={"Accountancy, Business, and Management"}
          honor={"With High Honors"}
          year={"2021-2023"}
        />

        <EducCard
          logo={"/uclm-logo.png"}
          title={"University of Cebu - Lapu-Lapu and Mandaue"}
          subtitle={"Bachelor of Science in Information Technology"}
          year={"2023-Present"}
        />
      </div>
    </div>
  );
}
