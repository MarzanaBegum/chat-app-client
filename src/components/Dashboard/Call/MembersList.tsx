import PhoneIcon from "@/components/CustomIcons/PhoneIcon";
import VideoCamIcon from "@/components/CustomIcons/VideoCamIcon";
import Image from "next/image";
import React from "react";

const MembersList = ({ member }: any) => {
  return (
    <div className="bg-[#FFFFFF] p-[12px] w-full border border-gray-200 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] rounded-[15px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[17px]">
          {member.online ? (
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
              {member.name}
            </h2>
            <h3 className="text-[14px] font-semibold text-[#7C7C7D] dark:text-[#c5c2c2]">
              Yesterday, 21:29
            </h3>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <PhoneIcon stroke="#76D45E" width={24} height={24} className="dark:stroke-[#76D45E]"/>
          <VideoCamIcon stroke="#76D45E" width={24} height={24} className="dark:stroke-[#76D45E]"/>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
