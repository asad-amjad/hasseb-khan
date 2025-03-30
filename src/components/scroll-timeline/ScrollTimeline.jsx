import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Timeline = ({ title, timelineData }) => {
  // const containerRef = useRef(null);
  // const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  // const [cardWidth, setCardWidth] = useState(382);
  // const gapSize = 20;


  const totalContentWidth = window.innerWidth < 768 ? 1 : 3
  return (
    <div className="w-full overflow-hidden px-[16px] md:px-[100px] my-[80px] md:my-[150px]">
      <div className="w-full mb-[40px] md:mb-[50px]">
        <h2>{title}</h2>
      </div>

      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        dragConstraints={{ left: -((timelineData.length - totalContentWidth) * 500), right: 0 }}
        drag="x"
      >
        {/* <div className="w-[100px] min-w-[100px]"></div> */}
        {timelineData.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col w-[500px] min-w-[500px] pe-[200px]"
          >
            {/* Number */}
            <p>{step.heading}</p>

            {/* Connecting Line */}
            {index !== 0 && (
              <div className="absolute top-[65px] right-[500px] w-[500px] h-[1px] bg-[#E55D48]"></div>
            )}

            {/* Dot */}
            <div className="my-[50px] w-4 h-4 bg-[#E55D48] rounded-full z-10"></div>

            {/* Title */}
            <h5>{step.title}</h5>

            {/* Description */}
            <p className="body-2 mt-[10px]">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
