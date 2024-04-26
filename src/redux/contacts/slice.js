import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";
import {logOut} from "../auth/operations"
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, state => {
      state.error = true
      state.loading = false
      })
    /****** */ 
      .addCase(addContact.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, state => {
      state.error = true
      state.loading = false
      })
    /********* */
    .addCase(deleteContact.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false
        state.items = state.items.filter((contact) => contact.id !== action.payload)
      })
      .addCase(deleteContact.rejected, state => {
      state.error = true
      state.loading = false
      })
    /************** */
      .addCase(updateContact.fulfilled, (state, action) => {
        const contactIndex = state.items.findIndex(item => item.id === action.payload.id);
        state.items[contactIndex] = action.payload
      })
      .addCase(logOut.fulfilled, (state) => {
        state.item = [];
    })
  }
});




export const contactsReducer = contactsSlice.reducer;

