import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
    user: {}, 
    message: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.message = undefined;
    },
    onLogin: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.message = undefined;
    },
  },
});

export const { onChecking, onLogin} = authSlice.actions;

export default authSlice.reducer;