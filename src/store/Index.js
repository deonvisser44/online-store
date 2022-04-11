import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Cart-slice";
import UISlice from "./UI-slice";

const store = configureStore({
    reducer: {cart: cartSlice.reducer, UI: UISlice.reducer}
})

export default store;