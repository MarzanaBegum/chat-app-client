import { ActionTypes } from "@/Context/ActionTypes";
import { useStateContext } from "@/Context/StateContext";
import React, { useState } from "react";
import BackspaceIcon from "../../CustomIcons/Backspace";
import { Shared_docs, Shared_links, sharedTabData } from "@/utils/constants";
import classNames from "classnames";
import SharedMedia from "./SharedMedia";
import LinkMsg from "../Conversation/MessagesType/LinkMsg";
import DocMsg from "../Conversation/MessagesType/DocMsg";

const SharedMessages = () => {
  const { state, dispatch } = useStateContext();
  const [tabTitle, setTabTitle] = useState("media");
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
          Shared Message
        </h2>
      </div>
      <div className="flex justify-between items-center p-[20px_20px_30px]">
        {sharedTabData.map((item) => (
          <div key={`index-${item.id}`}>
            <h3
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
          </div>
        ))}
      </div>
      {tabTitle === "media" && <SharedMedia />}
      {tabTitle === "links" && (
        <div className="flex gap-4 flex-col items-center pb-[10px] hide-scroll h-[74vh]">
          {Shared_links.map((item, i) => (
            <LinkMsg element={item} key={`index-${i}`} />
          ))}
        </div>
      )}

      {tabTitle === "docs" && (
        <div className="flex gap-4 flex-col px-[20px] pb-[10px] hide-scroll h-[74vh]">
          {Shared_docs.map((item, i) => (
            <DocMsg key={`index-${i}`} element={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedMessages;
