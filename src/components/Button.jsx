import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient rounded-[10px] ${styles} font-poppins font-medium text-[18px] outline-none`}
    >
      Get Started
    </button>
  );
};

export default Button;
