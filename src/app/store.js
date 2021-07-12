import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice'
import postReducer from '../features/posts/postsSlice'
import profileReducer from '../features/profile/profileSlice'
import notificationReducer from '../features/notifications/notificationSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    profile: profileReducer,
    notification: notificationReducer
  },
});
