import { motion } from "framer-motion";
import p1 from "../../assets/partners/partner-1.svg";
import p2 from "../../assets/partners/partner-2.svg";
import p3 from "../../assets/partners/partner-3.svg";
import p4 from "../../assets/partners/partner-4.svg";

const images = [p1, p2, p3, p4];

const Partners = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-[80px] md:py-[100px]">
      <motion.div
        className="flex w-max flex-nowrap gap-[170px] h-[42px]"
        animate={{ x: ["0%", "-70%"] }} // Moves exactly one full set
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`Logo ${index + 1}`} className="w-auto" loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
