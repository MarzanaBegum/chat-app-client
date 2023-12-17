import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkMsg = ({ element }: any) => {
  return (
    <div
      className={classNames(
        element.incoming ? "bg-[#FFFFFF] dark:bg-[#161C24]" : "bg-[#5B96F7]",
        "px-4 max-w-[40%] py-[9px] rounded-lg"
      )}
    >
      <Image
        src={element.preview}
        alt="image"
        width={200}
        height={183}
        className="rounded-[20px]"
      />
      <div className="mt-[9px]">
        <h2
          className={classNames(
            element.incoming ? "text-[#000000] dark:text-[#c5c2c2]" : "text-[#FFFFFF]"
          )}
        >
          Create App
        </h2>
        <Link
          href=""
          className={classNames(
            element.incoming ? "text-info-dark" : "text-info-dark"
          )}
        >
          w.w.w.google.com
        </Link>
        <h2
          className={classNames(
            element.incoming ? "text-[#696969] dark:text-[#c5c2c2]" : "text-[#FFFFFF]",
            "break-all text-[14px] font-semibold"
          )}
        >
          {element.message}
        </h2>
      </div>
    </div>
  );
};

export default LinkMsg;
