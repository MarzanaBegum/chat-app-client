"use client";
import { sidebarNavListItems } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import ProfileMenu from "./ProfileMenu";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="z-[99] min-h-screen w-[110px] hide-scroll bg-[#F0F4FA] dark:bg-[#161C24] flex justify-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col justify-between gap-[20px] py-[25px]">
          <div>
            <Image
              src="/icons/whatsapp.svg"
              alt="logo"
              width="60"
              height="60"
              priority
              className="w-[60px] h-[60px]"
            />
            <div className="mt-[15px] flex flex-col gap-6 items-center">
              {sidebarNavListItems.map((item, index) => (
                <div
                  key={`item-${index}`}
                  className={classNames(
                    index === 3 && "border-t border-t-[#B4B4B4] pt-[27px]"
                  )}
                >
                  <Link href={item.link}>
                    <div
                      className={classNames(
                        item.link === pathName && "bg-[#5B96F7] rounded-xl",

                        "w-12 h-12 flex justify-center items-center"
                      )}
                    >
                      <item.Icon
                        width={24}
                        height={24}
                        stroke={item.link === pathName ? "#FFFFFF" : "#080707"}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <ProfileMenu />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
