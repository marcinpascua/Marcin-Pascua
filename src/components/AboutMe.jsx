import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="aboutme flex flex-col sm:flex-row  items-start px-10 gap-5">
        <div className="w-1/3 ">
          <img src="/marcin-pic.png" alt="marcin picture" />
        </div>

        <div className="introduction flex flex-col mt-28 font-poppins text-white  w-full sm:w-2/3 ">
          <h1 className="lg:text-[130px] m-0 sm:text-[50px]">
            Hello! I'm
            <span className="lg:text-[130px] sm:text-[90px] text-[#e5eda1] leading-none">
              {" "}
              Chin
            </span>
          </h1>

          <p className="text-justify text-white/60 text-lg max-w-full sm:max-w-[900px]">
            I’m a frontend-focused web development student at the University of
            Cebu – Lapu-Lapu and Mandaue, pursuing a Bachelor’s in Information
            Technology. I love designing clean, responsive, and user-friendly
            interfaces that blend functionality with a touch of charm.
          </p>

          <div className="mt-5">
            <a
              href="#"
              className="text-white py-3 px-5 inline-block border border-white rounded-full hover:bg-[#361A23] hover:border-[#361A23] hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="flex-grow"></div>

          <div className="accounts flex flex-row gap-3 mt-[150px]" target="_blank">
            <a href="https://github.com/marcinpascua" target="_blank">
              <i class="fa-brands fa-square-github text-white text-3xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/marcinpascua/" target="_blank">
              <i class="fa-brands fa-linkedin  text-3xl text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
