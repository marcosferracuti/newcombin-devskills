import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    iat: null,
    token: null,
    exp: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    set: (state, action) => {
        return {...action.payload, isLoggedIn: true};
    },
    reset: (state) => {
        state = initialState
    }
  },
})

export const { set, reset } = authSlice.actions;
export default authSlice.reducer;