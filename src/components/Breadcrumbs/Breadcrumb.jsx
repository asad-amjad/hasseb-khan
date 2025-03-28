import React from "react";
import { Heading, Text } from "../ui";

const Breadcrumb = ({ title, description }) => {
  return (
    <div className="justify-center flex my-[65px]">
      <header className="max-w-[689px] text-center">
        <Heading as="h1">{title}</Heading>
        <Text variant="body2">{description}</Text>
      </header>
    </div>
  );
};

export default Breadcrumb;
