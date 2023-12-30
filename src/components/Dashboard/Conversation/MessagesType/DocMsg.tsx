import classNames from "classnames";
import Image from "next/image";
import React from "react";

const DocMsg = ({ element }: any) => {
  return (
    <div
      className={classNames(
        element.incoming ? "bg-[#FFFFFF] dark:bg-[#161C24]" : "bg-[#5B96F7]",
        "px-4 py-[8px] rounded-lg"
      )}
    >
      <div className="flex gap-[22px] justify-between items-center">
        <Image src="/icons/image-icon.svg" alt="img" width={49} height={49} />
        <h2
          className={classNames(
            element.incoming ? "text-[#696969] dark:text-[#c5c2c2]" : "text-[#FFFFFF]",
            "break-all text-[14px] font-semibold"
          )}
        >
          Abstract.png
        </h2>
        <Image
          src="/icons/arrow-line-down.svg"
          alt="img"
          width={21}
          height={21}
        />
      </div>
      <h2
        className={classNames(
          element.incoming ? "text-[#696969] dark:text-[#c5c2c2]" : "text-[#FFFFFF]",
          "break-all mt-[8px] text-[14px] font-semibold"
        )}
      >
        {element.message}
      </h2>
    </div>
  );
};

export default DocMsg;
