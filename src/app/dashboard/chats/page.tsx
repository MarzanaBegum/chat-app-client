"use client";
import NoChat from "@/components/CustomIcons/NoChat";
import Chats from "@/components/Dashboard/Chats";
import Contact from "@/components/Dashboard/Contact";
import Conversation from "@/components/Dashboard/Conversation";
import SharedMessages from "@/components/Dashboard/SharedMessages/SharedMessages";
import StartedMessage from "@/components/Dashboard/StartedMessage";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const InitialChatPage = () => {
  const { room_id, chat_type } = useSelector((state: any) => state.app);
  const { isOpen, type } = useSelector((state: any) => state.app.sideBar);
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Chats />
      <div
        className={classNames(
          isOpen ? "w-[calc(100vw-750px)]" : "w-[calc(100vw-430px)]",
          "h-full bg-[#F0F4FA]"
        )}
      >
        {chat_type === "individual" && room_id !== null ? (
          <Conversation />
        ) : (
          <div className="flex justify-center items-center h-full">
            <div>
              <NoChat />
              <h2 className="text-[16px] mt-[10px] text-[#000] font-bold">
                Select a conversation or start a{" "}
                <span className="text-primary-main cursor-pointer">
                  new one
                </span>
              </h2>
            </div>
          </div>
        )}
      </div>
      {isOpen && type === "CONTACT" ? (
        <Contact />
      ) : (
        (isOpen && type === "SHARED" && <SharedMessages />) ||
        (isOpen && type === "STARTED" && <StartedMessage />)
      )}
    </div>
  );
};

export default InitialChatPage;
