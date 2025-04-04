import React from "react";
import { motion } from "framer-motion";

export default function StoryCard({ item }) {
  return (
    <motion.div className="flex flex-col w-[320px] h-full max-h-[330px] md:w-[382px] rounded-md">
      <div className="">
        <motion.img
          src={item.image}
          alt="review-pfp"
          className="w-full h-full object-cover rounded-md pointer-events-none min-w-[279px] max-h-[330px]"
          drag="x"
          dragPropagation={true} 
        />

        <div className="flex flex-col justify-start items-start space-y-[4px] mt-[16px] touch-none">
          <p className="body-2 font-semibold">{item.name}</p>
          <p className="extra-small">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
