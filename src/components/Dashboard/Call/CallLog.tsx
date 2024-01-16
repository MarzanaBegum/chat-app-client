import SearchInput from "@/components/Shared/SearchInput";
import { CallList } from "@/utils/constants";
import React, { useState } from "react";
import CallLogElement from "./CallLogElement";
import StartCallModal from "@/components/Modal/StartCallModal";
import PhoneIcon from "@/components/CustomIcons/PhoneIcon";

const CallLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="px-[28px] h-screen w-[320px] py-[35px] relative bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <h2 className="text-[#000000] dark:text-[#FFF] text-[24px] mb-[32px] font-bold">
          Call Log
        </h2>
        <SearchInput />
        <div className="mt-[34px] flex justify-between mb-[17px] pb-[10px] items-center border-b border-b-[#709CE6]">
          <h2 className="font-bold text-[15px] text-[#709CE6]">
            Start new converstaion
          </h2>
          <div onClick={() => setIsOpen(true)} className="cursor-pointer">
            <PhoneIcon stroke="#5B96F7" width={24} height={24} className="dark:stroke-[#5B96F7]"/>
          </div>
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-[58vh]">
          <div className="flex gap-[18px] flex-col">
            {CallList.map((item, i) => (
              <CallLogElement key={`list-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
      <StartCallModal isOpen={isOpen} handleOnClose={() => setIsOpen(false)} />
    </>
  );
};

export default CallLog;
