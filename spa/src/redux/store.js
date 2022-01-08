import { configureStore } from '@reduxjs/toolkit'
import membersReducer from './membersSlice';
import authReducer from './authSlice';


export default configureStore({
  reducer: {
      members: membersReducer,
      auth: authReducer,
  },
})