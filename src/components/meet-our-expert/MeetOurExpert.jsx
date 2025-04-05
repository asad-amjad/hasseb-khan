import { motion } from "framer-motion";
import StoryCard from "./StoryCard";
import { useRef, useEffect, useState } from "react";

export default function MeetOurExpert({ storiesData }) {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [cardWidth, setCardWidth] = useState(382);
  const gapSize = 20;

  // Calculate responsive values
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setCardWidth(isMobile ? 340 : 450);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalContentWidth =
          storiesData.length * (cardWidth + gapSize) - gapSize;
        const maxDrag = Math.max(0, totalContentWidth - containerWidth);
        setConstraints({ left: -maxDrag, right: 0 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [storiesData.length, cardWidth]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-background-2 overflow-hidden px-[16px] py-[80px] md:py-[100px] md:px-[100px]"
    >
      <div className="w-full">
        <h2>Our Team of Distinguished Doctors</h2>
      </div>

      <p className="body-2 mt-[10px]">
        At the heart of our organization are the brilliant minds who drive
        compassionate care and innovation. Our doctors are highly skilled
        professionals with years of experience, dedicated to improving lives and
        providing exceptional care. Each member of our team brings a wealth of
        knowledge and expertise, ensuring that we offer the best in healthcare.
        Get to know the talented doctors who make a difference every day.
      </p>

      <motion.div
        className="flex cursor-grab active:cursor-grabbing gap-5 my-10"
        drag="x"
        dragConstraints={constraints}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
      >
        {storiesData.map((item, index) => (
          <StoryCard key={index} item={item} width={cardWidth} />
        ))}
      </motion.div>

      <div className="w-full bg-white h-1.5 rounded-full overflow-hidden mt-[80px] md:mt-[80px]">
        <div className="h-full bg-primary w-1/5 md:w-1/12 rounded-full"></div>
      </div>
    </div>
  );
}
