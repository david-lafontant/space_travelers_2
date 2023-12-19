import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./rockets/rocketsSlice";


export const store = configureStore({
  reducer:{
    rockets: rocketsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;