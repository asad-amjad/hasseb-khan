import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "../ui";

const steps = [
  {
    heading: "01",
    title: "Choose your treatment",
    description:
      "We provide expert medical solutions tailored to your needs, combining cutting-edge technology with a highly skilled team for optimal results.",
  },
  {
    heading: "02",
    title: "Get a Free Quote",
    description:
      "Receive a detailed treatment plan designed by top specialists, including transparent pricing and comprehensive guidance—no hidden costs, just expert care.",
  },
  {
    heading: "03",
    title: "Plan Your Stay",
    description:
      "Explore our exclusive accommodation options with customized hotel packages, ensuring comfort and convenience during your medical journey.",
  },
  {
    heading: "04",
    title: "Plan Your Stay",
    description:
      "Explore our exclusive accommodation options with customized hotel packages, ensuring comfort and convenience during your medical journey.",
  },
];

const Timeline = () => {
  return (
    <div className="w-full overflow-hidden  px-[16px] md:ps-[100px] my-[80px]">
      <div className="w-full mb-[40px] md:mb-[50px]">
        <Heading as="h2"> When Will I See Results?</Heading>
      </div>

      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        dragConstraints={{ left: -((steps.length - 3) * 420), right: 0 }}
        drag="x"
      >
        {/* <div className="w-[100px] min-w-[100px]"></div> */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col w-[500px] min-w-[500px] pe-[200px]"
          >
            {/* Number */}
            <Text>{step.heading}</Text>

            {/* Connecting Line */}
            {index !== 0 && (
              <div className="absolute top-[65px] right-[500px] w-[500px] h-[1px] bg-[#E55D48]"></div>
            )}

            {/* Dot */}
            <div className="my-[50px] w-4 h-4 bg-[#E55D48] rounded-full z-10"></div>

            {/* Title */}
            <Heading as="h5">{step.title}</Heading>

            {/* Description */}
            <Text variant="body2" className="mt-[10px]">
              {step.description}
            </Text>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
