import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contactsList; 
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectDeleteContactId = state => state.contacts.deleteContactId;
export const selectFilter = state => state.filter.name; 
export const selectVibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const findContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter));
    return findContacts;
})


