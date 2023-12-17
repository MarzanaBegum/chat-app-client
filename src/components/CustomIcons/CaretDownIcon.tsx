import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const CaretDownIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M19.5 9L12 16.5L4.5 9"
            stroke={stroke}
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default CaretDownIcon;
