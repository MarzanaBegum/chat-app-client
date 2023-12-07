"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

const ChatElement = (chatElementData: any) => {
  const [isSelected, setIsSelected] = useState(false);
  const element = chatElementData.chatElementData;
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
            {element.online ? (
              <div className="relative">
                <Image
                  src="/assets/images/avatar.png"
                  alt="avatar"
                  width={47}
                  height={47}
                />
                <div className="w-[9px] h-[9px] absolute right-0 top-[35px] bg-[#76D45E] rounded-full"></div>
              </div>
            ) : (
              <Image
                src="/assets/images/avatar.png"
                alt="avatar"
                width={47}
                height={47}
              />
            )}
            <div>
              <h2 className="text-[16px] font-extrabold text-[#030303] dark:text-[#FFF]">
                {element.name}
              </h2>
              <h3 className="text-[14px] font-semibold text-[#7C7C7D] dark:text-[#c5c2c2] mt-[4px]">
                {element.msg}
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end">
            <h3 className="text-[12px] font-medium text-[#686768] dark:text-[#c5c2c2] mb-[4px]">
              {element.time}
            </h3>
            <div className="w-[16px] flex justify-center items-center text-[10px] font-bold h-[16px] bg-[#5B96F7] rounded-full text-[#FFFFFF]">
              {element.unread}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
