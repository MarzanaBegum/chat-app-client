import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../../../redux/slices/app";
import Image from "next/image";
import { socket } from "@/socket";
import Cookies from "js-cookie";

interface UserListPropsType {
  setOpenModal: (isOpen: boolean) => void;
}

const UserList = ({ setOpenModal }: UserListPropsType) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.app);
  const user_id = Cookies.get("user_id")
  const token = Cookies.get("token")

  useEffect(() => {
    dispatch(FetchUsers());
  }, [token]);

  const handleSendRequest = (item: any) => {
    socket?.emit("friend_request", { to: item._id, from: user_id });
    setOpenModal(false);
  };
  return (
    <div className="h-[40vh] hide-scroll flex flex-col gap-[10px]">
      {users?.length !== 0
        ? users.map((item: any) => (
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
              <button
                onClick={() => handleSendRequest(item)}
                className="text-primary-main text-[16px] font-normal"
              >
                Send Request
              </button>
            </div>
          ))
        : "There is no user  available"}
    </div>
  );
};

export default UserList;
