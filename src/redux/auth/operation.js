import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/authApi';

export const registration = createAsyncThunk(
    "auth/registration", 
     async (credentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.registration(credentials);
        return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const logIn = createAsyncThunk(
    "auth/login", 
     async (credentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.logIn(credentials);
        return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const logOut = createAsyncThunk(
    "auth/logout", 
    async (_, { rejectWithValue }) => {
    try {
        await authAPI.logOut;       
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


