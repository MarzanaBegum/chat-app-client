import { Chat_History } from "@/utils/constants";
import classNames from "classnames";
import React from "react";
import TimeLine from "./MessagesType/TimeLine";
import TextMsg from "./MessagesType/TextMsg";
import MediaMsg from "./MessagesType/MediaMsg";
import ReplyMsg from "./MessagesType/ReplyMsg";
import LinkMsg from "./MessagesType/LinkMsg";
import DocMsg from "./MessagesType/DocMsg";
import MessageOptions from "./MessageOptions/MessageOptions";

type MessagePropsType = {
  menu?: boolean;
};
const Messages = ({ menu }: MessagePropsType) => {
  return (
    <div
      className={classNames(
        menu
          ? "bg-[#F0F4FA] dark:bg-[#0b141a] h-full hide-scroll"
          : "bg-[#F8FAFF] dark:bg-[#182229]",
        "flex-grow"
      )}
    >
      <div className="flex flex-col gap-[16px] px-[19px] py-[16px]">
        {Chat_History.map((ele, i) => (
          <div
            key={i}
            className={classNames(
              ele.incoming ? "justify-start" : "justify-end",
              ele.type === "divider" && "justify-center",
              "flex items-start gap-2"
            )}
          >
            {ele.subtype
              ? (ele.subtype === "reply" && <ReplyMsg element={ele} />) ||
                (ele.subtype === "doc" && <DocMsg element={ele} />) ||
                (ele.subtype === "link" && <LinkMsg element={ele} />) ||
                (ele.subtype === "img" && <MediaMsg element={ele} />)
              : ele.type === "msg" && <TextMsg element={ele} />}

            {ele.type === "divider" && <TimeLine element={ele} />}
            {ele.type !== "divider" && menu && <MessageOptions item={ele} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
