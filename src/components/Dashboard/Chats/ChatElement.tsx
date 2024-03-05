"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectConversation } from "../../../../redux/slices/app";
import { setCurrentConversation } from "../../../../redux/slices/conversation";
import formatTimestamp from "@/utils/FormatDate";
import Cookies from "js-cookie";
import MessageStatus from "../Conversation/MessagesType/MessageStatus";

const ChatElement = ({ data }: any) => {
  const user_id = Cookies.get("user_id");
  const dispatch = useDispatch();
  const { room_id } = useSelector((state: any) => state.app);
  const unreadMsg = data.messages.filter(
    (i: any) => i.from !== user_id && i.message_status !== "read"
  );
  const lastMsgDetail = data?.messages[data?.messages.length - 1];

  return (
    <div
      onClick={() => {
        dispatch(updateSelectConversation({ room_id: data._id }));
        dispatch(setCurrentConversation(data));
      }}
      className={classNames(
        room_id === data?._id
          ? "bg-[#5B96F7]"
          : "bg-[#FFFFFF] dark:bg-[#111b21]",
        "w-full rounded-[15px] p-[15px] cursor-pointer"
      )}
    >
      <div className="flex justify-between gap-1 items-center">
        <div>
          <div className="flex gap-4">
            <div className="relative">
              <Image
                src={data?.avatar ? data.avatar : "/assets/images/user.svg"}
                alt="avatar"
                width="47"
                height="47"
                className="w-[47px] h-[47px]"
              />
              <div
                className={classNames(
                  data.status === "Online"
                    ? "w-[9px] h-[9px] absolute right-0 top-[35px] bg-[#76D45E] rounded-full"
                    : "hidden"
                )}
              ></div>
            </div>
            <div>
              <h2 className="text-[16px] font-extrabold text-[#030303] dark:text-[#FFF] truncate w-[90px]">
                {data.name}
              </h2>
              <div className="flex items-center mt-[4px]">
                <h2
                  className={classNames(
                    room_id === data._id
                      ? "text-white"
                      : "text-[#7C7C7D] dark:text-[#c5c2c2]",
                    "text-[14px] font-semibold truncate w-[90px]"
                  )}
                >
                  {lastMsgDetail && lastMsgDetail?.text}
                </h2>
                <span
                  className={classNames(
                    room_id === data._id
                      ? "text-white"
                      : "text-[#7C7C7D] dark:text-[#c5c2c2]"
                  )}
                >
                  {lastMsgDetail && lastMsgDetail.from === user_id && (
                    <MessageStatus
                      messageStatus={lastMsgDetail?.message_status}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end">
            <h3
              className={classNames(
                room_id === data._id
                  ? "text-white"
                  : "text-[#686768] dark:text-[#c5c2c2]",
                !lastMsgDetail && "hidden",
                "text-[12px] font-medium  mb-[4px]"
              )}
            >
              {formatTimestamp(lastMsgDetail?.date)}
            </h3>
            <div
              className={classNames(
                unreadMsg && unreadMsg.length > 0 ? "flex" : "hidden",
                "w-[16px]  justify-center items-center text-[10px] font-bold h-[16px] bg-[#5B96F7] rounded-full text-[#FFFFFF]"
              )}
            >
              {unreadMsg && unreadMsg.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
