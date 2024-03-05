import api from "@/utils/api";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthPropsType {
  token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    about: string;
  };
}

const initialState: AuthPropsType = {
  token: "",
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    avatar: "",
    email: "",
    about: "",
  },
};

const user_id = Cookies.get("user_id");
const token = Cookies.get("token");

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.user._id = action.payload.user_id;
      Cookies.set("token", action.payload.token, { expires: 7 });
      Cookies.set("user_id", action.payload.user_id, { expires: 7 });
    },
    updateRegisterEmail: (state, action) => {
      state.user.email = action.payload.email;
    },
    updateUserInfo: (state, action) => {
      state.user = action.payload.user;
    },
    signOut: (state) => {
      Cookies.remove("token");
      Cookies.remove("user_id");
      state.token = "";
      state.user = {
        _id: "",
        firstName: "",
        lastName: "",
        avatar: "",
        email: "",
        about: "",
      };
    },
  },
});

export const { logIn, updateRegisterEmail, signOut } = slice.actions;
export default slice.reducer;

export function GetUserInfo(): any {
  return async (dispatch: any, getState: any) => {
    await api
      .get(`/user/user-info/${user_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        dispatch(slice.actions.updateUserInfo({ user: response.data }));
      })
      .catch((error: any) => {
        console.log(error, "error");
      });
  };
}
