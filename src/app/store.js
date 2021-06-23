import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer
  },
});
