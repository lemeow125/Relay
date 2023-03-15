import { configureStore } from '@reduxjs/toolkit';
import SelectedFileReducer from './Slices/SelectedFile/SelectedFileSlice';
import BackgroundColorReducer from './Slices/BackgroundColorSlice/BackgroundColorSlice';

export default configureStore({
  reducer: {
    selectedfile: SelectedFileReducer,
    backgroundcolor: BackgroundColorReducer,
  },
});
