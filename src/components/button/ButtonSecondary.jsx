import React from "react";

const ButtonSecondary = ({ buttonText, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#EEE9E5] hover:bg-[#EEE9E5] text-black px-6 py-3 transition duration-300 ${className}`}
    >
      <p className="body-2">{buttonText}</p>
    </button>
  );
};

export default ButtonSecondary;
