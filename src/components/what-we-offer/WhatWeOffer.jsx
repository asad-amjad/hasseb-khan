import React from "react";
import { Heading, Text } from "../ui";
import Button from "../button/Button";

const WhatWeOffer = ({ badge, title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="mt-[60px]">
        {badge &&
        <div className="flex justify-center w-full">
          <Text variant="tag" className="bg-white px-4 py-1 w-fit">
            {badge}
          </Text>
        </div>
        }
        <div className="mb-[60px] mt-[40px]">
          <Heading as="h2">{title}</Heading>
          <Text variant="body2" className="max-w-[1012px]">
            {description}
          </Text>
        </div>
      </div>

      <Button buttonText={buttonText} onClick={() => console.log("Clicked!")} />
    </div>
  );
};

export default WhatWeOffer;
