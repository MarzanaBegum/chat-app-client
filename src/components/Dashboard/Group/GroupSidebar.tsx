"use client";
import SearchInput from "@/components/Shared/SearchInput";
import { ChatList } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import ChatElement from "../Chats/ChatElement";
import CreateGroupModal from "@/components/Modal/CreateGroup";

const GroupSidebar = () => {
  const [openCreateGroup, setOpenCreateGroup] = useState(false);
  return (
    <>
      <div className="px-[28px] h-screen w-[320px] py-[35px] relative bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <h2 className="text-[#000000] dark:text-[#FFF] text-[25px] mb-[32px] font-extrabold">
          Groups
        </h2>
        <SearchInput />
        <div className="mt-[34px] flex justify-between mb-[17px] pb-[10px] items-center border-b border-b-[#709CE6]">
          <h2 className="font-bold text-[15px] text-[#709CE6]">
            Create New Group
          </h2>
          <Image
            src="/icons/plus.svg"
            alt="archive"
            width={24}
            height={24}
            onClick={() => setOpenCreateGroup(true)}
            className="cursor-pointer"
          />
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-[58vh]">
          <h2 className="text-[16px] mb-[20px] font-bold text-[#676667] dark:text-[#FFF]">
            Pinned
          </h2>
          <div className="flex gap-[18px] flex-col">
            {/* {ChatList.filter((element) => element.pinned).map((ele) => {
              return <ChatElement key={ele.id} chatElementData={ele} />;
            })} */}
          </div>
          <h2 className="text-[16px] my-[20px] font-bold text-[#676667] dark:text-[#FFF]">
            All Chats
          </h2>
          <div className="flex gap-[18px] flex-col mb-[12px]">
            {/* {ChatList.filter((element) => !element.pinned).map((ele) => {
              return <ChatElement key={ele.id} chatElementData={ele} />;
            })} */}
          </div>
        </div>
      </div>
      {openCreateGroup && (
        <CreateGroupModal
          isOpen={openCreateGroup}
          handleOnClose={() => setOpenCreateGroup(false)}
        />
      )}
    </>
  );
};

export default GroupSidebar;
