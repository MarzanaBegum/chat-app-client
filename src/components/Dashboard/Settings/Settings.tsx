"use client";
import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import ShortCutModal from "@/components/Modal/ShortCutModal";
import Image from "next/image";
import React, { useState } from "react";

const Settings = () => {
  const [openShortcut, setOpenShortcut] = useState(false);

  const settingsList = [
    { title: "Notifications", icon: "/icons/bell.svg", onClick: () => {} },
    { title: "Privacy", icon: "/icons/lock.svg", onClick: () => {} },
    { title: "Security", icon: "/icons/key.svg", onClick: () => {} },
    { title: "Theme", icon: "/icons/pencil-circle.svg", onClick: () => {} },
    {
      title: "Chat Wallpaper",
      icon: "/icons/image-icon.svg",
      onClick: () => {},
    },
    {
      title: "Request Account Info",
      icon: "/icons/clipboard-text.svg",
      onClick: () => {},
    },
    {
      title: "Keyboard shortcuts",
      icon: "/icons/article.svg",
      onClick: () => {
        setOpenShortcut(true);
      },
    },
    { title: "Help", icon: "/icons/warning-circle.svg", onClick: () => {} },
  ];

  const handleCloseShortcut = () => {
    setOpenShortcut(false);
  };
  return (
    <div className="w-[320px] h-screen bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="px-[20px] pt-[20px]">
        <div className="flex gap-2 items-center">
          <CaretDownIcon
            className={"rotate-90"}
            stroke="#4B4B4B"
            width="24"
            height="24"
          />
          <h2 className="text-[24px] font-medium text-[#000] dark:text-white">
            Settings
          </h2>
        </div>
        <div className="flex items-center gap-4 mt-[32px]">
          <Image
            src="/assets/images/avatar.png"
            className="rounded-full object-cover"
            alt="avatar"
            width="75"
            height="75"
          />
          <div className="text-[16px] text-[#424242] dark:text-[#FFFFFF]">
            <h3 className="font-bold">Shreyansh shah</h3>
            <h3 className="font-semibold text-[14px]">Exploring</h3>
          </div>
        </div>
        <div className="hide-scroll h-[70vh]">
          <ul className="flex flex-col gap-[15px] mt-[30px]">
            {settingsList.map((list) => (
              <li
                key={list.title}
                onClick={list.onClick}
                className="flex gap-[10px] items-center border-b last:border-none border-b-[#B4B4B4] pb-[18px] cursor-pointer"
              >
                <Image src={list.icon} alt="icons" width={24} height={24} />
                <span className="text-[#727375] dark:text-[#c5c2c2] text-[16px] font-semibold">
                  {list.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ShortCutModal
        isOpen={openShortcut}
        handleOnClose={handleCloseShortcut}
      />
    </div>
  );
};

export default Settings;
