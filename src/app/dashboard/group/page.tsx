"use client";
import Contact from "@/components/Dashboard/Contact";
// import Conversation from "@/components/Dashboard/Conversation";
import GroupSidebar from "@/components/Dashboard/Group/GroupSidebar";
import SharedMessages from "@/components/Dashboard/SharedMessages/SharedMessages";
import StartedMessage from "@/components/Dashboard/StartedMessage";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const GroupScreen = () => {
  const { isOpen, type } = useSelector((state: any) => state.app.sideBar);
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <GroupSidebar />
      <div
        className={classNames(
          isOpen ? "w-[calc(100vw-750px)]" : "w-[calc(100vw-430px)]",
          "h-full"
        )}
      >
        {/* <Conversation /> */}
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

export default GroupScreen;
