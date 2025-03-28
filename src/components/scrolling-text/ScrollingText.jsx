import { motion } from "framer-motion";

const scrollingTexts = [
  "Lorem ipsum dolor sit",
  "Dolor sit amet",
  "Consectetur adipiscing",
  "Elit sed do eiusmod",
  "Tempor incididunt ut",
  "Labore et dolore magna",
];

const ScrollingText = ({ direction = "left" }) => {
  return (
    <div className="h-[55px] py-[18px] px-[10px] bg-[#E55D48] text-[#F4F6F9] justify-center items-center overflow-hidden">
      <motion.div
        className="flex gap-[100px] w-max"
        animate={{
          x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"], // Moves in opposite directions
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {scrollingTexts.map((text, index) => (
          <h6 key={index} className="w-fit">
            {text}
          </h6>
        ))}
      </motion.div>
    </div>
  );
};


export default ScrollingText;
