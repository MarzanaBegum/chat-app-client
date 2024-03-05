import NoChat from "@/components/CustomIcons/NoChat";
import Profile from "@/components/Dashboard/Profile";
import React from "react";

const ProfileScreen = () => {
  return (
      <div className="flex flex-row h-full overflow-hidden">
        <Profile />
        <div className="h-full w-[calc(100vw-430px)]">
          <div className="flex justify-center items-center h-full">
            <NoChat />
          </div>
        </div>
      </div>
  );
};

export default ProfileScreen;
