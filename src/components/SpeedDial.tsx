import { speedDialData } from "@/utils/constants";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const SpeedDial = () => {
  return (
    <div className="absolute top-[-240px] left-0 flex flex-col gap-2">
      {speedDialData.map((ele, i) => {
        return (
          <div
            key={ele.title}
            className={classNames(
              i === 0 && "bg-[#4da5fe]",
              i === 1 && "bg-[#1b8cfe]",
              i === 2 && "bg-[#0172e4]",
              i === 3 && "bg-[#0159b2]",
              i === 4 && "bg-[#013f7f]",
              "rounded-full w-[40px] h-[40px] group relative flex justify-center items-center hover:bg-green-600"
            )}
          >
            <Image src={ele.icon} alt={ele.title} width={20} height={20} />
            <div className="absolute left-[50px] invisible group-hover:visible bg-black text-white text-[10px] px-2 py-1 rounded-md">
              {ele.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpeedDial;
