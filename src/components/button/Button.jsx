import React from "react";

const Button = ({ buttonText, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary bg-primary hover:bg-primary-dark text-white px-6 h-[51px] transition duration-300 ${className}`}
    >
      <p className="body-2">{buttonText}</p>
    </button>
  );
};

export default Button;
