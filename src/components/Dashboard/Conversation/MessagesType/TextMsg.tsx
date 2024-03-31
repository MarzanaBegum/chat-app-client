import classNames from "classnames";
import React from "react";
import Cookies from "js-cookie";
import formatTimestamp from "@/utils/FormatDate";
import MessageStatus from "./MessageStatus";

const TextMsg = ({ element }: any) => {
  const user_id = Cookies.get("user_id");
  return (
    <div
      className={classNames(
        element.from === user_id
          ? "text-[#FFFFFF] bg-[#5B96F7]"
          : "text-[#696969] dark:text-[#c5c2c2] bg-[#FFFFFF] dark:bg-[#161C24]",
        "rounded-md px-2 py-[5px] flex justify-end items-center gap-2 max-w-[60%]"
      )}
    >
      <span className="break-all text-sm font-semibold">{element.text}</span>
      <div className="flex gap-1 justify-end items-end">
        <span className=" text-[11px] min-w-fit">
          {formatTimestamp(element.date)}
        </span>
        <span>
          {element.from === user_id && (
            <MessageStatus messageStatus={element.message_status} />
          )}
        </span>
      </div>
    </div>
  );
};

export default TextMsg;
