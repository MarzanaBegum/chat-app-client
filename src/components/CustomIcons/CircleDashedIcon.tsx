import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const CircleDashedIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.4126 12.8875C4.95902 10.856 6.02778 9.00285 7.5126 7.51251"
            stroke="#676667"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5126 24.4875C6.02261 22.9962 4.95317 21.1376 4.4126 19.1"
            stroke="#676667"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1124 27.5875C17.0789 28.1436 14.9334 28.1436 12.8999 27.5875"
            stroke="#676667"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5875 19.1125C27.0411 21.144 25.9724 22.9971 24.4875 24.4875"
            stroke="#676667"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.4875 7.51251C25.9775 9.00382 27.047 10.8624 27.5875 12.9"
            stroke="#676667"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8875 4.41249C14.9209 3.85636 17.0665 3.85636 19.1 4.41249"
            stroke="#676667"
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

export default CircleDashedIcon;
