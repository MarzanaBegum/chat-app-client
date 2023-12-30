"use client";
import React from "react";
import ConversationHeader from "./ConversationHeader";
import Messages from "./Messages";
import MessageBar from "./MessageBar";

const Conversation = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <ConversationHeader />
      <Messages menu={true} />
      <MessageBar />
    </div>
  );
};

export default Conversation;
