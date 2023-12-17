import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const Avatar = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width={width}
          height={height}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 11C10.9424 11 13.125 8.81739 13.125 6.125C13.125 3.43261 10.9424 1.25 8.25 1.25C5.55761 1.25 3.375 3.43261 3.375 6.125C3.375 8.81739 5.55761 11 8.25 11Z"
            stroke="#080707"
            className="dark:stroke-[#FFFFFF]"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M1.5 14.5062C2.2612 13.423 3.27191 12.5389 4.44676 11.9286C5.6216 11.3183 6.92608 10.9997 8.25 10.9997C9.57392 10.9997 10.8784 11.3183 12.0532 11.9286C13.2281 12.5389 14.2388 13.423 15 14.5062"
            stroke="#080707"
            strokeWidth="2"
            className="dark:stroke-[#FFFFFF]"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default Avatar;
