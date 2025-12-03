import React from "react";
import SlideUpComponent from "./SlideUpComponent";

export default function AboutMe() {
  return (
    <>
      <SlideUpComponent>
        <div
          id="about"
          className="aboutme flex flex-col md:flex-row lg:flex-row items-start p-10 gap-5 bg-cover"
          style={{ backgroundImage: "url('/blur effect.png')" }}
        >
          <div className="chinpic sm:w-auto max-w-full md:w-1/3 lg:w-1/3 flex flex-wrap items-center justify-center">
            <img src="/chin-pic.png" alt="chin picture" />
          </div>

          <div className="h1 flex flex-col mt-10 font-poppins text-white w-full sm:w-2/3 overflow-x-hidden">
            <h1 className="text-[140px] md:text-[130px] m-0 ]">
              Hello! I'm
              <span className="ml-2 lg:text-[130px] sm:text-[90px] leading-none bg-gradient-to-r from-[#0FD4DB] to-[#003615] bg-clip-text text-transparent transition-all duration-500 hover:from-[#003615] hover:to-[#0FD4DB]">
                Chin
              </span>
            </h1>

            <p className="intro text-justify text-white/60 text-[30px] md:text-lg  max-w-full ">
              I’m a frontend-focused web development student at the University
              of Cebu – Lapu-Lapu and Mandaue, pursuing a Bachelor’s in
              Information Technology. I love designing clean, responsive, and
              user-friendly interfaces that blend functionality with a touch of
              charm.
            </p>

            <div className="mt-5">
              <a
                href="#education"
                target="_self"
                className="text-[30px] md:text-xl text-white py-3 px-5 inline-block border border-white rounded-full hover:bg-gradient-to-r from-[#0FD4DB] to-[#003615] hover:border-[#361A23] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div
              className="accounts flex flex-row gap-3 mt-[90px] mb-8 "
              target="_blank"
            >
              <a href="https://github.com/marcinpascua" target="_blank">
                <i class="fa-brands fa-square-github text-white text-[50px]  md:text-4xl hover:text-transparent hover:bg-[#0FD4DB] hover:bg-clip-text"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marcinpascua/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin  text-[50px] md:text-4xl text-white hover:text-transparent hover:text-transparent hover:bg-[#0FD4DB] hover:bg-clip-text"></i>
              </a>
            </div>
          </div>
        </div>
      </SlideUpComponent>
    </>
  );
}
