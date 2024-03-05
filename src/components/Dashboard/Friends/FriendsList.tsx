import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFriends } from "../../../../redux/slices/app";
import Image from "next/image";
import ChatsIcon from "@/components/CustomIcons/ChatsIcon";
import { socket } from "@/socket";
import Cookies from "js-cookie";

interface FriendsListPropsType {
  setOpenModal: (isOpen: boolean) => void;
}
const FriendsList = ({ setOpenModal }: FriendsListPropsType) => {
  const user_id = Cookies.get("user_id")
  const token = Cookies.get("token")
  const dispatch = useDispatch();
  const { friends } = useSelector((state: any) => state.app);

  useEffect(() => {
    dispatch(FetchFriends());
  }, [token]);

  return (
    <div className="h-[40vh] hide-scroll flex flex-col gap-[10px]">
      {friends && friends?.length !== 0
        ? friends.map((item: any) => (
            <div
              className="flex justify-between items-center gap-[15px]"
              key={item._id}
            >
              <div className="flex gap-[10px] items-center">
                {item.status === "Online" ? (
                  <div className="relative">
                    <Image
                      src="/assets/images/user.svg"
                      alt="avatar"
                      width="47"
                      height="47"
                      className="w-[38px] h-[38px]"
                    />
                    <div className="w-[9px] h-[9px] absolute right-0 top-[29px] bg-[#76D45E] rounded-full"></div>
                  </div>
                ) : (
                  <Image
                    src="/assets/images/user.svg"
                    alt="avatar"
                    width="47"
                    height="47"
                    className="w-[38px] h-[38px]"
                  />
                )}
                <h2 className="text-[16px] font-medium text-[#030303] dark:text-[#FFF]">
                  {item.firstName} {item.lastName}
                </h2>
              </div>
              <div
                className="cursor-pointer w-[24px] h-[24px]"
                onClick={() => {
                  socket.emit("start_conversation", {
                    to: item._id,
                    from: user_id,
                  });
                  setOpenModal(false);
                }}
              >
                <ChatsIcon />
              </div>
            </div>
          ))
        : "No Friends"}
    </div>
  );
};

export default FriendsList;
