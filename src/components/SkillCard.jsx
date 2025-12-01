import React from "react";

function Badge({ text }) {
  return (
    <span className="bg-gray-700 text-white px-3 py-1 rounded text-sm rounded-lg gap-2">
      {text}
    </span>
  );
}

export default function SkillCard({ title, badge }) {
  return (
    <div className="skill-card flex flex-row justify-between gap-3 p-1 font-poppins mx-auto h-full">
      <div className="title">
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="badge flex flex-wrap  gap-1 ">
        {badge.map((b, index) => (
          <Badge key={index} text={b} />
        ))}
      </div>
    </div>
  );
}
