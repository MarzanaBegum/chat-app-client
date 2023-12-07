import { Chat_History } from "@/utils/constants";
import classNames from "classnames";
import React from "react";
import TimeLine from "./TimeLine";
import TextMsg from "./TextMsg";
import MediaMsg from "./MediaMsg";
import ReplyMsg from "./ReplyMsg";
import LinkMsg from "./LinkMsg";
import DocMsg from "./DocMsg";

const Messages = () => {
  return (
    <div className="flex-grow h-full hide-scroll bg-[#F0F4FA] dark:bg-[#0b141a]">
      <div className="flex flex-col gap-[16px] px-[19px] py-[16px]">
        {Chat_History.map((ele, i) => (
          <div
            key={i}
            className={classNames(
              ele.incoming ? "justify-start" : "justify-end",
              ele.type === "divider" && "justify-center",
              "flex"
            )}
          >
            {ele.type === "msg" && <TextMsg element={ele} />}
            {/* {ele.type === "msg" && ele.subtype === "img" && (
              <MediaMsg element={ele} />
            )} */}
            {/* {ele.type === "msg" && ele.subtype === "reply" && (
              <ReplyMsg element={ele} />
            )} */}
            {/* {ele.type === "msg" && ele.subtype === "link" && (
              <LinkMsg element={ele} />
            )} */}
            {/* {ele.type === "msg" && ele.subtype === "doc" && (
              <DocMsg element={ele} />
            )} */}
            {ele.type === "divider" && <TimeLine element={ele} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;