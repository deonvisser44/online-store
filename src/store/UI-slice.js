import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { showNotification: false, brandToFilter: 'all' };

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    showNotification(state) {
      state.showNotification = true;
    },
    hideNotification(state){
        state.showNotification = false;
    },
    setBrandToFilterBy(state, action){
      state.brandToFilter = action.payload;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice;
