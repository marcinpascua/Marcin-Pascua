import React from "react";
import { motion } from "framer-motion";

const AchievementCard = ({ logo, image, title, award, year }) => {
  return (
    <motion.div
      className="min-w-[60%] max-w-[350px] relative rounded-xl overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="">
        <div className="relative ">
          <img
            src={image}
            alt={title}
            className="w-[800px] h-[300px] object-cover flex flex-wrap"
          />
        </div>

        <div>
          <img className="w-16 h-16 absolute top-3 right-3" src={logo} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl">
          <h1 className="text-xl md:text-2xl leading-none text-white/70 font-bold leading-[34px] mt-4">
            {title}
          </h1>

          <div className="mt-3">
            <span className="text-md py-1 px-3 bg-gradient-to-r from-[#0FD4DB] to-[#003615] rounded-full text-white font-bold">
              {award}
            </span>
            <p className="absolute bottom-5 right-5 italic text-sm">{year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
