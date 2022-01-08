import { createSlice } from '@reduxjs/toolkit'

export const membersSlice = createSlice({
  name: 'members',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    set: (state, action) => {
      return action.payload;
    }
  },
})


export const { add, set } = membersSlice.actions;
export default membersSlice.reducer;