import { configureStore } from '@reduxjs/toolkit';
import SelectedFileReducer from './Slices/SelectedFile/SelectedFileSlice';
import BackgroundColorReducer from './Slices/BackgroundColorSlice/BackgroundColorSlice';

const store = configureStore({
  reducer: {
    selectedfile: SelectedFileReducer,
    backgroundcolor: BackgroundColorReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
