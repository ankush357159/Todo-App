import { configureStore } from "@reduxjs/toolkit";
// configurestore creates store which hold state, combine reducers and have middleware

import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
