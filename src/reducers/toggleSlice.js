import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { setToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
