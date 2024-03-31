import api from "@/utils/api";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

interface AppStateType {
  sideBar: {
    isOpen: boolean;
    type: string;
  };
  users: [];
  friends: [];
  friendRequests: [];
  chat_type: string;
  room_id: string;
}

const token = Cookies.get("token");

const initialState: AppStateType = {
  sideBar: { isOpen: false, type: "CONTACT" },
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: "",
  room_id: "",
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openOrCloseSidebar: (state, action) => {
      state.sideBar.isOpen = action.payload.isOpen;
      state.sideBar.type = action.payload.type;
    },
    updateUsers: (state, action) => {
      state.users = action.payload.users;
    },
    updateFriends: (state, action) => {
      state.friends = action.payload.friends;
    },
    updateFriendRequests: (state, action) => {
      state.friendRequests = action.payload.friendRequests;
    },
    updateSelectConversation: (state, action) => {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
  },
});

export const { openOrCloseSidebar, updateSelectConversation } = slice.actions;
export default slice.reducer;

export function FetchUsers(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((error: any) => {
        const err = error.response
          ? error.response.data.messages
          : error.message;
        toast.error(err);
      });
  };
}
export function FetchFriends(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((error: any) => {
        const err = error.response
          ? error.response.data.messages
          : error.message;
        toast.error(err);
      });
  };
}
export function FetchFriendRequests(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-friend-request", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        dispatch(
          slice.actions.updateFriendRequests({
            friendRequests: response.data.data,
          })
        );
      })
      .catch((error: any) => {
        const err = error.response
          ? error.response.data.messages
          : error.message;
        toast.error(err);
      });
  };
}
