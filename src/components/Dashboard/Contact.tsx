"use client";
import { ActionTypes } from "@/Context/ActionTypes";
import { useStateContext } from "@/Context/StateContext";
import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import CrossIcon from "@/components/CustomIcons/CrossIcon";
import NotificationIcon from "@/components/CustomIcons/NotificationIcon";
import PhoneIcon from "@/components/CustomIcons/PhoneIcon";
import StarIcon from "@/components/CustomIcons/StarIcon";
import VideoCamIcon from "@/components/CustomIcons/VideoCamIcon";
import NotificationToggle from "@/components/Shared/NotificationToggle";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import BlockOrDeleteModal from "../Modal/BlockOrDeleteModal";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  const { state, dispatch } = useStateContext();
  const [openDelete, setOpenDelete] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);

  const handleBlockChat = () => {};

  const handleDeleteChat = () => {};

  return (
    <div className="w-[320px] bg-[#F8FAFF] h-screen dark:bg-[#182229]">
      <div className="flex gap-[18px] h-[80px]  px-[20px] items-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <div
          className="cursor-pointer"
          onClick={() =>
            dispatch({
              type: ActionTypes.OPEN_SIDEBAR,
              payload: { isOpen: false, type: "CONTACT" },
            })
          }
        >
          <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
        </div>
        <h2 className="text-[16px] font-semibold text-[#777777] dark:text-[#FFF]">
          Contact info
        </h2>
      </div>
      <div className="hide-scroll h-[86vh] px-[20px]">
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
            <h3 className="font-semibold">+91 6265 081 928</h3>
          </div>
        </div>
        <div className="flex gap-[72px] mt-[47px] justify-center">
          <div>
            <div className="mx-auto w-[24px] h-[24px]">
              <VideoCamIcon />
            </div>
            <h3 className="text-[14px] mt-[3px] text-[#000] dark:text-[#c5c2c2] font-semibold">
              Audio
            </h3>
          </div>
          <div>
            <div className="mx-auto w-[24px] h-[24px]">
              <PhoneIcon stroke="#4B4B4B" />
            </div>
            <h3 className="text-[14px] mt-[3px] text-[#000] dark:text-[#c5c2c2] font-semibold">
              Voice
            </h3>
          </div>
        </div>
        <div className="border-b border-b-[#A4A4A4] opacity-30 pb-[34px]"></div>
        <h3 className="text-[14px] pt-[26px] text-[#000] dark:text-[#c5c2c2] font-semibold">
          About
        </h3>
        <h3 className="text-[14px] mt-[5px] text-[#000] dark:text-[#c5c2c2] font-bold">
          Hi there, I am using
        </h3>
        <div className="border-b border-b-[#A4A4A4] opacity-30 pt-[26px]"></div>
        <div className="mt-[34px]">
          <div className="flex justify-between">
            <h2 className="text-[14px] text-[#000] dark:text-[#c5c2c2] font-medium">
              Media, links and docs
            </h2>
            <div
              className="flex items-center gap-[11px] cursor-pointer"
              onClick={() =>
                dispatch({
                  type: ActionTypes.OPEN_SIDEBAR,
                  payload: { isOpen: true, type: "SHARED" },
                })
              }
            >
              <h2 className="text-[14px] text-[#5B96F7] font-medium">201</h2>
              <CaretDownIcon
                className={"-rotate-90"}
                stroke="#5B96F7"
                width="18"
                height="18"
              />
            </div>
          </div>
          <div className="flex justify-between py-[31px]">
            {[1, 2, 3].map((i) => (
              <Image
                src="/assets/images/car.svg"
                alt="image"
                key={`index-${i}`}
                width={79}
                height={79}
                className="rounded-[10px]"
              />
            ))}
          </div>
          <div className="border-b border-b-[#A4A4A4] opacity-30"></div>
        </div>
        <div className="flex justify-between items-center py-[19px]">
          <div className="flex gap-[11px] items-center">
            <StarIcon color={"#535252"} />
            <h3 className="text-[14px] text-[#000] dark:text-[#c5c2c2] font-bold">
              Starred Messages
            </h3>
          </div>
          <div
            onClick={() =>
              dispatch({
                type: ActionTypes.OPEN_SIDEBAR,
                payload: { isOpen: true, type: "STARTED" },
              })
            }
            className="cursor-pointer"
          >
            <CaretDownIcon
              className={"-rotate-90"}
              stroke="#000"
              width="18"
              height="18"
            />
          </div>
        </div>
        <div className="border-b border-b-[#A4A4A4] opacity-30"></div>
        <div className="flex justify-between items-center py-[19px]">
          <div className="flex gap-[11px] items-center">
            <NotificationIcon color={"#535252"} />
            <h3 className="text-[14px] text-[#000] dark:text-[#c5c2c2] font-bold">
              Mute Notifications
            </h3>
          </div>
          <div>
            <NotificationToggle />
          </div>
        </div>
        <div className="border-b border-b-[#A4A4A4] opacity-30"></div>
        <div className="mt-[15px]">
          <h3 className="text-[13px] text-[#000] dark:text-[#c5c2c2] font-medium">
            1 group in common
          </h3>
          <div className="flex items-center gap-[17px] mt-[24px]">
            <Image
              src="/assets/images/avatar.png"
              className="rounded-full object-cover"
              alt="avatar"
              width="48"
              height="48"
            />
            <div className="text-[#000] dark:text-[#FFFFFF]">
              <h3 className="text-[16px] font-bold">Camel’s Gang</h3>
              <h3 className="text-[13px] mt-[3px] font-semibold">
                Owl, Parrot, Rabbit , You
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px] mt-[41px] pb-[32px]">
          <button
            onClick={() => setOpenBlock(true)}
            className="w-[130px] flex justify-center items-center gap-[11px] h-[48px] text-[15px] font-bold text-[#5B96F7] border border-[#5B96F7] rounded-[8px] focus:outline-none"
          >
            <Image
              src="/icons/block-icon.svg"
              alt="block"
              width={24}
              height={24}
            />
            Block
          </button>
          <button
            onClick={() => setOpenDelete(true)}
            className="w-[130px] flex justify-center items-center gap-[11px] h-[48px] text-[15px] font-bold text-[#5B96F7] border border-[#5B96F7] rounded-[8px] focus:outline-none"
          >
            <Image src="/icons/trash.svg" alt="block" width={24} height={24} />
            Delete
          </button>
        </div>
      </div>
      <BlockOrDeleteModal
        title="Block"
        isOpen={openBlock}
        handleOnClose={() => {
          setOpenBlock(false);
        }}
        handleOnClick={handleBlockChat}
      />
      <BlockOrDeleteModal
        title="Delete"
        isOpen={openDelete}
        handleOnClose={() => {
          setOpenDelete(false);
        }}
        handleOnClick={handleDeleteChat}
      />
    </div>
  );
};

export default Contact;
