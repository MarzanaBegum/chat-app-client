import React from "react";
import BackspaceIcon from "../CustomIcons/Backspace";
import { useStateContext } from "@/Context/StateContext";
import { ActionTypes } from "@/Context/ActionTypes";
import Messages from "./Conversation/Messages";

const StartedMessage = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="w-[320px] bg-[#F8FAFF] h-screen dark:bg-[#182229]">
      <div className="flex items-center gap-3 h-[80px] px-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <div
          className="cursor-pointer"
          onClick={() =>
            dispatch({
              type: ActionTypes.OPEN_SIDEBAR,
              payload: { isOpen: true, type: "CONTACT" },
            })
          }
        >
          <BackspaceIcon width={24} height={24} />
        </div>
        <h2 className="text-[16px] font-semibold text-[#777777] dark:text-[#FFF]">
          Starred Messages
        </h2>
      </div>
      <div className="py-[10px] hide-scroll h-[86vh]">
        <Messages />
      </div>
    </div>
  );
};

export default StartedMessage;
