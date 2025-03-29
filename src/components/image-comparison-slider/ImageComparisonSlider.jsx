import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ImageComparisonSlider = ({ before, after }) => {
  return (
    <div
      //   ref={containerRef}
      className="relative w-[1312px] mx-auto h-[645px] overflow-hidden rounded-lg shadow-lg"
    >

<ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={before} srcSet={before} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={after} srcSet={after} alt="Image two" />}
    />

      {/* <ImageSlider
        image1={img1}
        image2={img2}
        sliderWidth={3}
        sliderColor="red"
        handleColor="red"
        handleBackgroundColor="white"
      /> */}
    </div>
  );
};

export default ImageComparisonSlider;
