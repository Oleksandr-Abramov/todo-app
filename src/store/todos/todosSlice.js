import { createSlice } from "@reduxjs/toolkit";

const state = {
  items: [],
  activeItem: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: state,
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    setCurrentTodo(state, { payload }) {
      state.activeItem = state.items.filter(({ id }) => id === payload);
    },
    removeTodo(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodo, setCurrentTodo, removeTodo } = todosSlice.actions;
