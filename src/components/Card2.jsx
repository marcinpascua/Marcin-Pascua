import React from "react";

export default function Card2({ logo, title, award, year }) {
  return (
    <div className="card font-poppins w-1/3 mx-auto h-full border border-[#0FD4DB] rounded-lg p-5 justify-between">
      <div className="school-logo flex justify-center items-center mb-2">
        <img className="w-24 h-24" src={logo} alt="school logo" />
      </div>

      <div>
        <p className="text-lg font-bold mt-5 text-justify">{title}</p>
        
      </div>

      <div className="flex flex-row">
        <p className="text-md mt-3">{award}<span className="italic text-sm ml-64">{year}</span></p>
      </div>
    </div>
  );
}
