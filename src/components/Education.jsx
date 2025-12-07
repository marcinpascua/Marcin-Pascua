import React, { Children } from "react";
import EducCard from "./EducCard";
import SlideLeftComponent from "./SlideLeftComponent";

export default function Education() {
  return (
    <SlideLeftComponent>
      <div id="education" className="education mx-auto w-fit mt-20">
        <div>
          <h1 className="text-5xl text-[#0FD4DB] font-bold flex items-center justify-center mt-2 mb-10">
            Education
          </h1>
        </div>

        <div className="education-section flex flex-row justify-between mt-10 m-20 gap-7 md:gap-10 mb-5 text-white">
          <EducCard
            logo={"/ccs-logo.png"}
            title={"Calamba Central School"}
            award={"With High Honors"}
            year={"2011-2017"}
          />

          <EducCard
            logo={"/cnchs-logo.png"}
            title={"Calamba National Comprehensive School"}
            subtitle={"Special Program in Journalism"}
            award={"With High Honors"}
            year={"2017-2021"}
          />

          <EducCard
            logo={"/monhs-logo.png"}
            title={"Misamis Occidental National High School"}
            subtitle={"Accountancy, Business, and Management"}
            award={"With High Honors"}
            year={"2021-2023"}
          />

          <EducCard
            logo={"/uclm-logo.png"}
            title={"University of Cebu - Lapu-Lapu and Mandaue"}
            subtitle={"Bachelor of Science in Information Technology"}
            award={"Dean's Lister"}
            year={"2023-Present"}
          />
        </div>
      </div>
    </SlideLeftComponent>
  );
}
