import { configureStore } from '@reduxjs/toolkit';
import SelectedFileReducer from './Slices/SelectedFile/SelectedFileSlice';

export default configureStore({
  reducer: {
    selectedfile: SelectedFileReducer,
  },
});
