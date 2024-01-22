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
  handleOnClose: () => void;
}

const FriendModal: React.FC<FriendModalProps> = ({ isOpen, handleOnClose }) => {
  const { theme, setTheme } = useTheme();
  const [tabTitle, setTabTitle] = useState("explore");
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[500px]">
        <div className="flex justify-end">
          <div onClick={handleOnClose} className="cursor-pointer">
            <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
          </div>
        </div>
        <div className="flex gap-[40px]">
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
        {tabTitle === "explore" && <UserList />}
        {tabTitle === "friend" && <FriendsList />}
        {tabTitle === "request" && <RequestsList />}
      </div>
    </CustomModal>
  );
};

export default FriendModal;
