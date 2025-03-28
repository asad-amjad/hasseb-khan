import React from "react";
import { Heading, Text } from "../ui";

const TextAndDescription = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-full ">
      <Heading as="h2">{title}</Heading>
      <Text variant="body2" className="mt-[20px] mx-[16px]">
        {description}
      </Text>
    </div>
  );
};

export default TextAndDescription;
