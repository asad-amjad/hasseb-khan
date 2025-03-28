import React from "react";
import { Text } from "../ui";

const Button = ({ buttonText, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary hover:bg-primary-dark text-white px-6 py-3 transition duration-300 ${className}`}
    >
      <Text variant="body2">{buttonText}</Text>
    </button>
  );
};

export default Button;
