import React from "react";

export default function AboutMe() {
  return (
    <div className="aboutme flex flex-col sm:flex-row  items-start px-10 gap-5">
      <div className="w-1/3 ">
        <img src="/marcin-pic.png" alt="marcin picture" />
      </div>

      <div className="introduction font-poppins text-white space-y-4 w-full sm:w-2/3 leading-none">
        <h1 className="lg:text-[100px] m-0 sm:text-[50px]">
          Hello! I'm
          <span className="lg:text-[150px] sm:text-[90px] text-[#e5eda1] leading-none">
            {" "}
            Chin
          </span>
        </h1>

        <p className="text-justify text-white/60 text-lg max-w-full sm:max-w-[800px]">
          I’m a frontend-focused web development student at the University of
          Cebu – Lapu-Lapu and Mandaue, pursuing a Bachelor’s in Information
          Technology. I love designing clean, responsive, and user-friendly
          interfaces that blend functionality with a touch of charm.
        </p>

        <div className="mt-20">
          <a
            href="#"
            className="text-white py-3 px-5 inline-block border border-white rounded-full hover:bg-[#361A23] hover:border-[#361A23] hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
