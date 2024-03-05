"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "../../Shared/ToggleButton";
import ProfileMenuItem from "./ProfileMenuItem";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { avatar } = useSelector((state: any) => state.auth.user);
  return (
    <div className="flex flex-col items-center">
      <ToggleButton />
      <div className="mt-[52px]"></div>
      <div className="relative">
        <Image
          src={avatar ? avatar : "/assets/images/user.svg"}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-[48px] object-cover cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <ProfileMenuItem setOpenMenu={setOpenMenu} />}
      </div>
    </div>
  );
};

export default ProfileMenu;
