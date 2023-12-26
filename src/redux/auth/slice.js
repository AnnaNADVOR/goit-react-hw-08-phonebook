import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
    registration,
    logIn,
    logOut,
} from './operation';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoadingRegister: false,
        isLoadingLogin: false, 
        isLoadingLogout: false, 
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(registration.pending, (state, action) => {
            state.isLoadingRegister = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoadingRegister = false; 
                state.isLoggedIn = true; 
                state.user = action.payload.user;
                state.token = action.payload.token; 
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoadingRegister = false; 
                state.error = action.payload;
            })

            .addCase(logIn.pending, (state, action) => {
                state.isLoadingLogin = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoadingLogin = false;                
                state.isLoggedIn = true; 
                state.user = action.payload.user;
                state.token = action.payload.token; 
            })
            .addCase(logOut.pending, state => {
                state.isLoadingLogout = true;
            })
            .addCase(logOut.fulfilled, state => {
                state.isLoadingLogout = false;
                state.isLoggedIn = false; 
                state.user = { name: null, email: null };
                state.token = null; 
            })
        
    }

}); 

const persistConfig = {
    key: 'auth', 
    storage,
    whitelist: ['token'],
} 

export const authReducer = persistReducer(persistConfig, authSlice.reducer); 
