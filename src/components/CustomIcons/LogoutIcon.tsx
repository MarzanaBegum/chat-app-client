import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const LogoutIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height, stroke, className }) => (
        <svg
          width={width}
          height={height}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#080707"
          className="dark:stroke-[#FFFFFF]"
        >
          <path
            d="M5.19141 4.41062C5.37224 2.31062 6.45141 1.45312 8.81391 1.45312H8.88974C11.4972 1.45312 12.5414 2.49729 12.5414 5.10479V8.90813C12.5414 11.5156 11.4972 12.5598 8.88974 12.5598H8.81391C6.46891 12.5598 5.38974 11.714 5.19724 9.64896"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75064 7H2.1123"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.91602 5.25L1.16602 7L2.91602 8.75"
            strokeWidth="0.90625"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default LogoutIcon;
