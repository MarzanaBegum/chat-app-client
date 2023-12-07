import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const CaretDownIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 9L12 16.5L4.5 9"
            stroke="#4B4B4B"
            className="dark:stroke-[#FFFFFF]"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default CaretDownIcon;
