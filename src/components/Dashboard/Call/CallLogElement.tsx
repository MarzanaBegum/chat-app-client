"use client";
import ArrowDownIcon from "@/components/CustomIcons/ArrowDownIcon";
import PhoneIcon from "@/components/CustomIcons/PhoneIcon";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

const CallLogElement = ({ item }: any) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={classNames(
        isSelected ? "bg-[#5B96F7]" : "bg-[#FFFFFF] dark:bg-[#111b21]",
        "w-full rounded-[15px] p-[15px]"
      )}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-[17px]">
            {item.online ? (
              <div className="relative">
                <Image
                  src="/assets/images/avatar.png"
                  alt="avatar"
                  width="47"
                  height="47"
                  className="w-[47px] h-[47px]"
                />
                <div className="w-[9px] h-[9px] absolute right-0 top-[35px] bg-[#76D45E] rounded-full"></div>
              </div>
            ) : (
              <Image
                src="/assets/images/avatar.png"
                alt="avatar"
                width="47"
                height="47"
                className="w-[47px] h-[47px]"
              />
            )}
            <div>
              <h2 className="text-[16px] mb-[4px] font-extrabold text-[#030303] dark:text-[#FFF]">
                {item.name}
              </h2>
              <div className="flex gap-[8px] items-center">
                <ArrowDownIcon
                  stroke={item.missed ? "#D45E6C" : "#76D45E"}
                  className={`${!item.incoming && "rotate-180"}`}
                />
                <h3 className="text-[14px] font-semibold text-[#7C7C7D] dark:text-[#c5c2c2]">
                  Yesterday, 21:29
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PhoneIcon stroke="#76D45E" className="dark:stroke-[#76D45E]"/>
        </div>
      </div>
    </div>
  );
};

export default CallLogElement;
