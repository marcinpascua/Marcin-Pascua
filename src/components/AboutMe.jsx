import React from "react";
import SlideUpComponent from "./SlideUpComponent";

export default function AboutMe() {
  return (
    <>
      <SlideUpComponent>
        <div
          id="about"
          className="aboutme flex flex-col sm:flex-row gap-5  bg-cover p-10"
          style={{ backgroundImage: "url('/blur effect.png')" }}
        >
          <div className="chinpic w-full sm:w-1/3 h-auto items-center justify-center">
            <img src="/chin-pic.png" alt="chin picture" className="" />
          </div>

          <div className="h1 mr-8 mt-10 font-poppins text-white w-full sm:w-2/3 overflow-x-hidden">
            <h1 className="flex flex-row md:flex-row text-8xl md:text-[120px] m-0 ]">
              Hello! I'm
              <span className="ml-3 leading-none bg-gradient-to-r from-[#0FD4DB] to-[#003615] bg-clip-text text-transparent transition-all duration-500 hover:from-[#003615] hover:to-[#0FD4DB]">
                Chin
              </span>
            </h1>

            <p className="intro mx-auto text-justify text-white/60 text-[20px] md:text-lg ">
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
                className="text-[20px] md:text-lg text-white py-3 px-5 inline-block border border-white rounded-full hover:bg-gradient-to-r from-[#0FD4DB] to-[#003615] hover:border-[#361A23] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div
              className="accounts flex flex-row gap-3 mt-[90px] mb-8 "
              target="_blank"
            >
              <a href="https://github.com/marcinpascua" target="_blank">
                <i class="fa-brands fa-square-github text-white text-[40px]  md:text-4xl hover:text-transparent hover:bg-[#0FD4DB] hover:bg-clip-text"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marcinpascua/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin  text-[40px] md:text-4xl text-white hover:text-transparent hover:text-transparent hover:bg-[#0FD4DB] hover:bg-clip-text"></i>
              </a>
            </div>
          </div>
        </div>
      </SlideUpComponent>
    </>
  );
}
