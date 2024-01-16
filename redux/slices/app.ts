import { createSlice } from "@reduxjs/toolkit";

interface AppStateType {
  sideBar: {
    isOpen: boolean;
    type: string;
  };
}

const initialState: AppStateType = {
  sideBar: { isOpen: false, type: "CONTACT" },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openOrCloseSidebar: (state, action) => {
      state.sideBar.isOpen = action.payload.isOpen;
      state.sideBar.type = action.payload.type;
    },
  },
});

export const { openOrCloseSidebar } = slice.actions;
export default slice.reducer;
