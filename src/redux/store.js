import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/slice';
import { contactsSlice } from './contacts/slice';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        contacts: contactsSlice.reducer,        
    },
})
