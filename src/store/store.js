import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosReduser } from "store/todos/todosSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const todosPersistConfig = {
  key: "todos",
  storage,
  whitelist: ["items", "activeItem"],
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReduser);

const store = configureStore({
  reducer: { todos: persistedTodosReducer },
  middleware,
});

let persistor = persistStore(store);
export { store, persistor };
