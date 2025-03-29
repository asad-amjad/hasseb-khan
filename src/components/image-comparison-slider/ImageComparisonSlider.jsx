import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const scrollingTexts = ["Happy Clients", "-", "Happy Clients"];

const ImageComparisonSlider = ({ before, after }) => {
  return (
    <div className="relative mb-[150px]">
      {/* Scrolling Text Animation */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-[50px] w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {scrollingTexts.map((text, index) => (
            <p key={`${index}-image`} className="text-[69px] w-fit text-[#E55D48]">
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Image Comparison Slider */}
      <div className="relative w-[1312px] mx-auto h-[646px] overflow-hidden mt-[60px]">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage className="object-cover h-[642px]" src={before} alt="Before Image" />}
          itemTwo={<ReactCompareSliderImage src={after} className="object-cover h-[642px]" alt="After Image" />}
        />
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
