import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 500,
    username: 'Bob',
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const { deposit, withdraw } = accountSlice.actions;
