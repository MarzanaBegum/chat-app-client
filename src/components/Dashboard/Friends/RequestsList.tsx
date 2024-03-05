import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests } from "../../../../redux/slices/app";
import Image from "next/image";
import { socket } from "@/socket";
import Cookies from "js-cookie";

interface RequestListPropsType {
  setOpenModal: (isOpen: boolean) => void;
}

const RequestsList = ({ setOpenModal }: RequestListPropsType) => {
  const dispatch = useDispatch();
  const token = Cookies.get("token")
  const { friendRequests } = useSelector((state: any) => state.app);

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, [token]);

  const handleAcceptRequest = (id: string) => {
    socket.emit("accept_request", { request_id: id });
    setOpenModal(false);
  };
  return (
    <div className="h-[40vh] hide-scroll flex flex-col gap-[10px]">
      {friendRequests && friendRequests?.length !== 0
        ? friendRequests.map((item: any) => (
            <div
              className="flex justify-between items-center gap-[15px]"
              key={item._id}
            >
              <div className="flex gap-[10px] items-center">
                {item.sender.status === "Online" ? (
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
                  {item.sender.firstName} {item.sender.lastName}
                </h2>
              </div>
              <button
                onClick={() => handleAcceptRequest(item._id)}
                className="text-primary-main text-[16px] font-normal"
              >
                Accept Request
              </button>
            </div>
          ))
        : "No friends request"}
    </div>
  );
};

export default RequestsList;
