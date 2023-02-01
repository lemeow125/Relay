import { createSlice } from '@reduxjs/toolkit';

export const SelectedFileSlice = createSlice({
  name: 'selectedfile',
  initialState: {
    value: {},
  },
  reducers: {
    setFile: (state, action) => {
      state.value = {
        filename: action.payload.filename,
        filesize: action.payload.filesize,
        uri: action.payload.uri,
      };
    },
    clearFile: state => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFile, clearFile } = SelectedFileSlice.actions;

export default SelectedFileSlice.reducer;
