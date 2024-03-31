import { Chat_History } from "@/utils/constants";
import classNames from "classnames";
import React, { useEffect } from "react";
import TimeLine from "./MessagesType/TimeLine";
import TextMsg from "./MessagesType/TextMsg";
import MediaMsg from "./MessagesType/MediaMsg";
import ReplyMsg from "./MessagesType/ReplyMsg";
import LinkMsg from "./MessagesType/LinkMsg";
import DocMsg from "./MessagesType/DocMsg";
import MessageOptions from "./MessageOptions/MessageOptions";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentMessages,
  setCurrentConversation,
} from "../../../../redux/slices/conversation";
import { socket } from "@/socket";
import Cookies from "js-cookie";

type MessagePropsType = {
  menu?: boolean;
};
const Messages = ({ menu }: MessagePropsType) => {
  const user_id = Cookies.get("user_id");
  const dispatch = useDispatch();
  const { room_id } = useSelector((state: any) => state.app);
  const { conversations, current_conversation, current_message } = useSelector(
    (state: any) => state.conversation.direct_chat
  );

  useEffect(() => {
    const current = conversations.find((ele: any) => ele._id === room_id);
    dispatch(setCurrentConversation(current));
    socket?.emit(
      "get_messages",
      {
        conversation_id: current_conversation._id,
        to: current_conversation.user_id,
      },
      (data: any) => {
        dispatch(fetchCurrentMessages(data));
      }
    );
  }, [current_conversation]);

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
        {current_message.map((ele: any) => (
          <div
            key={ele._id}
            className={classNames(
              ele.from === user_id ? "justify-end" : "justify-start",
              ele.type === "divider" && "justify-center",
              "flex items-start gap-2"
            )}
          >
            {ele.subtype
              ? (ele.subtype === "reply" && <ReplyMsg element={ele} />) ||
                (ele.subtype === "doc" && <DocMsg element={ele} />) ||
                (ele.subtype === "link" && <LinkMsg element={ele} />) ||
                (ele.subtype === "img" && <MediaMsg element={ele} />)
              : ele.type === "Text" && <TextMsg element={ele} />}

            {ele.type === "divider" && <TimeLine element={ele} />}
            {ele.type !== "divider" && menu && <MessageOptions item={ele} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
