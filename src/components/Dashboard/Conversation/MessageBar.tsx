"use client";
import Image from "next/image";
import React, { useState } from "react";
import SpeedDial from "@/components/SpeedDial";
import { socket } from "@/socket";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import PickEmoji from "@/components/Shared/EmojiPicker";

const MessageBar = () => {
  const user_id = Cookies.get("user_id");
  const [isEmoji, setIsEmoji] = useState(false);
  const [isSpeedDial, setIsSpeedDial] = useState(false);
  const [message, setMessage] = useState("");
  const { current_conversation } = useSelector(
    (state: any) => state.conversation.direct_chat
  );

  const handleSendMessage = async () => {
    try {
      if (message !== "") {
        socket.emit("text_message", {
          conversation_id: current_conversation._id,
          to: current_conversation.user_id,
          from: user_id,
          text: message,
          type: "Text",
        });
        setMessage("");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleEmojiClick = (emoji: any) => {
    setMessage((preMessage) => (preMessage += emoji));
  };

  return (
    <div className="z-[99] h-[80px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] dark:bg-[#111b21] bg-[#F7F9FD]">
      <div className="p-[16px] px-[20px] flex justify-between gap-[20px] items-center">
        <div className="w-[90%] bg-[#EAF2FE] dark:bg-[#2a3942] py-[9px] px-[19px] rounded-[10px] h-[50px] flex justify-between items-center">
          <div className="flex justify-between w-full">
            <div className="flex gap-[17px] w-[85%]">
              <div className="cursor-pointer relative">
                <div onClick={() => setIsSpeedDial(!isSpeedDial)}>
                  <Image
                    src="/icons/link.svg"
                    alt="link"
                    width={24}
                    height={24}
                  />
                </div>
                {isSpeedDial && <SpeedDial />}
              </div>
              <input
                type="text"
                placeholder="Write a message..."
                onChange={(event: any) => setMessage(event.target.value)}
                value={message}
                className="text-[16px] w-full font-semibold bg-transparent placeholder:text-[#709CE6] text-[#709CE6] border-none focus:outline-none"
              />
            </div>
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => setIsEmoji(!isEmoji)}
                id="emoji-open"
              >
                <Image
                  src="/icons/smiley.svg"
                  alt="smiley"
                  width={24}
                  height={24}
                />
              </div>
              {isEmoji && (
                <PickEmoji
                  handleEmojiClick={handleEmojiClick}
                  setIsEmoji={setIsEmoji}
                  setMessage={setMessage}
                />
              )}
            </div>
          </div>
        </div>
        <div
          onClick={handleSendMessage}
          className="cursor-pointer bg-[#5B96F7] p-[12px] w-12 h-12 rounded-xl"
        >
          <Image
            src="/icons/telegram-logo.svg"
            alt="telegram"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
