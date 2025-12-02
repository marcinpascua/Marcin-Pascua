import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function Card3({ image, title, subtitle, badge, pdf }) {
  return (
    <motion.div
      className="min-w-[70%] max-w-[75%] relative rounded-xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex flex-col h-[500px] w-full rounded-xl border bg-gray-100 p-5 shadow-xl font-poppins">
        <div className="object-fit">
          <img
            src={image}
            alt={title}
            className="w-[800px] h-[300px] object-cover rounded-xl flex flex-wrap"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl leading-none text-gray-700 font-bold leading-[34px] mt-5 flex flex-row gap-2">
            {title}
            <span>
              {" "}
              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  className="text-blue-400 text-sm p-1 rounded-xl flex items-end hover:underline"
                >
                  Open PDF
                </a>
              )}
            </span>
          </h1>

          <div className="">
            <p className="text-gray-500">{subtitle}</p>
          </div>

          <div className="mb-2">
            <SkillCard badge={badge} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
