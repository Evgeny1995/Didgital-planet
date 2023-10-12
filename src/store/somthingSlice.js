import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
const modalSlice = createSlice({
  name: "modalshow",
  initialState: initialState,
  reducers: {
    showModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
