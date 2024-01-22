import { createSlice } from "@reduxjs/toolkit";

interface AuthPropsType {
  token: string;
  user_id: string;
}

const initialState: AuthPropsType = {
  token: "",
  user_id: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
    },
    signOut: (state, action) => {
      state.token = "";
      state.user_id = "";
    },
  },
});

export const { logIn } = slice.actions;
export default slice.reducer;
