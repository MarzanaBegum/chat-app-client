"use client";
import Sidebar from "@/components/Dashboard/Layout/Sidebar";
import { connectSocket, socket } from "@/socket";
import React, { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectConversation } from "../../../redux/slices/app";
import {
  addDirectConversation,
  addDirectMessages,
  updateDirectConversation,
} from "../../../redux/slices/conversation";
import Cookies from "js-cookie";
import { GetUserInfo } from "../../../redux/slices/auth";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { conversations } = useSelector(
    (state: any) => state.conversation.direct_chat
  );
  const token = Cookies.get("token");
  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (token) {
      if (!socket) {
        connectSocket(user_id as string);
      }
      dispatch(GetUserInfo())
      socket.on("new_friend_request", (data: any) => {
        toast.success(data.message);
      });
      socket.on("request_sent", (data: any) => {
        toast.success(data.message);
      });
      socket.on("request_accepted", (data: any) => {
        toast.success(data.message);
      });
      socket.on("start_chat", (data) => {
        const existing_conversation = conversations.find(
          (ele: any) => ele._id === data._id
        );

        if (existing_conversation !== undefined) {
          dispatch(updateDirectConversation({ conversation: data }));
        } else {
          dispatch(addDirectConversation({ conversation: data }));
        }
        dispatch(updateSelectConversation({ room_id: data._id }));
      });

      socket.on("new_message", (data: any) => {
        dispatch(addDirectMessages(data));
      });
    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_sent");
      socket?.off("request_accepted");
      socket?.off("start_chat");
      socket?.off("new_message");
    };
  }, [token, socket]);
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
