import { ActionTypes } from "@/Context/ActionTypes";
import { useStateContext } from "@/Context/StateContext";
import { iconsList } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const ConversationHeader = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="z-[99] h-[80px] bg-[#F8FAFF] dark:bg-[#111b21] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="px-[33px] py-[16px] flex justify-between items-center">
        <div>
          <div className="flex gap-[17px]">
            <div className="relative">
              <Image
                src="/assets/images/avatar.png"
                alt="avatar"
                width="47"
                height="47"
                className="cursor-pointer w-[47px] h-[47px]"
                onClick={() => {
                  dispatch({
                    type: ActionTypes.OPEN_SIDEBAR,
                    payload: { isOpen: !state.sideBar.isOpen, type: "CONTACT" },
                  });
                }}
              />
              <div className="w-[9px] h-[9px] absolute right-0 top-[35px] bg-[#76D45E] rounded-full"></div>
            </div>
            <div>
              <h2 className="text-[16px] font-extrabold text-[#000] dark:text-[#FFF]">
                Pink Panda
              </h2>
              <h3 className="text-[14px] font-semibold text-[#696969] dark:text-[#c5c2c2] mt-[4px]">
                online
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px]">
          {iconsList.map(({ Icon }, i) => (
            <div
              key={i + "icon"}
              className="cursor-pointer last:border-l last:border-l-[#B4B4B4] last:pl-[18px]"
            >
              <Icon stroke="#4B4B4B" width="24" height="24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversationHeader;
