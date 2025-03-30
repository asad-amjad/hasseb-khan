import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../button/Button";

const FixedPositionScrollGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation progress for each item
  const item1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const item2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const item3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  // Opacity transforms for images
  const opacity1 = useTransform(item1Progress, [0, 0.5, 1], [0, 1, 0]);
  const opacity2 = useTransform(item2Progress, [0, 0.5, 1], [0, 1, 0]);
  const opacity3 = useTransform(item3Progress, [0, 0.5, 1], [0, 1, 0]);

  // Opacity transforms for content
  const contentOpacity1 = useTransform(
    item1Progress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const contentOpacity2 = useTransform(
    item2Progress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const contentOpacity3 = useTransform(
    item3Progress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Full-screen background images */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2025/01/18/05/01/costa-rica-9341383_1280.jpg')",
          opacity: opacity1,
        }}
      />
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2025/03/18/17/08/dog-9478504_1280.jpg')",
          opacity: opacity2,
        }}
      />
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/11/17/12/14/lake-8394189_1280.jpg')",
          opacity: opacity3,
        }}
      />

      {/* Fixed position content container */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 w-1/2">
        {/* Content cards - all in same position */}

        <motion.div
            className="flex items-center justify-center w-full"
          style={{ opacity: contentOpacity1 }}
        >
          <div className="flex items-center justify-center w-full ">
            <div>
              <div className="flex justify-start w-full">
                <p className="body-2 bg-[#F4F6F90F] p-2 text-white">
                  Limited Time Offer
                </p>
              </div>

              <div className="my-[40px]">
                <h4 className=" text-white">
                  1 Year unlimited laser hair removal
                </h4>
                <h2 className="uppercase text-white">FACE & Body from $999</h2>

                <p className={`body-2 mt-[10px] text-white`}>
                  Don’t miss the exclusive opportunity!
                </p>
              </div>

              {/* Button */}

              <Button
                buttonText="Book Free Consultation"
                onClick={() => {}}
                className=""
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl absolute top-0"
          style={{ opacity: contentOpacity2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Adventure Companions</h2>
          <p className="text-gray-700">
            Our friendly guides and their canine companions will make your
            journey unforgettable.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl absolute top-0"
          style={{ opacity: contentOpacity3 }}
        >
          <h2 className="text-3xl font-bold mb-4">Mountain Retreat</h2>
          <p className="text-gray-700">
            Relax in our luxury cabins overlooking crystal-clear alpine lakes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FixedPositionScrollGallery;
