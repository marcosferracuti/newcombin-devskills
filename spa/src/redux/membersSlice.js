import { createSlice } from '@reduxjs/toolkit'

export const membersSlice = createSlice({
  name: 'members',
  initialState: {
    members: [],
  },
  reducers: {
    add: (state, action) => {
      state.members.push(action.payload);
    },
    set: (state, action) => {
      state.members = action.payload;
    }
  },
})


export const { add, set } = membersSlice.actions;
export default membersSlice.reducer;