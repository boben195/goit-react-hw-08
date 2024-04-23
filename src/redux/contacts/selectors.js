import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
  }
);