import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const ArrowDownIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M4 12L12 4"
            stroke={stroke}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.5 4H12V10.5"
            stroke={stroke}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default ArrowDownIcon;
