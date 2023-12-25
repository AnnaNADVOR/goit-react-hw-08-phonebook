import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/authApi';

export const registration = createAsyncThunk(
    "auth/registration", 
     async (credentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.registration(credentials);
        console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)