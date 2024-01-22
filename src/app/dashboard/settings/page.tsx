import NoChat from "@/components/CustomIcons/NoChat";
import Settings from "@/components/Dashboard/Settings/Settings";
// import DashboardLayout from "@/components/Dashboard/Layout/DashboardLayout";
import React from "react";

const SettingsScreen = () => {
  return (
    // <DashboardLayout>
      <div className="flex flex-row h-screen overflow-hidden">
        <Settings />
        <div className="h-full w-[calc(100vw-430px)]">
          <div className="flex justify-center items-center h-full">
            <NoChat />
          </div>
        </div>
      </div>
    // </DashboardLayout>
  );
};

export default SettingsScreen;
