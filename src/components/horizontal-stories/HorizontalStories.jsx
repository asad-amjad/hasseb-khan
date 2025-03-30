import { motion } from "framer-motion";
import StoryCard from "./StoryCard";

export default function HorizontalStories({ storiesData }) {
  return (
    <div className="w-full bg-background-2 overflow-hidden px-[16px] py-[80px] md:py-[100px] md:px-[100px]">
      <div className="w-full mb-[10px] md:mb-[10px]">
        <h2>Patient Stories</h2>
      </div>
      <p className="body-2">
        Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh
        fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo
        tincidunt nunc tempor.
      </p>

      <motion.div
        className="flex cursor-grab active:cursor-grabbing gap-[20px] my-[40px]"
        drag="x"
        dragConstraints={{
          left: window.innerWidth < 768 ? 0 : -((storiesData.length - 3) * 300),
          right: 0,
        }}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
      >
        {storiesData.map((item, index) => (
          <motion.div key={index} className="">
            <StoryCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full bg-white h-[6px] rounded-full overflow-hidden">
        <div className="h-full bg-[#E55D48] w-1/5 md:w-1/12 rounded-full"></div>
      </div>
    </div>
  );
}
