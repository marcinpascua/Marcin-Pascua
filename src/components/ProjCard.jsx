import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function ProjCard({ image, title, subtitle, year, badge }) {
  return (
    <motion.div
      className="min-w-[70%] max-w-[75%] relative rounded-xl overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex flex-col h-full w-full rounded-xl border bg-gray-100 p-5 shadow-xl font-poppins">
        <div className="">
          <img
            src={image}
            alt={title}
            className="w-full h-[280px] object-cover rounded-xl flex justify-center items-center"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl leading-none text-gray-700 font-bold leading-[34px] mt-5">
              {title}
            </h1>
            <p className="italic text-gray-500 text-sm">{year}</p>
          </div>

          <div className="">
            <p className="text-gray-700">{subtitle}</p>
          </div>

          <div className="mb-2">
            <SkillCard badge={badge} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
