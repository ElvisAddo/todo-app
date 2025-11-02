import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, action) {
      const text = (action.payload.text || '').trim();
      if (!text) return;
      state.todos.unshift({
        id: nanoid(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    },
    toggle(state, action) {
      const id = action.payload;
      const t = state.todos.find(x => x.id === id);
      if (t) t.completed = !t.completed;
    },
    remove(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter(t => t.id !== id);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    hydrate(state, action) {
      return action.payload || state;
    },
  },
});

export const { add, toggle, remove, setFilter, hydrate } = todosSlice.actions;
export default todosSlice.reducer;
