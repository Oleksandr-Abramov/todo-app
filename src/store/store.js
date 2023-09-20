import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "store/todos/todosSlice";

export const store = configureStore({
  reducer: todosSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
