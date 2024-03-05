import React, { useState } from "react";
import CustomModal from "./CustomModal";
import { friendTabData } from "@/utils/constants";
import classNames from "classnames";
import CrossIcon from "../CustomIcons/CrossIcon";
import { useTheme } from "next-themes";
import UserList from "../Dashboard/Friends/UserList";
import FriendsList from "../Dashboard/Friends/FriendsList";
import RequestsList from "../Dashboard/Friends/RequestsList";

interface FriendModalProps {
  isOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

const FriendModal: React.FC<FriendModalProps> = ({ isOpen, setOpenModal }) => {
  const { theme, setTheme } = useTheme();
  const [tabTitle, setTabTitle] = useState("explore");
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[500px] min-h-[60vh]">
        <div className="flex justify-end">
          <div onClick={() => setOpenModal(false)} className="cursor-pointer">
            <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
          </div>
        </div>
        <div className="flex gap-[15px] lg:gap-[40px] mb-[25px]">
          {friendTabData.map((item, i) => (
            <h3
              key={`item-${i}`}
              className={classNames(
                tabTitle === item.link
                  ? "text-[#5B96F7] border-b-2 border-b-[#5B96F7]"
                  : "text-[#000]",
                "text-[16px] font-medium dark:text-[#c5c2c2] cursor-pointer"
              )}
              onClick={() => setTabTitle(item.link)}
            >
              {item.title}
            </h3>
          ))}
        </div>
        {tabTitle === "explore" && <UserList setOpenModal={setOpenModal}/>}
        {tabTitle === "friend" && (
          <FriendsList setOpenModal={setOpenModal} />
        )}
        {tabTitle === "request" && <RequestsList setOpenModal={setOpenModal}/>}
      </div>
    </CustomModal>
  );
};

export default FriendModal;
