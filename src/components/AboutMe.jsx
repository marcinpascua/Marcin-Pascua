import React from "react";

export default function AboutMe() {
  return (
    <div className="aboutme flex flex-col sm:flex-row items-center px-10 gap-5">
      <div className="w-1/3">
        <img src="/marcin-pic.png" alt="marcin picture" />
      </div>
      <div>
        <h1>Halo</h1>
      </div>
    </div>
  );
}
