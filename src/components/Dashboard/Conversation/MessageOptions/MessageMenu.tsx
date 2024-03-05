import { message_options } from "@/utils/constants";
import classNames from "classnames";
import React from "react";
import Cookies from "js-cookie";

const MessageMenu = ({ item }: any) => {
  const user_id = Cookies.get("user_id");
  return (
    <div
      className={classNames(
        item.from === user_id ? "right-0" : "left-0",
        "absolute bg-[#FFFFFF] dark:bg-[#182229] z-10 w-[180px] rounded-lg"
      )}
    >
      <ul className="flex flex-col">
        {message_options.map((item) => (
          <li
            key={item.title}
            className="cursor-pointer px-[16px] text-md text-black dark:text-[#c5c2c2] py-[6px] dark:hover:bg-[#161C24] hover:bg-gray-200"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageMenu;
