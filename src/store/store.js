import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import contactReducer from "./contactSlice";

const LOCAL_KEY = "app_state_v1";

const loadState = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch (e) {
    console.error("Load state error", e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Save state error", e);
  }
};

const preloaded = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
    contact: contactReducer,
  },
  preloadedState: preloaded,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    todos: state.todos,
    contact: state.contact,
  });
});

export default store;
