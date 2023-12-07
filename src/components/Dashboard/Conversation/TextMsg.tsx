import classNames from "classnames";
import React from "react";

const TextMsg = ({ element }: any) => {
  return (
    <div
      className={classNames(
        element.incoming ? "bg-[#FFFFFF] dark:bg-[#161C24]" : "bg-[#5B96F7]",
        "px-4 max-w-[40%] py-[7px] rounded-2xl"
      )}
    >
      <span
        className={classNames(
          element.incoming ? "text-[#696969] dark:text-[#c5c2c2]" : "text-[#FFFFFF]",
          "break-all text-[14px] font-semibold"
        )}
      >
        {element.message}
      </span>
    </div>
  );
};

export default TextMsg;
