import NoChat from "@/components/CustomIcons/NoChat";
import Profile from "@/components/Dashboard/Profile";
import DashboardLayout from "@/components/Dashboard/Layout/DashboardLayout";
import React from "react";

const ProfileScreen = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-row h-screen overflow-hidden">
        <Profile />
        <div className="h-full w-[calc(100vw-430px)]">
          <div className="flex justify-center items-center h-full">
            <NoChat />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileScreen;
