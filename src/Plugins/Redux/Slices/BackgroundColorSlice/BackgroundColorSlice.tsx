import { createSlice } from '@reduxjs/toolkit';

export const BackgroundColorSlice = createSlice({
  name: 'backgroundcolor',
  initialState: {
    value: '#0b2c3f',
  },
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColor } = BackgroundColorSlice.actions;

export default BackgroundColorSlice.reducer;
