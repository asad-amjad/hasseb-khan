import React from "react";
import { Text } from "../ui";

const ButtonSecondary = ({ buttonText, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#EEE9E5] hover:bg-[#EEE9E5] text-black px-6 py-3 transition duration-300 ${className}`}
    >
      <Text variant="body2">{buttonText}</Text>
    </button>
  );
};

export default ButtonSecondary;
