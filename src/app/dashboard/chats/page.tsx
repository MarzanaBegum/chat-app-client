"use client";
import { useStateContext } from "@/Context/StateContext";
import Chats from "@/components/Dashboard/Chats";
import Contact from "@/components/Dashboard/Contact";
import Conversation from "@/components/Dashboard/Conversation";
import SharedMessages from "@/components/Dashboard/SharedMessages/SharedMessages";
import StartedMessage from "@/components/Dashboard/StartedMessage";
import DashboardLayout from "@/components/Shared/DashboardLayout";
import classNames from "classnames";
import React from "react";

const InitialChatPage = () => {
  const { state } = useStateContext();
  return (
    <DashboardLayout>
      <div className="flex flex-row h-screen overflow-hidden">
        <Chats />
        <div
          className={classNames(
            state.sideBar.isOpen
              ? "w-[calc(100vw-750px)]"
              : "w-[calc(100vw-430px)]",
            "h-full"
          )}
        >
          <Conversation />
        </div>
        {state.sideBar.isOpen && state.sideBar.type === "CONTACT" ? (
          <Contact />
        ) : (
          (state.sideBar.isOpen && state.sideBar.type === "SHARED" && (
            <SharedMessages />
          )) ||
          (state.sideBar.isOpen && state.sideBar.type === "STARTED" && (
            <StartedMessage />
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default InitialChatPage;
