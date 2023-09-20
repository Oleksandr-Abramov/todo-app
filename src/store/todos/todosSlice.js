import { createSlice } from "@reduxjs/toolkit";

const state = {
  items: [],
  activeItem: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: state,
  reducers: {
    addItem(state, { payload }) {
      state.items.push(payload);
    },
    setActiveItem(state, { payload }) {
      state.activeItem = state.items.find(({ id }) => id === payload);
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { addItem, setActiveItem, removeItem } = todosSlice.actions;
export const todosReduser = todosSlice.reducer;
