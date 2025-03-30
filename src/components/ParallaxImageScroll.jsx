import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://cdn.pixabay.com/photo/2025/01/18/05/01/costa-rica-9341383_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/03/18/17/08/dog-9478504_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/17/12/14/lake-8394189_1280.jpg",
];

const ParallaxImageScroll = () => {
  const { scrollYProgress } = useScroll();

  // Adjust scroll points to ensure full visibility of each image
  const y1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], ["0%", "-100%"]);

  return (
    <div className="relative w-full h-[300vh] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})`, y: y1 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${images[1]})`, y: y2 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${images[2]})`, y: y3 }}
      />
    </div>
  );
};

export default ParallaxImageScroll;