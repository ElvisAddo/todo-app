import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [], // plural for clarity
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
      const { firstName, lastName, email, comments } = action.payload || {};
      if (!firstName || !email || !comments || !lastName) return;
      state.contacts.unshift({
        id: nanoid(),
        firstName,
        lastName,
        email,
        comments,
        createdAt: new Date().toISOString(),
      });
    },
    clearContacts(state) {
      state.contacts = [];
    },
  },
});

export const { addContact, clearContacts } = contactSlice.actions;
export default contactSlice.reducer;
