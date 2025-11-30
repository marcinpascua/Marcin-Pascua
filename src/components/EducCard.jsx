import React from "react";

export default function EducCard({ logo, title, subtitle, honor, year }) {
  return (
    <div className="card flex flex-col justify-between gap-3 p-1 font-poppins w-1/4 h-full">
      <div className="school-logo flex justify-center items-center mb-2">
        <img className="w-24 h-24" src={logo} alt="school logo" />
      </div>

      <div className="content flex flex-col p-3">
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="text-md mt-3">{subtitle}</h2>
        <p className="text-md mt-1">{honor}</p>
        <p className="italic mt-5 text-sm">{year}</p>
      </div>
    </div>
  );
}
