import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { registration } from './operation';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoading: false, 
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder.addCase(registration.pending, (state, action) => {
            state.isLoading = true;
        })
          .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.error = null;
                state.isLoggedIn = true; 
                state.user = action.payload.user;
                state.token = action.payload.tocken; 
            })
            .addCase(registration.rejected, (state, action) => {
                state.error = action.payload;
            }
            )
    }

}); 

const PersistConfig = {
    key: 'auth', 
    storage,
    whitelist: ['token'],
} 

export const authReducer = persistReducer(PersistConfig, authSlice.reducer); 
