import api from "@/utils/api";
import { createSlice } from "@reduxjs/toolkit";

interface AppStateType {
  sideBar: {
    isOpen: boolean;
    type: string;
  };
  users: [];
  friends: [];
  friendRequests: [];
}

const initialState: AppStateType = {
  sideBar: { isOpen: false, type: "CONTACT" },
  users: [],
  friends: [],
  friendRequests: [],
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
  },
});

export const { openOrCloseSidebar } = slice.actions;
export default slice.reducer;

export function FetchUsers(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response: any) => {
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((error: any) => {
        console.log(error, "error");
      });
  };
}
export function FetchFriends(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response: any) => {
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((error: any) => {
        console.log(error, "error");
      });
  };
}
export function FetchFriendRequests(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get("/user/get-friend-request", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response: any) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({
            friendRequests: response.data.data,
          })
        );
      })
      .catch((error: any) => {
        console.log(error, "error");
      });
  };
}
