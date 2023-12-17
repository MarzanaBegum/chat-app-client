import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const CrossIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.89 6.7L10 8.59L8.11 6.7C7.72 6.31 7.09 6.31 6.7 6.7C6.31 7.09 6.31 7.72 6.7 8.11L8.59 10L6.7 11.89C6.31 12.28 6.31 12.91 6.7 13.3C7.09 13.69 7.72 13.69 8.11 13.3L10 11.41L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L11.41 10L13.3 8.11C13.69 7.72 13.69 7.09 13.3 6.7C12.91 6.32 12.27 6.32 11.89 6.7ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
            fill={color}
            fillOpacity="0.54"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default CrossIcon;
