import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  },
});
