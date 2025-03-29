import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const scrollingTexts = ["Happy Clients", "-", "Happy Clients"];

const ImageComparisonSlider = ({ before, after }) => {
  return (
    <div className="relative">
      {/* Scrolling Text Animation */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-[100px] w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {scrollingTexts.map((text, index) => (
            <p key={`${index}-image`} className="text-[90px] w-fit text-[#E55D48]">
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Image Comparison Slider */}
      <div className="relative w-[1312px] mx-auto h-[645px] overflow-hidden mt-[60px]">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={before} alt="Before Image" />}
          itemTwo={<ReactCompareSliderImage src={after} alt="After Image" />}
        />
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
