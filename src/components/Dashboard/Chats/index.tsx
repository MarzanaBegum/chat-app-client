import SearchInput from "@/components/Shared/SearchInput";
import { ChatList } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import ChatElement from "./ChatElement";
import CircleDashedIcon from "@/components/CustomIcons/CircleDashedIcon";

const Chats = () => {
  return (
    <div className="px-[28px] h-screen w-[320px] py-[35px] relative bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between mb-[32px]">
        <h2 className="text-[#000000] dark:text-[#FFF] text-[25px] font-extrabold">
          Chats
        </h2>
        <CircleDashedIcon />
      </div>
      <SearchInput isFunnel={true} />
      <div className="mt-[34px] flex gap-[13px] mb-[17px] pb-[10px] items-center border-b border-b-[#B4B4B4]">
        <Image
          src="/icons/archive-box.svg"
          alt="archive"
          width={22}
          height={24}
        />
        <h2 className="font-bold text-[15px] text-[#709CE6]">Archived</h2>
      </div>
      <div className="overflow-y-scroll custom-scrollbar h-[58vh]">
        <h2 className="text-[16px] mb-[20px] font-bold text-[#676667] dark:text-[#FFF]">
          Pinned
        </h2>
        <div className="flex gap-[18px] flex-col">
          {ChatList.filter((element) => element.pinned).map((ele) => {
            return <ChatElement key={ele.id} chatElementData={ele} />;
          })}
        </div>
        <h2 className="text-[16px] my-[20px] font-bold text-[#676667] dark:text-[#FFF]">
          All Chats
        </h2>
        <div className="flex gap-[18px] flex-col mb-[12px]">
          {ChatList.filter((element) => !element.pinned).map((ele) => {
            return <ChatElement key={ele.id} chatElementData={ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Chats;
