import { profileMenu } from "@/utils/constants";
import React from "react";

const ProfileMenuItem = () => {
  return (
    <div
      className="fixed left-[77px] bottom-[26px] z-[99999] bg-[#FFFFFF] w-[130px] dark:bg-[#182229] rounded-md shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <ul className="flex flex-col">
        {profileMenu.map(({title,Icon}) => (
          <li
            key={title}
            className="cursor-pointer px-[16px] text-sm text-black dark:text-[#c5c2c2] py-[6px] dark:hover:bg-[#161C24] hover:bg-gray-200 flex justify-between items-center"
          >
            <span>{title}</span>
            <Icon width={16} height={16}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenuItem;
