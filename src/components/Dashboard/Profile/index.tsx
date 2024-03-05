import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import ProfileForm from "@/components/Form/ProfileForm";
import React from "react";

const Profile = () => {
  return (
    <div className="w-[320px] min-h-screen hide-scroll bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="px-[20px] pt-[20px]">
        <div className="flex gap-2 items-center mb-4">
          <CaretDownIcon
            className={"rotate-90"}
            stroke="#4B4B4B"
            width="24"
            height="24"
          />
          <h2 className="text-[24px] font-medium text-[#000] dark:text-white">
            Profile
          </h2>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
