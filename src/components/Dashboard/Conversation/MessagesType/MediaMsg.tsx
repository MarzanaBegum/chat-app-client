import classNames from "classnames";
import Image from "next/image";
import React from "react";

const MediaMsg = ({ element }: any) => {
  return (
    <div
      className={classNames(
        element.incoming ? "bg-[#FFFFFF] dark:bg-[#161C24]" : "bg-[#5B96F7]",
        "px-4 rounded-xl py-2"
      )}
    >
      <Image
        src={element.img}
        alt="image"
        width={200}
        height={183}
        className="rounded-[20px]"
      />
      <h2 className="break-all text-[14px] font-semibold text-[#696969] dark:text-[#c5c2c2] mt-[5px]">
        {element.message}
      </h2>
    </div>
  );
};

export default MediaMsg;
