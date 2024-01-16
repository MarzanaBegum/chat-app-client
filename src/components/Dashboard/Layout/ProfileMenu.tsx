"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "../../Shared/ToggleButton";
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <ToggleButton />
      <div className="mt-[52px]"></div>
      <div className="relative">
        <Image
          src="/assets/images/avatar.png"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-[48px] object-cover cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <ProfileMenuItem />}
      </div>
    </div>
  );
};

export default ProfileMenu;
