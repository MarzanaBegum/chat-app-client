import Image from "next/image";
import React from "react";
import ToggleButton from "../ToggleButton";

const ProfileMenu = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <ToggleButton />
        <div className="mt-[52px]"></div>
        <Image
          src="/assets/images/avatar.png"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-[48px] object-cover"
        />
      </div>
    </>
  );
};

export default ProfileMenu;
