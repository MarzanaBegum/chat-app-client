import SearchInput from "@/components/Shared/SearchInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ChatElement from "./ChatElement";
import CircleDashedIcon from "@/components/CustomIcons/CircleDashedIcon";
import GroupIcon from "@/components/CustomIcons/GroupIcon";
import FriendModal from "@/components/Modal/FriendModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectConversations } from "../../../../redux/slices/conversation";
import Cookies from "js-cookie";
import api from "@/utils/api";

const Chats = () => {
  const token = Cookies.get("token")
  const dispatch = useDispatch();
  const { conversations } = useSelector(
    (state: any) => state.conversation.direct_chat
  );
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetch_all_conversations = async () => {
      await api
        .get("/conversation/all_conversations", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          dispatch(fetchDirectConversations({ conversations: response?.data }));
        })
        .catch((err) => {
          console.log(err, "all_error");
        });
    };
    fetch_all_conversations();
  }, [conversations]);
  

  return (
    <>
      <div className="px-[28px] h-screen w-[320px] py-[35px] relative bg-[#F8FAFF] dark:bg-[#212B36] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between mb-[32px]">
          <h2 className="text-[#000000] dark:text-[#FFF] text-[25px] font-extrabold">
            Chats
          </h2>
          <div className="flex gap-[12px] items-center">
            <div
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <GroupIcon />
            </div>
            <CircleDashedIcon />
          </div>
        </div>
        <SearchInput isFunnel={true} />
        <div className="mt-[34px] flex gap-[13px] mb-[17px] pb-[10px] items-center border-b border-b-[#B4B4B4]">
          <Image
            src="/icons/archive-box.svg"
            alt="archive"
            width={22}
            height={24}
          />
          <h2 className="font-bold text-[15px] text-[#709CE6]">Archived</h2>
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-[58vh]">
          {/* <h2 className="text-[16px] mb-[20px] font-bold text-[#676667] dark:text-[#FFF]">
            Pinned
          </h2>
          <div className="flex gap-[18px] flex-col">
            {conversations.filter((element) => element.pinned).map((ele) => {
              return <ChatElement key={ele.id} chatElementData={ele} />;
            })}
          </div> */}
          <h2 className="text-[16px] my-[20px] font-bold text-[#676667] dark:text-[#FFF]">
            All Chats
          </h2>
          <div className="flex gap-[18px] flex-col mb-[12px]">
            {conversations.length !== 0
              ? conversations
                  .filter((element: any) => !element.pinned)
                  .map((ele: any) => {
                    return <ChatElement key={ele._id} data={ele} />;
                  })
              : "No conversation"}
          </div>
        </div>
      </div>
      {openModal && (
        <FriendModal isOpen={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Chats;
