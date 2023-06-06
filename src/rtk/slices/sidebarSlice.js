import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnOn: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    turnSidebarOn: (state, action) => {
      state.turnOn = true;
    },
    turnSidebarOff: (state, action) => {
      state.turnOn = false;
    },
  },
});

export const { turnSidebarOn, turnSidebarOff } = sidebarSlice.actions;
export default sidebarSlice.reducer;
