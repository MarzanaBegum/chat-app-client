import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const BackspaceIcon = (props: IconType) => {
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
        >
          <path
            d="M20 11H6.82998L9.70998 8.12001C10.1 7.73001 10.1 7.10001 9.70998 6.71001C9.31998 6.32001 8.68998 6.32001 8.29998 6.71001L3.70998 11.3C3.31998 11.69 3.31998 12.32 3.70998 12.71L8.29998 17.3C8.68998 17.69 9.31998 17.69 9.70998 17.3C10.1 16.91 10.1 16.28 9.70998 15.89L6.82998 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11Z"
            fill="black"
            className="dark:fill-[#FFFFFF]"
            fillOpacity="0.54"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default BackspaceIcon;
