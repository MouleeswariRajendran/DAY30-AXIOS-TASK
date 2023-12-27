
import { configureStore } from "@reduxjs/toolkit";

import { UserSlice } from "./Redux/redux";


export const store = configureStore({
 reducer:{
    app : UserSlice.reducer
 }
})