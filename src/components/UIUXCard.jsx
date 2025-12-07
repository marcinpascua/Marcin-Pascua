import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function UIUXCard({ image, title, year, subtitle, badge }) {
  return (
    <motion.div
      className="w-full max-w-[800px] relative relative rounded-xl overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex flex-row h-full max-w-[800px] rounded-xl border bg-gray-100 p-5 shadow-xl font-poppins gap-10">
        <div>
          <img src={image} alt={title} className="w-[450px] object-cover" />
        </div>

        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-6xl leading-none text-gray-700 font-bold">
            {title}
          </h1>
          <p className="italic text-gray-500 text-sm">{year}</p>

          <p className="text-gray-500 mt-10 text-justify">{subtitle}</p>

          <div className="mt-5">
            <SkillCard badge={badge} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
