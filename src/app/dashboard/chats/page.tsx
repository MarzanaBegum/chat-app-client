import Chats from "@/components/Dashboard/Chats";
import Conversation from "@/components/Dashboard/Conversation";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import React from "react";

const InitialChatPage = () => {
  return (
    <DashboardLayout>
      <div className="flex overflow-hidden">
        <Chats />
        <div className="bg-[#F0F4FA] w-[calc(100vw-430px)] h-screen">
          <Conversation />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InitialChatPage;
