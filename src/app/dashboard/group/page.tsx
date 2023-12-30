import Conversation from "@/components/Dashboard/Conversation";
import GroupSidebar from "@/components/Dashboard/Group/GroupSidebar";
import DashboardLayout from "@/components/Shared/DashboardLayout";
import React from "react";

const GroupScreen = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-row h-screen overflow-hidden">
        <GroupSidebar />
        <div className="h-full w-[calc(100vw-430px)]">
          <Conversation />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupScreen;
